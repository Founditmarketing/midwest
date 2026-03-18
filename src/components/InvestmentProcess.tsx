import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function InvestmentProcess() {
  return (
    <section id="private-consultations" className="py-32 bg-industrial-charcoal-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-heritage-gold/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="space-y-8"
        >
          <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-heritage-gold block font-light">
            Investment & Process
          </span>
          
          <h2 className="font-serif text-6xl md:text-7xl text-white leading-[1.1] font-light tracking-tight">
            Bespoke Engineering<br />
            <span className="italic font-light text-gray-400">for Exclusive Estates</span>
          </h2>

          <div className="w-24 h-[1px] bg-heritage-gold/30 mx-auto my-16"></div>

          <p className="font-sans text-lg md:text-xl text-gray-400 leading-loose font-light max-w-2xl mx-auto">
            Due to the bespoke nature of our heritage projects, a formal consultation is required to assess the engineering requirements and site logistics. Custom installations begin at $25,000.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 my-20">
            {[
              { step: '01', title: 'Consultation', desc: 'Initial project scoping and vision alignment.' },
              { step: '02', title: 'Site Assessment', desc: 'Engineering review of logistics and placement.' },
              { step: '03', title: 'Engineering', desc: 'Custom fabrication to heritage standards.' },
              { step: '04', title: 'Installation', desc: 'White-glove delivery and assembly on site.' }
            ].map(s => (
              <div key={s.step} className="text-left border-l border-white/10 pl-6 hover:border-heritage-gold/50 transition-colors">
                <div className="font-serif text-2xl text-heritage-gold mb-2 font-light">{s.step}</div>
                <div className="font-sans text-sm text-white mb-2 uppercase tracking-widest">{s.title}</div>
                <div className="font-sans text-xs text-gray-400 leading-relaxed font-light">{s.desc}</div>
              </div>
            ))}
          </div>

          <Link 
            to="/consultation"
            className="inline-flex items-center justify-center px-12 py-5 border border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold hover:text-industrial-charcoal-dark transition-all duration-500 font-sans text-[10px] tracking-[0.3em] uppercase group"
          >
            Request a Consultation
            <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
