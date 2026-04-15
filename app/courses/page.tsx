'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, SlidersHorizontal, Grid, List as ListIcon, ChevronDown } from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { CourseCard } from '@/components/shared/course-card';
import { MOCK_COURSES, CATEGORIES } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  const [viewMode, setViewMode] = React.useState<'grid' | 'list'>('grid');

  const filteredCourses = MOCK_COURSES.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-12 h-1 bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Course Library</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 uppercase">
              Explore <br /> Courses<span className="text-primary">.</span>
            </h1>
            <p className="text-xl text-foreground font-bold uppercase tracking-tight max-w-2xl">
              Master modern technologies with production-ready curriculum.
            </p>
          </div>

          {/* Filters & Search */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-16 bg-card border-4 border-foreground p-6 raw-shadow sticky top-24 z-30">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="SEARCH COURSES..."
                className="pl-12 h-14 bg-background border-2 border-foreground font-black uppercase tracking-widest text-xs focus-visible:ring-primary focus-visible:ring-offset-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-3 w-full lg:w-auto overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              <Button
                variant={selectedCategory === 'All' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('All')}
                className={cn(
                  "h-14 px-8 shrink-0 font-black uppercase tracking-widest text-xs transition-all border-2 border-foreground",
                  selectedCategory === 'All' ? "bg-primary text-primary-foreground hover:bg-foreground hover:text-background" : "bg-background text-foreground hover:bg-foreground hover:text-background"
                )}
              >
                All
              </Button>
              {CATEGORIES.map((cat) => (
                <Button
                  key={cat.name}
                  variant={selectedCategory === cat.name ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={cn(
                    "h-14 px-8 shrink-0 font-black uppercase tracking-widest text-xs transition-all border-2 border-foreground",
                    selectedCategory === cat.name ? "bg-primary text-primary-foreground hover:bg-foreground hover:text-background" : "bg-background text-foreground hover:bg-foreground hover:text-background"
                  )}
                >
                  {cat.name}
                </Button>
              ))}
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <DropdownMenu>
                <DropdownMenuTrigger render={
                  <Button variant="outline" className="h-14 px-6 border-2 border-foreground font-black uppercase tracking-widest text-xs hover:bg-foreground hover:text-background transition-all">
                    <SlidersHorizontal className="mr-3 w-4 h-4" />
                    Sort
                    <ChevronDown className="ml-3 w-4 h-4" />
                  </Button>
                } />
                <DropdownMenuContent align="end" className="w-56 border-2 border-foreground rounded-none p-2">
                  <DropdownMenuItem className="font-black uppercase tracking-widest text-xs p-3 focus:bg-foreground focus:text-background cursor-pointer">Newest First</DropdownMenuItem>
                  <DropdownMenuItem className="font-black uppercase tracking-widest text-xs p-3 focus:bg-foreground focus:text-background cursor-pointer">Most Popular</DropdownMenuItem>
                  <DropdownMenuItem className="font-black uppercase tracking-widest text-xs p-3 focus:bg-foreground focus:text-background cursor-pointer">Highest Rated</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <div className="hidden sm:flex items-center bg-background border-2 border-foreground p-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode('grid')}
                  className={cn('h-10 w-10 transition-all rounded-none', viewMode === 'grid' ? 'bg-foreground text-background' : 'text-foreground hover:bg-muted')}
                >
                  <Grid className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setViewMode('list')}
                  className={cn('h-10 w-10 transition-all rounded-none', viewMode === 'list' ? 'bg-foreground text-background' : 'text-foreground hover:bg-muted')}
                >
                  <ListIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className={cn(
              'grid gap-10',
              viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : 'grid-cols-1'
            )}>
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 text-center border-4 border-foreground raw-shadow bg-card">
              <div className="w-24 h-24 bg-foreground text-background flex items-center justify-center mb-8">
                <Search className="w-10 h-10" />
              </div>
              <h3 className="text-4xl font-black mb-4 uppercase tracking-tighter">No courses found</h3>
              <p className="text-foreground font-bold uppercase tracking-tight mb-8">
                Try adjusting your filters or search query.
              </p>
              <Button
                variant="outline"
                className="h-14 px-10 border-2 border-foreground font-black uppercase tracking-widest text-xs hover:bg-foreground hover:text-background transition-all"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
