'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { BackgroundBlobs } from '@/components/shared/background-blobs';

export function ReadyToStart() {
  return (
    <section className="py-16 md:py-32 bg-background overflow-hidden border-t-2 border-border relative">
      <BackgroundBlobs />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="bg-foreground border-2 border-primary/30 p-8 md:p-32 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 -mr-48 -mt-48 blur-3xl opacity-50" />
          
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl md:text-8xl font-black tracking-tighter text-background mb-6 md:mb-10 uppercase">
              Ready to start <br /> your journey<span className="text-primary">?</span>
            </h2>
            <p className="text-base md:text-xl text-background/80 font-bold uppercase tracking-tight mb-10 md:mb-16 max-w-2xl mx-auto">
              Join the elite club of developers who master their craft and build the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
              <Button size="lg" className="w-full sm:w-auto h-12 md:h-16 px-8 md:px-12 font-black uppercase tracking-widest text-xs md:text-sm bg-primary text-primary-foreground hover:bg-background hover:text-foreground transition-all border-2 border-primary hover:border-background">
                Start learning now
              </Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto h-12 md:h-16 px-8 md:px-12 font-black uppercase tracking-widest text-xs md:text-sm border-2 border-background text-background hover:bg-background hover:text-foreground transition-all bg-transparent">
                View all courses
              </Button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-6xl mx-auto h-[250px] sm:h-[400px] md:h-[600px] overflow-hidden mt-10 md:mt-16 border-2 border-primary/30"
        >
          <Image
            src="https://picsum.photos/seed/ready/1200/800"
            alt="Ready to start"
            fill
            className="object-cover hover:scale-105 transition-all duration-700"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
