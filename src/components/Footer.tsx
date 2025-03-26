
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="mt-auto pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">About</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">Careers</Link>
              </li>
              <li>
                <Link to="/press" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">Press</Link>
              </li>
            </ul>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/features" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">Features</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">How it Works</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">Pricing</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">Contact</Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">Help Center</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-handsy-primary flex items-center gap-2 transition-colors dark:text-gray-300">
                  <Twitter size={16} /> Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-handsy-primary flex items-center gap-2 transition-colors dark:text-gray-300">
                  <Github size={16} /> GitHub
                </a>
              </li>
              <li>
                <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-handsy-primary flex items-center gap-2 transition-colors dark:text-gray-300">
                  <ExternalLink size={16} /> Blog
                </a>
              </li>
              <li>
                <a href="mailto:contact@example.com" className="text-gray-600 hover:text-handsy-primary transition-colors dark:text-gray-300">
                  contact@handsy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-2xl font-bold text-gradient mr-2">Handsy</span>
              <span className="text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} All rights reserved</span>
            </div>
            
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Made with <span className="text-red-500">❤️</span> for everyone
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
