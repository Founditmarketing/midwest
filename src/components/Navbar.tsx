import React, { useState, useEffect, useRef } from 'react';
import logoWhite from '../assets/Midwest-Windmill-Logo-White.png';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { SERVICE_CATEGORIES, SERVICE_ENTITIES } from '../data/serviceEntities';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Décor', path: '/windmill-decor' },
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
          <Link to="/" className="relative z-50 group">
            <img
              src={logoWhite}
              alt="Midwest Windmill Company"
              className="h-24 w-auto object-contain brightness-100 group-hover:brightness-110 transition-all duration-300"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            {/* Services Dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-300 hover:text-heritage-gold transition-colors duration-300 font-light flex items-center gap-1"
              >
                Services
                <ChevronDown size={10} className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[680px] bg-industrial-charcoal-dark/98 backdrop-blur-2xl border border-white/10 shadow-2xl"
                  >
                    <div className="p-6">
                      {/* All Services link */}
                      <Link
                        to="/services"
                        className="block font-sans text-[9px] tracking-[0.3em] uppercase text-heritage-gold mb-6 hover:text-heritage-gold-light transition-colors"
                      >
                        View All Services →
                      </Link>

                      <div className="grid grid-cols-2 gap-6">
                        {SERVICE_CATEGORIES.map((cat) => (
                          <div key={cat.name}>
                            <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-gray-600 block mb-3">
                              {cat.name}
                            </span>
                            <div className="space-y-1.5">
                              {cat.slugs.map((slug) => {
                                const entity = SERVICE_ENTITIES.find(e => e.slug === slug);
                                if (!entity) return null;
                                return (
                                  <Link
                                    key={slug}
                                    to={`/services/${slug}`}
                                    className="block font-sans text-[11px] text-gray-400 hover:text-heritage-gold transition-colors duration-200 font-light leading-relaxed"
                                  >
                                    {entity.h1}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-300 hover:text-heritage-gold transition-colors duration-300 font-light">
                {link.name}
              </Link>
            ))}
            <Link to="/consultation" className="font-sans text-[10px] tracking-[0.2em] uppercase text-heritage-gold hover:text-industrial-charcoal-dark hover:bg-heritage-gold transition-all duration-300 border border-heritage-gold/30 px-6 py-2.5 rounded-sm font-light">Get a Quote</Link>
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
            className="fixed inset-0 z-40 bg-industrial-charcoal-dark/95 backdrop-blur-2xl flex flex-col items-center justify-start pt-32 pb-12 overflow-y-auto md:hidden"
          >
            {/* Services Accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="font-serif text-3xl text-gray-300 hover:text-heritage-gold transition-colors font-light flex items-center gap-2 mb-4"
            >
              Services
              <ChevronDown size={20} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {mobileServicesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-4 px-8 w-full max-w-sm"
                >
                  <Link to="/services" className="block text-center font-sans text-xs text-heritage-gold mb-4 tracking-widest uppercase">
                    All Services
                  </Link>
                  {SERVICE_CATEGORIES.map((cat) => (
                    <div key={cat.name} className="mb-4">
                      <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-gray-600 block mb-2 text-center">
                        {cat.name}
                      </span>
                      {cat.slugs.map((slug) => {
                        const entity = SERVICE_ENTITIES.find(e => e.slug === slug);
                        if (!entity) return null;
                        return (
                          <Link
                            key={slug}
                            to={`/services/${slug}`}
                            className="block font-sans text-sm text-gray-400 hover:text-heritage-gold transition-colors py-1 text-center"
                          >
                            {entity.h1}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="font-serif text-3xl text-gray-300 hover:text-heritage-gold transition-colors font-light mb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/consultation" 
              className="mt-8 font-sans text-xs tracking-widest uppercase text-heritage-gold border border-heritage-gold/30 px-8 py-3 rounded-sm"
            >
              Get a Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
