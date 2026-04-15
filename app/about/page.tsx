import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background soft-texture relative">
      <Navbar />
      <main className="container mx-auto px-4 pt-40 pb-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          <span className="text-[11px] font-black tracking-[0.3em] text-primary uppercase mb-4 block">— About Us —</span>
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-12 leading-none text-foreground">
            About <span className="text-primary italic">Nexus</span>
          </h1>
          <div className="space-y-10">
            <p className="text-xl md:text-2xl font-black uppercase tracking-tighter text-foreground leading-none">
              Nexus Academy is a platform for the next generation of world-class developers.
            </p>
            <div className="w-20 h-2 bg-primary" />
            <p className="text-sm text-foreground/70 font-bold uppercase tracking-tight leading-relaxed">
              We believe in learning by doing. Our curriculum is designed to be practical, challenging, and rewarding.
            </p>
            <p className="text-sm text-foreground/70 font-bold uppercase tracking-tight leading-relaxed">
              With a focus on real-world projects and mentorship, we help you master modern coding skills and build a portfolio that stands out.
            </p>
            
            <div className="pt-12">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-6 text-foreground">Our <span className="italic text-primary">Mission</span></h2>
              <p className="text-sm text-foreground/70 font-bold uppercase tracking-tight leading-relaxed">
                To empower developers worldwide with the skills and confidence to build the future.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
