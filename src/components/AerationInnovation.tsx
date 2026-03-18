import React from 'react';
import { motion } from 'motion/react';
import { Wind, Droplets, ShieldCheck } from 'lucide-react';

export default function AerationInnovation() {
  return (
    <section id="aeration" className="py-32 bg-industrial-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div>
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-heritage-gold block mb-6 font-light">
                Aeration Innovation
              </span>
              <h2 className="font-serif text-5xl md:text-6xl text-white leading-tight font-light">
                Powering the Future of <br />
                <span className="italic text-gray-400">Water Management</span>
              </h2>
            </div>
            
            <p className="font-sans text-gray-400 leading-relaxed font-light text-lg">
              Beyond their striking silhouette, our windmills are engineered for high-performance sub-surface aeration. We utilize wind power to deliver oxygen to the deepest parts of your lake or pond, preventing stagnation and promoting a thriving aquatic ecosystem.
            </p>

            <div className="space-y-8 pt-8 border-t border-white/10">
              <div className="flex items-start space-x-6 group">
                <div className="p-4 rounded-full border border-white/10 bg-white/5 group-hover:border-heritage-gold/50 transition-colors">
                  <Wind className="text-heritage-gold" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-white mb-2 font-light">Zero-Carbon Operation</h4>
                  <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">Harnessing natural wind energy to power our proprietary BalCam II compressors, eliminating electrical costs and environmental impact.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 rounded-full border border-white/10 bg-white/5 group-hover:border-heritage-gold/50 transition-colors">
                  <Droplets className="text-heritage-gold" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-white mb-2 font-light">Deep Water Oxygenation</h4>
                  <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">Our systems push air to the bottom of the water column, breaking down thermoclines and preventing algae blooms and fish kills.</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 rounded-full border border-white/10 bg-white/5 group-hover:border-heritage-gold/50 transition-colors">
                  <ShieldCheck className="text-heritage-gold" size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif text-2xl text-white mb-2 font-light">Heritage Durability</h4>
                  <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">Built with heavy-gauge galvanized steel and backed by our legendary 5-year warranty on all compressor components.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative h-[800px] rounded-sm overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/20 z-10 mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2832&auto=format&fit=crop" 
              alt="Windmill by a pristine lake" 
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
            
            {/* Glassmorphism Stats Card */}
            <div className="absolute bottom-12 left-12 right-12 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-sm">
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="font-serif text-4xl text-heritage-gold mb-2 font-light">30ft</div>
                  <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-400 font-light">Max Depth</div>
                </div>
                <div className="border-x border-white/10">
                  <div className="font-serif text-4xl text-heritage-gold mb-2 font-light">2.5</div>
                  <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-400 font-light">Acres Aerated</div>
                </div>
                <div>
                  <div className="font-serif text-4xl text-heritage-gold mb-2 font-light">73"</div>
                  <div className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-400 font-light">Rotor Diameter</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
