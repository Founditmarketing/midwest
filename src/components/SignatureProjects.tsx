import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    title: 'The Grand Resort',
    location: 'Aspen, Colorado',
    description: 'A 60-foot heritage installation serving as the centerpiece for a world-class mountain resort.',
    image: '/images/luxury-resort-windmill.png'
  },
  {
    id: 2,
    title: 'Private Equestrian Ranch',
    location: 'Austin, Texas',
    description: 'A functioning heritage landmark providing sub-surface aeration for a sprawling 5-acre private equestrian lake.',
    image: '/images/texas-equestrian-ranch.png'
  },
  {
    id: 3,
    title: 'The Willow Wedding Venue',
    location: 'Napa Valley, California',
    description: 'A picturesque landmark providing the perfect backdrop for exclusive private events.',
    image: '/images/willow-wedding-venue.png'
  }
];

export default function SignatureProjects() {
  return (
    <section id="portfolio" className="py-20 md:py-40 bg-industrial-charcoal">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-32">
          <div className="max-w-2xl">
            <h2 className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase text-heritage-gold mb-4 md:mb-6 font-light">Signature Projects</h2>
            <h3 className="font-serif text-5xl md:text-6xl text-white leading-[1.1] md:leading-tight font-light tracking-tight">
              Curators of<br className="hidden md:block" />
              <span className="italic text-gray-300"> American Heritage</span>
            </h3>
          </div>
          <p className="font-sans text-xs md:text-sm text-gray-400 max-w-md mt-6 md:mt-0 leading-[2] md:leading-loose font-light">
            Our portfolio represents the pinnacle of heritage engineering. We select only a limited number of commissions each year to ensure uncompromising quality and exclusivity.
          </p>
        </div>

        <div className="space-y-24 md:space-y-48">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}
            >
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="w-full md:w-7/12 relative z-0 group overflow-hidden shadow-2xl"
              >
                <div className="aspect-[4/3] sm:aspect-[4/5] md:aspect-[3/4] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-[2s] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[30%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute inset-0 bg-industrial-charcoal-dark/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
                className={`w-[90%] md:w-5/12 mx-auto flex flex-col justify-center bg-white/5 backdrop-blur-3xl border border-white/10 p-8 sm:p-10 md:p-14 lg:p-16 relative z-20 shadow-2xl ${index % 2 === 1 ? 'md:-mr-24' : 'md:-ml-24'} -mt-12 md:mt-0`}
              >
                <span className="font-sans text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase text-gold-gradient mb-4 md:mb-6 font-semibold">{project.location}</span>
                <h4 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 md:mb-8 font-light tracking-tight">{project.title}</h4>
                <p className="font-sans text-xs md:text-sm text-gray-400 leading-[1.8] md:leading-loose font-light mb-6 md:mb-8">
                  {project.description}
                </p>
                <div className="flex items-center space-x-4 md:space-x-6">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "4rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                    className="h-[1px] bg-heritage-gold/50"
                  ></motion.div>
                  <Link to="/consultation" className="text-heritage-gold uppercase text-[9px] md:text-[10px] tracking-[0.2em] hover:text-white transition-colors">
                    View Project
                  </Link>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
