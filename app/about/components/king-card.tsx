'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Crown } from 'lucide-react';

interface KingCardProps {
  name: string;
  title: string;
  gift: string;
  description: string;
}

export function KingCard({ name, title, gift, description }: KingCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="flex items-center gap-2">
          <Crown className="w-6 h-6 text-white" />
          <CardTitle className="text-white">{name}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">Gift: {gift}</p>
        <p className="text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}