import React, { useState, useEffect } from 'react';
import { ArrowUp, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/10 bg-background/80 backdrop-blur-md text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} <span className="text-primary font-medium">Praveen Kumar Mohan</span>. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://github.com/praveenKUMAR-05"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1, y: -2 }}
              href="https://www.linkedin.com/in/praveen-kumar-mohan/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-white/5 rounded-full text-gray-400 hover:text-primary hover:bg-primary/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
          </div>

          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                whileHover={{ scale: 1.1 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all z-50"
                aria-label="Back to top"
              >
                <ArrowUp size={24} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
};

export default Footer;