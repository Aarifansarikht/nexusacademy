'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BookOpen, Trophy, Clock, Star, ArrowRight, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { MOCK_COURSES } from '@/lib/mock-data';
import { useAppSelector } from '@/lib/store/hooks';
import Link from 'next/link';

export default function DashboardPage() {
  const { user } = useAppSelector((state) => state.auth);
  
  const stats = [
    { name: 'Courses in Progress', value: '4', icon: BookOpen },
    { name: 'Completed Courses', value: '12', icon: Trophy },
    { name: 'Learning Hours', value: '128h', icon: Clock },
    { name: 'Average Score', value: '94%', icon: Star },
  ];

  const continuingCourses = MOCK_COURSES.slice(0, 2);

  return (
    <div className="space-y-16 relative">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-48 pointer-events-none" />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
        <div className="space-y-2">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
            Welcome back, {user?.name || 'Student'}<span className="text-primary">!</span>
          </h1>
          <p className="text-xl font-bold uppercase tracking-tight text-foreground/80">
            You&apos;ve completed <span className="text-primary">85%</span> of your weekly goal. Keep it up!
          </p>
        </div>
        <Link href="/courses">
          <Button className="h-16 px-10 font-black uppercase tracking-widest text-xs bg-primary text-primary-foreground border-4 border-foreground raw-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all rounded-none">
            Browse New Courses
            <ArrowRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-4 border-foreground raw-shadow rounded-none bg-card hover:-translate-y-1 transition-all">
                <CardContent className="p-8 flex items-center gap-6">
                  <div className="w-16 h-16 bg-foreground text-background border-2 border-foreground flex items-center justify-center shrink-0">
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-black uppercase tracking-[0.2em] mb-1">{stat.name}</p>
                    <p className="text-4xl font-black tracking-tighter uppercase">{stat.value}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
        {/* Continue Learning */}
        <div className="lg:col-span-2 space-y-10">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-black uppercase tracking-tighter">Continue Learning</h2>
            <Button variant="link" className="text-primary font-black uppercase tracking-widest text-xs p-0 h-auto">
              View all
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
          
          <div className="space-y-8">
            {continuingCourses.map((course) => (
              <Card key={course.id} className="border-4 border-foreground raw-shadow rounded-none overflow-hidden group bg-card hover:-translate-y-1 transition-all">
                <CardContent className="p-0 flex flex-col sm:flex-row">
                  <div className="relative w-full sm:w-72 aspect-video sm:aspect-square shrink-0 overflow-hidden border-b-4 sm:border-b-0 sm:border-r-4 border-foreground">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-20 h-20 bg-background border-4 border-foreground flex items-center justify-center text-foreground">
                        <Play className="w-10 h-10 fill-current ml-2" />
                      </div>
                    </div>
                  </div>
                  <div className="p-10 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <Badge className="bg-primary text-primary-foreground border-none font-black uppercase tracking-widest text-[10px] px-4 py-1.5">
                          {course.category}
                        </Badge>
                        <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">45% Complete</span>
                      </div>
                      <h3 className="font-black uppercase tracking-tight text-3xl mb-8 leading-none">{course.title}</h3>
                    </div>
                    <div className="space-y-6">
                      <Progress value={45} className="h-3 bg-foreground/10 border-2 border-foreground" />
                      <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                        <span className="flex items-center gap-2">
                          <Play className="w-3 h-3 text-primary" />
                          Next: Lesson 12 - Advanced Hooks
                        </span>
                        <span>12 / 45 lessons</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-12">
          <Card className="border-4 border-foreground raw-shadow rounded-none bg-foreground text-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl -mr-32 -mt-32" />
            <CardHeader className="p-10 pb-6">
              <CardTitle className="text-4xl font-black uppercase tracking-tighter leading-none">Nexus Pro</CardTitle>
            </CardHeader>
            <CardContent className="p-10 pt-0 space-y-8">
              <p className="text-sm font-bold uppercase tracking-tight text-background/80 leading-relaxed">
                Unlock 200+ premium courses, direct mentorship, and exclusive certificates.
              </p>
              <Button className="w-full h-16 font-black uppercase tracking-widest text-xs bg-primary text-primary-foreground border-2 border-primary hover:bg-background hover:text-foreground hover:border-background transition-all rounded-none">Upgrade Now</Button>
            </CardContent>
          </Card>

          <Card className="border-4 border-foreground raw-shadow rounded-none bg-card">
            <CardHeader className="p-10 pb-6 border-b-4 border-foreground">
              <CardTitle className="text-3xl font-black uppercase tracking-tighter">Upcoming Events</CardTitle>
            </CardHeader>
            <CardContent className="p-10 space-y-10">
              {[
                { title: 'Live Q&A: Next.js 15', time: 'Today, 4:00 PM', type: 'Webinar' },
                { title: 'Coding Challenge #42', time: 'Tomorrow, 10:00 AM', type: 'Challenge' },
                { title: 'Career Path Workshop', time: 'Oct 24, 2:00 PM', type: 'Workshop' },
              ].map((event) => (
                <div key={event.title} className="flex items-start gap-8 group cursor-pointer">
                  <div className="w-20 h-20 bg-foreground text-background border-2 border-foreground flex flex-col items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:rotate-12">
                    <span className="text-[10px] font-black uppercase tracking-widest">{event.time.split(',')[0]}</span>
                  </div>
                  <div className="pt-2">
                    <h4 className="text-base font-black uppercase tracking-tight group-hover:text-primary transition-colors mb-2 leading-tight">{event.title}</h4>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{event.time} • {event.type}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
