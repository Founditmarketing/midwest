import React from 'react';
import { motion } from 'motion/react';

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-industrial-charcoal border-y border-white/5 relative overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-heritage-gold mb-4 md:mb-6 block font-light">Endorsements</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white font-light tracking-tight leading-[1.1] md:leading-tight">
            The Preferred Choice<br className="hidden md:block"/>
            <span className="italic text-gray-400"> for Luxury Properties</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="flex space-x-1 mb-4 md:mb-6 text-heritage-gold">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="font-serif text-lg md:text-xl text-gray-300 leading-[1.8] md:leading-relaxed font-light mb-6 md:mb-8 italic">
              "Let me express how satisfied I am with the performance and work by the crew from Midwest Windmill... They had the whole machine up in one day. I have a beautiful piece of Americana standing in my line of sight thanks to Midwest."
            </p>
            <div className="w-12 h-[1px] bg-heritage-gold/30 mb-6"></div>
            <div className="font-sans text-[9px] md:text-[10px] tracking-widest uppercase text-white font-semibold">John P.</div>
            <div className="font-sans text-[10px] md:text-xs text-gray-500 mt-1">Google Review</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="flex space-x-1 mb-4 md:mb-6 text-heritage-gold">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="font-serif text-lg md:text-xl text-gray-300 leading-[1.8] md:leading-relaxed font-light mb-6 md:mb-8 italic">
              "I was truly impressed with this company. They came down to Texas to help another customer and brought an extra windmill head and made me a great deal to get my mill back up and running. I would highly recommend anyone considering a windmill to contact Mark and his team!"
            </p>
            <div className="w-12 h-[1px] bg-heritage-gold/30 mb-6"></div>
            <div className="font-sans text-[9px] md:text-[10px] tracking-widest uppercase text-white font-semibold">Christian Combs</div>
            <div className="font-sans text-[10px] md:text-xs text-gray-500 mt-1">Google Review</div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex flex-col items-center text-center group"
          >
            <div className="flex space-x-1 mb-4 md:mb-6 text-heritage-gold">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <p className="font-serif text-lg md:text-xl text-gray-300 leading-[1.8] md:leading-relaxed font-light mb-6 md:mb-8 italic">
              "This company did a fantastic job of mounting my Aeromotor head on the tower I had erected earlier. Great service and very accommodating. Helped fulfill a dream of replacing the windmill that blew down in 1969 on my family homestead in SD."
            </p>
            <div className="w-12 h-[1px] bg-heritage-gold/30 mb-6"></div>
            <div className="font-sans text-[9px] md:text-[10px] tracking-widest uppercase text-white font-semibold">Lynn Tjeerdsma</div>
            <div className="font-sans text-[10px] md:text-xs text-gray-500 mt-1">Google Review</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
