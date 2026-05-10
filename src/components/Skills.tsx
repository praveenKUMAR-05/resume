import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="font-medium text-gray-200">{skill}</span>
      <span className="text-primary">{percentage}%</span>
    </div>
    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${percentage}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
      />
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 70 },
        { name: "C++", level: 60 },
        { name: "Java", level: 70 },
        { name: "HTML/CSS/JS", level: 65 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Arduino", level: 50 },
        { name: "Raspberry Pi", level: 60 },
        { name: "Git", level: 60 },
        { name: "Android Studio", level: 55 },
        { name: "Firebase", level: 50 }
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "IoT", level: 60 },
        { name: "Embedded Systems", level: 50 },
        { name: "PCB Design", level: 70 },
        { name: "Machine Learning", level: 65 },
        { name: "MERN Stack", level: 55 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title} 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-6 rounded-2xl border border-white/10 hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillBar
                    key={skill.name}
                    skill={skill.name}
                    percentage={skill.level}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;