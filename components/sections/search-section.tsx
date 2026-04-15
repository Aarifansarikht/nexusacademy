'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Search as SearchIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';

export function SearchSection() {
  return (
    <section className="py-32 bg-background overflow-hidden border-t-2 border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-1 bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Course Discovery</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-10 uppercase">
              Find your <br /> perfect path<span className="text-primary">.</span>
            </h2>
            <p className="text-xl text-foreground font-bold uppercase tracking-tight mb-12">
              Filter by language, difficulty, or discipline to find exactly what you need to level up your skills.
            </p>
            
            <div className="relative group">
              <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="SEARCH COURSES, SKILLS, OR TOPICS..." 
                className="h-20 pl-16 bg-card border-4 border-foreground text-sm font-black uppercase tracking-widest focus-visible:ring-primary focus-visible:ring-offset-0 raw-shadow"
              />
            </div>
          </div>

          <div className="relative h-[600px] hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute inset-0 border-4 border-foreground raw-shadow overflow-hidden"
            >
              <Image
                src="https://picsum.photos/seed/search/1200/800"
                alt="Search interface"
                fill
                className="object-cover hover:scale-105 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
