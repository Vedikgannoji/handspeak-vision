
import React, { useEffect, useRef } from 'react';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/FeatureSection';
import TestimonialSection from '../components/TestimonialSection';
import CtaSection from '../components/CtaSection';

const Home = () => {
  const cloudsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateClouds = () => {
      if (!cloudsRef.current) return;
      
      const clouds = cloudsRef.current.children;
      for (let i = 0; i < clouds.length; i++) {
        const cloud = clouds[i] as HTMLElement;
        const speed = 0.2 + Math.random() * 0.3;
        const initialLeft = Math.random() * 100;
        
        cloud.style.setProperty('--cloud-left', `${initialLeft}%`);
        cloud.style.setProperty('--cloud-anim-duration', `${120 / speed}s`);

        // Set random vertical positions for each cloud
        cloud.style.top = `${10 + Math.random() * 40}%`;
      }
    };
    
    animateClouds();
  }, []);

  return (
    <div className="page-transition relative pt-32">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-handsy-quaternary/30 to-white dark:from-handsy-primary/10 dark:to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5"></div>
        
        {/* Cloud Animation Layer */}
        <div 
          ref={cloudsRef}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          {/* Soft Clouds */}
          <div className="cloud cloud-1 opacity-30 dark:opacity-10"></div>
          <div className="cloud cloud-2 opacity-20 dark:opacity-5"></div>
          <div className="cloud cloud-3 opacity-15 dark:opacity-8"></div>
          <div className="cloud cloud-4 opacity-25 dark:opacity-7"></div>
          <div className="cloud cloud-5 opacity-20 dark:opacity-5"></div>
        </div>
      </div>
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features - reduced spacing */}
      <div className="mt-0">
        <FeatureSection />
      </div>

      {/* Testimonials - reduced spacing */}
      <div className="mt-0">
        <TestimonialSection />
      </div>

      {/* CTA Section - reduced spacing */}
      <div className="mt-0">
        <CtaSection />
      </div>
    </div>
  );
};

export default Home;
