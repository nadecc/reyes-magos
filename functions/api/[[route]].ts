import { createRouter, Router } from '@cloudflare/itty-router';

export interface Env {
  CLOUDFLARE_ACCOUNT_ID: string;
  CLOUDFLARE_API_TOKEN: string;
}

const router = createRouter();

router.post('/api/letters', async (request, env: Env) => {
  try {
    const data = await request.json();
    // Handle letter submission
    return new Response(JSON.stringify({ success: true }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to submit letter' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
});

export default {
  fetch: router.handle,
};