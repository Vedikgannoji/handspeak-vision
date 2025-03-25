
import React from 'react';
import { CheckCircle, Users, Zap, Monitor, Mic, Award, BookOpen, Clock, LucideIcon } from 'lucide-react';

const FeatureItem = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: LucideIcon, 
  title: string, 
  description: string 
}) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 rounded-full bg-handsy-primary/10 flex items-center justify-center shrink-0">
      <Icon className="text-handsy-primary" size={24} />
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const Features = () => {
  return (
    <div className="min-h-screen pt-20 page-transition">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Features</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how Handsy is revolutionizing sign language translation with cutting-edge technology.
          </p>
        </div>

        {/* Main Features */}
        <div className="glass-card p-8 rounded-2xl mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-8 text-gradient">Core Features</h2>
              <div className="space-y-8">
                <FeatureItem 
                  icon={Users}
                  title="200K+ Signs at Your Fingertips"
                  description="Access our extensive database for seamless communication across a vast vocabulary."
                />
                <FeatureItem 
                  icon={Zap}
                  title="Precision in Motion"
                  description="Highly accurate and natural sign translations that capture nuance and meaning."
                />
                <FeatureItem 
                  icon={Monitor}
                  title="High-Quality Visuals"
                  description="Crisp, smooth animations designed for easy understanding and clarity."
                />
                <FeatureItem 
                  icon={Mic}
                  title="Voice-to-Sign Conversion"
                  description="Simply speak, and Handsy translates your words into sign language instantly."
                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-handsy-primary/20 rounded-full filter blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-handsy-secondary/20 rounded-full filter blur-3xl"></div>
              <div className="aspect-video rounded-xl bg-gradient-to-br from-handsy-primary/5 to-handsy-quaternary/10 flex items-center justify-center overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1541996206728-9e1c3466a148?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                  alt="Feature Showcase"
                  className="object-cover w-full h-full rounded-xl opacity-75"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-card p-6 text-center max-w-xs">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-handsy-primary/20 flex items-center justify-center text-handsy-primary">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">See it in action</h3>
                    <p className="text-sm">
                      Watch how Handsy brings sign language to life
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-handsy-primary/10 flex items-center justify-center mb-4 text-handsy-primary">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Professional Certification</h3>
            <p className="text-gray-600">
              Earn recognized certificates as you progress through our comprehensive learning paths.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-handsy-primary/10 flex items-center justify-center mb-4 text-handsy-primary">
              <BookOpen size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
            <p className="text-gray-600">
              Engaging lessons with real-time feedback to help you master sign language faster.
            </p>
          </div>
          
          <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-full bg-handsy-primary/10 flex items-center justify-center mb-4 text-handsy-primary">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Real-Time Translation</h3>
            <p className="text-gray-600">
              Instant translation with minimal delay for seamless communication experiences.
            </p>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="glass-card p-8 rounded-2xl mb-16">
          <h2 className="text-2xl font-bold mb-8 text-gradient">How Handsy Compares</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-4">Features</th>
                  <th className="text-center py-4 px-4">
                    <span className="block text-handsy-primary font-bold">Handsy</span>
                    <span className="text-xs text-gray-500">Premium</span>
                  </th>
                  <th className="text-center py-4 px-4">
                    <span className="block font-medium">Other Solutions</span>
                    <span className="text-xs text-gray-500">Average</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Sign Language Database</td>
                  <td className="text-center py-4 px-4">
                    <span className="font-medium">200,000+ signs</span>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-500">
                    50,000 signs
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Translation Accuracy</td>
                  <td className="text-center py-4 px-4">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="text-green-500 mr-1" size={18} />
                      <span className="font-medium">98%</span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-500">
                    75%
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Voice-to-Sign</td>
                  <td className="text-center py-4 px-4">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="text-green-500 mr-1" size={18} />
                      <span className="font-medium">Included</span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-500">
                    Limited
                  </td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-4">Learning Resources</td>
                  <td className="text-center py-4 px-4">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="text-green-500 mr-1" size={18} />
                      <span className="font-medium">Comprehensive</span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-500">
                    Basic
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-4">Professional Certification</td>
                  <td className="text-center py-4 px-4">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="text-green-500 mr-1" size={18} />
                      <span className="font-medium">Included</span>
                    </div>
                  </td>
                  <td className="text-center py-4 px-4 text-gray-500">
                    Not Available
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-handsy-primary to-handsy-secondary rounded-2xl p-8 md:p-12 text-white text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of users who are breaking communication barriers with Handsy's revolutionary technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/convert" 
              className="bg-white text-handsy-primary px-8 py-3 rounded-full font-medium hover:bg-handsy-light hover:shadow-lg transition-all"
            >
              Get Started Now
            </a>
            <a 
              href="/learn" 
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium transition-all hover:bg-white/30 hover:shadow-md"
            >
              Explore Learning Resources
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
