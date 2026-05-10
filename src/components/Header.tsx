import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const handleScroll = () => {
    const sections = ['home', 'skills', 'projects', 'education', 'activity', 'contact'];
    const current = sections.find(section => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      }
      return false;
    });
    if (current) setActiveSection(current);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] glass z-50 transition-all duration-300">
      <nav className="container mx-auto px-4 h-full flex items-center justify-between">
        <h1 className="text-xl font-bold text-gradient">PraveenKumarMohan</h1>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {['Home', 'Skills', 'Projects', 'Education', 'Activity', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className={`relative px-4 py-2 rounded-full transition-colors ${
                activeSection === item.toLowerCase() ? 'text-primary' : 'hover:text-primary'
              }`}
            >
              {activeSection === item.toLowerCase() && (
                <span className="absolute inset-0 bg-primary/10 rounded-full -z-10" />
              )}
              {item}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <button
          className="md:hidden text-white hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-[60px] left-0 right-0 glass md:hidden border-t border-white/10">
            <div className="flex flex-col p-4 space-y-2">
              {['Home', 'Skills', 'Projects', 'Education', 'Activity', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item.toLowerCase())}
                  className={`text-left px-4 py-3 rounded-lg transition-colors ${
                    activeSection === item.toLowerCase() ? 'bg-primary/10 text-primary' : 'hover:bg-white/5 hover:text-primary'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;