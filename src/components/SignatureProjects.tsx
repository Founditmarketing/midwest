import React from 'react';
import { motion } from 'motion/react';

const projects = [
  {
    id: 1,
    title: 'The Grand Resort',
    location: 'Aspen, Colorado',
    description: 'A 60-foot heritage installation serving as the centerpiece for a world-class mountain resort.',
    image: '/images/grand_resort.png'
  },
  {
    id: 2,
    title: 'The Vanderbilt Estate',
    location: 'Newport, Rhode Island',
    description: 'Bespoke aeration innovation seamlessly integrated into a historic 19th-century landscape.',
    image: '/images/vanderbilt_estate.png'
  },
  {
    id: 3,
    title: 'The Willow Wedding Venue',
    location: 'Napa Valley, California',
    description: 'A picturesque landmark providing the perfect backdrop for exclusive private events.',
    image: '/images/willow_wedding.png'
  }
];

export default function SignatureProjects() {
  return (
    <section id="portfolio" className="py-56 bg-industrial-charcoal">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-48">
          <div className="max-w-2xl">
            <h2 className="font-sans text-[10px] tracking-[0.4em] uppercase text-heritage-gold mb-6 font-light">Signature Projects</h2>
            <h3 className="font-serif text-5xl md:text-6xl text-white leading-tight font-light tracking-tight">
              Curators of<br />
              <span className="italic text-gray-300">American Heritage</span>
            </h3>
          </div>
          <p className="font-sans text-sm text-gray-400 max-w-md mt-8 md:mt-0 leading-loose font-light">
            Our portfolio represents the pinnacle of heritage engineering. We select only a limited number of commissions each year to ensure uncompromising quality and exclusivity.
          </p>
        </div>

        <div className="space-y-64">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
            >
              <div className="w-full md:w-7/12 relative group overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[40%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-industrial-charcoal-dark/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </div>
              
              <div className={`w-full md:w-5/12 flex flex-col justify-center bg-white/5 backdrop-blur-3xl border border-white/10 p-10 md:p-14 lg:p-16 relative z-10 shadow-2xl ${index % 2 === 1 ? 'md:-mr-24' : 'md:-ml-24'} -mt-16 md:mt-0`}>
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-gradient mb-6 font-semibold">{project.location}</span>
                <h4 className="font-serif text-4xl md:text-5xl text-white mb-8 font-light tracking-tight">{project.title}</h4>
                <p className="font-sans text-sm text-gray-400 leading-loose font-light mb-12">
                  {project.description}
                </p>
                <div className="w-16 h-[1px] bg-heritage-gold/50"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
