'use client';

import Image from 'next/image';
import { ImageService } from '@/lib/services/image-service';

interface OptimizedImageProps {
  id: string;
  alt: string;
  width: number;
  height: number;
  variant?: string;
  className?: string;
}

export function OptimizedImage({
  id,
  alt,
  width,
  height,
  variant = 'public',
  className,
}: OptimizedImageProps) {
  const imageUrl = ImageService.getImageUrl(id, variant);

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      quality={90}
    />
  );
}