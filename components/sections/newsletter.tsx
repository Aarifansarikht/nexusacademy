'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { BackgroundBlobs } from '@/components/shared/background-blobs';

export function Newsletter() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background">
      <BackgroundBlobs />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto border-2 border-primary/30 p-6 md:p-20 relative overflow-hidden bg-card rounded-sm raw-shadow">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 -mr-32 -mt-32 blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            <div>
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.3em] text-primary uppercase mb-4 block">— Nexus Newsletter —</span>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-none text-foreground">
                Stay ahead of <br /> <span className="italic text-primary">the curve</span>
              </h2>
              <p className="text-xs md:text-sm font-medium text-muted-foreground leading-relaxed">
                Get weekly tips, industry insights, and exclusive course discounts delivered straight to your inbox.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  placeholder="ENTER YOUR EMAIL" 
                  className="h-14 px-6 bg-background text-foreground border-b-2 border-primary/30 rounded-none font-black uppercase tracking-widest focus-visible:ring-0 focus-visible:border-primary transition-colors text-[11px]"
                />
                <Button className="h-14 px-10 font-black uppercase tracking-widest text-[11px] bg-primary text-primary-foreground skewed raw-shadow border-2 border-primary/30 hover:scale-105 transition-all">
                  <span className="skewed-content">Subscribe</span>
                </Button>
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground text-center sm:text-left">
                We care about your data. Read our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto h-[200px] sm:h-[300px] md:h-[450px] overflow-hidden mt-10 md:mt-16 border-2 border-primary/30 rounded-sm raw-shadow"
        >
          <Image
            src="https://picsum.photos/seed/newsletter/1200/800"
            alt="Newsletter"
            fill
            className="object-cover hover:scale-105 transition-all duration-1000"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
