'use client';

import { Crown } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Crown className="w-8 h-8 text-yellow-500" />
        <h1 className="text-4xl font-bold text-white">The Three Wise Men</h1>
        <Crown className="w-8 h-8 text-yellow-500" />
      </div>
      <p className="text-xl text-blue-100">
        Learn about the magical journey of Melchior, Gaspar, and Balthazar
      </p>
    </div>
  );
}