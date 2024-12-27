'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star } from 'lucide-react';

export function TraditionSection() {
  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Star className="w-6 h-6 text-yellow-500" />
          <CardTitle>The Tradition</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">
          Every year on January 6th, the Three Wise Men bring gifts to children who have been good throughout the year. 
          Following the Star of Bethlehem, they travel on their camels across the world, continuing their ancient tradition 
          of bringing joy to children just as they brought gifts to the baby Jesus.
        </p>
      </CardContent>
    </Card>
  );
}