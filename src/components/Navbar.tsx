
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="flex items-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-2xl font-bold text-gradient">Handsy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/convert" className="text-foreground hover:text-handsy-primary transition-colors">
              Convert
            </Link>
            <Link to="/features" className="text-foreground hover:text-handsy-primary transition-colors">
              Features
            </Link>
            <Link to="/how-it-works" className="text-foreground hover:text-handsy-primary transition-colors">
              How It Works?
            </Link>
            <Link to="/learn" className="text-foreground hover:text-handsy-primary transition-colors">
              Learn
            </Link>
            <Link 
              to="/convert" 
              className="btn-primary ml-2"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground hover:text-handsy-primary"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card m-4 rounded-xl overflow-hidden">
          <nav className="flex flex-col space-y-4 p-6">
            <Link 
              to="/convert" 
              className="text-foreground hover:text-handsy-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Convert
            </Link>
            <Link 
              to="/features" 
              className="text-foreground hover:text-handsy-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Features
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-foreground hover:text-handsy-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              How It Works?
            </Link>
            <Link 
              to="/learn" 
              className="text-foreground hover:text-handsy-primary transition-colors"
              onClick={toggleMobileMenu}
            >
              Learn
            </Link>
            <Link 
              to="/convert" 
              className="btn-primary text-center"
              onClick={toggleMobileMenu}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
