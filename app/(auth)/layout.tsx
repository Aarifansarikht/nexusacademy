'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-background">
      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-24 xl:px-32 py-12 bg-background relative overflow-hidden border-r-4 border-foreground">
        <div className="absolute top-8 left-8">
          <Link href="/" className="flex items-center gap-3 group text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" />
            <span className="text-[10px] font-black uppercase tracking-widest">Back to home</span>
          </Link>
        </div>
        
        <div className="mx-auto w-full max-w-md">
          {children}
        </div>
      </div>

      {/* Right Side - Visual */}
      <div className="hidden lg:block relative flex-1 bg-foreground overflow-hidden">
        <div className="absolute inset-0 pixel-grid opacity-20 z-10 pointer-events-none" />
        <Image
          src="https://picsum.photos/seed/auth/1920/1080"
          alt="Auth background"
          fill
          className="object-cover mix-blend-overlay opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/50 to-transparent z-20" />
        
        <div className="absolute bottom-24 left-24 right-24 z-30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter text-background mb-8 leading-[0.9]">
              Join the next generation of <br /> world-class developers<span className="text-primary">.</span>
            </h2>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="relative w-14 h-14 border-4 border-foreground overflow-hidden raw-shadow bg-background">
                    <Image 
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      alt="User" 
                      fill 
                      className="object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
              <p className="text-background text-[10px] font-black uppercase tracking-widest max-w-[200px]">
                Join 50,000+ students already learning.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
