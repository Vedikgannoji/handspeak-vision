
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="min-h-screen pt-20 page-transition">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">How Handsy Works</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Understand the technology and process behind our revolutionary sign language translation system.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mb-20">
          <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 w-1 bg-handsy-quaternary/30 h-full transform -translate-x-1/2 hidden md:block"></div>
            
            {/* Step 1 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Input: Text or Voice</h3>
                <p className="text-gray-600 mb-4">
                  Begin by entering text directly or using the voice recognition feature to convert speech to text. Our system processes natural language in real-time.
                </p>
                <div className="glass-card p-4 rounded-xl inline-block">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary">
                      1
                    </div>
                    <span className="font-medium">Text/Voice Input</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 relative order-1 md:order-2">
                <div className="w-14 h-14 rounded-full bg-handsy-primary/20 border-4 border-white flex items-center justify-center absolute left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-1/2 z-20 text-handsy-primary font-bold hidden md:flex">
                  1
                </div>
                <div className="glass-card p-4 rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="bg-gray-100 rounded-lg p-3">
                      <p className="text-gray-700">Hello, how are you today?</p>
                    </div>
                    <div className="flex items-center mt-3">
                      <button className="px-3 py-1 bg-handsy-primary text-white text-sm rounded-full">Convert</button>
                      <button className="ml-2 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
              <div className="md:w-1/2 md:pr-12 relative">
                <div className="w-14 h-14 rounded-full bg-handsy-primary/20 border-4 border-white flex items-center justify-center absolute left-1/2 -translate-x-1/2 md:right-0 md:translate-x-1/2 z-20 text-handsy-primary font-bold hidden md:flex">
                  2
                </div>
                <div className="glass-card p-4 rounded-xl overflow-hidden shadow-lg floating-object">
                  <div className="bg-white/50 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="bg-gradient-to-r from-handsy-primary/10 to-handsy-quaternary/10 rounded-lg p-3 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-handsy-primary/20 flex items-center justify-center animate-pulse">
                        <svg className="w-5 h-5 text-handsy-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-sm text-center mt-2 text-gray-600">Processing language...</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <h3 className="text-2xl font-bold mb-4">Language Processing</h3>
                <p className="text-gray-600 mb-4">
                  Our advanced natural language processing system analyzes the input, identifies key words, phrases, and grammatical structures to prepare for sign language conversion.
                </p>
                <div className="glass-card p-4 rounded-xl inline-block">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary">
                      2
                    </div>
                    <span className="font-medium">Processing & Analysis</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
              <div className="md:w-1/2 md:pr-12 md:text-right order-2 md:order-1">
                <h3 className="text-2xl font-bold mb-4">Sign Language Matching</h3>
                <p className="text-gray-600 mb-4">
                  The system matches each word and phrase with the appropriate sign language gestures from our library of over 200,000 signs, considering context and nuance.
                </p>
                <div className="glass-card p-4 rounded-xl inline-block">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary">
                      3
                    </div>
                    <span className="font-medium">Sign Selection</span>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 relative order-1 md:order-2">
                <div className="w-14 h-14 rounded-full bg-handsy-primary/20 border-4 border-white flex items-center justify-center absolute left-1/2 -translate-x-1/2 md:left-0 md:-translate-x-1/2 z-20 text-handsy-primary font-bold hidden md:flex">
                  3
                </div>
                <div className="glass-card p-4 rounded-xl overflow-hidden shadow-lg">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-2">
                      <div className="aspect-square bg-handsy-primary/10 rounded-lg flex items-center justify-center">
                        <span className="font-medium text-sm">Hello</span>
                      </div>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-2">
                      <div className="aspect-square bg-handsy-secondary/10 rounded-lg flex items-center justify-center">
                        <span className="font-medium text-sm">How</span>
                      </div>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-2">
                      <div className="aspect-square bg-handsy-tertiary/10 rounded-lg flex items-center justify-center">
                        <span className="font-medium text-sm">Are</span>
                      </div>
                    </div>
                    <div className="bg-white/50 backdrop-blur-sm rounded-lg p-2">
                      <div className="aspect-square bg-handsy-quaternary/10 rounded-lg flex items-center justify-center">
                        <span className="font-medium text-sm">You</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="md:w-1/2 md:pr-12 relative">
                <div className="w-14 h-14 rounded-full bg-handsy-primary/20 border-4 border-white flex items-center justify-center absolute left-1/2 -translate-x-1/2 md:right-0 md:translate-x-1/2 z-20 text-handsy-primary font-bold hidden md:flex">
                  4
                </div>
                <div className="glass-card p-4 rounded-xl overflow-hidden shadow-lg">
                  <div className="bg-black rounded-lg aspect-video flex items-center justify-center relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-12 h-12 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3 bg-black/50 backdrop-blur-sm rounded-lg py-1 px-2 text-white text-sm">
                      Showing: "Hello, how are you today?"
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 md:pl-12 md:text-left">
                <h3 className="text-2xl font-bold mb-4">Visual Rendering</h3>
                <p className="text-gray-600 mb-4">
                  The final step combines the individual sign gestures into a fluid, natural-looking video sequence. Our seamless transitions create a cohesive, easy-to-understand visual presentation.
                </p>
                <div className="glass-card p-4 rounded-xl inline-block">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary">
                      4
                    </div>
                    <span className="font-medium">Seamless Video Output</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Behind */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Technology Behind Handsy</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Powered by cutting-edge AI and computer vision technology to deliver the most accurate and natural sign language translations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3">Natural Language Processing</h3>
              <p className="text-gray-600 mb-4">
                Advanced algorithms analyze and understand the nuances of human language, ensuring accurate context-aware translations.
              </p>
              <div className="h-1 w-full bg-gradient-to-r from-handsy-primary to-handsy-secondary rounded-full"></div>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3">Motion Synthesis AI</h3>
              <p className="text-gray-600 mb-4">
                Proprietary AI models create fluid, natural sign language movements that respect grammatical structures and regional variations.
              </p>
              <div className="h-1 w-full bg-gradient-to-r from-handsy-secondary to-handsy-tertiary rounded-full"></div>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover:shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-3">High-Performance Rendering</h3>
              <p className="text-gray-600 mb-4">
                Optimized video composition delivers high-quality visuals with minimal latency, even on mobile devices and slower connections.
              </p>
              <div className="h-1 w-full bg-gradient-to-r from-handsy-tertiary to-handsy-quaternary rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="glass-card p-8 rounded-2xl mb-16">
          <h2 className="text-2xl font-bold mb-8">Real-World Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary shrink-0 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Educational Institutions</h3>
                <p className="text-gray-600">
                  Facilitating better communication between deaf and hearing students, creating more inclusive classrooms and learning environments.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary shrink-0 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Healthcare Settings</h3>
                <p className="text-gray-600">
                  Improving patient care by enabling clear communication between medical staff and deaf or hard-of-hearing patients, especially in emergency situations.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary shrink-0 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Corporate Environments</h3>
                <p className="text-gray-600">
                  Enhancing workplace accessibility and inclusivity by breaking down communication barriers during meetings, presentations, and everyday interactions.
                </p>
              </div>
            </div>
            
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary shrink-0 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Public Services & Events</h3>
                <p className="text-gray-600">
                  Making government services, public announcements, and entertainment events more accessible to deaf and hard-of-hearing individuals.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Experience the Power of Handsy</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Ready to try our revolutionary sign language technology for yourself? Get started today and discover a new way to communicate.
          </p>
          <a 
            href="/convert" 
            className="inline-flex items-center bg-handsy-primary text-white px-8 py-4 rounded-full font-medium hover:bg-handsy-secondary hover:shadow-lg transition-all group"
          >
            Try It Now 
            <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
