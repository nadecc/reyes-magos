'use client';

import { HeroSection } from './components/hero-section';
import { KingCard } from './components/king-card';
import { TraditionSection } from './components/tradition-section';

const KINGS_DATA = [
  {
    name: 'Melchior',
    title: 'King of Persia',
    gift: 'Gold',
    description: 'The eldest of the three, known for his wisdom and generosity. He brings gold, symbolizing kingship.',
  },
  {
    name: 'Gaspar',
    title: 'King of India',
    gift: 'Frankincense',
    description: 'The youngest wise man, bringing frankincense which represents divinity and spiritual blessings.',
  },
  {
    name: 'Balthazar',
    title: 'King of Arabia',
    gift: 'Myrrh',
    description: 'Known for his deep understanding of ancient prophecies, bringing myrrh, a symbol of future destiny.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950 py-12">
      <div className="container max-w-4xl mx-auto px-4">
        <HeroSection />
        <TraditionSection />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {KINGS_DATA.map((king) => (
            <KingCard key={king.name} {...king} />
          ))}
        </div>
      </div>
    </div>
  );
}