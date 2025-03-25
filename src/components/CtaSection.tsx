
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-handsy-primary to-handsy-secondary text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Revolution. Speak with Your Hands Today!</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Break communication barriers and discover a new way to connect. Try Handsy now.
        </p>
        <Link 
          to="/convert" 
          className="inline-flex items-center bg-white text-handsy-primary px-8 py-4 rounded-full font-medium hover:bg-handsy-light hover:shadow-lg transition-all duration-300 hover:scale-105 group"
        >
          Get Started 
          <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
        </Link>

        <div className="mt-16 text-center">
          <p className="text-sm opacity-80">Made with ❤️ by the Handsy Team</p>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
