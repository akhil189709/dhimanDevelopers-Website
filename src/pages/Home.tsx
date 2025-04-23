import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building, Building2, Calendar, CheckCircle, Users } from 'lucide-react';
import Button from '../components/Button';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import StatCard from '../components/StatCard';
import { projects } from '../data/projects';
import { testimonials } from '../data/testimonials';

const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'Dhiman Developers | Premium Construction & Development';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Luxury building" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-900/40" />
        </div>
        
        {/* Hero content */}
        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-2xl pt-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              Building <span className="text-amber-500">Excellence</span>, Creating <span className="text-amber-500">Landmarks</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-200 mb-8"
            >
              Premium construction and development solutions for residential and commercial properties.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button to="/projects" size="lg" icon>
                View Our Projects
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-white text-sm mb-2">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div 
              animate={{ height: [0, 15, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle 
                title="Excellence in Construction & Development" 
                subtitle="With a legacy of excellence and a vision for innovation, we create landmark spaces that redefine modern living and working."
              />
              
              <p className="text-slate-600 mb-6">
                At Dhiman Developers, we don't just build structures—we shape the future. From premium residential communities to cutting-edge commercial developments, our projects are crafted with precision, sustainability, and an unwavering commitment to quality.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "15+ years of industry experience",
                  "Award-winning architectural designs",
                  "Sustainable building practices",
                  "Premium quality materials"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="text-amber-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
              
              <Button to="/about" icon>
                Learn More About Us
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Construction site" 
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-amber-600 p-6 rounded-lg shadow-lg hidden md:block">
                <div className="text-white text-center">
                  <h3 className="font-bold text-3xl mb-1">150+</h3>
                  <p className="uppercase tracking-wider text-sm">Projects Completed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Premium Services" 
            subtitle="We offer a comprehensive range of construction and development services tailored to meet your specific needs."
            center
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building2 size={32} />,
                title: "Residential Development",
                description: "Luxury apartments, villas, and housing complexes designed for modern living with premium amenities and finishes.",
                delay: 0.1
              },
              {
                icon: <Building size={32} />,
                title: "Commercial Construction",
                description: "Office buildings, retail spaces, and mixed-use developments built to the highest standards of quality and functionality.",
                delay: 0.2
              },
              {
                icon: <Users size={32} />,
                title: "Project Management",
                description: "Comprehensive management of construction projects from concept to completion, ensuring timely delivery and quality control.",
                delay: 0.3
              }
            ].map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: service.delay }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow group"
              >
                <div className="w-16 h-16 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <a href="#" className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 transition-colors">
                  Learn More <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Featured Projects" 
            subtitle="Explore our portfolio of stunning residential and commercial developments completed with excellence."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/projects" variant="secondary" icon>
              View All Projects
            </Button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20 bg-slate-900 relative">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionTitle 
            title="Our Achievement Numbers" 
            subtitle="We take pride in our accomplishments and the trust our clients place in us."
            center
            light
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Calendar size={28} />,
                value: "15+",
                label: "Years Experience",
                delay: 0.1
              },
              {
                icon: <Building2 size={28} />,
                value: "150+",
                label: "Projects Completed",
                delay: 0.2
              },
              {
                icon: <Users size={28} />,
                value: "80+",
                label: "Team Members",
                delay: 0.3
              },
              {
                icon: <CheckCircle size={28} />,
                value: "100%",
                label: "Client Satisfaction",
                delay: 0.4
              }
            ].map((stat, index) => (
              <StatCard 
                key={index} 
                icon={stat.icon} 
                value={stat.value} 
                label={stat.label} 
                delay={stat.delay}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Client Testimonials" 
            subtitle="Hear what our satisfied clients have to say about their experience working with Dhiman Developers."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-slate-900 relative">
        <div className="absolute inset-0 z-0 opacity-30">
          <img 
            src="https://images.pexels.com/photos/3584942/pexels-photo-3584942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Start Your Dream Project?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-300 mb-8"
            >
              Contact us today to discuss your vision and requirements. Let's build something exceptional together.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button to="/contact" size="lg" icon>
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;