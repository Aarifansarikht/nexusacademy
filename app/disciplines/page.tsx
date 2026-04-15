'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Cpu, 
  Smartphone, 
  Cloud, 
  Shield, 
  BarChart, 
  Terminal,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const disciplines = [
  {
    title: 'Web Development',
    description: 'Master modern web technologies from frontend to backend.',
    icon: Globe,
    color: 'bg-blue-500',
    count: '120+ Courses',
    topics: ['React', 'Next.js', 'Node.js', 'TypeScript']
  },
  {
    title: 'Mobile Development',
    description: 'Build native and cross-platform mobile applications.',
    icon: Smartphone,
    color: 'bg-purple-500',
    count: '85+ Courses',
    topics: ['React Native', 'Flutter', 'Swift', 'Kotlin']
  },
  {
    title: 'Data Science',
    description: 'Analyze data, build models, and gain insights.',
    icon: BarChart,
    color: 'bg-green-500',
    count: '95+ Courses',
    topics: ['Python', 'Pandas', 'Machine Learning', 'SQL']
  },
  {
    title: 'UI/UX Design',
    description: 'Create beautiful and intuitive user experiences.',
    icon: Palette,
    color: 'bg-pink-500',
    count: '60+ Courses',
    topics: ['Figma', 'Adobe XD', 'Prototyping', 'User Research']
  },
  {
    title: 'Cloud Computing',
    description: 'Deploy and scale applications on the cloud.',
    icon: Cloud,
    color: 'bg-sky-500',
    count: '70+ Courses',
    topics: ['AWS', 'Azure', 'Google Cloud', 'Docker']
  },
  {
    title: 'Cybersecurity',
    description: 'Protect systems and networks from digital attacks.',
    icon: Shield,
    color: 'bg-red-500',
    count: '45+ Courses',
    topics: ['Ethical Hacking', 'Network Security', 'Cryptography']
  },
  {
    title: 'Artificial Intelligence',
    description: 'Build intelligent systems and neural networks.',
    icon: Cpu,
    color: 'bg-indigo-500',
    count: '55+ Courses',
    topics: ['Deep Learning', 'NLP', 'Computer Vision', 'PyTorch']
  },
  {
    title: 'Software Engineering',
    description: 'Learn the principles of building robust software.',
    icon: Terminal,
    color: 'bg-orange-500',
    count: '110+ Courses',
    topics: ['Algorithms', 'Design Patterns', 'Testing', 'Git']
  }
];

export default function DisciplinesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />

      <div className="flex-grow pt-32 pb-20 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-48 pointer-events-none" />
        <div className="absolute bottom-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 pointer-events-none" />
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-none">
                Our <span className="text-primary">Disciplines</span>
              </h1>
              <p className="text-xl md:text-2xl font-bold uppercase tracking-tight text-foreground/80 max-w-2xl">
                Explore our wide range of specialized learning paths designed to take you from zero to hero in your chosen field.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {disciplines.map((discipline, index) => {
              const Icon = discipline.icon;
              return (
                <motion.div
                  key={discipline.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="group"
                >
                  <div className="h-full bg-card border-4 border-foreground p-8 raw-shadow hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 flex flex-col">
                    <div className={cn("w-16 h-16 flex items-center justify-center border-4 border-foreground mb-8 text-white", discipline.color)}>
                      <Icon className="w-8 h-8" />
                    </div>
                    
                    <div className="flex-grow space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-black uppercase tracking-tight">{discipline.title}</h3>
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{discipline.count}</span>
                      </div>
                      
                      <p className="text-sm font-bold uppercase tracking-tight text-muted-foreground leading-relaxed">
                        {discipline.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {discipline.topics.map((topic) => (
                          <span key={topic} className="text-[10px] font-black uppercase tracking-widest bg-foreground/5 px-2 py-1 border border-foreground/10">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-8 mt-auto">
                      <Link href={`/courses?category=${discipline.title}`}>
                        <Button className="w-full h-12 bg-foreground text-background border-2 border-foreground font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-none">
                          Explore Path
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

import { cn } from '@/lib/utils';
