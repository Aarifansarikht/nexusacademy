'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Code, Activity, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: BookOpen,
    title: 'World-class curriculum designed for real work',
    description: 'Learn the patterns and practices that matter in production environments.'
  },
  {
    icon: Code,
    title: 'Real-world coding projects you\'ll actually build',
    description: 'No toy problems. Every project teaches you something you\'ll use tomorrow.'
  },
  {
    icon: Activity,
    title: 'Instant progress sync across all your devices',
    description: 'Pick up where you left off, anywhere, anytime.'
  }
];

export function Features() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-10 md:mb-16">
          <div className="text-left max-w-3xl">
            <span className="text-[10px] sm:text-[11px] font-black tracking-[0.3em] text-primary uppercase mb-4 block">— Why Nexus Academy —</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
              Built for modern <br /> <span className="italic text-primary">builders</span>
            </h2>
          </div>
          <p className="text-sm text-muted-foreground font-medium max-w-sm leading-relaxed">
            No fluff. Just the skills you need to ship production-ready applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-8 flex flex-col items-start bg-card border-2 border-border shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all group rounded-sm"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 skewed bg-muted flex items-center justify-center text-primary border-2 border-border mb-6 md:mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <div className="skewed-content">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-black mb-3 md:mb-4 uppercase tracking-tight leading-none">{feature.title}</h3>
              <p className="text-xs md:text-sm font-medium text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>
              <div className="w-12 h-1 bg-primary" />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-start">
          <Button variant="link" className="px-0 font-black uppercase tracking-[0.2em] text-[11px] text-primary hover:text-foreground transition-colors group">
            Start coding now
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
