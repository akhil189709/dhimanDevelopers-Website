import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
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

      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Get In Touch" 
                subtitle="We'd love to hear from you. Contact us using the form or through our contact information."
              />
              
              <div className="space-y-8 mt-12">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Our Location</h3>
                    <p className="text-slate-600">
                      123 Construction Avenue,<br />
                      Building District, City 12345,<br />
                      Country
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Phone Number</h3>
                    <p className="text-slate-600 mb-1">
                      <a href="tel:+1234567890" className="hover:text-amber-600 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </p>
                    <p className="text-slate-600">
                      <a href="tel:+1234567891" className="hover:text-amber-600 transition-colors">
                        +1 (234) 567-891
                      </a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Email Address</h3>
                    <p className="text-slate-600 mb-1">
                      <a href="mailto:info@dhimandevelopers.com" className="hover:text-amber-600 transition-colors">
                        info@dhimandevelopers.com
                      </a>
                    </p>
                    <p className="text-slate-600">
                      <a href="mailto:sales@dhimandevelopers.com" className="hover:text-amber-600 transition-colors">
                        sales@dhimandevelopers.com
                      </a>
                    </p>
                  </div>
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex items-start"
                >
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 mr-4 flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">Working Hours</h3>
                    <p className="text-slate-600 mb-1">
                      Monday - Friday: 9:00 AM - 6:00 PM
                    </p>
                    <p className="text-slate-600">
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-semibold text-slate-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                    <a 
                      key={index}
                      href="#" 
                      className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-amber-600 hover:text-white transition-all"
                    >
                      <span className="sr-only">{social}</span>
                      <svg 
                        className="w-5 h-5" 
                        fill="currentColor" 
                        viewBox="0 0 24 24" 
                        aria-hidden="true"
                      >
                        <path 
                          fillRule="evenodd" 
                          d={
                            social === 'facebook' 
                              ? "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" 
                              : social === 'twitter'
                              ? "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" 
                              : social === 'instagram'
                              ? "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" 
                              : "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                          } 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Our Location" 
            subtitle="Visit our office to discuss your project in person."
            center
          />
          
          <div className="mt-12 bg-white p-4 rounded-lg shadow-lg">
            <div className="aspect-[16/9] w-full rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Office location" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Frequently Asked Questions" 
            subtitle="Find answers to common questions about our services and processes."
            center
          />
          
          <div className="max-w-3xl mx-auto mt-12 space-y-6">
            {[
              {
                question: "What types of projects does Dhiman Developers specialize in?",
                answer: "Dhiman Developers specializes in a wide range of construction projects, including luxury residential buildings, commercial complexes, retail spaces, and hospitality venues. We have extensive experience in both new construction and renovation projects."
              },
              {
                question: "How long does a typical construction project take?",
                answer: "The timeline for a construction project varies depending on size, complexity, and scope. A small residential project might take 6-12 months, while larger commercial developments can take 18-36 months. During the initial consultation, we provide a detailed timeline specific to your project."
              },
              {
                question: "Do you provide architectural design services?",
                answer: "Yes, we offer comprehensive architectural design services through our in-house team of experienced architects. We can take your project from concept to completion, ensuring a seamless integration of design and construction processes."
              },
              {
                question: "How do you ensure quality in construction?",
                answer: "Quality is our top priority. We implement strict quality control measures at every stage of construction, use premium materials, employ skilled craftsmen, and conduct regular inspections. Our projects adhere to the highest industry standards and building codes."
              },
              {
                question: "What is your approach to sustainable building?",
                answer: "Sustainability is integral to our construction philosophy. We incorporate energy-efficient designs, sustainable materials, and green building practices in our projects. We can also pursue green building certifications like LEED if desired by the client."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-50 rounded-lg overflow-hidden"
              >
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer p-6">
                    <h3 className="text-lg font-semibold text-slate-900">{faq.question}</h3>
                    <svg 
                      className="w-5 h-5 text-amber-600 transform group-open:rotate-180 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-6 pt-2 text-slate-600">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;