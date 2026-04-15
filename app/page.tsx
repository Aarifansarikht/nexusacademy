import { Navbar } from '@/components/layout/navbar';
import { Hero } from '@/components/sections/hero';
import { TrustedBy } from '@/components/sections/trusted-by';
import { Features } from '@/components/sections/features';
import { FeaturedCourses } from '@/components/sections/featured-courses';
import { SearchSection } from '@/components/sections/search-section';
import { Disciplines } from '@/components/sections/disciplines';
import { Mentors } from '@/components/sections/mentors';
import { Testimonials } from '@/components/sections/testimonials';
import { FAQ } from '@/components/sections/faq';
import { Pricing } from '@/components/sections/pricing';
import { ReadyToStart } from '@/components/sections/ready-to-start';
import { Newsletter } from '@/components/sections/newsletter';
import { Footer } from '@/components/layout/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background-soft soft-texture">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <FeaturedCourses />
      <SearchSection />
      <Disciplines />
      <Mentors />
      <Testimonials />
      <FAQ />
      <Pricing />
      <ReadyToStart />
      <Newsletter />
      <Footer />
    </main>
  );
}
