import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    description: 'Perfect for beginners',
    features: ['Access to 5 courses', 'Community support', 'Basic projects'],
  },
  {
    name: 'Pro',
    price: '$29',
    description: 'For serious learners',
    features: ['Access to all courses', 'Mentorship', 'Advanced projects', 'Certificate'],
  },
  {
    name: 'Enterprise',
    price: '$99',
    description: 'For teams',
    features: ['All Pro features', 'Team management', 'Custom curriculum', 'Dedicated support'],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background soft-texture relative">
      <Navbar />
      <main className="container mx-auto px-4 pt-40 pb-20 relative z-10">
        <div className="text-center mb-20">
          <span className="text-[11px] font-black tracking-[0.3em] text-primary uppercase mb-4 block">— Pricing —</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 leading-none text-foreground">
            Choose your <span className="text-primary italic">plan</span>
          </h1>
          <p className="text-sm text-foreground/70 font-bold uppercase tracking-tight">
            Simple, transparent pricing for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-card border-4 border-foreground p-10 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all rounded-none raw-shadow flex flex-col">
              <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-4 text-foreground">{plan.name}</h2>
              <div className="text-5xl font-black italic mb-6 tracking-tighter leading-none text-foreground">
                {plan.price}<span className="text-[11px] text-foreground/60 font-black uppercase tracking-widest ml-2 italic">/mo</span>
              </div>
              <p className="text-foreground/70 text-xs font-bold uppercase tracking-tight mb-10 leading-relaxed">{plan.description}</p>
              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-4 text-xs font-black uppercase tracking-tight text-foreground">
                    <div className="w-6 h-6 flex items-center justify-center bg-primary text-primary-foreground border-2 border-foreground skewed shrink-0">
                      <div className="skewed-content"><Check className="w-3.5 h-3.5" /></div>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full h-16 bg-primary text-primary-foreground font-black uppercase tracking-widest text-[11px] skewed raw-shadow border-2 border-foreground hover:scale-105 transition-all">
                <span className="skewed-content">Get Started</span>
              </Button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
