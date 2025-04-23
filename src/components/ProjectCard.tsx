import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import Button from './Button';

export interface Project {
  id: number;
  title: string;
  category: string;
  location: string;
  image: string;
  completed: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 bg-amber-600 text-white text-sm font-medium px-3 py-1 rounded">
          {project.category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-slate-500 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{project.location}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">
          {project.title}
        </h3>
        <p className="text-slate-600 mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-slate-500">
            Completed: {project.completed}
          </span>
          <Button to={`/projects/${project.id}`} variant="outline" size="sm" icon>
            View Project
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;