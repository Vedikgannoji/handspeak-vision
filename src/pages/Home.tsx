
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialTicker from '../components/TestimonialTicker';
import CtaSection from '../components/CtaSection';

const Home = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <HeroSection />

      {/* Features */}
      <FeatureSection />

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-handsy-light to-white dark:from-background dark:to-background/90">
        <div className="container mx-auto px-4 md:px-6">
          <TestimonialTicker />
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default Home;
