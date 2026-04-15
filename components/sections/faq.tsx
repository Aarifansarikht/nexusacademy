'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "How do I get started with Nexus Academy?",
    answer: "Simply sign up for an account, choose your discipline, and you can start with any of our free introductory courses. Once you're ready to dive deeper, you can upgrade to a Pro plan."
  },
  {
    question: "Are the certificates recognized by employers?",
    answer: "Yes, our certificates are highly valued in the industry because they are project-based. Employers can verify your skills by looking at the actual production-ready code you build during the courses."
  },
  {
    question: "Can I switch between plans at any time?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time from your dashboard. If you upgrade, the new features will be available immediately."
  },
  {
    question: "Is there a community for students?",
    answer: "Yes! We have a very active Discord community where students, mentors, and alumni collaborate, share projects, and help each other solve complex coding problems."
  },
  {
    question: "Do I need prior coding experience?",
    answer: "We have courses for all levels. Our 'Starter' paths are designed specifically for absolute beginners, while our 'Advanced' tracks are tailored for experienced engineers looking to master specific technologies."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden border-t-2 border-foreground/5">
      {/* Background Texture */}
      <div className="absolute inset-0 edu-texture opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-20">
          <div className="lg:w-1/3">
            <div className="sticky top-24 md:top-32">
              <span className="text-[10px] sm:text-[11px] font-black tracking-[0.3em] text-primary uppercase mb-4 block">— Questions —</span>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 md:mb-8">
                Common <br /> <span className="italic text-primary">Queries</span>
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground font-bold uppercase tracking-tight max-w-xs leading-relaxed mb-8 md:mb-12">
                Everything you need to know about the platform and our learning methodology.
              </p>
              
              <div className="w-16 h-16 md:w-20 md:h-20 bg-foreground text-background flex items-center justify-center skewed raw-shadow">
                <div className="skewed-content">
                  <HelpCircle className="w-8 h-8 md:w-10 md:h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={cn(
                  "border-2 border-primary/30 transition-all duration-300 raw-shadow",
                  openIndex === index ? "bg-card translate-x-1 translate-y-1 shadow-none" : "bg-background"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full p-6 md:p-8 flex items-center justify-between text-left group"
                >
                  <span className="text-lg md:text-2xl font-black uppercase tracking-tight group-hover:text-primary transition-colors pr-4">
                    {faq.question}
                  </span>
                  <div className={cn(
                    "w-8 h-8 md:w-10 md:h-10 flex-shrink-0 flex items-center justify-center border-2 border-primary/30 transition-all duration-300 skewed",
                    openIndex === index ? "bg-primary text-primary-foreground" : "bg-background text-foreground"
                  )}>
                    <div className="skewed-content">
                      {openIndex === index ? <Minus className="w-4 h-4 md:w-5 md:h-5" /> : <Plus className="w-4 h-4 md:w-5 md:h-5" />}
                    </div>
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 md:p-8 pt-0 border-t-2 border-foreground/5">
                        <p className="text-xs md:text-base font-bold uppercase tracking-tight text-foreground/70 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
