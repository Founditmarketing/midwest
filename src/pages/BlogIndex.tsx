import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowRight } from 'lucide-react';

export default function BlogIndex() {
  return (
    <div className="pt-24">
      <section className="py-20 px-6 text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">The Authority</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter">
            NORTH TEXAS <br />
            <span className="text-accent">INSIGHTS.</span>
          </h1>
          <p className="text-zinc-400 text-lg md:text-xl leading-relaxed">
            Expert advice on remodeling, demolition, and property maintenance for DFW homeowners.
          </p>
        </motion.div>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col h-full glass-card overflow-hidden glow-border"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 px-4 py-1 bg-accent text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-zinc-500 text-xs font-mono uppercase mb-4">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-zinc-500 text-sm mb-8 flex-grow leading-relaxed">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="flex items-center gap-2 text-accent font-bold group-hover:gap-4 transition-all"
                >
                  Read Article <ArrowRight size={18} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
