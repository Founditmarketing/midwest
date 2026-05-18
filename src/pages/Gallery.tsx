import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_ITEMS } from '../constants';
import { Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(GALLERY_ITEMS.map(item => item.category))];

  const filteredItems = filter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-24">
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Our Portfolio</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter">
            THE PROOF IS IN <br />
            <span className="text-accent">THE RESULTS.</span>
          </h1>
          <p className="text-zinc-200 text-lg md:text-xl leading-relaxed">
            Witness the transformation. From neglected spaces to high-end sanctuaries.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="pb-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${filter === cat
                ? 'bg-accent text-white shadow-[0_0_15px_var(--color-accent-glow)]'
                : 'bg-white/5 text-zinc-300 hover:text-white hover:bg-white/10'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="py-20 px-6 max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden glass-card"
              >
                {/* Before/After Toggle Concept - Using hover for simplicity */}
                <div className="relative h-full w-full">
                  <img
                    src={item.imageAfter}
                    alt={item.category}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-accent font-mono text-[10px] uppercase mb-1">{item.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}
