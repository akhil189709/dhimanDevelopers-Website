import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, CheckCircle, Users, Award, ShieldCheck, Lightbulb, Recycle } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import StatCard from '../components/StatCard';

const About: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Dhiman Developers';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pb-32 bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Architecture blueprint"
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
            About <span className="text-amber-500">Dhiman Developers</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Building excellence and creating landmarks since 2020
          </motion.p>
        </div>
      </section>

      {/* Main About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Office building"
                className="w-full rounded-lg shadow-xl"
              />
              {/* <div className="absolute -bottom-6 -right-6 p-4 bg-white shadow-lg rounded-lg w-40 md:w-60 hidden md:block">
                <p className="text-amber-600 font-bold">ESTABLISHED</p>
                <p className="text-3xl font-bold text-slate-900">2020</p>
              </div> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTitle
                title="Our Story"
                subtitle="At Dhiman Developers, we don't just build structures—we shape the future."
              />

              <p className="text-slate-600 mb-6">
                With a legacy of excellence and a vision for innovation, we create landmark spaces that redefine modern living and working. From premium residential communities to cutting-edge commercial developments, our projects are crafted with precision, sustainability, and an unwavering commitment to quality.
              </p>

              <p className="text-slate-600 mb-6">
                Every structure we build is designed to inspire, connect, and stand the test of time. Driven by integrity and a passion for excellence, Dhiman Developers is dedicated to delivering not just spaces, but experiences that enhance lives and drive progress.
              </p>

              <div className="flex gap-4 flex-wrap mt-8">
                <Button to="/projects" icon>
                  View Our Projects
                </Button>
                <Button to="/contact" variant="outline">
                  Contact Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Vision & Mission"
            subtitle="Our guiding principles that drive us to excellence"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
                <Lightbulb size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600">
                To be the most trusted and innovative construction and development company, creating spaces that inspire and enrich communities globally while setting new standards in quality, sustainability, and architectural excellence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mb-6">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600">
                To deliver exceptional real estate developments that exceed client expectations through innovation, integrity, and teamwork. We are committed to creating lasting value for our clients, partners, and communities while maintaining the highest standards of quality and service.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Journey in Numbers"
            subtitle="A testament to our commitment and excellence in the construction industry"
            center
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                icon: <Calendar size={28} />,
                value: "15+",
                label: "Years Experience",
                delay: 0.1
              },
              {
                icon: <Award size={28} />,
                value: "20+",
                label: "Awards Won",
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
                value: "150+",
                label: "Projects Completed",
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

      {/* Core Values */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Core Values"
            subtitle="The principles that guide our work and relationships"
            center
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Excellence",
                description: "We pursue excellence in every aspect of our work, striving to exceed expectations and deliver superior results.",
                icon: <Award size={32} />,
                delay: 0.1
              },
              {
                title: "Integrity",
                description: "We conduct business with honesty, transparency, and ethical principles, building trust with our clients and partners.",
                icon: <ShieldCheck size={32} />,
                delay: 0.2
              },
              {
                title: "Innovation",
                description: "We embrace innovative approaches and technologies to create cutting-edge solutions that address modern challenges.",
                icon: <Lightbulb size={32} />,
                delay: 0.3
              },
              {
                title: "Sustainability",
                description: "We are committed to environmentally responsible practices, minimizing our footprint and creating sustainable developments.",
                icon: <Recycle size={32} />,
                delay: 0.4
              },
              {
                title: "Teamwork",
                description: "We foster collaboration and value the diverse skills and perspectives of our team members to achieve shared goals.",
                icon: <Users size={32} />,
                delay: 0.5
              },
              {
                title: "Client Focus",
                description: "We prioritize our clients' needs and goals, working closely with them to transform their vision into reality.",
                icon: <CheckCircle size={32} />,
                delay: 0.6
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: value.delay }}
                className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 transition-colors"
              >
                <div className="w-16 h-16 rounded-full bg-amber-600/20 flex items-center justify-center text-amber-500 mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Leadership Team"
            subtitle="Meet the experienced professionals leading Dhiman Developers"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              {
                name: "Rahul Dhiman",
                position: "Founder & CEO",
                image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 0.1
              },
              {
                name: "Priya Sharma",
                position: "Chief Architect",
                image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 0.2
              },
              {
                name: "Vikram Singh",
                position: "Construction Director",
                image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 0.3
              },
              {
                name: "Anita Patel",
                position: "Finance Director",
                image: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                delay: 0.4
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: member.delay }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-xl">{member.name}</h3>
                    <p className="text-amber-300">{member.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Build Your Dream Project?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-white/90 mb-8"
            >
              Contact us today to discuss your vision. We'll bring it to life with excellence and precision.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button to="/contact" variant="secondary" size="lg" icon>
                Contact Our Team
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;