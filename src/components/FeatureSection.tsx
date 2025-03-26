
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Monitor, Mic, Check } from 'lucide-react';

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

const additionalFeatures = [
  "Instant translation between text and sign language",
  "Support for multiple sign language variants",
  "Cross-platform compatibility",
  "Intuitive user interface",
  "Regular updates with new signs",
  "Customizable avatar appearance",
  "Offline mode for essential signs",
  "Real-time conversation mode"
];

const FeatureSection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground dark:text-white">Why Handsy is Game-Changing</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Revolutionary technology that brings a new dimension to sign language translation and learning.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card p-8 group-feature hover:bg-gradient-to-br hover:from-handsy-quaternary/50 hover:to-white dark:hover:from-handsy-primary/20 dark:hover:to-black/0 flex items-start gap-6"
            >
              <div className="feature-icon bg-handsy-primary/10 dark:bg-handsy-primary/20 shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">Everything You Need</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {additionalFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 glass-card hover:translate-y-[-5px] transition-all duration-300">
                <div className="rounded-full bg-handsy-primary/20 p-1">
                  <Check size={18} className="text-handsy-primary" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/features" 
            className="btn-primary inline-flex items-center gap-2 group hover:gap-3 transition-all duration-300"
          >
            Explore All Features <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
