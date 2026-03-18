import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Heritage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={ref} id="history" className="py-20 md:py-40 bg-industrial-charcoal relative overflow-hidden">
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-industrial-charcoal-dark/95 z-10 mix-blend-multiply"></div>
        <div 
          className="w-full h-[130%] bg-cover bg-center opacity-20 grayscale"
          style={{ backgroundImage: "url('/images/restored-heritage-windmill.png')" }}
        ></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2"
          >
            <div className="relative aspect-[4/5] overflow-hidden shadow-2xl group">
              <motion.img 
                style={{ y: imgY }}
                src="/images/mark_henry.jpeg" 
                alt="Mark Henry - Founder & Master Craftsman" 
                className="w-full h-[120%] object-cover object-[center_80%] grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal-dark/80 via-transparent to-transparent"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-1/2 space-y-8 md:space-y-12"
          >
            <div>
              <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-gray-500 block mb-4 md:mb-6 font-light">
                Our History
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-white leading-[1.1] md:leading-tight font-light tracking-tight">
                Established in 2012.<br className="hidden md:block"/>
                <span className="italic text-gray-400"> Family Owned & Operated.</span>
              </h2>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              <p className="font-sans text-gray-300 leading-[2] md:leading-loose font-light text-xs md:text-base">
                At Midwest Windmill Company, we’re passionate about farm windmills. Our team has preserved and saved thousands of windmills all over the United States, becoming the most trusted name for bespoke heritage engineering.
              </p>
              <p className="font-sans text-gray-400 leading-[2] md:leading-loose font-light text-xs md:text-base">
                There is absolutely no substitute for American-made quality. While others rely on imported, mass-produced parts, we incorporate peerless craftsmanship into every windmill and tower we touch. Built right in the heart of the Midwest, our bulletproof structures are designed not just to function, but to endure.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10 flex items-center justify-between sm:justify-start sm:space-x-12">
              <div>
                <div className="font-serif text-4xl text-heritage-gold mb-1 md:mb-2 font-light">10k+</div>
                <div className="font-sans text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-gray-500 font-light">Windmills Saved</div>
              </div>
              <div>
                <div className="font-serif text-4xl text-heritage-gold mb-1 md:mb-2 font-light">100%</div>
                <div className="font-sans text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-gray-500 font-light">American Made</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
