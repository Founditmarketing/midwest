import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <main className="pt-32 pb-40 bg-industrial-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto px-8 pt-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full aspect-[4/5] relative overflow-hidden shadow-2xl"
          >
            <img 
               src="/images/restored-heritage-windmill.png" 
               alt="Family heritage windmill" 
               className="w-full h-full object-cover grayscale-[30%]"
            />
            <div className="absolute inset-0 bg-industrial-charcoal-dark/20"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-10"
          >
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-gradient font-semibold block">The Firm</span>
            <h1 className="font-serif text-5xl md:text-7xl text-white font-light tracking-tight leading-[1.1]">
              A Legacy of <br/>
              <span className="italic text-gray-400">American Steel</span>
            </h1>
            <div className="w-16 h-[1px] bg-heritage-gold/40"></div>
            <div className="space-y-6 font-sans text-gray-300 font-light leading-relaxed text-sm md:text-base">
              <p>
                Established in 2012, Midwest Windmill Company was born out of a profound respect for authentic Midwestern craftsmanship. We are family-owned and operated, dedicated to restoring and preserving the vintage windmills that built the heart of this country.
              </p>
              <p>
                For generations, the windmill has been a symbol of resilience, innovation, and self-reliance. Over the years, we have preserved and saved thousands of windmills all over the United States, cementing our reputation as the nation’s premier heritage engineering firm.
              </p>
              <p>
                Whether providing sub-surface aeration for luxury resorts or erecting massive architectural statements on private estates, we refuse to compromise. There is no substitute for 100% American-made quality, and that peerless standard is built into every tower we touch.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-y border-white/10 py-16 mb-24">
          <div>
            <div className="font-serif text-5xl text-heritage-gold mb-2 font-light">2012</div>
            <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500">Year Founded</div>
          </div>
          <div className="border-x border-white/10">
            <div className="font-serif text-5xl text-heritage-gold mb-2 font-light">10k+</div>
            <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500">Windmills Saved</div>
          </div>
          <div>
            <div className="font-serif text-5xl text-heritage-gold mb-2 font-light">100%</div>
            <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500">American Made</div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto">
           <h3 className="font-serif text-3xl text-white font-light tracking-wide mb-8">Discuss Your Commission</h3>
           <p className="font-sans text-gray-400 font-light leading-relaxed mb-10">
             Our firm works seamlessly with architects, estate managers, and private owners. Request a formal engineering consultation today.
           </p>
           <Link 
              to="/consultation"
              className="inline-flex items-center justify-center px-12 py-4 border border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold hover:text-industrial-charcoal-dark transition-all duration-500 font-sans text-[9px] tracking-[0.3em] uppercase group"
            >
              Request a Consultation
              <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
           </Link>
        </div>

      </div>
    </main>
  );
}
