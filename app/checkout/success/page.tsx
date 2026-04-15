import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2, Play, ArrowRight, Download, Share2 } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { MOCK_COURSES } from '@/lib/mock-data';
import Link from 'next/link';

export default function SuccessPage({
  searchParams,
}: {
  searchParams: { courseId?: string };
}) {
  const courseId = searchParams?.courseId;
  const course = MOCK_COURSES.find((c) => c.id === courseId);

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-12"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="w-24 h-24 bg-primary text-primary-foreground flex items-center justify-center border-4 border-foreground raw-shadow skewed">
                <CheckCircle2 className="w-12 h-12 skewed-content" />
              </div>

              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Payment <span className="text-primary italic">Successful!</span>
              </h1>

              <p className="text-xl text-muted-foreground font-bold uppercase tracking-tight max-w-xl">
                Congratulations! You are now enrolled in{' '}
                <span className="text-foreground underline">
                  {course.title}
                </span>.
              </p>
            </div>

            <div className="bg-card border-4 border-foreground p-8 md:p-12 raw-shadow space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center text-left">
                <div className="space-y-6">
                  <h2 className="text-2xl font-black uppercase tracking-tighter">
                    What&apos;s Next?
                  </h2>

                  <ul className="space-y-4">
                    {[
                      'Access all course materials immediately',
                      'Join the exclusive student community',
                      'Download resources and assets',
                      'Start your first lesson now',
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-foreground"
                      >
                        <div className="w-2 h-2 bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative aspect-video border-2 border-foreground overflow-hidden">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8 border-t-2 border-border">
                <Link href={`/courses/${courseId}/learn`}>
                  <Button size="lg" className="h-16 px-12 bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm skewed raw-shadow border-2 border-foreground hover:scale-105 transition-all">
                    <span className="skewed-content inline-flex items-center gap-3">
                      Start Learning <Play className="w-4 h-4 fill-current" />
                    </span>
                  </Button>
                </Link>

                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    size="lg"
                    className="h-16 px-12 border-2 border-foreground font-black uppercase tracking-widest text-sm skewed raw-shadow hover:scale-105 transition-all"
                  >
                    <span className="skewed-content inline-flex items-center gap-3">
                      Go to Dashboard <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <Download className="w-4 h-4" />
                Download Receipt
              </button>

              <button className="flex items-center gap-2 hover:text-primary transition-colors">
                <Share2 className="w-4 h-4" />
                Share Achievement
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}