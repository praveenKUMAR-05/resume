import React from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#121212] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Praveen Kumar Mohan. All rights reserved.</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/praveenKUMAR-05"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#4A90E2] transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/praveen-kumar-m-083896281"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#4A90E2] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
          
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-2 bg-[#4A90E2] rounded-full shadow-lg hover:bg-[#357ABD] transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;