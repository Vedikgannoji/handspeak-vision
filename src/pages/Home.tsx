
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Monitor, Mic, Award, Check, Sparkles } from 'lucide-react';

const Home = () => {
  return (
    <div className="page-transition">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-handsy-tertiary/40 to-handsy-quaternary/40">
        <div className="container mx-auto px-4 md:px-6 text-center py-16 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6 animate-float">
              <Sparkles className="text-handsy-primary h-4 w-4" />
              <span className="text-sm font-medium text-indigo-900">Revolutionary Sign Language Technology</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-indigo-900 mt-4">
              Bridging <span className="text-gradient">Text & Sign</span> <br />
              Language – Fast, Smart, <br />
              Seamless!
            </h1>
            <p className="text-lg text-gray-600 mt-6 mb-10 max-w-2xl mx-auto">
              Break Barriers. Speak With Your Hands.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center">
              <Link to="/convert" className="btn-primary bg-indigo-900 hover:bg-indigo-800">
                Try Handsy Now
              </Link>
              <Link to="/learn" className="btn-secondary">
                Learn Sign Language
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-28 bg-gradient-to-b from-handsy-quaternary/30 to-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Why Handsy is Game-Changing</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Revolutionary technology that brings a new dimension to sign language translation and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Feature 1 */}
            <div className="feature-card">
              <div className="feature-icon bg-handsy-primary/10 group-hover:bg-handsy-primary/20">
                <Users className="text-handsy-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-handsy-primary transition-colors">200K+ Signs at Your Fingertips</h3>
              <p className="text-gray-600">
                Access our extensive database for seamless communication across a vast vocabulary.
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all">
                <Link to="/features" className="inline-flex items-center text-handsy-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="feature-card">
              <div className="feature-icon bg-handsy-primary/10 group-hover:bg-handsy-primary/20">
                <Zap className="text-handsy-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-handsy-primary transition-colors">Precision in Motion</h3>
              <p className="text-gray-600">
                Highly accurate and natural sign translations that capture nuance and meaning.
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all">
                <Link to="/features" className="inline-flex items-center text-handsy-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="feature-card">
              <div className="feature-icon bg-handsy-primary/10 group-hover:bg-handsy-primary/20">
                <Monitor className="text-handsy-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-handsy-primary transition-colors">High-Quality Visuals</h3>
              <p className="text-gray-600">
                Crisp, smooth animations designed for easy understanding and clarity.
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all">
                <Link to="/features" className="inline-flex items-center text-handsy-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="feature-card">
              <div className="feature-icon bg-handsy-primary/10 group-hover:bg-handsy-primary/20">
                <Mic className="text-handsy-primary" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-handsy-primary transition-colors">Voice-to-Sign Conversion</h3>
              <p className="text-gray-600">
                Simply speak, and Handsy translates your words into sign language instantly.
              </p>
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all">
                <Link to="/features" className="inline-flex items-center text-handsy-primary">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 bg-gradient-to-br from-handsy-light to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Real Stories. Real Impact.</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              See how Handsy is transforming communication with 200K+ signs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-handsy-quaternary flex items-center justify-center text-handsy-primary font-bold text-xl">
                  JD
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-xl">John Doe</h4>
                  <p className="text-sm text-gray-600">Teacher</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "Handsy has revolutionized how I teach students with hearing impairments. The translation accuracy is remarkable, and it's opened up new avenues for inclusive education."
              </p>
              <div className="flex">
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
            <div className="testimonial-card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-handsy-quaternary flex items-center justify-center text-handsy-primary font-bold text-xl">
                  JS
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-xl">Jane Smith</h4>
                  <p className="text-sm text-gray-600">Healthcare Worker</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "In emergency medical situations, clear communication is vital. Handsy helps me communicate effectively with patients who use sign language, making healthcare more accessible."
              </p>
              <div className="flex">
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
            <div className="testimonial-card">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full bg-handsy-quaternary flex items-center justify-center text-handsy-primary font-bold text-xl">
                  AR
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-xl">Alex Rodriguez</h4>
                  <p className="text-sm text-gray-600">Student</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "As someone learning sign language, Handsy has been invaluable. The interactive lessons and real-time feedback have accelerated my progress tremendously."
              </p>
              <div className="flex">
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
            className="inline-flex items-center bg-white text-handsy-primary px-8 py-4 rounded-full font-medium hover:bg-handsy-light hover:shadow-lg transition-all duration-300 hover:scale-105 group"
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
