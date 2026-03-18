import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Portfolio() {
  useEffect(() => {
    document.title = "Historic Gallery | Midwest Windmill Company";
  }, []);

  // Map through the 16 remaining images after user removals
  const validIndices = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const galleryImages = validIndices.map(i => `/images/gallery/gallery-${i}.jpg`);

  return (
    <main className="pt-24 md:pt-32 pb-40 bg-industrial-charcoal min-h-screen">
      <div className="max-w-[90rem] mx-auto px-6 md:px-8">
        
        <Link to="/" className="inline-flex items-center text-gold-gradient hover:text-white transition-colors uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-12 sm:mb-20 group font-semibold">
          <ArrowLeft className="w-4 h-4 mr-3 transition-transform group-hover:-translate-x-2" />
          Back to Workshop
        </Link>

        <div className="max-w-3xl mb-16 md:mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-serif text-5xl md:text-7xl lg:text-[6rem] leading-[1.1] text-white font-light tracking-tight mb-8"
          >
            Historic <br className="hidden md:block" />
            <span className="italic text-gray-400">Gallery</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans text-sm md:text-base text-gray-400 leading-relaxed font-light max-w-2xl"
          >
            A curated collection of our heritage restorations, towering estate landmarks, and functional agricultural icons from across the nation over the last decade.
          </motion.p>
        </div>

        {/* CSS Columns Masonry Grid Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "50px" }}
              transition={{ duration: 0.8, delay: (index % 6) * 0.1, ease: "easeOut" }}
              className="relative group overflow-hidden break-inside-avoid shadow-xl bg-industrial-charcoal-dark cursor-pointer rounded-sm"
            >
              <img 
                src={src} 
                alt={`Heritage Windmill Installation ${index + 1}`}
                className="w-full h-auto object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100 filter grayscale-[20%] group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </main>
  );
}
