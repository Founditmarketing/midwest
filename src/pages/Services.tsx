    import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wind, Wrench, Droplets, PackageSearch } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: <Wind size={20} className="text-heritage-gold" strokeWidth={1.5} />,
    title: 'Complete Windmill Sales',
    desc: 'We sell original American-made pumping farm windmills as complete systems — wheel, tower, and all hardware included. Whether you need a compact 8-foot wheel for a backyard pond or a massive 16-foot system for a working ranch, we have the right windmill for you. Shipped unassembled with professional installation available.',
    image: '/images/midwest-windmill-installation.png'
  },
  {
    num: '02',
    icon: <Droplets size={20} className="text-heritage-gold" strokeWidth={1.5} />,
    title: 'Pond Aeration & Water Delivery',
    desc: 'Our windmills pump water and deeply aerate ponds to eliminate algae and promote healthy aquatic life. Whether you need to fill a farm pond, oxygenate a large lake, or deliver water to livestock, we\'ll set you up with the right system for the job.',
    image: '/images/lake-aeration-system.png'
  },
  {
    num: '03',
    icon: <Wrench size={20} className="text-heritage-gold" strokeWidth={1.5} />,
    title: 'Heritage Repairs & Restoration',
    desc: 'Our team has saved and restored thousands of vintage windmills across the United States. We repair storm damage, replace worn motors, restore leaning towers, and bring old windmills back to full working condition with quality American parts.',
    image: '/images/restored-heritage-windmill.png'
  },
    {
    num: '04',
    icon: <PackageSearch size={20} className="text-heritage-gold" strokeWidth={1.5} />,
    title: 'Replacement Parts Logistics',
    desc: 'Need parts for your existing windmill? We\'re the nation\'s top supplier for Aermotor replacement parts and accessories. All parts are American-made, heavy-grade steel — no cheap imports. We ship directly to your door.',
    image: '/images/aermotor-replacement-parts.png'
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
            src="/images/luxury-resort-windmill.png" 
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
            <span className="italic text-gray-400"> & Services</span>
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
              Ready to get<br className="hidden md:block"/>
              <span className="italic text-gray-400"> your windmill?</span>
           </h3>
           <Link 
              to="/consultation"
              className="inline-flex items-center justify-center px-12 py-5 border border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold hover:text-industrial-charcoal-dark transition-all duration-500 font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase group"
            >
              Get a Free Quote
              <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
           </Link>
         </motion.div>
      </section>
    </main>
  );
}
