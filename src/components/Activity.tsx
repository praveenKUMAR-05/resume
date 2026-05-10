import React from 'react';
import { Award, Briefcase, Calendar, Star } from 'lucide-react';

const Activity = () => {
  const experiences = [
    {
      title: "Intern",
      company: "National Small Industries Corp (NSIC)",
      date: "May 2025",
      description: "Gained practical exposure to AI workflows for mobile and web platforms, implemented machine learning models in real-world UI/UX, and explored deployment strategies for AI-integrated applications."
    },
    {
      title: "AIML Intern",
      company: "CodeBind Technologies",
      date: "Dec 2024 - Jan 2025",
      description: "Built hands-on expertise in embedded systems and IoT technologies. Developed a chatbot and emotion detection system using ML, and explored structural flow of e-commerce platforms."
    }
  ];

  const activities = [
    {
      title: "OpenAI Academy × NxtWave Regional Buildathon",
      description: "Built 'Stackscape' – a Smart Personal Health Assistant powered by AI to support rural communities with voice and text-based symptom analysis."
    },
    {
      title: "Amazon ML Challenge 2025",
      description: "Secured Rank 90 in the Machine Learning Round with Team-X, predicting product prices using text and image data."
    },
    {
      title: "IEEEXtreme 19.0",
      description: "Participated in the 24-hour global coding challenge organized by IEEE, solving complex programming problems."
    },
    {
      title: "Hack With India Hackathon",
      description: "Placed among the top 1,000 teams out of 3,000+ participants in Vibe Hacks 2.0."
    },
    {
      title: "5-Day AI Agents Intensive Course",
      description: "Earned a badge for completing this intensive course with Google via Kaggle, focusing on AI agents and real-world applications."
    },
    {
      title: "Go for Gold Program",
      description: "Successfully completed the program by iAspire and received certification."
    },
    {
      title: "ICINVENTS 2025 Volunteer",
      description: "Volunteered at the IEEE International Conference on Innovations in Engineering and Next-Generation Technologies for Sustainability."
    },
    {
      title: "Google Cloud Agentic AI Day",
      description: "Participated in workshops and problem-solving sessions on AI applications."
    }
  ];

  return (
    <section id="activity" className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Experience & Activities</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-[#4A90E2]">
              <Briefcase size={24} /> Experience
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-[#1A1A1A] p-6 rounded-lg border-l-4 border-[#4A90E2]">
                  <h4 className="text-xl font-bold">{exp.title}</h4>
                  <p className="text-[#4A90E2] font-medium">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-3 flex items-center gap-1">
                    <Calendar size={14} /> {exp.date}
                  </p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Activities Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-[#4A90E2]">
              <Star size={24} /> Honors & Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activities.map((act, index) => (
                <div key={index} className="bg-[#1A1A1A] p-5 rounded-lg hover:bg-[#252525] transition-colors">
                  <div className="flex items-start gap-3">
                    <Award className="text-[#4A90E2] shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-lg leading-tight mb-2">{act.title}</h4>
                      <p className="text-sm text-gray-400">{act.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
