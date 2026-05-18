import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Ruler, DollarSign } from 'lucide-react';

const windmills = [
  {
    wheelSize: "8'",
    towerHeight: "21'",
    price: '$7,000',
    image: '/images/windmill-8ft-21ft.png',
    imagePosition: 'center',
  },
  {
    wheelSize: "8'",
    towerHeight: "27'",
    price: '$7,500',
    image: '/images/windmill-8ft-27ft.png',
    imagePosition: 'center',
  },
  {
    wheelSize: "8'",
    towerHeight: "33'",
    price: '$8,000',
    image: '/images/windmill-8ft-33ft.png',
    imagePosition: 'center',
  },
  {
    wheelSize: "8'",
    towerHeight: "40'",
    price: '$9,000',
    image: '/images/windmill-8ft-40ft.png',
    imagePosition: 'center',
  },
  {
    wheelSize: "10'",
    towerHeight: "40'",
    price: '$13,500',
    image: '/images/windmill-10ft-40ft.png',
    imagePosition: 'center',
  },
  {
    wheelSize: "16'",
    towerHeight: "40'",
    price: '$37,500',
    image: '/images/windmill-16ft-40ft.png',
    imagePosition: 'center',
  },
];

export default function Pricing() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <main className="bg-industrial-charcoal min-h-screen relative overflow-hidden font-light">
      
      {/* Hero */}
      <section className="relative h-[55vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-industrial-charcoal-dark/90 z-10"></div>
          <img 
            src="/images/hero_farm_windmill.png" 
            alt="Windmill silhouette" 
            className="w-full h-full object-cover grayscale opacity-30"
          />
        </motion.div>
        
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
            Complete Windmill Systems
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-5xl md:text-7xl text-white tracking-tight leading-[1.1]"
          >
            Pricing<br className="hidden md:block"/>
            <span className="italic text-gray-400"> & Sizing</span>
          </motion.h1>
        </div>
      </section>

      {/* Intro Note */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-sans text-sm md:text-base text-gray-400 leading-[2] max-w-2xl mx-auto"
          >
            All windmills are sold as <span className="text-white">complete wheel assemblies on steel towers</span>, shipped unassembled for on-site installation. Prices shown are starting prices — custom configurations, assembly services, and site-specific engineering are available upon consultation.
          </motion.p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20 md:mb-28"
          >
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-8 h-[1px] bg-heritage-gold/50"></div>
              <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold">
                Standard Configurations
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-[1.15]">
              Complete Wheel<br className="hidden md:block"/>
              <span className="italic text-gray-400"> on Tower</span>
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {windmills.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-heritage-gold/20 transition-all duration-700"
              >
                {/* Card Image */}
                <div className="aspect-[3/4] overflow-hidden relative">
                  <div className="absolute inset-0 bg-industrial-charcoal-dark/10 z-10 group-hover:bg-transparent transition-colors duration-1000"></div>
                  <img 
                    src={item.image}
                    alt={`${item.wheelSize} wheel on ${item.towerHeight} tower`}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[2s] ease-out"
                    style={{
                      objectPosition: item.imagePosition === 'left' ? '0% 50%' : item.imagePosition === 'right' ? '100% 50%' : '50% 50%',
                    }}
                  />
                </div>

                {/* Card Info */}
                <div className="p-6 md:p-8">
                  {/* Size specs */}
                  <div className="flex items-center space-x-3 mb-4">
                    <Ruler size={14} className="text-heritage-gold/60" strokeWidth={1.5} />
                    <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500">
                      Specifications
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight mb-1 leading-tight">
                    {item.wheelSize} Complete Wheel
                  </h3>
                  <p className="font-sans text-sm text-gray-400 mb-1">
                    on a {item.towerHeight} Tower
                  </p>
                  <p className="font-sans text-[10px] tracking-wider uppercase text-gray-500 mb-6">
                    (Unassembled)
                  </p>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-heritage-gold/20 to-transparent mb-6"></div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign size={14} className="text-heritage-gold/60" strokeWidth={1.5} />
                      <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500">
                        Starting at
                      </span>
                    </div>
                    <span className="font-serif text-2xl md:text-3xl text-heritage-gold tracking-tight">
                      {item.price}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Configuration Note */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-industrial-charcoal-dark border border-white/5 p-8 md:p-12"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-6 h-[1px] bg-heritage-gold/50"></div>
              <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold">
                Note
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight mb-4 leading-tight">
              Custom Configurations Available
            </h3>
            <p className="font-sans text-sm text-gray-400 leading-[2] mb-8 max-w-2xl">
              The prices listed above are for standard unassembled packages. We offer a full range of custom configurations including professional on-site assembly, extended tower heights, specialized aeration setups, and heritage restoration finishes. Contact us for a personalized quote tailored to your property and requirements.
            </p>
            <Link 
              to="/consultation"
              className="inline-flex items-center space-x-4 group"
            >
              <span className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-400 group-hover:text-heritage-gold transition-colors">
                Request a Custom Quote
              </span>
              <span className="text-heritage-gold group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-industrial-charcoal border-t border-white/5 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h3 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-12 leading-[1.1]">
            Ready to invest in<br className="hidden md:block"/>
            <span className="italic text-gray-400"> American steel?</span>
          </h3>
          <Link 
            to="/consultation"
            className="inline-flex items-center justify-center px-12 py-5 border border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold hover:text-industrial-charcoal-dark transition-all duration-500 font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase group"
          >
            Schedule a Consultation
            <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
