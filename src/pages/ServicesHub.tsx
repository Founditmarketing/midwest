import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import { ArrowRight, Hammer, Truck, Bomb, Sparkles, ShieldAlert } from 'lucide-react';

const iconMap: Record<string, any> = {
  Hammer, Truck, Bomb, Sparkles, ShieldAlert
};

export default function ServicesHub() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Our Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter">
            FULL-SPECTRUM <br />
            <span className="text-accent">PROPERTY MASTERY.</span>
          </h1>
          <p className="text-zinc-200 text-lg md:text-xl leading-relaxed">
            From the first sledgehammer swing to the final coat of premium paint, we handle every phase of your property's evolution.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Hammer;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.35rem)]"
              >
                <Link
                  to={`/services/${service.slug}`}
                  className="group block glass-card p-10 h-full glow-border hover:bg-white/10 transition-all duration-500"
                >
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent transition-colors">
                    <Icon className="text-accent group-hover:text-white transition-colors" size={32} />
                  </div>
                  <h3 className="text-3xl font-display font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-zinc-300 mb-8 line-clamp-3 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-10">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="text-zinc-200 text-sm flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6 border-t border-white/5">
                    <span className="text-accent font-bold text-sm uppercase tracking-widest border-b border-accent/0 group-hover:border-accent/100 transition-all inline-block">
                      View Service Details
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-32 px-6 bg-slate-dark mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:row items-center justify-between gap-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-display font-bold text-white mb-6">Not sure what you need?</h2>
            <p className="text-zinc-300">Our experts can walk through your property and provide a comprehensive assessment of remodeling, demo, and cleanup needs.</p>
          </div>
          <Link to="/contact" className="btn-primary">
            Book an Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}
