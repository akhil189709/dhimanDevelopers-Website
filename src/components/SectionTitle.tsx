import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  center = false,
  light = false
}) => {
  return (
    <div className={`mb-12 ${center ? 'text-center mx-auto' : ''}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg ${light ? 'text-slate-300' : 'text-slate-600'} max-w-2xl ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: center ? 80 : 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`h-1 bg-amber-600 mt-4 ${center ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionTitle;