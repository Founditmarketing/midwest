import React from 'react';
import { motion } from 'motion/react';
import { REVIEWS } from '../constants';
import { Star, Quote, CheckCircle2, MapPin } from 'lucide-react';

export default function Reviews() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Customer Success</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter">
            WHAT THE DFW <br />
            <span className="text-accent">IS SAYING.</span>
          </h1>
          <p className="text-zinc-200 text-lg md:text-xl leading-relaxed">
            Real stories from homeowners in Dallas, Terrell, Forney, and beyond.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 glow-border flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-accent text-accent" />
                ))}
              </div>
              <Quote className="text-white/10 mb-6" size={48} />
              <p className="text-zinc-300 text-lg italic mb-10 flex-grow leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div>
                  <h4 className="text-white font-bold text-xl">{review.name}</h4>
                  <div className="flex items-center gap-2 text-zinc-300 text-sm mt-1">
                    <MapPin size={14} className="text-accent" />
                    {review.location}
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <CheckCircle2 className="text-accent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Review CTA */}
      <section className="py-32 px-6 bg-slate-dark mt-20">
        <div className="max-w-4xl mx-auto glass-card p-12 text-center">
          <h2 className="text-3xl font-display font-bold text-white mb-6">Are you a happy client?</h2>
          <p className="text-zinc-300 mb-10">We'd love to hear about your experience with RCS Remodeling.</p>
          <button className="btn-outline">Leave a Review</button>
        </div>
      </section>
    </div>
  );
}
