import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${scrolled
          ? 'bg-slate-700/70 backdrop-blur-md border-b border-white/20 shadow-md py-3'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src="https://dhiman.thedmsolutions.in/wp-content/uploads/2025/03/Dhiman-Final-Logo.png"
              alt="Dhiman Developers Logo"
              className="h-10 w-auto"
            />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-base font-medium pb-1 relative transition-all hover:text-amber-600
                      ${isActive ? 'text-amber-600' : scrolled ? 'text-white' : 'text-white'}
                      after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0
                      after:h-0.5 after:bg-amber-600 after:transition-all after:duration-300
                      hover:after:w-full ${isActive ? 'after:w-full' : ''}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-50 transition-colors ${scrolled || isMenuOpen ? 'text-white' : 'text-white'
              }`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-0 bg-slate-900/90 backdrop-blur-lg z-40"
          >
            <div className="flex flex-col justify-center items-center h-full">
              <ul className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <li key={item.path} className="text-center">
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-xl font-medium ${isActive ? 'text-amber-600' : 'text-white'
                        } hover:text-amber-600 transition-colors`
                      }
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
