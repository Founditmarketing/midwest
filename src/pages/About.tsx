import React from 'react';
import { motion } from 'motion/react';
import { History, Users, ShieldCheck, MapPin } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Our Story</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter">
            DEEP ROOTS. <br />
            <span className="text-accent">ELITE STANDARDS.</span>
          </h1>
          <p className="text-zinc-200 text-lg md:text-xl leading-relaxed">
            Based in Terrell, TX, and serving the entire DFW metroplex, RCS Remodeling was founded on a simple principle: doing the job right the first time, every time.
          </p>
        </motion.div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 px-6 bg-slate-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img
              src="/page-images/rcs-room-add-1.jpg"
              alt="Elite DFW Remodeling Roots"
              className="rounded-3xl shadow-2xl transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 glass-card p-8 hidden md:block">
              <h4 className="text-accent font-black text-4xl mb-2">15+</h4>
              <p className="text-white text-sm font-mono uppercase">Years of Combined Experience</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-8">WHO WE ARE</h2>
            <div className="space-y-6 text-zinc-200 leading-relaxed">
              <p>
                RCS Remodeling is a premier, family-owned construction and restoration firm rooted in Terrell, Texas. We specialize in transforming residential and commercial properties across the Dallas-Fort Worth metroplex through high-precision remodeling, surgical demolition, and comprehensive site recovery. Our journey began with a single truck and a commitment to radical honesty, and today we stand as the region's most trusted partner for complex property projects.
              </p>
              <p>
                We don't just "do construction." We solve property problems that others shy away from. Whether we're reclaiming a site from unauthorized occupancy or crafting a bespoke master suite, our approach remains the same: meticulous planning, elite-level execution, and a transparent communication loop that keeps you in control from the first swing of the hammer to the final walkthrough.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-32 px-6 bg-obsidian">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-display font-bold text-white mb-12">WHY TRUST US</h2>
              <div className="space-y-8">
                {[
                  { title: 'Total Transparency', desc: 'You receive daily photo updates and line-itemized reporting, ensuring you know exactly where every dollar of your investment is going.' },
                  { title: 'Local Expertise', desc: 'As North Texas natives, we understand the specific structural and environmental demands of DFW properties, from foundation shifting to local building codes.' },
                  { title: 'Full-Spectrum Capability', desc: 'We are one of the few firms capable of handling both heavy structural demolition and high-end aesthetic remodeling under one roof.' },
                  { title: 'Integrity-First Pricing', desc: 'We provide clear, honest estimates and fixed-price contracts to protect you from the hidden costs and "surprises" that plague the industry.' },
                  { title: 'Elite Quality Control', desc: 'Every project undergoes a rigorous multi-point inspection by our leadership team to ensure it meets our "Elite Standard" before we sign off.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <ShieldCheck className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-2">{item.title}</h4>
                      <p className="text-zinc-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="/page-images/drill-hammer-1.jpg"
                alt="Elite Quality Control"
                className="rounded-3xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 bg-slate-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-20 text-center uppercase tracking-widest">Our Evolution</h2>
          <div className="space-y-12">
            {[
              { year: '2010', title: 'The Beginning', desc: 'Started as a small debris removal crew in Terrell, TX.' },
              { year: '2015', title: 'Expanding Horizons', desc: 'Launched full-scale demolition and cleanup services across DFW.' },
              { year: '2020', title: 'Remodeling Excellence', desc: 'Brought on master craftsmen to offer high-end residential remodeling.' },
              { year: '2026', title: 'The Gold Standard', desc: 'Recognized as DFW\'s premier choice for premium property transformations.' }
            ].map((item, i) => (
              <div key={item.year} className="flex gap-8 relative">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent-glow)]" />
                  {i !== 3 && <div className="w-px h-full bg-white/10 mt-2" />}
                </div>
                <div className="pb-12">
                  <span className="text-accent font-mono font-bold text-xl">{item.year}</span>
                  <h3 className="text-2xl font-display font-bold text-white mt-2">{item.title}</h3>
                  <p className="text-zinc-300 mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
