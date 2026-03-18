import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wind, Wrench, Droplets, PackageSearch } from 'lucide-react';

const services = [
  {
    icon: <Wind size={32} className="text-heritage-gold" strokeWidth={1} />,
    title: 'Custom Windmill Installation',
    desc: 'From sprawling agricultural estates to high-end commercial resorts, we provide end-to-end white-glove installation of authentic steel windmills, elevating properties with a functioning historical landmark.'
  },
  {
    icon: <Droplets size={32} className="text-heritage-gold" strokeWidth={1} />,
    title: 'Pond Aeration & Water Delivery',
    desc: 'Midwest Windmill is the only company with the capability to retrofit older windmills for modern pond aeration. We utilize sub-surface mathematical engineering to oxygenate massive bodies of water.'
  },
  {
    icon: <Wrench size={32} className="text-heritage-gold" strokeWidth={1} />,
    title: 'Heritage Repairs & Restoration',
    desc: 'Our master craftsmen have preserved thousands of vintage windmills across the country. We repair storm damage, replace rusted motors, and completely restore towers to their original glory.'
  },
  {
    icon: <PackageSearch size={32} className="text-heritage-gold" strokeWidth={1} />,
    title: 'Replacement Parts Logistics',
    desc: 'Beyond full installations, we act as the primary supplier for rare and standard Aermotor replacement parts. We ship high-grade American steel components directly to your site.'
  }
];

export default function Services() {
  return (
    <main className="pt-32 pb-40 bg-industrial-charcoal-dark min-h-screen relative overflow-hidden">
      {/* Background grain/gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-heritage-gold/5 via-transparent to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start pt-20">
            <motion.div 
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 1 }}
               className="sticky top-40"
            >
               <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold-gradient font-semibold mb-6 block">Our Services</span>
               <h1 className="font-serif text-5xl md:text-7xl text-white font-light tracking-tight leading-[1.1] mb-8">
                 Engineering<br/>
                 <span className="italic text-gray-400">Excellence</span>
               </h1>
               <p className="font-sans text-lg text-gray-400 font-light leading-relaxed max-w-md mb-12">
                 We are a full-service heritage engineering firm specializing in the preservation, installation, and optimization of authentic American windmills.
               </p>
               <Link 
                  to="/consultation"
                  className="inline-flex items-center justify-center px-10 py-4 border border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold hover:text-industrial-charcoal-dark transition-all duration-500 font-sans text-[9px] tracking-[0.3em] uppercase group"
                >
                  Request a Consultation
                  <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
               </Link>
            </motion.div>

            <div className="space-y-12">
               {services.map((svc, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    className="bg-white/5 border border-white/10 p-10 backdrop-blur-3xl hover:border-heritage-gold/30 transition-colors duration-500 group"
                  >
                     <div className="mb-8 p-4 bg-industrial-charcoal-dark border border-white/5 inline-block rounded-sm group-hover:scale-110 transition-transform duration-500">
                        {svc.icon}
                     </div>
                     <h3 className="font-serif text-3xl text-white font-light tracking-wide mb-6">{svc.title}</h3>
                     <p className="font-sans text-sm text-gray-400 font-light leading-loose">{svc.desc}</p>
                  </motion.div>
               ))}
            </div>
         </div>
      </div>
    </main>
  );
}
