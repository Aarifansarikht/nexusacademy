import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans, Archivo_Black, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-heading',
});

const archivo = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
});

export const metadata: Metadata = {
  title: 'Nexus Academy | Master Modern Coding',
  description: 'Master coding through real projects and mentorship',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={cn(jakarta.variable, inter.variable, archivo.variable, spaceGrotesk.variable)}>
      <body suppressHydrationWarning className="font-heading antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
