import { Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 via-blue-800 to-blue-950">
      <div className="container mx-auto px-4 py-16 relative">
        {/* Decorative stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <Star
              key={i}
              className="absolute text-yellow-200 animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.5 + 0.5,
                transform: `scale(${Math.random() * 0.5 + 0.5})`,
              }}
            />
          ))}
        </div>

        {/* Main content */}
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
            Write to the
            <span className="block text-yellow-300">Three Wise Men</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-12">
            Share your wishes with Melchior, Gaspar, and Balthazar. They're excited to read your letter!
          </p>

          <div className="space-y-4">
            <Button
              asChild
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold text-lg px-8 py-6"
            >
              <Link href="/letter">Write Your Letter</Link>
            </Button>
            
            <div className="flex justify-center gap-4">
              <Button
                variant="ghost"
                className="text-blue-100 hover:text-white hover:bg-blue-800/50"
                asChild
              >
                <Link href="/tracking">Track Your Letter</Link>
              </Button>
              <Button
                variant="ghost"
                className="text-blue-100 hover:text-white hover:bg-blue-800/50"
                asChild
              >
                <Link href="/about">About the Kings</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}