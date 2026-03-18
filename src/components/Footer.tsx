import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-industrial-charcoal-dark border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-16">
          <Link to="/" className="flex items-center space-x-3 mb-8 md:mb-0 group">
            <span className="font-serif text-2xl tracking-widest text-heritage-gold font-light group-hover:text-heritage-gold-light transition-colors">MIDWEST</span>
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gray-400 mt-1 font-light">Windmill</span>
          </Link>
          
          <div className="flex space-x-8">
            <Link to="/portfolio" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-heritage-gold transition-colors font-light">Portfolio</Link>
            <Link to="/services" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-heritage-gold transition-colors font-light">Services</Link>
            <Link to="/craftsman" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-heritage-gold transition-colors font-light">Craftsman</Link>
            <Link to="/consultation" className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-heritage-gold transition-colors font-light">Consultations</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16 font-sans font-light">
          <div>
            <div className="text-[10px] tracking-widest uppercase text-gray-500 mb-2">Location</div>
            <div className="text-sm text-gray-300">22275 Youngstown Trail<br/>Kirksville, MO 63501</div>
          </div>
          <div>
             <div className="text-[10px] tracking-widest uppercase text-gray-500 mb-2">Contact</div>
             <div className="text-sm text-gray-300"><a href="tel:6603418951" className="hover:text-heritage-gold transition-colors">660-341-8951</a><br /><a href="mailto:markhenry@midwestwindmillcompany.com" className="hover:text-heritage-gold transition-colors">markhenry@midwestwindmillcompany.com</a></div>
          </div>
          <div>
            <div className="text-[10px] tracking-widest uppercase text-gray-500 mb-2">Hours</div>
            <div className="text-sm text-gray-300">Mon-Sat: 7 AM - 7 PM<br/>Sunday: Closed</div>
          </div>
          <div>
             <div className="text-[10px] tracking-widest uppercase text-gray-500 mb-2">Service Area</div>
             <div className="text-sm text-gray-300">Proudly selling and installing windmills across the entire United States.</div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-white/5 mb-16"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-600 mb-8 md:mb-0 font-light">
            &copy; {new Date().getFullYear()} Midwest Windmill Company. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            {/* Buried links */}
            <Link to="/legacy-parts" className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-700 hover:text-gray-500 transition-colors font-light">Legacy Parts</Link>
            <Link to="/legacy-parts" className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-700 hover:text-gray-500 transition-colors font-light">DIY Tech Support</Link>
            <a href="#" className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-700 hover:text-gray-500 transition-colors font-light">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
