import { CLOUDFLARE_CONFIG } from '../config/cloudflare';

export class ImageService {
  static async uploadImage(file: File): Promise<string> {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch(CLOUDFLARE_CONFIG.uploadUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${CLOUDFLARE_CONFIG.apiToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      throw new Error('Failed to upload image');
    }

    const data = await response.json();
    return data.result.id;
  }

  static getImageUrl(id: string, variant: string = 'public'): string {
    return `${CLOUDFLARE_CONFIG.imageDeliveryUrl}/${id}/${variant}`;
  }
}