import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Craftsman', path: '/craftsman' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || location.pathname !== '/' ? 'bg-black/80 backdrop-blur-3xl border-b-[1px] border-b-transparent [border-image:linear-gradient(to_right,transparent,rgba(197,160,89,0.3),transparent)_1] py-4' : 'bg-transparent py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 group relative z-50">
            <span className="font-serif text-2xl tracking-widest text-heritage-gold font-light group-hover:text-heritage-gold-light transition-colors">MIDWEST</span>
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gray-400 mt-1 font-light">Windmill</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-300 hover:text-heritage-gold transition-colors duration-300 font-light">
                {link.name}
              </Link>
            ))}
            <Link to="/consultation" className="font-sans text-[10px] tracking-[0.2em] uppercase text-heritage-gold hover:text-industrial-charcoal-dark hover:bg-heritage-gold transition-all duration-300 border border-heritage-gold/30 px-6 py-2.5 rounded-sm font-light">Private Consultations</Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 p-2 text-heritage-gold hover:text-white transition-colors"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-industrial-charcoal-dark/95 backdrop-blur-2xl flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="font-serif text-3xl text-gray-300 hover:text-heritage-gold transition-colors font-light"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/consultation" 
              className="mt-8 font-sans text-xs tracking-widest uppercase text-heritage-gold border border-heritage-gold/30 px-8 py-3 rounded-sm"
            >
              Consultations
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
