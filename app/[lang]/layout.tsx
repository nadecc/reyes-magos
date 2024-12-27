import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '../providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Three Wise Men Letter | Write to the Reyes Magos',
  description: 'Write your magical letter to the Three Wise Men and track their journey',
};

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}