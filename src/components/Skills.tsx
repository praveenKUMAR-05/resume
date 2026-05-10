import React from 'react';

const SkillBar = ({ skill, percentage }: { skill: string; percentage: number }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span>{skill}</span>
      <span>{percentage}%</span>
    </div>
    <div className="h-2 bg-gray-700 rounded">
      <div
        className="h-full bg-[#4A90E2] rounded transition-all duration-1000"
        style={{ width: `${percentage}%` }}
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
        { name: "Java", level: 70 }
      ]
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Arduino", level: 50 },
        { name: "Raspberry Pi", level: 60 },
        { name: "Git", level: 60 }
      ]
    },
    {
      title: "Technical Skills",
      skills: [
        { name: "IoT", level: 60 },
        { name: "Embedded Systems", level: 50 },
        { name: "PCB Design", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-[#1A1A1A] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-6 text-[#4A90E2]">
                {category.title}
              </h3>
              {category.skills.map((skill) => (
                <SkillBar
                  key={skill.name}
                  skill={skill.name}
                  percentage={skill.level}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;