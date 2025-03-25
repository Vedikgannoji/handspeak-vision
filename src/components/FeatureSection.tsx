
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Monitor, Mic } from 'lucide-react';

const features = [
  {
    icon: <Users className="text-handsy-primary" size={28} />,
    title: "200K+ Signs at Your Fingertips",
    description: "Access our extensive database for seamless communication across a vast vocabulary."
  },
  {
    icon: <Zap className="text-handsy-primary" size={28} />,
    title: "Precision in Motion",
    description: "Highly accurate and natural sign translations that capture nuance and meaning."
  },
  {
    icon: <Monitor className="text-handsy-primary" size={28} />,
    title: "High-Quality Visuals",
    description: "Crisp, smooth animations designed for easy understanding and clarity."
  },
  {
    icon: <Mic className="text-handsy-primary" size={28} />,
    title: "Voice-to-Sign Conversion",
    description: "Simply speak, and Handsy translates your words into sign language instantly."
  }
];

const FeatureSection = () => {
  return (
    <section className="py-28 bg-gradient-to-b from-handsy-quaternary/30 to-white dark:from-handsy-primary/10 dark:to-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">Why Handsy is Game-Changing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Revolutionary technology that brings a new dimension to sign language translation and learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="feature-card group-feature hover:bg-gradient-to-br hover:from-handsy-quaternary/50 hover:to-white dark:hover:from-handsy-primary/20 dark:hover:to-black/0">
              <div className="feature-icon bg-handsy-primary/10 dark:bg-handsy-primary/20">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
              <div className="mt-6 opacity-0 group-feature-hover:opacity-100 transition-all">
                <Link to="/features" className="inline-flex items-center text-handsy-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
