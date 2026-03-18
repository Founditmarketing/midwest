import React from 'react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="py-32 bg-industrial-charcoal border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-heritage-gold mb-6 block font-light">Endorsements</span>
          <h2 className="font-serif text-5xl text-white font-light tracking-tight">
            The Preferred Choice<br />
            <span className="italic text-gray-400">for Luxury Properties</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="text-heritage-gold text-4xl mb-6 font-serif opacity-50">"</div>
            <p className="font-serif text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-8 italic">
              "Midwest Windmill delivered an architectural masterpiece. It's not just a functioning windmill; it has become the defining landmark of our resort, admired by every guest who arrives."
            </p>
            <div className="w-12 h-[1px] bg-heritage-gold/30 mb-6"></div>
            <div className="font-sans text-[10px] tracking-widest uppercase text-white font-semibold">Director of Operations</div>
            <div className="font-sans text-xs text-gray-500 mt-1">Aspen Luxury Resort</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="text-heritage-gold text-4xl mb-6 font-serif opacity-50">"</div>
            <p className="font-serif text-xl md:text-2xl text-gray-300 leading-relaxed font-light mb-8 italic">
              "The craftsmanship is unparalleled. We needed an aeration solution that wouldn't disrupt the historic aesthetic of our estate, and they exceeded all our expectations."
            </p>
            <div className="w-12 h-[1px] bg-heritage-gold/30 mb-6"></div>
            <div className="font-sans text-[10px] tracking-widest uppercase text-white font-semibold">Estate Manager</div>
            <div className="font-sans text-xs text-gray-500 mt-1">Newport Heritage Society</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
