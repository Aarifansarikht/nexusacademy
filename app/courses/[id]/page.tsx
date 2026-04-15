'use client';

import * as React from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Star,
  Users,
  Clock,
  BookOpen,
  CheckCircle2,
  Play,
  Share2,
  Heart,
  ChevronRight,
  Globe,
  Award,
  BarChart,
  Calendar,
  Smartphone,
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { MOCK_COURSES } from '@/lib/mock-data';
import { toast } from 'sonner';
import Link from 'next/link';
import { useAppSelector } from '@/lib/store/hooks';

export default function CourseDetailPage() {
  const { id } = useParams();
  const { user } = useAppSelector((state) => state.auth);
  const course = MOCK_COURSES.find((c) => c.id === id);

  if (!course) {
    return <div>Course not found</div>;
  }

  const isEnrolled = user?.enrolledCourseIds?.includes(course.id);

  const curriculum = [
    {
      title: 'Module 1: Getting Started',
      lessons: [
        { title: 'Introduction to the course', duration: '10:00', preview: true },
        { title: 'Setting up your environment', duration: '15:30', preview: true },
        { title: 'Project overview', duration: '08:45', preview: false },
      ],
    },
    {
      title: 'Module 2: Core Concepts',
      lessons: [
        { title: 'Understanding the fundamentals', duration: '25:00', preview: false },
        { title: 'Deep dive into architecture', duration: '32:15', preview: false },
        { title: 'Working with data', duration: '28:30', preview: false },
      ],
    },
    {
      title: 'Module 3: Advanced Techniques',
      lessons: [
        { title: 'Performance optimization', duration: '45:00', preview: false },
        { title: 'Security best practices', duration: '38:20', preview: false },
        { title: 'Testing and deployment', duration: '22:10', preview: false },
      ],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <div className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-foreground text-background py-20 md:py-32 relative overflow-hidden border-b-4 border-background">
          <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none" />
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Badge className="bg-primary text-primary-foreground border-none font-black uppercase tracking-widest px-4 py-1.5 text-[10px]">
                    {course.category}
                  </Badge>
                  <Badge variant="outline" className="text-background border-2 border-background font-black uppercase tracking-widest px-4 py-1.5 text-[10px]">
                    {course.level}
                  </Badge>
                </div>
                <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                  {course.title}
                </h1>
                <p className="text-xl text-background/80 font-bold uppercase tracking-tight max-w-xl">
                  {course.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-8 text-xs font-black uppercase tracking-widest">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-primary fill-current" />
                    <span className="text-primary">{course.rating}</span>
                    <span className="text-background/60">({course.studentsCount.toLocaleString()} RATINGS)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-background/60" />
                    <span>{course.studentsCount.toLocaleString()}</span>
                    <span className="text-background/60">STUDENTS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-background/60" />
                    <span className="text-background/60">EN, ES, FR</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="relative w-12 h-12 border-2 border-background overflow-hidden">
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
                  <p className="text-xs font-black uppercase tracking-widest text-background/80">
                    CREATED BY <span className="text-primary underline cursor-pointer">{course.instructor.name}</span>
                  </p>
                </div>
              </div>

              <div className="relative hidden lg:block">
                <div className="aspect-video relative group cursor-pointer border-4 border-background raw-shadow bg-background">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center group-hover:bg-foreground/20 transition-all">
                    <div className="w-24 h-24 bg-background text-foreground flex items-center justify-center group-hover:scale-110 transition-transform border-4 border-background">
                      <Play className="w-10 h-10 fill-current ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-16">
                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="w-full justify-start bg-transparent border-b-4 border-border rounded-none h-16 p-0 gap-10">
                    <TabsTrigger
                      value="overview"
                      className="rounded-none border-b-4 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 h-full font-black uppercase tracking-widest text-sm"
                    >
                      Overview
                    </TabsTrigger>
                    <TabsTrigger
                      value="curriculum"
                      className="rounded-none border-b-4 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 h-full font-black uppercase tracking-widest text-sm"
                    >
                      Curriculum
                    </TabsTrigger>
                    <TabsTrigger
                      value="instructor"
                      className="rounded-none border-b-4 border-transparent data-[state=active]:border-foreground data-[state=active]:bg-transparent px-0 h-full font-black uppercase tracking-widest text-sm"
                    >
                      Instructor
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="overview" className="pt-12 space-y-16">
                    <div className="space-y-8">
                      <h3 className="text-4xl font-black uppercase tracking-tighter">What you&apos;ll learn</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                          'Master core syntax and advanced concepts',
                          'Build scalable and maintainable applications',
                          'Implement complex data structures and algorithms',
                          'Write clean, efficient, and testable code',
                          'Understand memory management and performance',
                          'Deploy production-ready apps with confidence',
                        ].map((item) => (
                          <div key={item} className="flex items-start gap-4">
                            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                            <span className="text-foreground font-bold uppercase tracking-tight text-sm">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-8">
                      <h3 className="text-4xl font-black uppercase tracking-tighter">Requirements</h3>
                      <ul className="list-none space-y-4 text-foreground font-bold uppercase tracking-tight text-sm">
                        <li className="flex items-center gap-4"><div className="w-2 h-2 bg-primary" /> Basic understanding of computer science concepts</li>
                        <li className="flex items-center gap-4"><div className="w-2 h-2 bg-primary" /> A computer with development environment installed</li>
                        <li className="flex items-center gap-4"><div className="w-2 h-2 bg-primary" /> Willingness to learn and build cool things</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="curriculum" className="pt-12">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
                      <h3 className="text-4xl font-black uppercase tracking-tighter">Course Content</h3>
                      <div className="text-xs font-black uppercase tracking-widest text-muted-foreground">
                        {curriculum.length} SECTIONS • {course.lessonsCount} LESSONS • {course.duration} TOTAL
                      </div>
                    </div>
                    <Accordion className="w-full space-y-6">
                      {curriculum.map((section, idx) => (
                        <AccordionItem key={idx} value={`section-${idx}`} className="border-2 border-foreground rounded-none px-8 bg-card raw-shadow">
                          <AccordionTrigger className="hover:no-underline py-6">
                            <div className="flex flex-col items-start text-left">
                              <span className="font-black text-xl uppercase tracking-tight">{section.title}</span>
                              <span className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-2">
                                {section.lessons.length} LESSONS
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-6 space-y-4">
                            {section.lessons.map((lesson, lIdx) => (
                              <div key={lIdx} className="flex items-center justify-between group cursor-pointer p-4 hover:bg-foreground hover:text-background transition-colors border-2 border-transparent hover:border-foreground">
                                <div className="flex items-center gap-4">
                                  <div className="w-8 h-8 bg-foreground text-background flex items-center justify-center group-hover:bg-background group-hover:text-foreground transition-colors">
                                    <Play className="w-3 h-3 fill-current" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-black uppercase tracking-tight">{lesson.title}</p>
                                    <p className="text-[10px] font-bold uppercase tracking-widest mt-1 opacity-60">{lesson.duration}</p>
                                  </div>
                                </div>
                                {lesson.preview && (
                                  <span className="text-[10px] font-black text-primary bg-primary/10 px-3 py-1 uppercase tracking-widest">Preview</span>
                                )}
                              </div>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>

                  <TabsContent value="instructor" className="pt-12">
                    <div className="flex flex-col md:flex-row gap-10 items-start">
                      <div className="w-40 h-40 overflow-hidden relative border-4 border-foreground shrink-0 raw-shadow">
                        <Image 
                          src={course.instructor.avatar || `https://picsum.photos/seed/${course.instructor.name}/200/200`} 
                          alt={course.instructor.name} 
                          fill 
                          className="object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-4xl font-black uppercase tracking-tighter mb-2">{course.instructor.name}</h3>
                          <p className="text-primary font-black uppercase tracking-widest text-xs">Senior Software Architect & Educator</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-8 text-xs font-black uppercase tracking-widest text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-primary fill-current" />
                            <span className="text-foreground">4.9 RATING</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span className="text-foreground">150K+ STUDENTS</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Play className="w-4 h-4" />
                            <span className="text-foreground">12 COURSES</span>
                          </div>
                        </div>
                        <p className="text-sm font-bold uppercase tracking-tight text-foreground leading-relaxed">
                          {course.instructor.name} is a world-renowned expert in software development with over 15 years of experience building scalable systems at top tech companies. He has dedicated his career to teaching millions of students how to code effectively.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* Sticky Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-8">
                  <div className="bg-card border-4 border-foreground p-8 raw-shadow space-y-8">
                    <div className="aspect-video overflow-hidden relative mb-6 lg:hidden border-4 border-foreground">
                      <Image src={course.thumbnail} alt={course.title} fill className="object-cover" referrerPolicy="no-referrer" />
                      <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center">
                        <Play className="w-12 h-12 text-background fill-current" />
                      </div>
                    </div>

                    <div className="flex items-baseline gap-3">
                      <span className="text-5xl font-black tracking-tighter">${course.price}</span>
                      <span className="text-muted-foreground line-through text-lg font-black">$199</span>
                      <Badge className="bg-primary text-primary-foreground border-none ml-2 text-[10px] font-black uppercase tracking-widest px-3 py-1">60% OFF</Badge>
                    </div>

                    <div className="space-y-4">
                      {isEnrolled ? (
                        <Link href={`/courses/${id}/learn`}>
                          <Button className="w-full h-16 font-black uppercase tracking-widest text-sm bg-green-500 text-white border-2 border-green-500 hover:bg-background hover:text-green-500 transition-all">
                            Go to Course
                          </Button>
                        </Link>
                      ) : (
                        <Link href={`/checkout/${id}`}>
                          <Button className="w-full h-16 font-black uppercase tracking-widest text-sm bg-primary text-primary-foreground border-2 border-primary hover:bg-background hover:text-foreground transition-all">
                            Enroll Now
                          </Button>
                        </Link>
                      )}
                      <Button variant="outline" className="w-full h-16 font-black uppercase tracking-widest text-sm border-2 border-foreground hover:bg-foreground hover:text-background transition-all">
                        Add to Wishlist
                      </Button>
                    </div>

                    <p className="text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                      30-Day Money-Back Guarantee
                    </p>

                    <div className="space-y-6 pt-6 border-t-2 border-border">
                      <h4 className="font-black text-xs uppercase tracking-[0.2em] text-foreground">This course includes:</h4>
                      <div className="space-y-4">
                        {[
                          { icon: Clock, text: `${course.duration} on-demand video` },
                          { icon: BookOpen, text: `${course.lessonsCount} downloadable resources` },
                          { icon: BarChart, text: 'Full lifetime access' },
                          { icon: Smartphone, text: 'Access on mobile and TV' },
                          { icon: Award, text: 'Certificate of completion' },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-4 text-xs font-bold uppercase tracking-tight text-muted-foreground">
                            <item.icon className="w-4 h-4 text-primary" />
                            <span>{item.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-6 border-t-2 border-border">
                      <Button variant="ghost" size="sm" className="text-[10px] font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
                        <Share2 className="mr-2 w-4 h-4" />
                        Share
                      </Button>
                      <Button variant="ghost" size="sm" className="text-[10px] font-black uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors">
                        <Heart className="mr-2 w-4 h-4" />
                        Wishlist
                      </Button>
                    </div>
                  </div>

                  <div className="bg-foreground text-background border-4 border-background p-8 text-center space-y-4 raw-shadow">
                    <h4 className="font-black text-lg uppercase tracking-tight">For Enterprise</h4>
                    <p className="text-xs font-bold uppercase tracking-tight text-background/80">
                      Get this course and 10,000+ more for your team.
                    </p>
                    <Button variant="link" className="text-primary font-black uppercase tracking-widest text-xs p-0 h-auto hover:text-background transition-colors">
                      Learn more
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

