import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { History, Users, ShieldCheck, MapPin } from 'lucide-react';

export default function About() {
  return (
    <main className="bg-industrial-charcoal min-h-screen relative overflow-hidden font-light">
      
      {/* Hero */}
      <section className="relative py-32 md:py-40 flex items-center justify-center border-b border-white/5">
        <div className="relative z-10 text-center px-6 mt-16">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "40px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] bg-heritage-gold/50 mx-auto mb-8"
          />
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold mb-6 block"
          >
            Our Story
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-5xl md:text-7xl text-white tracking-tight leading-[1.1]"
          >
            Established in 2012.<br className="hidden md:block"/>
            <span className="italic text-gray-400"> Family Owned & Operated.</span>
          </motion.h1>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20 md:py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative aspect-[4/5] overflow-hidden shadow-2xl group">
                <img 
                  src="/images/mark_henry.jpeg" 
                  alt="Mark Henry - Founder" 
                  className="w-full h-full object-cover object-[center_80%] grayscale-[30%] group-hover:grayscale-0 transition-all duration-[2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal-dark/80 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="w-full lg:w-1/2 space-y-8"
            >
              <div>
                <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold block mb-4">
                  Meet the Founder
                </span>
                <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-[1.15] mb-6">
                  Mark Henry
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="font-sans text-sm md:text-base text-gray-300 leading-[2] font-light">
                  At Midwest Windmill Company, we're passionate about farm windmills. What started as one man's love for these American icons has grown into the most trusted name in the windmill industry. Since 2012, we've saved and sold thousands of windmills all over the United States.
                </p>
                <p className="font-sans text-sm md:text-base text-gray-400 leading-[2] font-light">
                  Based out of Kirksville, Missouri, we sell original American-made pumping farm windmills as complete systems — wheel, tower, and all hardware included. Our windmills are calibrated using time-tested mathematical methods, proven to last for decades with proper maintenance.
                </p>
                <p className="font-sans text-sm md:text-base text-gray-400 leading-[2] font-light">
                  There is absolutely no substitute for American-made quality. While others rely on imported, mass-produced parts, we use only quality windmills and components built right in the heart of the Midwest. We strive to ensure the best quality control on every product and service we provide.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 md:py-32 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16"
          >
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold block mb-4">
              What We Do
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight leading-[1.15]">
              Your windmill can do<br className="hidden md:block"/>
              <span className="italic text-gray-400"> all of this.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <MapPin size={20} className="text-heritage-gold" strokeWidth={1.5} />, title: 'Pump Water for Your Home', desc: 'A reliable, off-grid water supply powered entirely by the wind.' },
              { icon: <History size={20} className="text-heritage-gold" strokeWidth={1.5} />, title: 'Fill & Aerate Ponds', desc: 'Deeply oxygenate your pond to prevent algae and promote healthy aquatic life.' },
              { icon: <Users size={20} className="text-heritage-gold" strokeWidth={1.5} />, title: 'Water Livestock', desc: 'Keep your cattle, horses, and livestock watered without the cost of electricity.' },
              { icon: <ShieldCheck size={20} className="text-heritage-gold" strokeWidth={1.5} />, title: 'Water Orchards & Gardens', desc: 'Irrigate entire orchards and large gardens with wind-powered water delivery.' },
              { icon: <MapPin size={20} className="text-heritage-gold" strokeWidth={1.5} />, title: 'Restore Vintage Windmills', desc: 'We repair and restore thousands of vintage windmills to full working condition.' },
              { icon: <ShieldCheck size={20} className="text-heritage-gold" strokeWidth={1.5} />, title: 'Replacement Parts', desc: 'The nation\'s top supplier for Aermotor replacement parts — all American-made steel.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="border border-white/5 bg-white/[0.02] p-8 hover:border-heritage-gold/20 transition-all duration-500 group"
              >
                <div className="p-3 rounded-full border border-white/10 bg-white/5 group-hover:border-heritage-gold/30 transition-colors inline-block mb-6">
                  {item.icon}
                </div>
                <h3 className="font-serif text-xl text-white mb-3 font-light tracking-wide">{item.title}</h3>
                <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '5,000+', label: 'Windmills Sold & Saved' },
              { value: '2012', label: 'Established' },
              { value: '50', label: 'States Served' },
              { value: '100%', label: 'American Made' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <div className="font-serif text-3xl md:text-4xl text-heritage-gold mb-2 font-light">{stat.value}</div>
                <div className="font-sans text-[8px] md:text-[9px] tracking-[0.2em] uppercase text-gray-500 font-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-12 leading-[1.1]">
            Ready to get<br className="hidden md:block"/>
            <span className="italic text-gray-400"> your windmill?</span>
          </h3>
          <Link 
            to="/pricing"
            className="inline-flex items-center justify-center px-12 py-5 border border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold hover:text-industrial-charcoal-dark transition-all duration-500 font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase group"
          >
            View Pricing & Sizes
            <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
