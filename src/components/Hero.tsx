import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-industrial-charcoal-dark">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full bg-cover bg-center bg-fixed opacity-50"
          style={{ backgroundImage: "url('/images/hero_farm_windmill.png')" }}
        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-charcoal-dark/90 via-industrial-charcoal-dark/40 to-industrial-charcoal-dark"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 text-center flex flex-col items-center mt-32">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[10px] md:text-xs tracking-[0.5em] uppercase text-gold-gradient mb-12 font-semibold"
        >
          Preserving the past. Powering the future.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-white leading-[0.9] mb-20 max-w-5xl font-light tracking-tight"
        >
          We don't just install windmills.<br />
          <span className="italic font-light text-white/70">We create landmarks.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-sm md:text-base text-gray-400 max-w-2xl leading-loose font-light tracking-wide"
        >
          Midwest Windmill is the nation's premier expert in heritage wind-power engineering. From private estates to world-class resorts, we provide the innovation and safety technology required for the world's most picturesque moments.
        </motion.p>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-6"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-heritage-gold/50 to-transparent"></div>
        <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gray-500 font-light">Discover</span>
      </motion.div>
    </section>
  );
}
