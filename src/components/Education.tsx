import React from 'react';
import { motion } from 'framer-motion';

const TimelineItem = ({ year, title, description, isLeft = true, index }: { year: string, title: string, description: string, isLeft?: boolean, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className={`flex flex-col md:flex-row gap-4 mb-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} relative z-10`}
  >
    <div className="md:w-1/2 flex flex-col justify-center">
      <div className={`glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold tracking-wider">{year}</span>
        <h3 className="text-xl font-bold mt-2 text-white">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
    <div className="hidden md:flex md:w-1/2 justify-center items-center relative">
      <div className="absolute w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(0,242,254,0.8)] z-20" style={{ [isLeft ? 'left' : 'right']: '-8px' }} />
    </div>
  </motion.div>
);

const Education = () => {
  const milestones = [
    {
      year: "2021 - 2022",
      title: "12 CBSE HSC",
      description: "Kendriya Vidyalaya Ashok nagar, Chennai"
    },
    {
      year: "2023 - 2027",
      title: "B.E. in Electronics and Communication Engineering",
      description: "Sri Krishna College of Technology, Coimbatore"
    }
  ];

  return (
    <section id="education" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education Journey
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <motion.div 
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/50 to-purple-500/50 rounded-full transform -translate-x-1/2 z-0"
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={index}
              index={index}
              year={milestone.year}
              title={milestone.title}
              description={milestone.description}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;