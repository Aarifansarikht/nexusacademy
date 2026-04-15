import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background soft-texture relative">
      <Navbar />
      <main className="container mx-auto px-4 pt-40 pb-20 relative z-10">
        <div className="max-w-2xl mx-auto">
          <span className="text-[11px] font-black tracking-[0.3em] text-primary uppercase mb-4 block">— Contact —</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none text-foreground">
            Contact <span className="text-primary italic">us</span>
          </h1>
          <form className="space-y-8 bg-card border-4 border-foreground p-10 shadow-sm rounded-none raw-shadow">
            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase tracking-widest text-foreground/70 ml-1">Name</label>
              <Input className="h-16 bg-background border-2 border-foreground rounded-none focus-visible:ring-0 focus-visible:border-primary font-black uppercase tracking-widest text-[11px] placeholder:text-foreground/30" placeholder="Full Name" />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase tracking-widest text-foreground/70 ml-1">Email</label>
              <Input className="h-16 bg-background border-2 border-foreground rounded-none focus-visible:ring-0 focus-visible:border-primary font-black uppercase tracking-widest text-[11px] placeholder:text-foreground/30" placeholder="name@example.com" />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-black uppercase tracking-widest text-foreground/70 ml-1">Message</label>
              <Textarea className="min-h-[180px] bg-background border-2 border-foreground rounded-none focus-visible:ring-0 focus-visible:border-primary font-black uppercase tracking-widest text-[11px] p-6 placeholder:text-foreground/30" placeholder="How can we help?" />
            </div>
            <Button className="w-full h-16 bg-primary text-primary-foreground font-black uppercase tracking-widest text-[11px] skewed raw-shadow border-2 border-foreground hover:scale-105 transition-all">
              <span className="skewed-content">Send Message</span>
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
