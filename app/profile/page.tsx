'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  User, 
  Settings, 
  BookOpen, 
  Award, 
  Clock, 
  Star, 
  LogOut, 
  Edit3,
  Mail,
  Calendar,
  Shield,
  Play,
  ChevronRight,
  Zap,
  Target
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CourseCard } from '@/components/shared/course-card';
import { MOCK_COURSES } from '@/lib/mock-data';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function ProfilePage() {
  const user = {
    name: 'John Doe',
    email: 'john@nexus.academy',
    role: 'Student',
    joinedDate: 'January 2026',
    avatar: 'https://i.pravatar.cc/150?u=john',
    stats: [
      { label: 'Courses', value: '12', icon: BookOpen },
      { label: 'Hours', value: '156', icon: Clock },
      { label: 'Certificates', value: '4', icon: Award },
      { label: 'Points', value: '2.4k', icon: Star },
    ]
  };

  const enrolledCourses = MOCK_COURSES.slice(0, 3);

  return (
    <main className="min-h-screen flex flex-col bg-background font-sans">
      <Navbar />

      <div className="flex-grow pt-32 pb-20 relative overflow-hidden">
        {/* Background Blobs */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 pointer-events-none" />
        <div className="absolute bottom-40 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -ml-48 pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: User Info */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-card border-4 border-foreground p-8 raw-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl" />
                
                <div className="relative w-40 h-40 border-4 border-foreground mb-8 mx-auto overflow-hidden raw-shadow">
                  <Image src={user.avatar} alt={user.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>

                <div className="text-center space-y-4 mb-10">
                  <h1 className="text-4xl font-black uppercase tracking-tighter leading-none">{user.name}</h1>
                  <div className="flex items-center justify-center gap-3">
                    <Badge className="bg-primary text-primary-foreground border-none font-black text-[10px] tracking-widest px-4 py-1 uppercase">
                      {user.role}
                    </Badge>
                    <span className="text-xs font-black uppercase tracking-widest text-muted-foreground">Level 12</span>
                  </div>
                </div>

                <div className="space-y-6 border-t-4 border-foreground pt-8">
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                    <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center shrink-0">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="truncate">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                    <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center shrink-0">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <span>Joined {user.joinedDate}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest">
                    <div className="w-10 h-10 bg-foreground text-background flex items-center justify-center shrink-0">
                      <Shield className="h-5 w-5" />
                    </div>
                    <span>Verified Student</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 mt-10">
                  <Button className="h-14 bg-foreground text-background border-2 border-foreground font-black uppercase tracking-widest text-xs hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all rounded-none">
                    <Edit3 className="mr-3 h-4 w-4" />
                    Edit Profile
                  </Button>
                  <Button variant="outline" className="h-14 border-2 border-foreground font-black uppercase tracking-widest text-xs hover:bg-foreground hover:text-background transition-all rounded-none">
                    <Settings className="mr-3 h-4 w-4" />
                    Account Settings
                  </Button>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6">
                {user.stats.map((stat, i) => (
                  <div key={i} className="bg-card border-4 border-foreground p-6 raw-shadow hover:-translate-y-1 transition-all">
                    <div className="w-12 h-12 bg-primary text-primary-foreground border-2 border-foreground flex items-center justify-center mb-6">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-black tracking-tighter uppercase">{stat.value}</div>
                    <div className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Content */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Continue Learning */}
              <section className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-4xl font-black uppercase tracking-tighter">Continue Learning</h2>
                  <Button variant="link" className="text-primary font-black uppercase tracking-widest text-xs p-0 h-auto">
                    View All
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>

                <div className="bg-foreground text-background p-10 border-4 border-foreground raw-shadow relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl -mr-32 -mt-32 opacity-50" />
                  <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
                    <div className="w-full md:w-72 aspect-video border-4 border-background overflow-hidden relative shrink-0">
                      <Image src={enrolledCourses[0].image} alt={enrolledCourses[0].title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-16 h-16 bg-background text-foreground border-4 border-background flex items-center justify-center">
                          <Play className="h-8 w-8 fill-current ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 space-y-6">
                      <div>
                        <Badge className="bg-primary text-primary-foreground border-none font-black text-[10px] mb-4 px-4 py-1 uppercase tracking-widest">
                          {enrolledCourses[0].category}
                        </Badge>
                        <h3 className="text-3xl font-black uppercase tracking-tight leading-none">{enrolledCourses[0].title}</h3>
                      </div>
                      <div className="space-y-4">
                        <div className="flex justify-between text-[10px] font-black uppercase text-background/60 tracking-widest">
                          <span>Course Progress</span>
                          <span>65%</span>
                        </div>
                        <Progress value={65} className="h-2 bg-background/20 border-2 border-background" />
                      </div>
                      <Button className="h-14 bg-primary text-primary-foreground border-2 border-primary font-black uppercase tracking-widest text-xs hover:bg-background hover:text-foreground hover:border-background transition-all rounded-none px-10">
                        Resume Lesson
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Learning Goals */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card border-4 border-foreground p-8 raw-shadow space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center">
                      <Zap className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">Weekly Goal</h3>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-tight text-muted-foreground">You&apos;ve completed 4 of 5 lessons this week. Almost there!</p>
                  <Progress value={80} className="h-3 bg-foreground/10 border-2 border-foreground" />
                </div>
                <div className="bg-card border-4 border-foreground p-8 raw-shadow space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center">
                      <Target className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-black uppercase tracking-tight">Next Milestone</h3>
                  </div>
                  <p className="text-sm font-bold uppercase tracking-tight text-muted-foreground">Complete 2 more courses to earn the &quot;Master Developer&quot; badge.</p>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className={cn("w-full h-2 border border-foreground", i <= 3 ? "bg-primary" : "bg-foreground/10")} />
                    ))}
                  </div>
                </div>
              </section>

              {/* My Courses */}
              <section className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-4xl font-black uppercase tracking-tighter">My Courses</h2>
                  <div className="flex gap-4">
                    <Button variant="outline" size="sm" className="h-10 px-6 border-2 border-foreground font-black uppercase tracking-widest text-[10px] bg-foreground text-background rounded-none">In Progress</Button>
                    <Button variant="outline" size="sm" className="h-10 px-6 border-2 border-foreground font-black uppercase tracking-widest text-[10px] hover:bg-foreground hover:text-background rounded-none">Completed</Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  {enrolledCourses.slice(1).map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section className="space-y-8">
                <h2 className="text-4xl font-black uppercase tracking-tighter">Achievements</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    { title: 'Early Bird', icon: Zap },
                    { title: 'Course Master', icon: Award },
                    { title: 'Fast Learner', icon: Zap },
                    { title: 'Top Student', icon: Star },
                  ].map((achievement, i) => (
                    <div key={i} className="bg-card border-4 border-foreground p-8 text-center space-y-6 raw-shadow hover:-translate-y-2 transition-all group">
                      <div className="w-20 h-20 bg-foreground text-background border-4 border-foreground mx-auto flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all group-hover:rotate-12">
                        <achievement.icon className="h-10 w-10" />
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-foreground">{achievement.title}</div>
                    </div>
                  ))}
                </div>
              </section>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
