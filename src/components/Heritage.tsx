import React from 'react';
import { motion } from 'motion/react';

export default function Heritage() {
  return (
    <section id="history" className="py-32 md:py-40 bg-industrial-charcoal relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-industrial-charcoal-dark/95 z-10 mix-blend-multiply"></div>
        <div 
          className="w-full h-full bg-cover bg-center opacity-20 grayscale"
          style={{ backgroundImage: "url('/images/realistic_barn_windmill.png')" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl">
              <img 
                src="/images/realistic_barn_windmill.png" 
                alt="Master craftsman restoring a heritage windmill" 
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal-dark/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 space-y-12"
          >
            <div>
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gray-500 block mb-6 font-light">
                Our History
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight font-light tracking-tight">
                Established in 2012.<br />
                <span className="italic text-gray-400">Family Owned & Operated.</span>
              </h2>
            </div>
            
            <div className="space-y-8">
              <p className="font-sans text-gray-300 leading-loose font-light text-sm md:text-base">
                At Midwest Windmill Company, we’re passionate about farm windmills. Our team has preserved and saved thousands of windmills all over the United States, becoming the most trusted name for bespoke heritage engineering.
              </p>
              <p className="font-sans text-gray-400 leading-loose font-light text-sm md:text-base">
                There is absolutely no substitute for American-made quality. While others rely on imported, mass-produced parts, we incorporate peerless craftsmanship into every windmill and tower we touch. Built right in the heart of the Midwest, our bulletproof structures are designed not just to function, but to endure.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center space-x-12">
              <div>
                <div className="font-serif text-4xl text-heritage-gold mb-2 font-light">10k+</div>
                <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500 font-light">Windmills Saved</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-heritage-gold mb-2 font-light">100%</div>
                <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500 font-light">American Made</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
