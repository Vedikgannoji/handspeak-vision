
import React from 'react';
import { Award, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

type Testimonial = {
  name: string;
  role: string;
  avatarUrl?: string;
  content: string;
  socialIcon: React.ReactNode;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Vivek Sharma",
    role: "Student",
    content: "Absolutely mind-blowing! The 3D sign animations are smooth and natural. This is the future of accessibility!",
    socialIcon: <Twitter size={18} className="text-[#1DA1F2]" />,
    rating: 5
  },
  {
    name: "Akshaya Patel",
    role: "Student",
    content: "Handsy is a game-changer! Converting text into sign language has never been this seamless.",
    socialIcon: <Instagram size={18} className="text-[#E1306C]" />,
    rating: 5
  },
  {
    name: "Laxman Rao",
    role: "Educator",
    content: "Handsy makes communication accessible to everyone. The accuracy is impressive and helps my students learn effectively.",
    socialIcon: <Linkedin size={18} className="text-[#0077B5]" />,
    rating: 4
  },
  {
    name: "Priya Desai",
    role: "Interpreter",
    content: "As a sign language interpreter, I'm amazed by the quality. Handsy has become an essential tool in my workflow.",
    socialIcon: <Twitter size={18} className="text-[#1DA1F2]" />,
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Developer",
    content: "The API integration is flawless. I was able to add sign language support to my app in minutes.",
    socialIcon: <Linkedin size={18} className="text-[#0077B5]" />,
    rating: 5
  }
];

const TestimonialSection = () => {
  const renderRating = (rating: number) => {
    return (
      <div className="flex mt-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg 
            key={star}
            className={`w-5 h-5 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            What People Are <span className="text-gradient italic">Saying</span> About Handsy
          </h2>
          <div className="h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-gray-300 to-transparent my-6 mx-auto dark:via-gray-700"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto dark:text-gray-300">
            Real Stories. Real Impact. See how Handsy is transforming communication with 200K+ signs.
          </p>
        </div>

        <ScrollArea className="max-w-6xl mx-auto h-80">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-1">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card p-6 h-full flex flex-col justify-between hover:shadow-lg hover:shadow-handsy-primary/10 transition-all duration-300 hover:translate-y-[-5px]">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-handsy-quaternary flex items-center justify-center text-handsy-primary font-bold text-xl dark:bg-handsy-primary/30 dark:text-white">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="rounded-full p-1.5 bg-white/50 dark:bg-white/10">
                      {testimonial.socialIcon}
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">"{testimonial.content}"</p>
                </div>
                <div>
                  {renderRating(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        <div className="flex items-center justify-center mt-10 space-x-2">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((avatar) => (
              <div 
                key={avatar} 
                className="w-8 h-8 rounded-full bg-handsy-quaternary border-2 border-white dark:border-gray-800"
              ></div>
            ))}
          </div>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Over <span className="text-handsy-primary font-bold">10,000+</span> people gave us review
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
