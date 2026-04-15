import Link from 'next/link';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background soft-texture relative flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="text-center max-w-2xl">
          <div className="inline-block mb-8">
            <div className="text-[120px] md:text-[200px] font-black leading-none tracking-tighter text-foreground flex items-center justify-center">
              4<span className="text-primary italic">0</span>4
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 text-foreground">
            Lost in the <span className="text-primary italic">Code?</span>
          </h1>
          
          <p className="text-sm md:text-base text-foreground/70 font-bold uppercase tracking-tight mb-12 max-w-md mx-auto leading-relaxed">
            The page you are looking for has been moved, deleted, or never existed in this repository.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/">
              <Button size="lg" className="h-16 px-10 bg-primary text-primary-foreground font-black uppercase tracking-widest text-[11px] skewed raw-shadow border-2 border-foreground hover:scale-105 transition-all">
                <span className="skewed-content inline-flex items-center gap-2">
                  <Home className="w-4 h-4" /> Back to Home
                </span>
              </Button>
            </Link>
            <Link href="/courses">
              <Button variant="outline" size="lg" className="h-16 px-10 bg-background text-foreground font-black uppercase tracking-widest text-[11px] skewed raw-shadow border-2 border-foreground hover:scale-105 transition-all">
                <span className="skewed-content inline-flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Explore Courses
                </span>
              </Button>
            </Link>
          </div>
          
          {/* Decorative elements */}
          <div className="mt-20 flex justify-center gap-4 opacity-20">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-8 h-8 border-2 border-foreground skewed" />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
