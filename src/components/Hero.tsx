import React from 'react';
import { ArrowDown, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#121212] text-white pt-[60px]">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <img
            src="\img.png"
            alt="Praveen Kumar Mohan"
            className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full mx-auto mb-8 object-cover border-4 border-[#4A90E2]"
            loading="eager"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
            Hi, I'm Praveen Kumar Mohan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-slide-up">
            Electronics and Communication Engineer | IoT & Embedded Systems Beginner
          </p><br></br>
          <p>Currently enhancing skills in Embedded Systems,
IoT, Signals and Systems, and Verilog coding at a
basic level. Possess foundational experience in
these areas with a proven ability to adapt and learn
quickly in dynamic environments. Demonstrated
eagerness to grow and contribute effectively
through continuous learning and practical
application.</p>
          
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
        <button
          onClick={() => {
            const link = document.createElement('a');
            link.href = '\Untitled (1).pdf'; // Update this with the actual file path
            link.download = 'Resume.pdf'; // Name of the file after download
            link.click();
          }}
          className="flex items-center justify-center gap-2 px-8 py-3 bg-[#4A90E2] text-white rounded-lg hover:bg-[#357ABD] transition-colors"
          >
          <Download size={20} />
          Download Resume
        </button>
        <button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center justify-center gap-2 px-8 py-3 border-2 border-[#4A90E2] text-white rounded-lg hover:bg-[#4A90E2] transition-colors"
          >
          Contact Me
        </button>
        </div>

        
      </div>
    </section>
  );
};

export default Hero;