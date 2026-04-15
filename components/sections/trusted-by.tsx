'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const companies = [
  'Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Apple'
];

export function TrustedBy() {
  return (
    <section className="py-24 bg-foreground border-y-4 border-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">
              Trusted by engineers from
            </p>
            <h2 className="text-4xl font-black tracking-tighter text-background uppercase">
              World-class <br /> teams<span className="text-primary">.</span>
            </h2>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50 hover:opacity-100 transition-all duration-500">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Netflix', 'Apple'].map((company, i) => (
              <div key={i} className="flex items-center gap-3 text-2xl font-black tracking-tighter text-background hover:text-primary transition-colors cursor-default uppercase">
                <div className="w-10 h-10 bg-background text-foreground flex items-center justify-center group-hover:bg-primary group-hover:text-background transition-colors">
                  <div className="w-4 h-4 bg-current rotate-45" />
                </div>
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
