'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BackgroundBlobs } from '@/components/shared/background-blobs';

export function Hero() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-background soft-texture">
      <BackgroundBlobs />
      {/* Background Accents */}
      <div className="absolute inset-0 pixel-grid pointer-events-none opacity-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-start text-left max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 px-4 py-1.5 bg-primary text-primary-foreground font-black uppercase tracking-[0.3em] text-[10px] skewed shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <span className="skewed-content inline-block">Nexus Academy • The Future of Learning</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-6 md:mb-8 text-foreground leading-[1] text-left"
            >
              Master the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Digital Craft.</span> <br />
              Code <span className="text-primary italic">Better.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm md:text-base lg:text-lg text-muted-foreground font-medium mb-8 md:mb-10 max-w-xl leading-relaxed"
            >
              Join the elite circle of developers mastering the digital craft through performance-driven mentorship and real-world projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 sm:gap-6"
            >
              <Link href="/courses">
                <Button size="lg" className="h-10 sm:h-12 md:h-14 px-6 sm:px-8 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-widest bg-primary text-primary-foreground skewed raw-shadow hover:scale-105 transition-all border-2 border-primary/30">
                  <span className="skewed-content inline-flex items-center gap-2">
                    Start Learning <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </span>
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="h-10 sm:h-12 md:h-14 px-6 sm:px-8 text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-widest border-2 border-primary/30 bg-background skewed raw-shadow hover:scale-105 transition-all">
                <span className="skewed-content inline-flex items-center gap-2">
                  View Plans <Play className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                </span>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-12 md:mt-16 flex flex-wrap gap-6 md:gap-8 pt-6 md:pt-8 border-t-2 border-foreground/10 w-full"
            >
              {[
                { label: 'Students', value: '50K+' },
                { label: 'Mentors', value: '100+' },
                { label: 'Success', value: '98%' },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-start">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-foreground italic tracking-tighter">{stat.value}</span>
                  <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-muted-foreground">— {stat.label} —</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 border-2 border-primary/30 raw-shadow overflow-hidden skewed">
              <Image 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
                alt="Nexus Academy Learning"
                width={800}
                height={600}
                className="object-cover skewed-content scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 border-2 border-primary skewed -z-10" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-foreground/5 border-2 border-primary/30 skewed -z-10" />
            
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 -right-12 bg-card border-2 border-primary/30 p-4 raw-shadow z-20 skewed"
            >
              <div className="skewed-content flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-widest">Live Mentorship</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
