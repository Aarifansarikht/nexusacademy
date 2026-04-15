'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { BackgroundBlobs } from '@/components/shared/background-blobs';

const plans = [
  {
    name: 'Basic',
    price: '19',
    description: 'Perfect for beginners starting their coding journey.',
    features: ['Access to 10+ courses', 'Community support', 'Basic projects', 'Monthly webinars']
  },
  {
    name: 'Pro',
    price: '29',
    description: 'Best for professionals looking to level up their skills.',
    features: ['Access to all courses', 'Priority support', 'Advanced projects', '1-on-1 mentorship', 'Career guidance'],
    popular: true
  },
  {
    name: 'Team',
    price: '49',
    description: 'Ideal for teams and organizations.',
    features: ['Unlimited users', 'Custom curriculum', 'Team analytics', 'Dedicated account manager', 'Enterprise security']
  }
];

export function Pricing() {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-background">
      <BackgroundBlobs />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-[10px] sm:text-[11px] font-black tracking-[0.3em] text-primary uppercase mb-4 block">— The Plans —</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-4 md:mb-6">
            Simple, transparent <span className="italic text-primary">pricing</span>
          </h2>
          <p className="text-xs md:text-sm text-muted-foreground font-medium mb-8 md:mb-12">
            Choose the plan that works best for your learning goals.
          </p>
          
          <div className="flex items-center justify-center gap-6">
            <span className={cn("text-[11px] font-black uppercase tracking-widest transition-colors", !isYearly ? "text-foreground" : "text-muted-foreground")}>Monthly</span>
            <Switch 
              checked={isYearly} 
              onCheckedChange={setIsYearly} 
              className="data-[state=checked]:bg-primary border-2 border-primary/30 h-7 w-12 rounded-none"
            />
            <span className={cn("text-[11px] font-black uppercase tracking-widest transition-colors", isYearly ? "text-foreground" : "text-muted-foreground")}>Yearly <span className="text-primary-foreground text-[10px] bg-primary px-2 py-0.5 ml-1 font-black">SAVE 20%</span></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "p-6 md:p-8 flex flex-col gap-6 md:gap-8 bg-card border-2 border-border shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all relative rounded-sm",
                plan.popular ? "ring-4 ring-primary border-transparent shadow-xl md:-mt-4" : ""
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 md:-top-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] px-4 md:px-6 py-1.5 md:py-2 skewed raw-shadow border-2 border-primary/30">
                  <span className="skewed-content inline-block whitespace-nowrap">Most Popular</span>
                </div>
              )}

              <div>
                <h3 className="text-lg md:text-xl font-black mb-3 md:mb-4 uppercase italic tracking-tighter">{plan.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl md:text-5xl font-black italic tracking-tighter">${isYearly ? (parseInt(plan.price) * 0.8 * 12).toFixed(0) : plan.price}</span>
                  <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest text-muted-foreground">/{isYearly ? 'year' : 'month'}</span>
                </div>
                <p className="mt-4 md:mt-6 text-[10px] md:text-xs font-bold uppercase tracking-tight text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 flex items-center justify-center bg-primary text-primary-foreground border-2 border-primary/30 skewed shrink-0">
                      <div className="skewed-content"><Check className="w-3 h-3" /></div>
                    </div>
                    <span className="text-xs font-bold text-foreground leading-none uppercase tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={cn(
                  "w-full h-12 font-black uppercase tracking-widest text-[11px] mt-auto transition-all skewed raw-shadow border-2 border-primary/30",
                  plan.popular 
                    ? "bg-primary text-primary-foreground hover:scale-105" 
                    : "bg-background text-foreground hover:bg-primary hover:text-primary-foreground"
                )}
              >
                <span className="skewed-content">Get started</span>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
