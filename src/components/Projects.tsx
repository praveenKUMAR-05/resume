import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url?: string; // Made optional for custom projects
  homepage?: string; // Made optional for custom projects
  topics?: string[]; // Made optional for custom projects
}

const Projects = () => {
  const [githubProjects, setGithubProjects] = useState<Repository[]>([]);
  const [error, setError] = useState<string>('');

  const customProjects: Repository[] = [
    {
      id: 101,
      name: 'Optimizing Customer Response Prediction in Bank Marketing',
      description: 'Built a machine learning classification model to predict customer subscription likelihood. Achieved Runner-Up position in a Machine Learning Hackathon at University of Hyderabad.',
      html_url: '', // Add GitHub URL if available
      homepage: '', // Add live demo link if available
      topics: ['Machine Learning', 'Python', 'XGBoost', 'Logistic Regression'],
    },
    {
      id: 102,
      name: 'Skill Tracker',
      description: 'Built a simple Skill Tracker web application using HTML, CSS, and JavaScript. Developed basic backend logic using Node.js and managed skill data using MongoDB.',
      html_url: '', // Add GitHub URL if available
      homepage: '', // Add live demo link if available
      topics: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'MongoDB'],
    },
    {
      id: 103,
      name: 'Waste Segregation System & Web Monitoring',
      description: 'Built a smart waste system to separate metal and dry waste using sensors. Used IR and metal sensors for automatic waste detection, and monitored waste data using a web dashboard.',
      html_url: '', // Add GitHub URL if available
      homepage: '', // Add live demo link if available
      topics: ['Sensors', 'IoT', 'Web Dashboard'],
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/praveenKUMAR-05/repos');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();
        setGithubProjects(data.slice(0, 6));
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error('Error fetching projects:', err);
      }
    };

    fetchProjects();
  }, []);

  const allProjects = [...customProjects, ...githubProjects];

  if (error) {
    return (
      <section id="projects" className="py-20 bg-[#121212] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 bg-[#121212] text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1A1A1A] rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4 h-12 overflow-hidden">
                  {project.description?.slice(0, 100) || 'No description available'}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics?.map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-sm bg-[#4A90E2] bg-opacity-20 text-[#4A90E2] rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  {project.html_url && (
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#4A90E2] hover:text-[#357ABD]"
                    >
                      <Github size={20} />
                      Code
                    </a>
                  )}
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#4A90E2] hover:text-[#357ABD]"
                    >
                      <ExternalLink size={20} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
