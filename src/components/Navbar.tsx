
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center transition-all duration-500"
    >
      <div 
        className={`floating-nav py-4 px-4 max-w-3xl w-full ${
          isScrolled ? 'translate-y-2' : 'translate-y-4'
        }`}
      >
        <div className="flex items-center justify-center relative">
          <Link 
            to="/" 
            className="absolute left-0 flex items-center hover:scale-110 transition-transform duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="text-xl font-bold text-gradient">Handsy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link 
              to="/convert" 
              className={`text-sm text-foreground hover:text-handsy-primary transition-all duration-300 hover:scale-110 ${
                isActive('/convert') ? 'text-handsy-primary font-medium' : ''
              }`}
            >
              Convert
            </Link>
            <Link 
              to="/features" 
              className={`text-sm text-foreground hover:text-handsy-primary transition-all duration-300 hover:scale-110 ${
                isActive('/features') ? 'text-handsy-primary font-medium' : ''
              }`}
            >
              Features
            </Link>
            <Link 
              to="/how-it-works" 
              className={`text-sm text-foreground hover:text-handsy-primary transition-all duration-300 hover:scale-110 ${
                isActive('/how-it-works') ? 'text-handsy-primary font-medium' : ''
              }`}
            >
              How It Works?
            </Link>
            <Link 
              to="/learn" 
              className={`text-sm text-foreground hover:text-handsy-primary transition-all duration-300 hover:scale-110 ${
                isActive('/learn') ? 'text-handsy-primary font-medium' : ''
              }`}
            >
              Learn
            </Link>
          </nav>

          <div className="absolute right-0 flex items-center space-x-2">
            <Link 
              to="/convert" 
              className="btn-primary hidden md:flex text-sm px-4 py-2 ml-2 hover:scale-110 transform transition-all duration-300"
            >
              Get Started
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-foreground hover:text-handsy-primary hover:scale-110 transition-all duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card m-4 mt-16 rounded-xl overflow-hidden w-[calc(100%-2rem)] max-w-md absolute">
          <nav className="flex flex-col space-y-4 p-5">
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
              className="btn-primary text-center py-2 px-4"
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
