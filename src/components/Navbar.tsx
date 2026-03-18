import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled || !isHome ? 'bg-black/40 backdrop-blur-3xl border-b-[1px] border-b-transparent [border-image:linear-gradient(to_right,transparent,rgba(197,160,89,0.3),transparent)_1] py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3 group">
          <span className="font-serif text-2xl tracking-widest text-heritage-gold font-light group-hover:text-heritage-gold-light transition-colors">MIDWEST</span>
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gray-400 mt-1 font-light">Windmill</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          <Link to={isHome ? "#history" : "/"} className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-300 hover:text-heritage-gold transition-colors duration-300 font-light">Our History</Link>
          <Link to={isHome ? "#portfolio" : "/"} className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-300 hover:text-heritage-gold transition-colors duration-300 font-light">Signature Projects</Link>
          <Link to={isHome ? "#engineering" : "/"} className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-300 hover:text-heritage-gold transition-colors duration-300 font-light">Heritage Engineering</Link>
          <Link to="/consultation" className="font-sans text-[10px] tracking-[0.2em] uppercase text-heritage-gold hover:text-industrial-charcoal-dark hover:bg-heritage-gold transition-all duration-300 border border-heritage-gold/30 px-6 py-2.5 rounded-sm font-light">Private Consultations</Link>
        </div>
      </div>
    </motion.nav>
  );
}
