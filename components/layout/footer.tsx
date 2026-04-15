'use client';

import * as React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react';

const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { name: 'Courses', href: '/courses' },
      { name: 'Mentorship', href: '/mentorship' },
      { name: 'Pricing', href: '/pricing' },
      { name: 'Enterprise', href: '/enterprise' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'Documentation', href: '/docs' },
      { name: 'Community', href: '/community' },
      { name: 'Help Center', href: '/help' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-background text-foreground py-12 md:py-20 border-t-2 border-foreground/10 relative z-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10 md:gap-16 mb-12 md:mb-20">
          <div className="max-w-md">
            <Link href="/" className="flex items-center gap-2 mb-6 md:mb-8 group">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-foreground text-background flex items-center justify-center font-black text-xl md:text-2xl skewed shadow-[3px_3px_0px_0px_var(--color-primary)]">
                <span className="skewed-content">N</span>
              </div>
              <span className="font-black text-xl md:text-2xl tracking-tighter text-foreground uppercase italic">
                NEXUS<span className="text-primary">ACADEMY</span>
              </span>
            </Link>
            <p className="text-[11px] font-black uppercase tracking-widest text-foreground/60 leading-relaxed max-w-xs">
              The world&apos;s most advanced coding platform. Master the craft. Build the future.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-20 w-full md:w-auto">
            <div className="space-y-6">
              <h4 className="font-black text-[11px] uppercase tracking-[0.3em] text-primary">— Platform —</h4>
              <ul className="space-y-3">
                <li><Link href="/courses" className="text-[11px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Courses</Link></li>
                <li><Link href="/disciplines" className="text-[11px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Disciplines</Link></li>
                <li><Link href="/pricing" className="text-[11px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="font-black text-[11px] uppercase tracking-[0.3em] text-primary">— Company —</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-[11px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">About us</Link></li>
                <li><Link href="/contact" className="text-[11px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="text-[11px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Careers</Link></li>
              </ul>
            </div>
            <div className="space-y-6 hidden sm:block">
              <h4 className="font-black text-[11px] uppercase tracking-[0.3em] text-primary">— Legal —</h4>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-[11px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-[11px] font-black uppercase tracking-widest text-foreground/60 hover:text-primary transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 md:gap-4 mt-8 md:mt-0">
            {[Twitter, Github, Linkedin, Youtube, Instagram].map((Icon, i) => (
              <Link 
                key={i} 
                href="#" 
                className="w-8 h-8 md:w-10 md:h-10 bg-background text-foreground border-2 border-primary/30 flex items-center justify-center skewed hover:bg-primary hover:text-primary-foreground transition-all raw-shadow"
              >
                <div className="skewed-content"><Icon className="w-3 h-3 md:w-4 md:h-4" /></div>
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-10 border-t-2 border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-widest text-foreground/60">
          <p>© {new Date().getFullYear()} Nexus Academy. All rights reserved.</p>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
