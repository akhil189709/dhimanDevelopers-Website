import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 bg-white rounded-lg shadow-lg border border-slate-100"
    >
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={`${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-slate-300'}`} 
          />
        ))}
      </div>
      
      {/* Content */}
      <p className="text-slate-700 mb-6 italic">
        "{testimonial.content}"
      </p>
      
      {/* Author */}
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4" 
        />
        <div>
          <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
          <p className="text-sm text-slate-500">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;