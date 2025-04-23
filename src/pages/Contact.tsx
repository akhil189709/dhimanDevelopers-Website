import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | Dhiman Developers';
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pb-32 bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Office interior"
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
            Contact <span className="text-amber-500">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-300 max-w-3xl mx-auto"
          >
            Get in touch with our team for inquiries, partnerships, and project consultations
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle
                title="Get In Touch"
                subtitle="We'd love to hear from you. Contact us using the form or through our contact information."
              />

              <div className="space-y-8 mt-12">
                {[
                  {
                    icon: <MapPin size={24} />,
                    title: 'Our Location',
                    content: `505, 5th Floor, Emaar The Palm Square,\nSector 66, Gurugram - 122102, Haryana`
                  },
                  {
                    icon: <Phone size={24} />,
                    title: 'Phone Number',
                    content: (
                      <>
                        <a href="tel:+1234567890" className="block hover:text-amber-600 transition-colors">  +91 99945 7050</a>

                      </>
                    )
                  },
                  {
                    icon: <Mail size={24} />,
                    title: 'Email Address',
                    content: (
                      <>
                        <a href="mailto:info@dhimandevelopers.com" className="block hover:text-amber-600 transition-colors">akshay@dhimandevelopers.com</a>

                      </>
                    )
                  },
                  {
                    icon: <Clock size={24} />,
                    title: 'Working Hours',
                    content: (
                      <>
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                      </>
                    )
                  }
                ].map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-1">{info.title}</h3>
                      <div className="text-slate-600 whitespace-pre-line">{info.content}</div>
                    </div>
                  </motion.div>
                ))}

                {/* Follow Us Section */}
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-slate-900 mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    {[
                      { href: 'https://facebook.com/dhimandevelopers', icon: <Facebook size={20} /> },
                      { href: 'https://twitter.com/dhimandev', icon: <Twitter size={20} /> },
                      { href: 'https://instagram.com/dhimandevelopers', icon: <Instagram size={20} /> },
                      { href: 'https://linkedin.com/company/dhimandevelopers', icon: <Linkedin size={20} /> },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-amber-600 hover:text-white transition-all"
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Our Location"
            subtitle="Visit our office to discuss your project in person."
            center
          />
          <div>
            <iframe
              title="Dhiman Developers Office Map"
              src="https://www.google.com/maps?q=505,+5th+Floor,+Emaar+The+Palm+Square,+Sector+66,+Gurugram+-+122102&output=embed"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
