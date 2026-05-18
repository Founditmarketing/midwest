import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BLOG_POSTS } from '../constants';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find((p) => p.id === id);

  if (!post) return <Navigate to="/blog" />;

  return (
    <div className="pt-24">
      <article className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link to="/blog" className="flex items-center gap-2 text-accent font-bold mb-12 hover:gap-4 transition-all">
            <ArrowLeft size={20} /> Back to Blog
          </Link>

          <div className="flex items-center gap-6 text-zinc-500 text-sm font-mono uppercase mb-6">
            <span className="flex items-center gap-2"><Calendar size={16} className="text-accent" /> {post.date}</span>
            <span className="flex items-center gap-2"><User size={16} className="text-accent" /> {post.author}</span>
            <span className="px-3 py-1 bg-white/5 rounded-full text-accent">{post.category}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-10 leading-tight">
            {post.title}
          </h1>

          <div className="relative h-[500px] rounded-3xl overflow-hidden mb-16">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-invert prose-accent max-w-none text-zinc-400 leading-relaxed space-y-8 text-lg">
            <p className="text-white font-medium text-xl italic border-l-4 border-accent pl-6 py-2">
              {post.excerpt}
            </p>

            <div className="space-y-6">
              <p>{post.content}</p>
            </div>

            {post.sections.map((section, i) => (
              <div key={i} className="space-y-6">
                {section.heading && (
                  <h3 className="text-2xl font-display font-bold text-white mt-12">{section.heading}</h3>
                )}
                <p>{section.text}</p>
                {section.image && (
                  <img
                    src={section.image}
                    alt={section.imageAlt || section.heading || 'Article image'}
                    className="rounded-2xl w-full my-12"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex items-center justify-between">
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent transition-colors">
                <Share2 size={20} />
              </button>
            </div>
            <Link to="/contact" className="btn-primary">
              Discuss Your Project
            </Link>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
