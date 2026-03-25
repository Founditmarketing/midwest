import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { SERVICE_ENTITIES, SERVICE_CATEGORIES } from '../data/serviceEntities';
import SEOHead from '../components/SEOHead';

export default function Services() {
  return (
    <main className="bg-industrial-charcoal min-h-screen relative overflow-hidden font-light">
      <SEOHead
        title="All Windmill Services | Midwest Windmill Company"
        description="Complete windmill services from Midwest Windmill Company — sales, installation, repair, restoration, pond aeration, water pumping, Aermotor parts, decorative art, and expert consulting. Serving all 50 states."
        canonical="https://www.midwestwindmillcompany.com/services"
      />

      {/* Hero */}
      <section className="relative py-32 md:py-44 flex items-center justify-center border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-25"
            style={{ backgroundImage: "url('/images/luxury-resort-windmill.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-industrial-charcoal-dark/90 via-industrial-charcoal-dark/50 to-industrial-charcoal-dark" />
        </div>
        <div className="relative z-10 text-center px-6 mt-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '40px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] bg-heritage-gold/50 mx-auto mb-8"
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold mb-6 block"
          >
            Our Capabilities
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-5xl md:text-7xl text-white tracking-tight leading-[1.1]"
          >
            Windmill Services<br className="hidden md:block" />
            <span className="italic text-gray-400"> & Expertise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 font-sans text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            From new windmill sales to vintage restoration, pond aeration to decorative art — Midwest Windmill Company provides every windmill service under the sun.
          </motion.p>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {SERVICE_CATEGORIES.map((cat, catIdx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: catIdx * 0.1 }}
              className="mb-20 last:mb-0"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-10">
                <div className="w-8 h-[1px] bg-heritage-gold/40" />
                <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold">
                  {cat.name}
                </span>
                <div className="flex-1 h-[1px] bg-white/5" />
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cat.slugs.map((slug) => {
                  const entity = SERVICE_ENTITIES.find(e => e.slug === slug);
                  if (!entity) return null;
                  return (
                    <Link
                      key={entity.slug}
                      to={`/services/${entity.slug}`}
                      className="group border border-white/5 bg-white/[0.02] p-8 hover:border-heritage-gold/20 hover:bg-white/[0.04] transition-all duration-500"
                    >
                      <div className="flex items-start justify-between mb-6">
                        <span className="font-sans text-[8px] tracking-[0.3em] uppercase text-gray-600 font-light">
                          {entity.schemaServiceType}
                        </span>
                        <ChevronRight size={14} className="text-gray-600 group-hover:text-heritage-gold group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <h3 className="font-serif text-xl text-white mb-3 font-light tracking-wide group-hover:text-heritage-gold transition-colors duration-300">
                        {entity.h1}
                      </h3>
                      <p className="font-sans text-xs text-gray-500 font-light leading-relaxed line-clamp-2">
                        {entity.metaDescription}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          ))}
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
          <h2 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-6 leading-[1.1]">
            Not Sure What<br className="hidden md:block" />
            <span className="italic text-gray-400"> You Need?</span>
          </h2>
          <p className="font-sans text-sm text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
            Contact us for a free consultation. We'll assess your property and recommend the right windmill solution.
          </p>
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
