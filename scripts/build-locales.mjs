// Builds one static HTML page per locale from src/index.template.html + locales/*.json.
// Output: index.html (Estonian, served at "/"), ru/index.html, en/index.html.
// Fails if a locale is missing a key the template uses, or has keys the others lack.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://www.fightbaseapp.com';

const LOCALES = [
  { code: 'et', out: 'index.html', url: `${SITE}/`, ogLocale: 'et_EE' },
  { code: 'ru', out: 'ru/index.html', url: `${SITE}/ru`, ogLocale: 'ru_RU' },
  { code: 'en', out: 'en/index.html', url: `${SITE}/en`, ogLocale: 'en_GB' },
];

const template = readFileSync(join(root, 'src/index.template.html'), 'utf8');

const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const flatKeys = (obj, prefix = '') =>
  Object.entries(obj).flatMap(([k, v]) =>
    v && typeof v === 'object' ? flatKeys(v, `${prefix}${k}.`) : [`${prefix}${k}`]
  );

const lookup = (obj, path) => path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), obj);

const dicts = Object.fromEntries(
  LOCALES.map(({ code }) => [code, JSON.parse(readFileSync(join(root, `locales/${code}.json`), 'utf8'))])
);

const errors = [];

// Every locale must have exactly the same keys.
const keySets = Object.fromEntries(LOCALES.map(({ code }) => [code, new Set(flatKeys(dicts[code]))]));
for (const { code } of LOCALES) {
  for (const other of LOCALES) {
    for (const key of keySets[other.code]) {
      if (!keySets[code].has(key)) errors.push(`${code}.json is missing "${key}" (present in ${other.code}.json)`);
    }
  }
}

const pages = LOCALES.map((loc) => {
  const data = {
    ...dicts[loc.code],
    _build: {
      canonical: loc.url,
      ogLocale: loc.ogLocale,
      activeEt: loc.code === 'et' ? 'active' : '',
      activeRu: loc.code === 'ru' ? 'active' : '',
      activeEn: loc.code === 'en' ? 'active' : '',
    },
  };
  const html = template.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, key) => {
    const value = lookup(data, key);
    if (typeof value !== 'string') {
      errors.push(`${loc.code}: template key "${key}" has no string value`);
      return '';
    }
    return escapeHtml(value);
  });
  // Catch malformed placeholders (e.g. "{{key}" with a missing brace) that the replace above can't match.
  const leftover = html.match(/\{\{[^\n]{0,40}/g);
  if (leftover) errors.push(`${loc.code}: unreplaced placeholder(s) in output: ${[...new Set(leftover)].join(' | ')}`);
  return { ...loc, html };
});

if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exit(1);
}

for (const { out, html, code } of pages) {
  const file = join(root, out);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
  console.log(`built ${code} → ${out}`);
}
