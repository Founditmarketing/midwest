import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'The Grand Resort',
    location: 'Aspen, Colorado',
    description: 'A 60-foot heritage installation serving as the centerpiece for a world-class mountain resort.',
    category: 'Commercial Hospitality',
    image: '/images/realistic_resort_windmill.png'
  },
  {
    id: 2,
    title: 'The Vanderbilt Estate',
    location: 'Newport, Rhode Island',
    description: 'Bespoke aeration innovation seamlessly integrated into a historic 19th-century landscape.',
    category: 'Private Estate',
    image: '/images/estate_farm_windmill.png'
  },
  {
    id: 3,
    title: 'The Willow Wedding Venue',
    location: 'Napa Valley, California',
    description: 'A picturesque landmark providing the perfect backdrop for exclusive private events.',
    category: 'Luxury Venue',
    image: '/images/realistic_wedding_windmill.png'
  },
  {
    id: 4,
    title: 'Heritage Wind Power Farm',
    location: 'Great Plains, Nebraska',
    description: 'A massive multi-tower installation restoring classic American steel to an expansive family ranch property.',
    category: 'Agricultural Estate',
    image: '/images/realistic_hero_windmill.png'
  },
  {
    id: 5,
    title: 'Lake Buena Vista Aeration',
    location: 'Orlando, Florida',
    description: 'Functional 35-foot galvanized steel windmill providing sub-surface aeration to a large commercial pond system.',
    category: 'Commercial Aeration',
    image: '/images/realistic_aeration_windmill.png'
  },
  {
    id: 6,
    title: 'Historic Barn Restoration',
    location: 'Lancaster, Pennsylvania',
    description: 'Authentic Aermotor windmill restoration complementing a 200-year-old stone and timber barn property.',
    category: 'Heritage Restoration',
    image: '/images/realistic_barn_windmill.png'
  }
];

export default function Portfolio() {
  return (
    <main className="pt-32 pb-40 bg-industrial-charcoal min-h-screen">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl md:text-7xl text-white font-light tracking-tight mb-8"
          >
            Signature <span className="italic text-gray-400">Portfolio</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans text-lg text-gray-400 font-light leading-relaxed"
          >
            We accept a limited number of commissions each year to ensure uncompromising quality across our heritage installations, restorations, and commercial aeration projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 bg-black relative">
                <div className="absolute inset-0 bg-industrial-charcoal-dark/20 group-hover:bg-transparent transition-colors duration-700 z-10 w-full h-full"></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0"
                />
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="font-sans text-[9px] tracking-[0.3em] uppercase text-gold-gradient font-semibold">{project.location}</span>
                  <span className="font-sans text-[8px] tracking-widest text-gray-500 uppercase">{project.category}</span>
                </div>
                <h3 className="font-serif text-3xl text-white font-light tracking-wide">{project.title}</h3>
                <p className="font-sans text-sm text-gray-400 leading-relaxed font-light">{project.description}</p>
                <Link to="/consultation" className="inline-block mt-4 text-[10px] tracking-[0.2em] uppercase text-heritage-gold hover:text-white transition-colors group-hover:translate-x-2 duration-300">
                  Request Similar Project →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
