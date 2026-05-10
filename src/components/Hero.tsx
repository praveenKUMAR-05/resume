import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-[60px] relative">
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src="/img.jpg"
            alt="Praveen Kumar Mohan"
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full mx-auto mb-8 object-cover border-4 border-primary shadow-[0_0_30px_rgba(0,242,254,0.3)]"
            loading="eager"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Hi, I'm <span className="text-gradient">Praveen Kumar Mohan</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Electronics and Communication Engineer | IoT & Embedded Systems Beginner
          </motion.p>
          <motion.p 
            className="max-w-2xl mx-auto text-gray-400 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Currently enhancing skills in Embedded Systems,
            IoT, Signals and Systems, and Verilog coding at a
            basic level. Possess foundational experience in
            these areas with a proven ability to adapt and learn
            quickly in dynamic environments. Demonstrated
            eagerness to grow and contribute effectively
            through continuous learning and practical
            application.
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <button
            onClick={() => {
              const link = document.createElement('a');
              link.href = '/upload/Resume.pdf'; 
              link.download = 'Resume.pdf'; 
              link.click();
            }}
            className="group flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            Download Resume
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary/50 text-white rounded-lg hover:bg-primary/10 hover:border-primary transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
