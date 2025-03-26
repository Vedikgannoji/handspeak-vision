
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-6 text-center py-12">
        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-handsy-quaternary rounded-full filter blur-2xl opacity-70 animate-pulse-glow dark:bg-handsy-primary/30"></div>
          <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-handsy-tertiary rounded-full filter blur-2xl opacity-70 animate-pulse-glow animation-delay-1000 dark:bg-handsy-primary/40"></div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground dark:text-white">
            Bridging <span className="text-gradient">Text & Sign</span> <br />
            Language – Fast, Smart, <br />
            Seamless!
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 mb-10 max-w-2xl mx-auto">
            Break Barriers. Speak With Your Hands.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center">
            <Link 
              to="/convert" 
              className="btn-primary hover:bg-handsy-secondary group relative overflow-hidden"
            >
              <span className="relative z-10">Try Handsy Now</span>
              <span className="absolute inset-0 bg-gradient-to-r from-handsy-primary to-handsy-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Sparkles className="ml-2 inline-block group-hover:animate-spin-slow relative z-10" size={18} />
            </Link>
            <Link to="/learn" className="btn-secondary group">
              Learn Sign Language
            </Link>
          </div>
          
          {/* Partner logos section */}
          <div className="mt-16 text-center">
            <p className="text-sm text-gray-500 mb-5 dark:text-gray-400">Powered by Visionaries, Strengthened by</p>
            <div className="flex justify-center items-center gap-8 max-w-lg mx-auto">
              <img 
                src="/lovable-uploads/cbec7d38-e1cd-4a34-8af5-bf30a6811f07.png" 
                alt="MLRIT and MLRCIE logos" 
                className="w-full max-w-sm hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
