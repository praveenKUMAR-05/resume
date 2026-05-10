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
      year: "May 2025",
      title: "AI Integration in Web and Mobile Development Intern",
      description: "National Small Industries Corporation (NSIC). Learned basics of AI Integration concepts in web/mobile app workflows."
    },
    {
      year: "Dec 2024 - Jan 2025",
      title: "AIML Intern",
      description: "CodeBind Technologies. Gained foundational understanding of AI/ML algorithms and built introductory ML projects."
    },
    {
      year: "Aug 2023 - Present",
      title: "B.E. in Electronics and Communication Engineering",
      description: "Sri Krishna College of Engineering and Technology, Coimbatore. CGPA: 8.34"
    },
    {
      year: "2023 - 2024",
      title: "Awards & Honors",
      description: "Hackathon Runner-up (University of Hyderabad), App Development (IIT Palakkad), Google Cloud Agentic AI Day, 5-Day AI Agents Intensive Course with Google."
    },
    {
      year: "Apr 2022 - Mar 2023",
      title: "12th CBSE HSC",
      description: "Kendriya Vidyalaya, Chennai. Percentage: 85.2%"
    },
    {
      year: "Apr 2020 - Mar 2021",
      title: "10th CBSE",
      description: "Kendriya Vidyalaya, Chennai. Percentage: 77%"
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience, Education & Awards</h2>
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