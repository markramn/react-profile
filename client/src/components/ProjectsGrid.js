import React from 'react';
import { motion } from 'framer-motion';

// Import all project images
import alan from '../assets/images/projects/alan.jpg';
import conversation from '../assets/images/projects/conversation.jpg';
import cycling from '../assets/images/projects/cycling.jpg';
import elephant from '../assets/images/projects/elephant.jpg';
import pbi from '../assets/images/projects/pbi.jpg';
import process from '../assets/images/projects/process.jpg';
import rag from '../assets/images/projects/rag.jpg';
import search from '../assets/images/projects/search.jpg';

const projectsData = [
  { image: alan, title: "Machine Learning", description: "Built many classical machine learning models for forecasting, classification & prediction." },
  { image: conversation, title: "Conversation Analytics", description: "Full stack design, architecture & production development of a Conversation Analytics product that analyzes customer interaction data." },
  { image: cycling, title: "Tour de France", description: "Developed into production the realtime analytics backend for Connected Stadium for the Tour de France, a real time tracking application used to track support vehicle, VIPs & fans." },
  { image: elephant, title: "Connected Conservation", description: "Worked with extremly high quality satellite data to train machine learning algorithms to detect large mammals from space." },
  { image: pbi, title: "Power(BI) to the people!", description: "Designed and developed a fully managed PowerBI Embedded Service to white-label PBI Content into our application." },
  { image: process, title: "Big Data Pipeline Development", description: "Architected & developed many large big data processing pipelines using Azure Functions" },
  { image: rag, title: "RAG System", description: "Design & development of a fully conversational feature allowing users to interact with their customer data by querying & grounding large language models." },
  { image: search, title: "Semantic Search", description: "Development of semantic searching applications for full text & fuzzy search using Elastic Cloud" }
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div 
      className="relative overflow-hidden rounded-lg shadow-lg aspect-square"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 text-white"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-sm">{project.description}</p>
      </motion.div>
    </motion.div>
  );
};

const ProjectsGrid = () => {
    return (
      <div className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>
          <motion.button
            className="absolute bottom-4 right-4 bg-light-accent dark:bg-dark-accent text-white px-4 py-2 rounded-lg shadow-md hover:bg-opacity-80 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            See More
          </motion.button>
        </div>
      </div>
    );
  };

export default ProjectsGrid;