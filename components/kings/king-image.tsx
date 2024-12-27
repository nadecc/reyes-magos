'use client';

import { Crown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface KingImageProps {
  name: string;
  className?: string;
  placeholder?: boolean;
}

export function KingImage({ name, className, placeholder = true }: KingImageProps) {
  // This component is prepared to receive actual images later
  // For now, it shows a beautiful placeholder
  return (
    <div className={cn(
      "relative aspect-square rounded-xl overflow-hidden",
      "bg-gradient-to-br from-blue-900 to-blue-950",
      className
    )}>
      {placeholder && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Crown className="h-12 w-12 mx-auto text-yellow-500 mb-4" />
            <h3 className="text-lg font-semibold text-white">{name}</h3>
          </div>
        </div>
      )}
    </div>
  );
}