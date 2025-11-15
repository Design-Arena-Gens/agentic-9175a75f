import type { Metadata } from 'next';
import { Manrope, Playfair_Display } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Flow Indicators | MAX MÜLLER – Intelligent Observation',
  description:
    'Discover the MAX MÜLLER flow indicator portfolio with configurable sight glass systems for demanding industrial processes.',
  metadataBase: new URL('https://agentic-9175a75f.vercel.app'),
  openGraph: {
    title: 'MAX MÜLLER Flow Indicators',
    description:
      'Four configurable sight glass series engineered for rugged process monitoring in chemical, pharmaceutical, and energy applications.',
    url: 'https://agentic-9175a75f.vercel.app',
    siteName: 'MAX MÜLLER Flow Indicators',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://agentic-9175a75f.vercel.app',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}

