
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, MessageSquare } from 'lucide-react';

type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
};

const FaqItem = ({ question, answer, isOpen, toggleOpen }: FaqItemProps) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-6 text-left"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium">{question}</h3>
        <span>
          {isOpen ? (
            <ChevronUp className="text-handsy-primary" size={20} />
          ) : (
            <ChevronDown className="text-gray-400" size={20} />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqItems = [
    {
      id: 1,
      question: 'What is Handsy?',
      answer: 'Handsy is a cutting-edge application that converts text and voice input into 3D sign language translations. Our technology uses preloaded videos to display sign language gestures, ensuring fast, accurate, and natural-looking communication.'
    },
    {
      id: 2,
      question: 'How accurate is Handsy?',
      answer: 'Handsy delivers high-precision translations with 98% accuracy rate. We employ advanced AI algorithms trained on extensive datasets to ensure natural gestures and proper sign language grammar and syntax.'
    },
    {
      id: 3,
      question: 'Which sign languages are supported?',
      answer: 'Currently, Handsy supports American Sign Language (ASL) with over 200,000 signs in our database. We are actively working on expanding support for other sign languages including British Sign Language (BSL), Auslan, and more.'
    },
    {
      id: 4,
      question: 'Can businesses integrate Handsy?',
      answer: 'Yes! Handsy provides enterprise solutions with API access for seamless integration into existing systems. Our solutions feature enterprise-grade security, customization options, and dedicated support for businesses looking to improve accessibility.'
    },
    {
      id: 5,
      question: 'Is Handsy useful for learning sign language?',
      answer: 'Absolutely! Handsy offers comprehensive learning modules from beginner to advanced levels. Our interactive lessons include practice exercises, real-time feedback, and progression tracking to help you master sign language efficiently.'
    },
    {
      id: 6,
      question: 'How does voice-to-sign translation work?',
      answer: 'Handsy uses advanced speech recognition technology to convert spoken words into text, which is then processed by our sign language translation engine. The result is a seamless flow from voice input to sign language output with minimal delay.'
    },
    {
      id: 7,
      question: 'Is there a mobile app for Handsy?',
      answer: 'Yes, Handsy is available as a mobile application for both iOS and Android devices, offering the same powerful features as our web platform in a convenient, on-the-go format.'
    },
    {
      id: 8,
      question: 'How often is the sign database updated?',
      answer: 'Our sign language database is continuously updated with new signs, regional variations, and improvements to existing translations. We release major updates quarterly and minor updates monthly.'
    },
  ];

  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="min-h-screen pt-20 page-transition">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to the most common questions about Handsy and our sign language technologies.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="glass-card p-6 md:p-8 rounded-2xl mb-12">
          {faqItems.map((faq) => (
            <FaqItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFaqId === faq.id}
              toggleOpen={() => toggleFaq(faq.id)}
            />
          ))}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-r from-handsy-primary/10 to-handsy-secondary/10 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            If you couldn't find the answer you were looking for, our support team is here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
          <a 
            href="mailto:support@handsy.app" 
            className="inline-flex items-center btn-primary"
          >
            <MessageSquare className="mr-2" size={18} />
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default Faq;
