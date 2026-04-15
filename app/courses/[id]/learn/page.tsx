'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Play, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Menu, 
  X, 
  MessageSquare, 
  FileText, 
  Settings,
  ArrowLeft,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { MOCK_COURSES } from '@/lib/mock-data';
import Link from 'next/link';
import { useAppSelector } from '@/lib/store/hooks';

export default function LearnPage() {
  const { id } = useParams();
  const router = useRouter();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const course = MOCK_COURSES.find((c) => c.id === id);
  
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);
  const [currentModuleIdx, setCurrentModuleIdx] = React.useState(0);
  const [currentLessonIdx, setCurrentLessonIdx] = React.useState(0);
  const [completedLessons, setCompletedLessons] = React.useState<string[]>([]);
  const [isPlaying, setIsPlaying] = React.useState(false);

  const curriculum = [
    {
      title: 'Module 1: Getting Started',
      lessons: [
        { id: 'm1l1', title: 'Introduction to the course', duration: '10:00', type: 'video' },
        { id: 'm1l2', title: 'Setting up your environment', duration: '15:30', type: 'video' },
        { id: 'm1l3', title: 'Project overview', duration: '08:45', type: 'video' },
      ],
    },
    {
      title: 'Module 2: Core Concepts',
      lessons: [
        { id: 'm2l1', title: 'Understanding the fundamentals', duration: '25:00', type: 'video' },
        { id: 'm2l2', title: 'Deep dive into architecture', duration: '32:15', type: 'video' },
        { id: 'm2l3', title: 'Working with data', duration: '28:30', type: 'video' },
      ],
    },
    {
      title: 'Module 3: Advanced Techniques',
      lessons: [
        { id: 'm3l1', title: 'Performance optimization', duration: '45:00', type: 'video' },
        { id: 'm3l2', title: 'Security best practices', duration: '38:20', type: 'video' },
        { id: 'm3l3', title: 'Testing and deployment', duration: '22:10', type: 'video' },
      ],
    },
  ];

  const currentLesson = curriculum[currentModuleIdx].lessons[currentLessonIdx];

  React.useEffect(() => {
    setIsPlaying(false);
  }, [currentLessonIdx, currentModuleIdx]);

  React.useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    
    const isEnrolled = user?.enrolledCourseIds?.includes(id as string);
    if (!isEnrolled) {
      router.push(`/checkout/${id}`);
    }
  }, [isAuthenticated, user, id, router]);

  if (!course) {
    return <div>Course not found</div>;
  }

  const totalLessons = curriculum.reduce((acc, mod) => acc + mod.lessons.length, 0);
  const progress = (completedLessons.length / totalLessons) * 100;

  const toggleLessonCompletion = (lessonId: string) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) ? prev.filter(id => id !== lessonId) : [...prev, lessonId]
    );
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden font-sans">
      {/* Sidebar */}
      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <motion.aside
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 350, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            className="h-full border-r-2 border-border flex flex-col bg-card relative z-20 shadow-xl"
          >
            <div className="p-6 border-b-2 border-border flex items-center justify-between">
              <h2 className="font-black text-xl uppercase tracking-tighter">Course Content</h2>
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(false)} className="h-10 w-10 rounded-none hover:bg-primary hover:text-primary-foreground transition-colors">
                <X className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-6 border-b-2 border-border bg-primary/5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase text-muted-foreground tracking-[0.2em]">Progress</span>
                <span className="text-sm font-black text-primary">{Math.round(progress)}%</span>
              </div>
              <Progress value={progress} className="h-2 bg-border/50 border-none" />
            </div>

            <ScrollArea className="flex-1 h-full">
              <div className="p-6 space-y-8">
                {curriculum.map((module, mIdx) => (
                  <div key={mIdx} className="space-y-4">
                    <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground px-2">{module.title}</h3>
                    <div className="space-y-2">
                      {module.lessons.map((lesson, lIdx) => {
                        const isActive = currentModuleIdx === mIdx && currentLessonIdx === lIdx;
                        const isCompleted = completedLessons.includes(lesson.id);
                        
                        return (
                          <button
                            key={lesson.id}
                            onClick={() => {
                              setCurrentModuleIdx(mIdx);
                              setCurrentLessonIdx(lIdx);
                            }}
                            className={cn(
                              "w-full flex items-start gap-4 p-4 text-left transition-all border-2",
                              isActive ? "bg-primary text-primary-foreground border-primary shadow-lg" : "border-transparent hover:border-border hover:bg-muted/50",
                              isCompleted && !isActive && "text-muted-foreground opacity-70"
                            )}
                          >
                            <div className="mt-1">
                              {isCompleted ? (
                                <CheckCircle2 className={cn("h-5 w-5", isActive ? "text-primary-foreground" : "text-primary")} />
                              ) : (
                                <div className={cn("h-5 w-5 border-2", isActive ? "border-primary-foreground" : "border-border")} />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-black uppercase tracking-tight leading-tight line-clamp-2">{lesson.title}</p>
                              <div className="flex items-center gap-2 mt-2 opacity-80">
                                <Play className="h-3 w-3" />
                                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{lesson.duration}</span>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 flex flex-col relative overflow-hidden bg-background">
        {/* Top Bar */}
        <header className="h-20 border-b-2 border-border flex items-center justify-between px-8 bg-background text-foreground z-10">
          <div className="flex items-center gap-6">
            {!isSidebarOpen && (
              <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(true)} className="h-12 w-12 text-foreground hover:bg-muted rounded-none border-2 border-transparent hover:border-border transition-all">
                <Menu className="h-6 w-6" />
              </Button>
            )}
            <Link href={`/courses/${id}`} className="flex items-center gap-3 group text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-2 transition-transform" />
              <span className="font-black text-xs uppercase tracking-widest hidden sm:inline-block">Back to course</span>
            </Link>
          </div>

          <div className="flex-1 text-center px-6">
            <h1 className="font-black text-sm uppercase tracking-widest line-clamp-1">{course.title}</h1>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="h-12 px-6 border-2 border-border font-black uppercase tracking-widest text-xs hover:bg-muted transition-all">
              Resources
            </Button>
            <Button size="sm" className="h-12 px-6 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs border-2 border-primary hover:scale-105 transition-all">
              Finish Lesson
            </Button>
          </div>
        </header>

          {/* Video Area */}
        <div className="flex-1 relative flex items-center justify-center overflow-hidden p-8">
          <div className="absolute inset-0 pixel-grid opacity-20 pointer-events-none" />
          
          {/* Video Player */}
          <div className="w-full max-w-6xl aspect-video bg-foreground border-4 border-foreground overflow-hidden raw-shadow relative group">
            {isPlaying ? (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Course Video"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsPlaying(true)}
                  className="w-24 h-24 bg-primary text-primary-foreground flex items-center justify-center border-4 border-foreground raw-shadow z-10"
                >
                  <Play className="h-10 w-10 fill-current ml-2" />
                </motion.button>
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover opacity-50"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            {/* Video Controls Overlay (Only visible when not playing or on hover) */}
            {!isPlaying && (
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-foreground via-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="space-y-6">
                  <Progress value={0} className="h-2 bg-background/20 border-2 border-background" />
                  <div className="flex items-center justify-between text-background">
                    <div className="flex items-center gap-8">
                      <Play className="h-6 w-6 cursor-pointer hover:text-primary transition-colors fill-current" onClick={() => setIsPlaying(true)} />
                      <div className="flex items-center gap-6">
                        <ChevronLeft className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
                        <ChevronRight className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-background/60">00:00 / {currentLesson.duration}</span>
                    </div>
                    <div className="flex items-center gap-8">
                      <MessageSquare className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
                      <Settings className="h-6 w-6 cursor-pointer hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Lesson Info */}
        <div className="p-10 border-t-2 border-border bg-background text-foreground z-10">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-primary text-primary-foreground border-none font-black text-[10px] uppercase tracking-widest px-4 py-1.5">
                  Lesson {currentLessonIdx + 1}
                </Badge>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{curriculum[currentModuleIdx].title}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">{currentLesson.title}</h2>
            </div>
            
            <div className="flex items-center gap-6">
              <Button 
                variant="outline" 
                className="h-14 px-8 border-2 border-border font-black uppercase tracking-widest text-xs hover:bg-muted transition-all"
                disabled={currentModuleIdx === 0 && currentLessonIdx === 0}
                onClick={() => {
                  if (currentLessonIdx > 0) {
                    setCurrentLessonIdx(currentLessonIdx - 1);
                  } else if (currentModuleIdx > 0) {
                    setCurrentModuleIdx(currentModuleIdx - 1);
                    setCurrentLessonIdx(curriculum[currentModuleIdx - 1].lessons.length - 1);
                  }
                }}
              >
                Previous
              </Button>
              <Button 
                className="h-14 px-10 bg-primary text-primary-foreground font-black uppercase tracking-widest text-xs border-2 border-primary hover:scale-105 transition-all"
                onClick={() => {
                  toggleLessonCompletion(currentLesson.id);
                  if (currentLessonIdx < curriculum[currentModuleIdx].lessons.length - 1) {
                    setCurrentLessonIdx(currentLessonIdx + 1);
                  } else if (currentModuleIdx < curriculum.length - 1) {
                    setCurrentModuleIdx(currentModuleIdx + 1);
                    setCurrentLessonIdx(0);
                  }
                }}
              >
                Next Lesson
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
