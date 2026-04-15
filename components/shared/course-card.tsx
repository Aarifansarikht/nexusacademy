'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Clock, Users, BookOpen } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Course } from '@/lib/store/features/courseSlice';
import { useAppSelector } from '@/lib/store/hooks';

interface CourseCardProps {
  course: Course;
  className?: string;
  isDark?: boolean;
  isPopular?: boolean;
}

export function CourseCard({ course, className, isDark, isPopular = true }: CourseCardProps) {
  const { user } = useAppSelector((state) => state.auth);
  const isEnrolled = user?.enrolledCourseIds?.includes(course.id);

  return (
    <Link href={`/courses/${course.id}`}>
      <div
        className={cn(
          'group border-2 border-border overflow-hidden transition-all duration-300 flex flex-col h-full bg-card hover:shadow-2xl hover:-translate-y-1 rounded-sm',
          className
        )}
      >
        {/* Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden border-b-2 border-border">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover group-hover:scale-105 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          {isPopular && (
            <div className="absolute top-3 left-3">
              <Badge className="bg-primary text-primary-foreground border-2 border-foreground px-3 py-1 text-[9px] font-black uppercase tracking-[0.2em] rounded-none skewed">
                <span className="skewed-content">Popular</span>
              </Badge>
            </div>
          )}
          <div className="absolute bottom-3 right-3">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-md text-foreground border-2 border-foreground px-2 py-1 text-[9px] font-black uppercase tracking-[0.2em] rounded-none">
              {course.level}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-5 flex flex-col flex-grow">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-primary">— {course.category} —</span>
          </div>
          
          <h3 className="text-base md:text-lg font-black mb-3 md:mb-4 line-clamp-2 leading-none group-hover:text-primary transition-colors uppercase italic tracking-tighter">
            {course.title}
          </h3>

          <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
            <div className="w-6 h-6 md:w-8 md:h-8 overflow-hidden relative border-2 border-foreground skewed">
              <Image 
                src={course.instructor.avatar || `https://picsum.photos/seed/${course.instructor.name}/100/100`} 
                alt={course.instructor.name} 
                fill 
                className="object-cover skewed-content"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              {course.instructor.name}
            </span>
          </div>

          <div className="mt-auto pt-5 border-t-2 border-border flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[8px] md:text-[9px] font-black text-muted-foreground line-through uppercase tracking-widest opacity-50">${(course.price * 1.2).toFixed(0)}</span>
              <span className="text-xl md:text-2xl font-black text-foreground italic tracking-tighter leading-none">
                {isEnrolled ? 'ENROLLED' : `$${course.price.toFixed(0)}`}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-primary text-primary-foreground border-2 border-foreground px-3 py-1.5 skewed raw-shadow">
              <div className="skewed-content flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="text-[10px] font-black tracking-widest">{course.rating}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
