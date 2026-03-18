import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-industrial-charcoal-dark">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          style={{ y: yBg, backgroundImage: "url('/images/midwest-windmill-installation.png')" }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full bg-cover bg-center bg-fixed opacity-50"

        ></motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-industrial-charcoal-dark/90 via-industrial-charcoal-dark/40 to-industrial-charcoal-dark"></div>
      </div>

    {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center flex flex-col items-center mt-20 md:mt-32">
        <motion.p
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase text-gold-gradient mb-8 md:mb-12 font-semibold"
        >
          Preserving the past. Powering the future.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30, filter: 'blur(20px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] text-white leading-[1.1] md:leading-[0.9] mb-10 md:mb-20 max-w-5xl font-light tracking-tight px-2"
        >
          We don't just install windmills.<br className="hidden md:block" />
          <span className="italic font-light text-white/70"> We create landmarks.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs md:text-base text-gray-400 max-w-2xl px-4 md:px-0 leading-[2] md:leading-loose font-light tracking-wide lg:tracking-wider mb-8 md:mb-0"
        >
          Midwest Windmill is the nation's premier expert in heritage wind-power engineering. From private estates to world-class resorts, we provide the innovation and safety technology required for the world's most picturesque moments.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.0 }}
          className="mt-2 md:mt-12 w-full md:w-auto px-4 md:px-0"
        >
          <Link 
            to="/consultation"
            className="flex md:inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-5 w-full md:w-auto border border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold hover:text-industrial-charcoal-dark transition-all duration-500 font-sans text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase group"
          >
            Request a Consultation
            <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
