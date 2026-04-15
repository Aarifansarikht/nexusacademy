'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  BookOpen,
  Heart,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  Bell,
  ChevronRight,
  GraduationCap,
  Trophy,
  BarChart3,
} from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { toggleSidebar } from '@/lib/store/features/uiSlice';
import { logout } from '@/lib/store/features/authSlice';
import { cn } from '@/lib/utils';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const { isSidebarOpen } = useAppSelector((state) => state.ui);

  const sidebarLinks = [
    { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
    { name: 'My Courses', href: '/dashboard/courses', icon: BookOpen },
    { name: 'Wishlist', href: '/dashboard/wishlist', icon: Heart },
    { name: 'Achievements', href: '/dashboard/achievements', icon: Trophy },
    { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { name: 'Settings', href: '/dashboard/settings', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 bg-background border-r-4 border-foreground transition-all duration-300',
          isSidebarOpen ? 'w-64' : 'w-20'
        )}
      >
        <div className="h-full flex flex-col">
          <div className="p-6 flex items-center justify-between border-b-4 border-foreground">
            <Link href="/" className="flex items-center gap-4 overflow-hidden">
              <div className="w-10 h-10 bg-foreground flex items-center justify-center text-background font-black shrink-0 text-xl">
                N
              </div>
              {isSidebarOpen && (
                <span className="font-black text-2xl tracking-tighter uppercase whitespace-nowrap">
                  Nexus<span className="text-primary">.</span>
                </span>
              )}
            </Link>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-4">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'flex items-center gap-4 px-4 py-3 transition-all group relative border-2',
                    isActive
                      ? 'bg-foreground text-background border-foreground raw-shadow'
                      : 'border-transparent text-foreground hover:border-foreground hover:bg-foreground/5'
                  )}
                >
                  <Icon className={cn('w-5 h-5', isActive ? '' : 'group-hover:scale-110 transition-transform')} />
                  {isSidebarOpen && <span className="text-xs font-black uppercase tracking-widest">{link.name}</span>}
                  {!isSidebarOpen && (
                    <div className="absolute left-full ml-6 px-3 py-2 bg-foreground text-background text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 raw-shadow">
                      {link.name}
                    </div>
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="p-6 border-t-4 border-foreground">
            <Button
              variant="ghost"
              className={cn(
                'w-full justify-start text-primary hover:text-background hover:bg-primary rounded-none border-2 border-transparent hover:border-foreground transition-all',
                !isSidebarOpen && 'px-2'
              )}
              onClick={() => dispatch(logout())}
            >
              <LogOut className="w-5 h-5" />
              {isSidebarOpen && <span className="ml-4 text-xs font-black uppercase tracking-widest">Log out</span>}
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          'flex-1 transition-all duration-300',
          isSidebarOpen ? 'ml-64' : 'ml-20'
        )}
      >
        {/* Header */}
        <header className="h-24 bg-background border-b-4 border-foreground sticky top-0 z-40 px-8 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => dispatch(toggleSidebar())}
              className="text-foreground hover:bg-foreground hover:text-background rounded-none border-2 border-transparent hover:border-foreground transition-all h-12 w-12"
            >
              <Menu className="w-6 h-6" />
            </Button>
            <div className="hidden md:flex items-center gap-3 text-xs font-black uppercase tracking-widest text-muted-foreground">
              <span>Dashboard</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">Overview</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="SEARCH COURSES..."
                className="h-14 pl-12 pr-6 bg-background border-2 border-foreground text-xs font-black uppercase tracking-widest focus:ring-primary focus:border-primary transition-all w-80 raw-shadow"
              />
            </div>
            <Button variant="ghost" size="icon" className="relative h-12 w-12 rounded-none hover:bg-foreground hover:text-background transition-colors border-2 border-transparent hover:border-foreground">
              <Bell className="w-6 h-6" />
              <span className="absolute top-2 right-2 w-3 h-3 bg-primary border-2 border-background" />
            </Button>
            <Avatar className="h-12 w-12 border-2 border-foreground rounded-none raw-shadow">
              <AvatarImage src={user?.avatar} className="" />
              <AvatarFallback className="bg-foreground text-background font-black rounded-none">{user?.name?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="p-8 md:p-12">
          {children}
        </div>
      </main>
    </div>
  );
}
