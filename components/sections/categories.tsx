'use client';

import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Palette, Cloud, Shield } from 'lucide-react';
import { CATEGORIES } from '@/lib/mock-data';

const ICON_MAP: Record<string, any> = {
  Code,
  Smartphone,
  Database,
  Palette,
  Cloud,
  Shield,
};

export function Categories() {
  return (
    <section className="py-32 bg-background border-t-2 border-border">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-12 h-1 bg-primary" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Browse Topics</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase">
          Explore by <br /> category<span className="text-primary">.</span>
        </h2>
        <p className="text-xl text-foreground font-bold uppercase tracking-tight mb-20 max-w-2xl mx-auto">
          Find the right path for your career. Our structured curriculum covers everything from web development to cloud architecture.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {CATEGORIES.map((category, index) => {
            const Icon = ICON_MAP[category.icon] || Code;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="bg-card border-2 border-border p-10 flex flex-col items-center gap-6 raw-shadow hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none transition-all">
                  <div className="w-16 h-16 bg-foreground text-background flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon className="w-8 h-8" />
                  </div>
                  <span className="font-black text-xs uppercase tracking-widest">{category.name}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
