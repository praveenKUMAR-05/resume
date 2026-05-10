import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Activity from './components/Activity';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/20 blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-secondary/20 blur-[100px] animate-blob" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-purple-500/20 blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="relative z-10">
        <Header />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Activity />
      <Contact />
      <Footer />
      </div>
    </div>
  );
}

export default App;