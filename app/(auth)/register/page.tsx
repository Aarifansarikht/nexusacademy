'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Github, Mail, Lock, User, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { useAppDispatch } from '@/lib/store/hooks';
import { setUser } from '@/lib/store/features/authSlice';

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = React.useState(false);

  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: RegisterFormValues) {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    dispatch(setUser({
      id: '1',
      name: data.name,
      email: data.email,
      role: 'student',
      avatar: `https://picsum.photos/seed/${data.name}/100/100`,
      enrolledCourseIds: []
    }));

    toast.success('Account created successfully!');
    router.push('/dashboard');
    setIsLoading(false);
  }

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">Create an account<span className="text-primary italic">.</span></h1>
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-muted-foreground">
          Join Nexus Academy and start your coding journey today
        </p>
      </div>

      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <div className="relative">
            <User className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
            <Input
              {...form.register('name')}
              placeholder="Full Name"
              className="pl-12 h-12 bg-background border-b-2 border-foreground rounded-none font-black uppercase tracking-widest focus-visible:ring-0 focus-visible:border-primary transition-colors text-[11px]"
            />
          </div>
          {form.formState.errors.name && (
            <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-2 ml-1">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <div className="relative">
            <Mail className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
            <Input
              {...form.register('email')}
              placeholder="Email Address"
              className="pl-12 h-12 bg-background border-b-2 border-foreground rounded-none font-black uppercase tracking-widest focus-visible:ring-0 focus-visible:border-primary transition-colors text-[11px]"
            />
          </div>
          {form.formState.errors.email && (
            <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-2 ml-1">{form.formState.errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <div className="relative">
            <Lock className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
            <Input
              {...form.register('password')}
              type="password"
              placeholder="Password"
              className="pl-12 h-12 bg-background border-b-2 border-foreground rounded-none font-black uppercase tracking-widest focus-visible:ring-0 focus-visible:border-primary transition-colors text-[11px]"
            />
          </div>
          {form.formState.errors.password && (
            <p className="text-[10px] font-black uppercase tracking-widest text-primary mt-2 ml-1">{form.formState.errors.password.message}</p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full h-14 bg-primary text-primary-foreground font-black uppercase tracking-widest text-[11px] skewed raw-shadow border-2 border-foreground hover:scale-105 transition-all"
          disabled={isLoading}
        >
          <span className="skewed-content inline-flex items-center">
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Creating account...
              </>
            ) : (
              'Create account'
            )}
          </span>
        </Button>
      </form>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t-2 border-foreground/10" />
        </div>
        <div className="relative flex justify-center text-[10px] font-black uppercase tracking-[0.3em]">
          <span className="bg-background px-4 text-muted-foreground">
            Or sign up with
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button variant="outline" className="h-12 border-2 border-foreground font-black uppercase tracking-widest text-[11px] hover:bg-primary hover:text-primary-foreground transition-all skewed raw-shadow bg-background">
          <span className="skewed-content inline-flex items-center">
            <Github className="mr-2 h-4 w-4" />
            Github
          </span>
        </Button>
        <Button variant="outline" className="h-12 border-2 border-foreground font-black uppercase tracking-widest text-[11px] hover:bg-primary hover:text-primary-foreground transition-all skewed raw-shadow bg-background">
          <span className="skewed-content inline-flex items-center">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="currentColor"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="currentColor"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="currentColor"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="currentColor"
              />
            </svg>
            Google
          </span>
        </Button>
      </div>

      <p className="text-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
        Already have an account?{' '}
        <Link href="/login" className="text-primary hover:underline transition-all">
          Sign in
        </Link>
      </p>
    </div>
  );
}
