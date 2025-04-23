import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/SectionTitle';
import ProjectCard, { Project } from '../components/ProjectCard';
import { projects } from '../data/projects';

type Category = 'All' | 'Residential' | 'Commercial' | 'Hospitality';

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    document.title = 'Our Projects | Dhiman Developers';
  }, []);

  useEffect(() => {
    setFilteredProjects(
      activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory)
    );
  }, [activeCategory]);

  const categories: Category[] = ['All', 'Residential', 'Commercial', 'Hospitality'];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pb-32 bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg"
            alt="Construction project"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Our <span className="text-amber-500">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Discover our diverse portfolio across residential, commercial, and hospitality sectors.
          </motion.p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Portfolio"
            subtitle="Explore the diverse projects we've completed with precision and excellence."
            center
          />

          <div className="flex justify-center mb-12">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-slate-100 p-2 rounded-lg">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-md transition-all font-medium shadow-sm ${activeCategory === category
                      ? 'bg-amber-600 text-white'
                      : 'bg-transparent text-slate-700 hover:bg-slate-200'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl text-slate-700 mb-2">No projects available in this category.</h3>
              <p className="text-slate-500">Please select a different category or check back later.</p>
            </div>
          )}
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Development Process"
            subtitle="From concept to completion, we follow a streamlined process for every project."
            center
          />

          <div className="relative mt-20">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-amber-200 transform -translate-x-1/2"></div>

            {[
              {
                title: 'Initial Consultation',
                description: 'We start with a deep dive into your needs and goals to shape your dream project.',
                icon: '01',
                delay: 0.1,
              },
              {
                title: 'Design & Planning',
                description: 'Our expert team translates ideas into blueprints and visualizations.',
                icon: '02',
                delay: 0.2,
              },
              {
                title: 'Permits & Approvals',
                description: 'All legal documentation and permits are acquired seamlessly.',
                icon: '03',
                delay: 0.3,
              },
              {
                title: 'Construction',
                description: 'Precision and excellence define our on-site execution.',
                icon: '04',
                delay: 0.4,
              },
              {
                title: 'Quality Assurance',
                description: 'Every step is monitored to meet our high standards.',
                icon: '05',
                delay: 0.5,
              },
              {
                title: 'Project Delivery',
                description: 'Timely delivery followed by walkthroughs and satisfaction checks.',
                icon: '06',
                delay: 0.6,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: step.delay }}
                className={`relative mb-12 md:mb-24 ${index % 2 === 0
                    ? 'md:text-right md:pr-12 md:mr-auto'
                    : 'md:text-left md:pl-12 md:ml-auto'
                  } max-w-md`}
              >
                <div
                  className={`hidden md:flex absolute top-0 w-12 h-12 rounded-full bg-amber-600 text-white font-bold items-center justify-center text-xl shadow-lg ${index % 2 === 0 ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'
                    }`}
                >
                  {step.icon}
                </div>
                <div className="md:hidden flex w-12 h-12 rounded-full bg-amber-600 text-white font-bold items-center justify-center text-xl shadow-lg mb-4 mx-auto">
                  {step.icon}
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-slate-900 relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg"
            alt="Building"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Let's Build Something Exceptional Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-slate-300 mb-8"
            >
              Contact us today to transform your ideas into iconic spaces.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex gap-4 justify-center flex-wrap"
            >
              <a
                href="/contact"
                className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-md transition-colors shadow-lg hover:shadow-xl"
              >
                Contact Us
              </a>
              <a
                href="tel:+91999457050"
                className="px-8 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold rounded-md transition-colors"
              >
                Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;