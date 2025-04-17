import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered Image Recognition System',
      description: 'Developed a deep learning-based image recognition system that can identify objects in real-time with high accuracy. Implemented using TensorFlow and deployed on cloud infrastructure.',
      technologies: ['Python', 'TensorFlow', 'Docker', 'AWS'],
      link: 'https://github.com/hyunlee/image-recognition'
    },
    {
      id: 2,
      title: 'Natural Language Understanding Platform',
      description: 'Created a comprehensive platform for natural language understanding tasks, including sentiment analysis, entity recognition, and text classification. Built with state-of-the-art transformer models.',
      technologies: ['Python', 'PyTorch', 'Hugging Face', 'FastAPI'],
      link: 'https://github.com/hyunlee/nlu-platform'
    },
    {
      id: 3,
      title: 'Autonomous Drone Navigation System',
      description: 'Designed and implemented a navigation system for autonomous drones that can operate in GPS-denied environments using computer vision and SLAM techniques.',
      technologies: ['C++', 'ROS', 'OpenCV', 'CUDA'],
      link: 'https://github.com/hyunlee/drone-navigation'
    },
    {
      id: 4,
      title: 'Interactive Data Visualization Dashboard',
      description: 'Built a web-based dashboard for interactive visualization of complex scientific data, enabling researchers to gain insights from large datasets.',
      technologies: ['JavaScript', 'React', 'D3.js', 'Node.js'],
      link: 'https://github.com/hyunlee/data-dashboard'
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 