export const CLOUDFLARE_CONFIG = {
  accountId: process.env.CLOUDFLARE_ACCOUNT_ID,
  apiToken: process.env.CLOUDFLARE_API_TOKEN,
  imageDeliveryUrl: process.env.NEXT_PUBLIC_CLOUDFLARE_IMAGE_DELIVERY_URL,
  uploadUrl: 'https://api.cloudflare.com/client/v4/accounts/${accountId}/images/v1',
};

export const IMAGE_CONFIG = {
  formats: ['image/avif', 'image/webp'],
  sizes: [640, 750, 828, 1080, 1200],
  domains: ['imagedelivery.net'],
};