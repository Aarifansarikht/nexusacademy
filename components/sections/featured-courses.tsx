'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CourseCard } from '@/components/shared/course-card';
import { MOCK_COURSES } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

import { ArrowRight, ArrowLeft } from 'lucide-react';
import { BackgroundBlobs } from '@/components/shared/background-blobs';

export function FeaturedCourses() {
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = React.useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / clientWidth);
      setActiveDot(index);
    }
  };

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background">
      <BackgroundBlobs />
      {/* Background Texture */}
      <div className="absolute inset-0 edu-texture opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] sm:text-[11px] font-black tracking-[0.3em] text-primary uppercase mb-4 block">— Top Rated Selection —</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-6">
              Featured <span className="italic text-primary">Courses</span>
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground font-medium leading-relaxed">
              Start with the fundamentals or dive into advanced topics.
            </p>
          </div>
          <Link href="/courses">
            <Button variant="outline" className="h-10 md:h-12 px-6 md:px-8 border-2 border-primary/30 font-black uppercase tracking-widest text-[10px] md:text-[11px] hover:bg-primary hover:text-primary-foreground transition-all skewed raw-shadow bg-background">
              <span className="skewed-content inline-flex items-center gap-2">
                Browse all courses <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </Link>
        </div>

        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-12 -mx-4 px-4 md:-mx-6 md:px-6 snap-x snap-mandatory scrollbar-hide gap-8 scroll-smooth"
          >
            {MOCK_COURSES.slice(0, 6).map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[280px] sm:min-w-[300px] md:min-w-[380px] snap-start"
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {[...Array(6)].map((_, i) => (
                <div key={i} className={cn("h-1.5 transition-all", i === activeDot ? "bg-primary w-12" : "bg-border w-6")} />
              ))}
            </div>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => scroll('left')}
                className="w-10 h-10 border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all skewed raw-shadow bg-background"
              >
                <span className="skewed-content"><ArrowLeft className="w-4 h-4" /></span>
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => scroll('right')}
                className="w-10 h-10 border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all skewed raw-shadow bg-background"
              >
                <span className="skewed-content"><ArrowRight className="w-4 h-4" /></span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
