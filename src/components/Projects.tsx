import React, { useEffect, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url?: string;
  homepage?: string;
  topics?: string[];
}

const Projects = () => {
  const [githubProjects, setGithubProjects] = useState<Repository[]>([]);
  const [error, setError] = useState<string>('');

  const customProjects: Repository[] = [
    {
      id: 101,
      name: 'Grocery Management System',
      description: 'Built using Python and MySQL.',
      html_url: '',
      homepage: '',
      topics: ['Python', 'MySQL'],
    },
    {
      id: 102,
      name: 'LED Detection System',
      description: 'Developed with Arduino for monitoring.',
      html_url: '',
      homepage: '',
      topics: ['Arduino', 'Hardware'],
    },
    {
      id: 103,
      name: 'Gas Sensor Simulation',
      description: 'Simulated on Tinkercad for range detection.',
      html_url: '',
      homepage: '',
      topics: ['Tinkercad', 'Simulation'],
    },
    {
      id: 104,
      name: 'Bank Marketing ML Prediction',
      description: 'ML classification model (Logistic Regression, Random Forest, XGBoost) to predict customer subscription likelihood for bank campaigns.',
      html_url: '',
      homepage: '',
      topics: ['Machine Learning', 'Python'],
    },
    {
      id: 105,
      name: 'Skill Tracker Web App',
      description: 'Built a simple Skill Tracker web application using HTML, CSS, and JavaScript with Node.js backend logic and MongoDB.',
      html_url: '',
      homepage: '',
      topics: ['Node.js', 'MongoDB', 'Web Dev'],
    },
    {
      id: 106,
      name: 'Waste Segregation & Monitoring',
      description: 'Smart waste system to separate metal and dry waste using sensors with a web monitoring dashboard.',
      html_url: '',
      homepage: '',
      topics: ['IoT', 'Hardware', 'Sensors'],
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  if (error) {
    return (
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gradient">Projects</h2>
          <p className="text-center text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 text-gradient"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {allProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-white/10 hover:border-primary/40 hover:shadow-[0_8px_30px_rgba(0,242,254,0.15)] transition-all"
            >
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-3 text-white">{project.name}</h3>
                <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                  {project.description || 'No description available'}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.topics?.map((topic) => (
                    <span
                      key={topic}
                      className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary border border-primary/20 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/10 mt-auto">
                  {project.html_url ? (
                    <a
                      href={project.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors text-sm font-medium"
                    >
                      <Github size={18} />
                      Code
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-gray-500 text-sm">
                      <Github size={18} />
                      Private
                    </span>
                  )}
                  {project.homepage && (
                    <a
                      href={project.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-secondary transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
