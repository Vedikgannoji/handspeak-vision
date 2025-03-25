
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-handsy-tertiary/40 to-handsy-quaternary/40 dark:from-handsy-primary/20 dark:to-background/90">
      <div className="container mx-auto px-4 md:px-6 text-center py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground dark:text-white mt-4">
            Bridging <span className="text-gradient">Text & Sign</span> <br />
            Language – Fast, Smart, <br />
            Seamless!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 mb-10 max-w-2xl mx-auto">
            Break Barriers. Speak With Your Hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center">
            <Link to="/convert" className="btn-primary hover:bg-handsy-secondary">
              Try Handsy Now
            </Link>
            <Link to="/learn" className="btn-secondary">
              Learn Sign Language
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
