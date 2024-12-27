'use client';

import { useState } from 'react';
import { Search, MapPin, Gift, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const TRACKING_STATES = [
  { icon: Search, label: 'Reading Letter', description: 'The Three Wise Men are carefully reading your letter' },
  { icon: Gift, label: 'Gift Preparation', description: 'Your gifts are being prepared with magic and care' },
  { icon: Truck, label: 'Loading Camels', description: 'The royal camels are being loaded with presents' },
  { icon: MapPin, label: 'On the Journey', description: 'The Three Wise Men are on their magical journey' },
];

export default function TrackingPage() {
  const [trackingId, setTrackingId] = useState('');
  const [currentState] = useState(1); // This would normally come from an API

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 py-12">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Track Your Letter</h1>
          <p className="text-blue-100">Enter your tracking number to see the magic happen</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Letter Tracking</CardTitle>
            <CardDescription>
              Find out where your letter is in its magical journey
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Input
                placeholder="Enter tracking number"
                value={trackingId}
                onChange={(e) => setTrackingId(e.target.value)}
              />
              <Button>
                Track Letter
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          {TRACKING_STATES.map((state, index) => {
            const Icon = state.icon;
            const isActive = index === currentState;
            const isPast = index < currentState;

            return (
              <div
                key={state.label}
                className={`bg-white rounded-lg p-4 transition-all ${
                  isActive ? 'border-l-4 border-yellow-500 shadow-lg' : ''
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-2 rounded-full ${
                      isActive || isPast
                        ? 'bg-yellow-500 text-white'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${
                      isActive ? 'text-yellow-500' : 'text-gray-900'
                    }`}>
                      {state.label}
                    </h3>
                    <p className="text-sm text-gray-600">{state.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm text-blue-100">
            The Three Wise Men will arrive on January 6th
          </p>
        </div>
      </div>
    </div>
  );
}