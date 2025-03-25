
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Monitor, Mic, Award } from 'lucide-react';

const Home = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="pt-32 pb-20 wave-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <div className="inline-block glass-card px-3 py-1 mb-4">
                <span className="text-sm font-medium text-handsy-primary">Introducing Handsy</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Bridging Text & Sign Language – 
                <span className="text-gradient"> Fast, Smart, Seamless!</span>
              </h1>
              <p className="text-lg text-gray-600 md:pr-10">
                Break Barriers. Speak With Your Hands. Transform text and voice into fluid sign language with our groundbreaking technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/convert" className="btn-primary animate-pulse-glow">
                  Get Started
                </Link>
                <Link to="/learn" className="btn-secondary">
                  Learn Sign Language
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-handsy-primary/20 rounded-full filter blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-handsy-secondary/20 rounded-full filter blur-3xl"></div>
                <div className="glass-card p-4 md:p-8 rounded-2xl relative overflow-hidden floating-object">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-handsy-primary/5 to-handsy-quaternary/10 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-handsy-primary/10 flex items-center justify-center">
                        <svg 
                          className="w-10 h-10 text-handsy-primary" 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg>
                      </div>
                      <p className="text-handsy-primary font-medium">
                        Demo Video Preview
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        Click to see Handsy in action
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-handsy-light to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Handsy is Game-Changing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Revolutionary technology that brings a new dimension to sign language translation and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-handsy-primary/10 flex items-center justify-center mb-6 group-hover:bg-handsy-primary/20 transition-colors">
                <Users className="text-handsy-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">200K+ Signs at Your Fingertips</h3>
              <p className="text-gray-600">
                Access our extensive database for seamless communication across a vast vocabulary.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-handsy-primary/10 flex items-center justify-center mb-6 group-hover:bg-handsy-primary/20 transition-colors">
                <Zap className="text-handsy-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Precision in Motion</h3>
              <p className="text-gray-600">
                Highly accurate and natural sign translations that capture nuance and meaning.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-handsy-primary/10 flex items-center justify-center mb-6 group-hover:bg-handsy-primary/20 transition-colors">
                <Monitor className="text-handsy-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">High-Quality Visuals</h3>
              <p className="text-gray-600">
                Crisp, smooth animations designed for easy understanding and clarity.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="glass-card p-6 hover:shadow-xl transition-all duration-300 group">
              <div className="w-14 h-14 rounded-full bg-handsy-primary/10 flex items-center justify-center mb-6 group-hover:bg-handsy-primary/20 transition-colors">
                <Mic className="text-handsy-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Voice-to-Sign Conversion</h3>
              <p className="text-gray-600">
                Simply speak, and Handsy translates your words into sign language instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-handsy-tertiary/10 to-handsy-quaternary/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Stories. Real Impact.</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how Handsy is transforming communication with 200K+ signs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-handsy-quaternary flex items-center justify-center text-handsy-primary font-bold">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">John Doe</h4>
                  <p className="text-sm text-gray-600">Teacher</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Handsy has revolutionized how I teach students with hearing impairments. The translation accuracy is remarkable, and it's opened up new avenues for inclusive education."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star}
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-handsy-quaternary flex items-center justify-center text-handsy-primary font-bold">
                  JS
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Jane Smith</h4>
                  <p className="text-sm text-gray-600">Healthcare Worker</p>
                </div>
              </div>
              <p className="text-gray-600">
                "In emergency medical situations, clear communication is vital. Handsy helps me communicate effectively with patients who use sign language, making healthcare more accessible."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg 
                    key={star}
                    className="w-5 h-5 text-yellow-400" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="glass-card p-6 rounded-2xl hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-handsy-quaternary flex items-center justify-center text-handsy-primary font-bold">
                  AR
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Alex Rodriguez</h4>
                  <p className="text-sm text-gray-600">Student</p>
                </div>
              </div>
              <p className="text-gray-600">
                "As someone learning sign language, Handsy has been invaluable. The interactive lessons and real-time feedback have accelerated my progress tremendously."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star, idx) => (
                  <svg 
                    key={star}
                    className={`w-5 h-5 ${idx < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-handsy-primary to-handsy-secondary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Revolution. Speak with Your Hands Today!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Break communication barriers and discover a new way to connect. Try Handsy now.
          </p>
          <Link 
            to="/convert" 
            className="inline-flex items-center bg-white text-handsy-primary px-8 py-4 rounded-full font-medium hover:bg-handsy-light hover:shadow-lg transition-all duration-300 group"
          >
            Get Started 
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
