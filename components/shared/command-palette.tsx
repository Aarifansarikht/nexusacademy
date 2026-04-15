'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { Command } from 'cmdk';
import { Search, BookOpen, User, Settings, LayoutDashboard, Heart, ArrowRight } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { setSearchOpen } from '@/lib/store/features/uiSlice';
import { MOCK_COURSES } from '@/lib/mock-data';
import { Dialog, DialogContent } from '@/components/ui/dialog';

export function CommandPalette() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isSearchOpen } = useAppSelector((state) => state.ui);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        dispatch(setSearchOpen(!isSearchOpen));
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [isSearchOpen, dispatch]);

  const runCommand = React.useCallback(
    (command: () => void) => {
      dispatch(setSearchOpen(false));
      command();
    },
    [dispatch]
  );

  return (
    <Dialog open={isSearchOpen} onOpenChange={(open) => dispatch(setSearchOpen(open))}>
      <DialogContent className="p-0 overflow-hidden border-none bg-transparent shadow-none max-w-2xl">
        <Command className="rounded-2xl border border-border/50 bg-popover/80 backdrop-blur-xl shadow-2xl overflow-hidden">
          <div className="flex items-center border-b px-4 py-4" cmdk-input-wrapper="">
            <Search className="mr-3 h-5 w-5 shrink-0 opacity-50" />
            <Command.Input
              placeholder="Search courses, instructors, or settings... (⌘K)"
              className="flex h-10 w-full rounded-md bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
            />
          </div>
          <Command.List className="max-h-[450px] overflow-y-auto p-2 custom-scrollbar">
            <Command.Empty className="py-12 text-center text-sm">
              <div className="flex flex-col items-center gap-2">
                <Search className="h-8 w-8 text-muted-foreground/50" />
                <p className="text-muted-foreground">No results found.</p>
              </div>
            </Command.Empty>
            
            <Command.Group heading="Courses" className="px-2 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              {MOCK_COURSES.map((course) => (
                <Command.Item
                  key={course.id}
                  onSelect={() => runCommand(() => router.push(`/courses/${course.id}`))}
                  className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer hover:bg-primary/10 hover:text-primary transition-colors aria-selected:bg-primary/10 aria-selected:text-primary"
                >
                  <BookOpen className="h-5 w-5" />
                  <div className="flex-1 overflow-hidden">
                    <p className="text-sm font-bold line-clamp-1">{course.title}</p>
                    <p className="text-xs opacity-70">{course.instructor.name}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Separator className="h-px bg-border my-2" />

            <Command.Group heading="Quick Links" className="px-2 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
              <Command.Item
                onSelect={() => runCommand(() => router.push('/dashboard'))}
                className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <LayoutDashboard className="h-5 w-5" />
                <span className="text-sm font-bold">Dashboard</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push('/dashboard/courses'))}
                className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <BookOpen className="h-5 w-5" />
                <span className="text-sm font-bold">My Courses</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push('/dashboard/wishlist'))}
                className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <Heart className="h-5 w-5" />
                <span className="text-sm font-bold">Wishlist</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => router.push('/dashboard/settings'))}
                className="flex items-center gap-3 px-3 py-3 rounded-xl cursor-pointer aria-selected:bg-primary/10 aria-selected:text-primary"
              >
                <Settings className="h-5 w-5" />
                <span className="text-sm font-bold">Settings</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
          
          <div className="flex items-center justify-between px-4 py-3 border-t bg-muted/30 text-[10px] text-muted-foreground font-medium">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-background border border-border shadow-sm">↵</kbd>
                to select
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 rounded bg-background border border-border shadow-sm">↑↓</kbd>
                to navigate
              </span>
            </div>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-background border border-border shadow-sm">esc</kbd>
              to close
            </span>
          </div>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
