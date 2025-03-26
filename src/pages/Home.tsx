
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import CtaSection from '../components/CtaSection';

const Home = () => {
  return (
    <div className="page-transition">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-handsy-quaternary/30 to-white dark:from-handsy-primary/10 dark:to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
      </div>
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features - reduced top margin */}
      <div className="mt-0">
        <FeatureSection />
      </div>

      {/* Testimonials - reduced top margin */}
      <div className="mt-0">
        <TestimonialSection />
      </div>

      {/* CTA Section - reduced top margin */}
      <div className="mt-0">
        <CtaSection />
      </div>
    </div>
  );
};

export default Home;
