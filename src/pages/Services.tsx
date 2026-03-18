    import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wind, Wrench, Droplets, PackageSearch } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: <Wind size={20} className="text-heritage-gold" strokeWidth={1.5} />,
    title: 'Custom Windmill Installation',
    desc: 'From sprawling agricultural estates to high-end commercial resorts, we provide end-to-end white-glove installation of authentic steel windmills. We don’t just erect a structure; we craft a functioning historical landmark that dominates the horizon absolute permanence.',
    image: '/images/realistic_hero_windmill.png'
  },
  {
    num: '02',
    icon: <Droplets size={20} className="text-heritage-gold" strokeWidth={1.5} />,
    title: 'Pond Aeration & Water Delivery',
    desc: 'Midwest Windmill is the only firm with the capability to retrofit older windmills for modern pond aeration. We utilize sub-surface mathematical engineering and massive rotor torque to deeply oxygenate massive bodies of water, eliminating algae and fostering aquatic life.',
    image: '/images/realistic_aeration_windmill.png'
  },
  {
    num: '03',
    icon: <Wrench size={20} className="text-heritage-gold" strokeWidth={1.5} />,
    title: 'Heritage Repairs & Restoration',
    desc: 'Our master craftsmen have preserved thousands of vintage windmills across the country. We repair catastrophic storm damage, replace rusted motors with heavily-calibrated modern equivalents, and completely restore leaning towers to their absolute original glory.',
    image: '/images/realistic_barn_windmill.png'
  },
  {
    num: '04',
    icon: <PackageSearch size={20} className="text-heritage-gold" strokeWidth={1.5} />,
    title: 'Replacement Parts Logistics',
    desc: 'Beyond full-scale installations, we act as the premier supplier for rare and standard Aermotor replacement parts. We ship high-grade American steel components directly to your site, bypassing cheap imports to guarantee decade-spanning durability.',
    image: '/images/estate_farm_windmill.png'
  }
];

export default function Services() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <main className="bg-industrial-charcoal min-h-screen relative overflow-hidden font-light">
      
      {/* Editorial Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-industrial-charcoal-dark/90 z-10"></div>
          <img 
            src="/images/realistic_resort_windmill.png" 
            alt="Windmill at resort" 
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
            Capabilities
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-5xl md:text-7xl text-white tracking-tight leading-[1.1]"
          >
            Engineering<br className="hidden md:block"/>
            <span className="italic text-gray-400"> Excellence</span>
          </motion.h1>
        </div>
      </section>

      {/* Services List Editorial */}
      <section className="py-24 md:py-40">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-32 md:space-y-48">
          {services.map((svc, index) => (
            <div key={svc.num} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
              
              {/* Image Gallery Block */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[45%] relative group"
              >
                {/* Gallery Matte Frame */}
                <div className="p-4 md:p-6 border border-white/5 bg-white/[0.02] backdrop-blur-sm">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <div className="absolute inset-0 bg-industrial-charcoal-dark/10 z-10 group-hover:bg-transparent transition-colors duration-1000"></div>
                    <img 
                      src={svc.image} 
                      alt={svc.title}
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-[2s] ease-out"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Text Block */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-[55%]"
              >
                <div className="flex items-center space-x-6 mb-10">
                  <span className="font-serif text-2xl text-heritage-gold/50 tracking-widest">{svc.num}</span>
                  <div className="w-12 h-[1px] bg-white/10"></div>
                  <div className="p-3 border border-white/5 rounded-full shrink-0 text-heritage-gold/70 group-hover:text-heritage-gold transition-colors">
                    {svc.icon}
                  </div>
                </div>

                <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-8 leading-[1.15]">
                  {svc.title}
                </h2>
                
                <p className="font-sans text-sm md:text-base text-gray-400 leading-[2] md:leading-loose mb-12 max-w-lg">
                  {svc.desc}
                </p>

                <div className="w-full h-[1px] bg-gradient-to-r from-heritage-gold/30 to-transparent mb-8 opacity-50"></div>

                <Link 
                  to="/consultation"
                 className="group inline-flex items-center space-x-4 transition-colors duration-300"
                >
                  <span className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-400 group-hover:text-heritage-gold transition-colors">
                    Inquire About This Service
                  </span>
                  <span className="text-heritage-gold group-hover:translate-x-2 transition-transform duration-300">→</span>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
      
      {/* End CTA */}
      <section className="py-32 bg-industrial-charcoal border-t border-white/5 text-center px-6">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1 }}
         >
           <h3 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-12 leading-[1.1]">
              Ready to create your<br className="hidden md:block"/>
              <span className="italic text-gray-400"> heritage landmark?</span>
           </h3>
           <Link 
              to="/consultation"
              className="inline-flex items-center justify-center px-12 py-5 border border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold hover:text-industrial-charcoal-dark transition-all duration-500 font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase group"
            >
              Request a Consultation
              <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
           </Link>
         </motion.div>
      </section>
    </main>
  );
}
