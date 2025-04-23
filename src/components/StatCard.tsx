import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  icon, 
  value, 
  label,
  delay = 0
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-6 rounded-lg shadow-md text-center"
    >
      <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 text-amber-600">
        {icon}
      </div>
      <motion.h3 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: delay + 0.2 }}
        className="text-3xl font-bold text-slate-900 mb-2"
      >
        {value}
      </motion.h3>
      <p className="text-slate-600">{label}</p>
    </motion.div>
  );
};

export default StatCard;