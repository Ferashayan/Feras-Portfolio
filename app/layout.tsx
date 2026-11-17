import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Lora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Feras — AI Engineer & Full-Stack SaaS Developer',
  description:
    'AI Engineer & Full-Stack SaaS Developer Portfolio featuring interactive AI agents and Medium-style engineering articles.',
  openGraph: {
    title: 'Feras — AI Engineer & Full-Stack SaaS Developer',
    description:
      'AI Engineer & Full-Stack SaaS Developer Portfolio featuring interactive AI agents and Medium-style engineering articles.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${lora.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="bg-neutral-950 text-neutral-50 font-sans antialiased selection:bg-indigo-500/30"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}

