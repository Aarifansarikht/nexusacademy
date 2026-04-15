'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  CreditCard, 
  Lock, 
  ShieldCheck, 
  ArrowLeft, 
  CheckCircle2,
  Loader2
} from 'lucide-react';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MOCK_COURSES } from '@/lib/mock-data';
import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { enrollCourse } from '@/lib/store/features/authSlice';
import { toast } from 'sonner';
import Link from 'next/link';

export default function CheckoutPage() {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const [isLoading, setIsLoading] = React.useState(false);

  const course = MOCK_COURSES.find((c) => c.id === id);

  React.useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Please login to continue checkout');
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  if (!course) {
    return <div>Course not found</div>;
  }

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    dispatch(enrollCourse(course.id));
    toast.success('Payment successful! You are now enrolled.');
    router.push(`/checkout/success?courseId=${course.id}`);
    setIsLoading(false);
  };

  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex-grow pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <Link href={`/courses/${id}`} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-muted-foreground hover:text-primary mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to course
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Payment Form */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                  Secure <span className="text-primary italic">Checkout</span>
                </h1>
                <p className="text-sm text-muted-foreground font-medium uppercase tracking-tight">
                  Complete your enrollment to start learning immediately.
                </p>
              </div>

              <form onSubmit={handlePayment} className="space-y-10 bg-card border-2 border-foreground p-8 md:p-12 raw-shadow rounded-sm">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-foreground">
                    <CreditCard className="w-5 h-5 text-primary" />
                    Payment Information
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Card Number</label>
                      <Input 
                        required
                        placeholder="0000 0000 0000 0000" 
                        className="h-14 bg-background border-b-2 border-foreground rounded-none font-black uppercase tracking-widest focus-visible:ring-0 focus-visible:border-primary transition-colors text-[11px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Card Holder</label>
                      <Input 
                        required
                        placeholder="JOHN DOE" 
                        className="h-14 bg-background border-b-2 border-foreground rounded-none font-black uppercase tracking-widest focus-visible:ring-0 focus-visible:border-primary transition-colors text-[11px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Expiry Date</label>
                      <Input 
                        required
                        placeholder="MM / YY" 
                        className="h-14 bg-background border-b-2 border-foreground rounded-none font-black uppercase tracking-widest focus-visible:ring-0 focus-visible:border-primary transition-colors text-[11px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">CVV</label>
                      <Input 
                        required
                        placeholder="123" 
                        className="h-14 bg-background border-b-2 border-foreground rounded-none font-black uppercase tracking-widest focus-visible:ring-0 focus-visible:border-primary transition-colors text-[11px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-border flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground">
                    <Lock className="w-4 h-4 text-primary" />
                    Secure SSL Encryption
                  </div>
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="w-full md:w-auto h-16 px-12 bg-primary text-primary-foreground font-black uppercase tracking-widest text-sm skewed raw-shadow border-2 border-foreground hover:scale-105 transition-all"
                  >
                    <span className="skewed-content inline-flex items-center gap-3">
                      {isLoading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        `Pay $${course.price}`
                      )}
                    </span>
                  </Button>
                </div>
              </form>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: ShieldCheck, title: 'Secure Payment', desc: '100% secure payment processing' },
                  { icon: CheckCircle2, title: 'Instant Access', desc: 'Get immediate access to course' },
                  { icon: ArrowLeft, title: 'Money Back', desc: '30-day money-back guarantee' },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center text-center space-y-3 p-6 border-2 border-border bg-card">
                    <item.icon className="w-8 h-8 text-primary" />
                    <h3 className="text-xs font-black uppercase tracking-widest">{item.title}</h3>
                    <p className="text-[10px] font-bold uppercase tracking-tight text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-8">
                <div className="bg-card border-4 border-foreground p-8 raw-shadow space-y-8">
                  <h2 className="text-2xl font-black uppercase tracking-tighter border-b-2 border-border pb-4">Order Summary</h2>
                  
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 border-2 border-foreground overflow-hidden shrink-0">
                      <Image 
                        src={course.thumbnail} 
                        alt={course.title} 
                        fill 
                        className="object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xs font-black uppercase tracking-tight leading-tight">{course.title}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">By {course.instructor.name}</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t-2 border-border">
                    <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                      <span className="text-muted-foreground">Original Price</span>
                      <span className="line-through">$199.00</span>
                    </div>
                    <div className="flex justify-between text-xs font-black uppercase tracking-widest">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="text-primary">-$110.00</span>
                    </div>
                    <div className="flex justify-between text-lg font-black uppercase tracking-tighter pt-4 border-t-2 border-border">
                      <span>Total</span>
                      <span>${course.price}.00</span>
                    </div>
                  </div>

                  <div className="bg-primary/5 p-4 border-2 border-primary/20">
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary text-center">
                      You are saving $110.00 on this order!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
