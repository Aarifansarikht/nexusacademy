'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/shared/theme-toggle';
import { useAppSelector } from '@/lib/store/hooks';

export function Navbar() {
  const pathname = usePathname();
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Courses', href: '/courses' },
    { name: 'Disciplines', href: '/disciplines' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Profile', href: '/profile' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'py-3 bg-background/80 backdrop-blur-md border-b border-border' 
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center font-black text-xl skewed shadow-[2px_2px_0px_0px_var(--color-foreground)]">
            <span className="skewed-content">N</span>
          </div>
          <span className="font-black text-xl tracking-tighter text-foreground uppercase">
            NEXUS<span className="text-primary italic">ACADEMY</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                'text-[11px] font-black uppercase tracking-[0.2em] transition-colors hover:text-primary',
                pathname === link.href ? 'text-primary' : 'text-foreground'
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link 
            href="/login" 
            className="hidden sm:block text-[11px] font-black uppercase tracking-[0.2em] text-foreground hover:text-primary transition-colors"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className={cn(
              "px-4 sm:px-6 bg-primary text-primary-foreground font-black h-8 sm:h-10 flex items-center justify-center text-[9px] sm:text-[11px] uppercase tracking-widest skewed raw-shadow hover:scale-105 transition-all border-2 border-primary/30"
            )}
          >
            <span className="skewed-content">Join Now</span>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-lg w-10 h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-lg font-bold py-1',
                  pathname === link.href ? 'text-primary' : 'text-muted-foreground'
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="border-border" />
            <Link 
              href="/login" 
              className="text-lg font-bold py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sign in
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
