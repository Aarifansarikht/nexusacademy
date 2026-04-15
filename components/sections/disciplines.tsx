'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Smartphone, Brain, Cloud, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const disciplines = [
  {
    icon: Code,
    title: 'Web development',
    description: 'Frontend, backend, and full-stack engineering for modern web applications.'
  },
  {
    icon: Smartphone,
    title: 'Mobile engineering',
    description: 'Build native and cross-platform apps that users actually want to use.'
  },
  {
    icon: Brain,
    title: 'Data and AI',
    description: 'Machine learning, data science, and AI engineering for real-world problems.'
  },
  {
    icon: Cloud,
    title: 'DevOps and infrastructure',
    description: 'Deploy, scale, and maintain systems that handle production traffic.'
  }
];

export function Disciplines() {
  return (
    <section className="py-16 md:py-32 bg-background border-t-2 border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start justify-between mb-12 md:mb-20 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-1 bg-primary" />
              <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-primary">Learning Paths</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase">
              Master any <br /> path<span className="text-primary">.</span>
            </h2>
          </div>
          <div className="max-w-md md:pt-16">
            <p className="text-base md:text-xl text-foreground font-bold uppercase tracking-tight">
              From web development to machine learning, we&apos;ve got structured paths for every skill level.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {disciplines.map((discipline, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 md:p-10 flex flex-col bg-card border-2 border-border raw-shadow hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all group"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-foreground text-background flex items-center justify-center mb-6 md:mb-10 group-hover:bg-primary transition-colors">
                <discipline.icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="text-xl md:text-2xl font-black mb-4 md:mb-6 uppercase tracking-tight">{discipline.title}</h3>
              <p className="text-xs md:text-[13px] font-bold text-muted-foreground leading-tight uppercase tracking-tight">
                {discipline.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 flex justify-center">
          <Link href="/disciplines">
            <Button variant="outline" className="h-12 md:h-16 px-8 md:px-12 border-2 border-primary/30 font-black uppercase tracking-widest text-xs md:text-sm hover:bg-foreground hover:text-background transition-all">
              Explore all disciplines
              <ArrowRight className="ml-2 md:ml-3 w-4 h-4 md:w-6 md:h-6" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
