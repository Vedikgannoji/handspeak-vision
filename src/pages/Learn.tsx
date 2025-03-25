
import React, { useState } from 'react';
import { Check, Play, Award, BookOpen } from 'lucide-react';

const LearnPage = () => {
  const [activeCategory, setActiveCategory] = useState('popular');

  // Sample courses data
  const courses = {
    popular: [
      { 
        id: 1, 
        title: 'ASL Basics for Beginners', 
        level: 'Beginner', 
        lessons: 24, 
        duration: '4 hours', 
        students: '12.5k',
        progress: 0,
        image: 'https://images.unsplash.com/photo-1599134842279-fe807d23316e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      { 
        id: 2, 
        title: 'Emergency Medical Signs', 
        level: 'Intermediate', 
        lessons: 18, 
        duration: '3.5 hours', 
        students: '8.2k',
        progress: 35,
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      { 
        id: 3, 
        title: 'Everyday Conversations', 
        level: 'Beginner', 
        lessons: 30, 
        duration: '5 hours', 
        students: '15.3k',
        progress: 0,
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
    ],
    beginner: [
      { 
        id: 4, 
        title: 'ASL Alphabet Mastery', 
        level: 'Beginner', 
        lessons: 12, 
        duration: '2 hours', 
        students: '18.9k',
        progress: 0,
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      { 
        id: 5, 
        title: 'Common Phrases & Greetings', 
        level: 'Beginner', 
        lessons: 15, 
        duration: '2.5 hours', 
        students: '14.3k',
        progress: 0,
        image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
    ],
    intermediate: [
      { 
        id: 6, 
        title: 'Fluent Conversations', 
        level: 'Intermediate', 
        lessons: 28, 
        duration: '6 hours', 
        students: '7.8k',
        progress: 0,
        image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      { 
        id: 7, 
        title: 'Professional Communication', 
        level: 'Intermediate', 
        lessons: 22, 
        duration: '4.5 hours', 
        students: '6.2k',
        progress: 0,
        image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
    ],
    advanced: [
      { 
        id: 8, 
        title: 'Advanced ASL Expressions', 
        level: 'Advanced', 
        lessons: 35, 
        duration: '8 hours', 
        students: '3.5k',
        progress: 0,
        image: 'https://images.unsplash.com/photo-1564761393806-4e76f1e74cf0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
    ],
  };

  return (
    <div className="min-h-screen pt-20 page-transition">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Learn Sign Language</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master sign language through our interactive courses, from basic gestures to advanced expressions.
          </p>
        </div>

        {/* Featured Course */}
        <div className="glass-card p-0 rounded-2xl overflow-hidden mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1532522750741-628fde798c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
              alt="Featured Course" 
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-20 text-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-handsy-primary text-white text-xs font-medium px-3 py-1 rounded-full">Featured</span>
                <span className="text-sm">Beginner to Advanced</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">Complete Sign Language Mastery</h2>
              <p className="mb-6 text-white/80 max-w-2xl">
                A comprehensive program covering everything from basic alphabet signs to complex conversations. Learn at your own pace with interactive exercises.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary">
                  Start Learning
                </button>
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full 
                  font-medium transition-all hover:bg-white/30 hover:shadow-md flex items-center gap-2">
                  <Play size={18} /> Watch Intro
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary">
                <BookOpen size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Lessons</p>
                <p className="font-semibold">85 Interactive Lessons</p>
              </div>
            </div>
            <div className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary">
                <Award size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Course Certificate</p>
                <p className="font-semibold">Recognized Certification</p>
              </div>
            </div>
            <div className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z"></path>
                  <path d="M10 4a1 1 0 011 1v4.59l3.3 3.3a1 1 0 11-1.4 1.42l-3.6-3.6a1 1 0 01-.3-.7V5a1 1 0 011-1z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-semibold">16 Hours of Content</p>
              </div>
            </div>
          </div>
        </div>

        {/* Course Categories */}
        <div className="mb-10">
          <div className="flex flex-wrap gap-3 mb-8">
            <button 
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'popular' 
                  ? 'bg-handsy-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory('popular')}
            >
              Popular
            </button>
            <button 
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'beginner' 
                  ? 'bg-handsy-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory('beginner')}
            >
              Beginner
            </button>
            <button 
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'intermediate' 
                  ? 'bg-handsy-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory('intermediate')}
            >
              Intermediate
            </button>
            <button 
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === 'advanced' 
                  ? 'bg-handsy-primary text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory('advanced')}
            >
              Advanced
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses[activeCategory as keyof typeof courses].map((course) => (
              <div key={course.id} className="glass-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl group">
                <div className="relative">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-handsy-primary">
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span>{course.lessons} lessons</span>
                    <span className="mx-2">•</span>
                    <span>{course.duration}</span>
                    <span className="mx-2">•</span>
                    <span>{course.students} students</span>
                  </div>
                  
                  {course.progress > 0 ? (
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-medium">Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-handsy-primary rounded-full"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                      <button className="mt-4 w-full py-2.5 bg-handsy-primary/10 text-handsy-primary rounded-lg font-medium transition-colors hover:bg-handsy-primary/20 flex items-center justify-center gap-1.5">
                        <Play size={16} />
                        Continue Learning
                      </button>
                    </div>
                  ) : (
                    <button className="w-full py-2.5 bg-handsy-primary text-white rounded-lg font-medium transition-all hover:bg-handsy-secondary hover:shadow">
                      Start Course
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Progress Section */}
        <div className="glass-card p-6 md:p-8 rounded-2xl">
          <h2 className="text-2xl font-bold mb-6">Your Learning Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary">
                <Check size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Step 1: Basics</h3>
              <p className="text-gray-600 mb-4">Master the alphabet and numbers in sign language</p>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
              </div>
              <p className="text-sm mt-2 font-medium text-green-600">Completed</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary">
                <Check size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Step 2: Phrases</h3>
              <p className="text-gray-600 mb-4">Learn common expressions and everyday phrases</p>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-handsy-primary rounded-full" style={{ width: '35%' }}></div>
              </div>
              <p className="text-sm mt-2 font-medium">35% Complete</p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-handsy-primary/10 flex items-center justify-center text-handsy-primary">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Step 3: Conversations</h3>
              <p className="text-gray-600 mb-4">Hold fluid conversations in sign language</p>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-handsy-primary rounded-full" style={{ width: '0%' }}></div>
              </div>
              <p className="text-sm mt-2 font-medium text-gray-500">Not Started</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnPage;
