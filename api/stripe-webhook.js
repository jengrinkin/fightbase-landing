import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  const rawBody = await readRawBody(req);
  const sig = req.headers['stripe-signature'];

  let event;
  try {
    event = stripe.webhooks.constructEvent(
      rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('[stripe-webhook] Signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log(`[stripe-webhook] Received event: ${event.type}`);

  if (event.type !== 'checkout.session.completed') {
    return res.status(200).json({ received: true });
  }

  const session = event.data.object;
  const bookingId = session.metadata?.booking_id;

  console.log(`[stripe-webhook] checkout.session.completed — session: ${session.id}, booking_id: ${bookingId}`);

  const { error } = await supabase
    .from('bookings')
    .update({
      payment_status: 'paid',
      status: 'confirmed',
      stripe_payment_intent_id: session.payment_intent,
    })
    .eq('id', bookingId);

  if (error) {
    console.error(`[stripe-webhook] DB update failed for booking ${bookingId}:`, error);
    return res.status(500).json({ error: 'Database update failed' });
  }

  console.log(`[stripe-webhook] Booking ${bookingId} marked paid and confirmed`);
  return res.status(200).json({ received: true });
}
