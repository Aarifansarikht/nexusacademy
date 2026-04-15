'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const mentors = [
  {
    name: "Alex Rivera",
    role: "Senior Frontend Architect",
    company: "Vercel",
    bio: "Specializing in React performance and Next.js ecosystems. Former lead at Meta.",
    image: "https://picsum.photos/seed/m1/400/400",
    socials: { twitter: "#", github: "#", linkedin: "#" }
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Design",
    company: "Airbnb",
    bio: "Expert in design systems and user-centric interfaces. Passionate about accessibility.",
    image: "https://picsum.photos/seed/m2/400/400",
    socials: { twitter: "#", github: "#", linkedin: "#" }
  },
  {
    name: "David Chen",
    role: "Staff Software Engineer",
    company: "Stripe",
    bio: "Backend specialist with focus on distributed systems and payment infrastructure.",
    image: "https://picsum.photos/seed/m3/400/400",
    socials: { twitter: "#", github: "#", linkedin: "#" }
  },
  {
    name: "Elena Rodriguez",
    role: "AI Research Engineer",
    company: "OpenAI",
    bio: "Building the future of LLMs. Expert in Python, PyTorch, and neural networks.",
    image: "https://picsum.photos/seed/m4/400/400",
    socials: { twitter: "#", github: "#", linkedin: "#" }
  }
];

export function Mentors() {
  return (
    <section className="py-16 md:py-32 bg-background relative overflow-hidden border-t-2 border-foreground/5">
      {/* Background Texture */}
      <div className="absolute inset-0 edu-texture opacity-[0.03] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8 mb-12 md:mb-20">
          <div className="max-w-3xl">
            <span className="text-[10px] sm:text-[11px] font-black tracking-[0.3em] text-primary uppercase mb-4 block">— Expert Guidance —</span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              Learn from the <br /> <span className="italic text-primary">industry best</span>
            </h2>
          </div>
          <p className="text-xs md:text-sm text-muted-foreground font-bold uppercase tracking-tight max-w-sm leading-relaxed">
            Our mentors are world-class engineers and designers from top tech companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mentors.map((mentor, index) => (
            <motion.div
              key={mentor.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-card border-2 border-primary/30 p-4 md:p-6 raw-shadow hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="relative mb-6 md:mb-8 aspect-square border-2 border-primary/30 overflow-hidden">
                  <div className="w-full h-full relative">
                    <Image 
                      src={mentor.image} 
                      alt={mentor.name}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-primary" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">{mentor.company}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-1">{mentor.name}</h3>
                  <p className="text-[9px] md:text-[11px] font-black uppercase tracking-widest text-muted-foreground mb-4 md:mb-6">{mentor.role}</p>
                  <p className="text-[10px] md:text-xs font-bold uppercase tracking-tight text-foreground/70 leading-relaxed mb-6 md:mb-8">
                    {mentor.bio}
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 border-t-2 border-foreground/5 mt-auto">
                  <LinkIcon Icon={Twitter} href={mentor.socials.twitter} />
                  <LinkIcon Icon={Github} href={mentor.socials.github} />
                  <LinkIcon Icon={Linkedin} href={mentor.socials.linkedin} />
                  <Button variant="link" className="ml-auto p-0 h-auto text-[10px] font-black uppercase tracking-widest text-primary hover:text-foreground transition-colors group/btn">
                    Profile <ExternalLink className="w-3 h-3 ml-1 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 md:mt-20 flex justify-center">
          <Button size="lg" className="h-12 md:h-16 px-8 md:px-12 bg-foreground text-background font-black uppercase tracking-widest text-[10px] md:text-xs skewed raw-shadow border-2 border-primary/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
            <span className="skewed-content">View All Mentors</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

function LinkIcon({ Icon, href }: { Icon: any, href: string }) {
  return (
    <a 
      href={href}
      className="w-8 h-8 flex items-center justify-center border-2 border-primary/30 hover:bg-foreground hover:text-background transition-colors skewed"
    >
      <div className="skewed-content">
        <Icon className="w-3.5 h-3.5" />
      </div>
    </a>
  );
}
