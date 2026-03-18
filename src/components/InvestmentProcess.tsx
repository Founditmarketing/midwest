import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function InvestmentProcess() {
  return (
    <section id="private-consultations" className="py-20 md:py-32 bg-industrial-charcoal border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-heritage-gold/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-6 md:space-y-8 max-w-4xl mx-auto"
        >
          <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase text-heritage-gold block font-light">
            Investment & Process
          </span>
          
          <h2 className="font-serif text-5xl md:text-7xl text-white leading-[1.1] md:leading-[1.1] font-light tracking-tight">
            The White-Glove<br className="hidden md:block"/>
            <span className="italic font-light text-gray-400"> Commission Experience</span>
          </h2>

          <div className="w-16 md:w-24 h-[1px] bg-heritage-gold/30 mx-auto my-10 md:my-16"></div>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-20 md:gap-y-24 mt-20 md:mt-32 text-left">
          {[
            { 
              step: '01', 
              timeline: 'Week 1', 
              title: 'Private Scoping Consultation', 
              desc: 'We begin with a private consultation to understand the architectural vision of your property. Our experts discuss your landscaping needs, whether aesthetic or functional aeration, and evaluate site feasibility to provide a tailored project scope.' 
            },
            { 
              step: '02', 
              timeline: 'Weeks 2-3', 
              title: 'Site Engineering & Logistics', 
              desc: 'Our principal engineers analyze wind patterns, soil composition, and terrain logistics. We calculate sub-surface aeration requirements for ponds or structural load testing for grand estates to ensure your installation will operate flawlessly.' 
            },
            { 
              step: '03', 
              timeline: 'Weeks 4-10', 
              title: 'Bespoke Fabrication', 
              desc: 'True American craftsmanship takes time. Each tower and windmill head is forged from heavy-gauge galvanized steel in the Midwest. We rigorously assemble and balance the components to absolute historical and mechanical perfection.' 
            },
            { 
              step: '04', 
              timeline: 'Week 11', 
              title: 'White-Glove Installation', 
              desc: 'Our specialized crew travels directly to your estate with the completed machinery. Using heavy cranes and precision alignment, we erect your fully functioning landmark—leaving your landscape pristine and your new windmill powering the future.' 
            }
          ].map((s, idx) => (
            <motion.div 
              key={s.step} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12 border-l border-white/10 hover:border-heritage-gold/50 transition-colors duration-500 group"
            >
              <div className="absolute left-0 top-0 -translate-x-1/2 w-3 h-3 bg-industrial-charcoal border-2 border-heritage-gold/30 rounded-full group-hover:bg-heritage-gold transition-colors duration-500"></div>
              
              <div className="flex items-baseline space-x-4 mb-4">
                <div className="font-serif text-4xl md:text-5xl text-heritage-gold font-light">{s.step}</div>
                <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-500 group-hover:text-heritage-gold/70 transition-colors">{s.timeline}</div>
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 font-light tracking-wide">{s.title}</h3>
              <p className="font-sans text-sm md:text-base text-gray-400 leading-relaxed font-light">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
           className="mt-20 md:mt-32"
        >
          <Link 
            to="/consultation"
            className="flex md:inline-flex items-center justify-center px-8 py-4 md:px-12 md:py-5 w-full md:w-auto border border-heritage-gold text-heritage-gold hover:bg-heritage-gold hover:text-industrial-charcoal-dark transition-all duration-500 font-sans text-[9px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase group"
          >
            Request a Consultation
            <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
