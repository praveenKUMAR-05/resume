import React from 'react';

const TimelineItem = ({ year, title, description, isLeft = true }) => (
  <div className={`flex flex-col md:flex-row gap-4 mb-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
    <div className="md:w-1/2">
      <div className={`bg-[#1A1A1A] p-6 rounded-lg ${isLeft ? 'md:mr-8' : 'md:ml-8'}`}>
        <span className="text-[#4A90E2] font-semibold">{year}</span>
        <h3 className="text-xl font-bold mt-2">{title}</h3>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
    </div>
    <div className="hidden md:block md:w-1/2" />
  </div>
);

const Education = () => {
  const milestones = [
    {
      year: "2021 - 2022",
      title: "12 CBSE HSC",
      description: "Kendriya Vidyalaya Ashok nagar,Chennai"
    },
    {
      year: "2023 - 2027",
      title: "B.E. in Electronics and Communication Engineering",
      description: "Sri Krishna College of Technology, Coimbatore"
    },
    {
      year: "2023",
      title: "Participated in Hackathon",
      description: " participated in college technical symposium for autonomous vechicle"
    },
    {
      year: "2024",
      title: "AIML Internship",
      description: "Completed internship focusing on Machine learning with a small project on text emotion detector"
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Education & Achievements</h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#4A90E2]" />
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={index}
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