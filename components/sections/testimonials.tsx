'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { BackgroundBlobs } from '@/components/shared/background-blobs';
import { AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "I went from struggling with async patterns to shipping production code in three months. The projects actually matter.",
    author: "Marcus Rodriguez",
    role: "Software Engineer at Google",
    avatar: "https://picsum.photos/seed/t1/100/100",
    company: "Google"
  },
  {
    quote: "The curriculum is dense but fair. You learn what you need, nothing more, nothing less. That's rare.",
    author: "Sarah Chen",
    role: "Frontend Developer at Meta",
    avatar: "https://picsum.photos/seed/t2/100/100",
    company: "Meta"
  },
  {
    quote: "Switched careers in eight months. The mentorship component made all the difference when I got stuck.",
    author: "Priya Patel",
    role: "Fullstack Dev at Stripe",
    avatar: "https://picsum.photos/seed/t3/100/100",
    company: "Stripe"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 bg-background border-t-2 border-border relative overflow-hidden">
      <BackgroundBlobs />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-left max-w-4xl mb-20">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-12 h-1 bg-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Student Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8 uppercase">
            Real stories from <br /> real developers<span className="text-primary italic">.</span>
          </h2>
          <p className="text-sm text-muted-foreground font-medium max-w-2xl leading-relaxed">
            Join thousands of developers who have transformed their careers with Nexus Academy.
          </p>
        </div>

        <div className="relative min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-4xl p-10 md:p-16 flex flex-col items-start bg-card border-2 border-border raw-shadow relative rounded-sm"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-primary/10" />
              
              <div className="flex items-center gap-2 mb-10 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                <div className="w-6 h-6 bg-foreground text-background flex items-center justify-center">
                  <div className="w-2 h-2 bg-primary" />
                </div>
                {testimonials[currentIndex].company}
              </div>

              <blockquote className="text-2xl md:text-4xl font-black leading-tight mb-12 text-foreground uppercase tracking-tight italic">
                &ldquo;{testimonials[currentIndex].quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 mt-auto">
                <div className="relative w-16 h-16 border-2 border-border overflow-hidden skewed">
                  <Avatar className="w-full h-full rounded-none skewed-content">
                    <AvatarImage src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].author} className="object-cover" />
                    <AvatarFallback className="rounded-none font-black">{testimonials[currentIndex].author.charAt(0)}</AvatarFallback>
                  </Avatar>
                </div>
                <div>
                  <div className="font-black text-sm text-foreground uppercase tracking-widest">{testimonials[currentIndex].author}</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1">{testimonials[currentIndex].role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between mt-20">
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prev}
              className="w-14 h-14 border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-all skewed raw-shadow bg-background"
            >
              <span className="skewed-content"><ArrowLeft className="w-6 h-6" /></span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={next}
              className="w-14 h-14 border-2 border-foreground hover:bg-primary hover:text-primary-foreground transition-all skewed raw-shadow bg-background"
            >
              <span className="skewed-content"><ArrowRight className="w-6 h-6" /></span>
            </Button>
          </div>
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={cn("h-2 transition-all rounded-none", i === currentIndex ? "bg-primary w-12" : "bg-border w-6")} 
                suppressHydrationWarning
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
