import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Ruler, DollarSign, Sparkles, Home, TreePine, Building2 } from 'lucide-react';

const decorProducts = [
  {
    name: "Half Fan Wall Art",
    description: "Authentic half-wheel windmill fan, professionally finished and mounted as a stunning semicircular wall accent. Perfect above fireplaces, entryways, and dining areas.",
    image: '/images/windmill-wall-decor.png',
    sizes: "6' – 8'",
    priceRange: '$660 – $1,200',
    category: 'Interior',
    icon: Home,
  },
  {
    name: "Full Fan Wall Mount",
    description: "Complete windmill wheel, precision-balanced and wall-mounted as a dramatic centerpiece. An unforgettable statement in wedding venues, restaurants, and luxury residences.",
    image: '/images/windmill-decor-wedding-venue.png',
    sizes: "6' – 16'",
    priceRange: '$1,300 – $11,000',
    category: 'Interior / Exterior',
    icon: Building2,
  },
  {
    name: "Yard Art Display",
    description: "Full windmill wheel on a custom decorative stand, designed for gardens, courtyards, and estate entrances. A heritage conversation piece that commands attention.",
    image: '/images/windmill-yard-art.png',
    sizes: "6' – 12'",
    priceRange: '$1,300 – $6,000',
    category: 'Exterior',
    icon: TreePine,
  },
];

const offerings = [
  {
    title: "Complete Wheel & Vane",
    desc: "Full fan wheel with matching directional vane, professionally restored or built new. Wall-mount or freestanding.",
    price: "From $2,400",
  },
  {
    title: "Half Fan Display",
    desc: "Semicircular half-wheel art piece, ideal for above mantels, headboards, and accent walls.",
    price: "From $660",
  },
  {
    title: "Wheel Only",
    desc: "Complete circular fan wheel without vane, finished and ready for interior or exterior mounting.",
    price: "From $1,300",
  },
  {
    title: "Vane Only",
    desc: "Decorative windmill tail vane, lettered or plain, for standalone wall display or pairing.",
    price: "From $1,060",
  },
  {
    title: "Professional Installation",
    desc: "White-glove interior or exterior mounting by our craftsmen. Structural assessment included.",
    price: "From $1,200",
  },
  {
    title: "Custom Finish & Restoration",
    desc: "Hand-restored patina, powder-coat, or custom paint finishes tailored to your design palette.",
    price: "From $600",
  },
];

export default function WindmillDecor() {
  const { scrollYProgress } = useScroll();
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <main className="bg-industrial-charcoal min-h-screen relative overflow-hidden font-light">
      
      {/* Hero */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden border-b border-white/5">
        <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-industrial-charcoal-dark/80 z-10"></div>
          <img 
            src="/images/windmill-decor-wedding-venue.png" 
            alt="Windmill decor in wedding venue" 
            className="w-full h-full object-cover opacity-50"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 mt-16">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "40px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] bg-heritage-gold/50 mx-auto mb-8"
          />
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold mb-6 block"
          >
            Decorative Windmill Art
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-5xl md:text-7xl text-white tracking-tight leading-[1.1]"
          >
            Windmill<br className="hidden md:block"/>
            <span className="italic text-gray-400"> Décor</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-sans text-sm text-gray-400 mt-8 max-w-lg mx-auto leading-relaxed"
          >
            Heritage craftsmanship, reimagined as art.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Sparkles size={16} className="text-heritage-gold/60" strokeWidth={1.5} />
              <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold">
                Beyond the Tower
              </span>
            </div>
            <p className="font-sans text-sm md:text-base text-gray-400 leading-[2] max-w-2xl mx-auto">
              Our windmill wheels and vanes aren't just functional — they're <span className="text-white">works of American industrial art</span>. From high-end wedding venues to luxury home interiors, our authentic windmill fans and vanes bring heritage character to any space. Available as full wheels, half fans, yard art, and professional wall installations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Decor Products */}
      <section className="py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-20 md:mb-28"
          >
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-8 h-[1px] bg-heritage-gold/50"></div>
              <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold">
                Signature Pieces
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-[1.15]">
              Decor<br className="hidden md:block"/>
              <span className="italic text-gray-400"> Collections</span>
            </h2>
          </motion.div>

          {/* Product Cards */}
          <div className="space-y-16 md:space-y-24">
            {decorProducts.map((item, index) => {
              const Icon = item.icon;
              const isReversed = index % 2 !== 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center ${isReversed ? 'lg:direction-rtl' : ''}`}
                >
                  {/* Image */}
                  <div className={`overflow-hidden border border-white/5 group ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <div className="absolute inset-0 bg-industrial-charcoal-dark/10 z-10 group-hover:bg-transparent transition-colors duration-1000"></div>
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-all duration-[2s] ease-out"
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className={`${isReversed ? 'lg:order-1 lg:text-right' : ''}`}>
                    <div className={`flex items-center space-x-3 mb-4 ${isReversed ? 'lg:justify-end' : ''}`}>
                      <Icon size={14} className="text-heritage-gold/60" strokeWidth={1.5} />
                      <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl md:text-4xl text-white tracking-tight mb-4 leading-tight">
                      {item.name}
                    </h3>
                    
                    <p className="font-sans text-sm text-gray-400 leading-[2] mb-8 max-w-md">
                      {item.description}
                    </p>

                    <div className="w-full h-[1px] bg-gradient-to-r from-heritage-gold/20 to-transparent mb-6"></div>

                    <div className={`flex items-center space-x-8 mb-8 ${isReversed ? 'lg:justify-end' : ''}`}>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <Ruler size={12} className="text-heritage-gold/60" strokeWidth={1.5} />
                          <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500">Sizes</span>
                        </div>
                        <span className="font-serif text-lg text-white">{item.sizes}</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <DollarSign size={12} className="text-heritage-gold/60" strokeWidth={1.5} />
                          <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500">Price Range</span>
                        </div>
                        <span className="font-serif text-lg text-heritage-gold">{item.priceRange}</span>
                      </div>
                    </div>

                    <Link 
                      to="/consultation"
                      className="inline-flex items-center space-x-4 group/link"
                    >
                      <span className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-gray-400 group-hover/link:text-heritage-gold transition-colors">
                        Inquire About This Piece
                      </span>
                      <span className="text-heritage-gold group-hover/link:translate-x-2 transition-transform duration-300">→</span>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-24 md:py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-16 md:mb-24"
          >
            <div className="flex items-center space-x-6 mb-6">
              <div className="w-8 h-[1px] bg-heritage-gold/50"></div>
              <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold">
                Products & Services
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight leading-[1.15]">
              What We<br className="hidden md:block"/>
              <span className="italic text-gray-400"> Offer</span>
            </h2>
          </motion.div>

          {/* Offerings Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {offerings.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-heritage-gold/20 transition-all duration-700 p-6 md:p-8"
              >
                <h3 className="font-serif text-xl md:text-2xl text-white tracking-tight mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="font-sans text-sm text-gray-400 leading-[1.8] mb-6">
                  {item.desc}
                </p>

                <div className="w-full h-[1px] bg-gradient-to-r from-heritage-gold/20 to-transparent mb-4"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <DollarSign size={14} className="text-heritage-gold/60" strokeWidth={1.5} />
                    <span className="font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500">
                      Starting at
                    </span>
                  </div>
                  <span className="font-serif text-xl text-heritage-gold tracking-tight">
                    {item.price}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sizing & Pricing Summary */}
      <section className="py-20 md:py-28 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-industrial-charcoal-dark border border-white/5 p-8 md:p-12"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-6 h-[1px] bg-heritage-gold/50"></div>
              <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold">
                Sizing Guide
              </span>
            </div>
            <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight mb-4 leading-tight">
              Complete Wheel & Vane Pricing
            </h3>
            <p className="font-sans text-sm text-gray-400 leading-[2] mb-8 max-w-2xl">
              Every decorative windmill piece is built or restored to order. Pricing depends on wheel diameter, finish, and installation complexity. Below is a quick reference for complete wheel and vane packages.
            </p>

            {/* Price Table */}
            <div className="space-y-0 border border-white/5">
              {[
                { size: "6' Half Fan", price: "$660 – $900" },
                { size: "6' Full Wheel & Vane", price: "$2,400 – $3,200" },
                { size: "8' Full Wheel & Vane", price: "$3,500 – $4,800" },
                { size: "10' Full Wheel & Vane", price: "$4,800 – $6,500" },
                { size: "12' Full Wheel & Vane", price: "$6,500 – $8,500" },
                { size: "14' Full Wheel & Vane", price: "$8,500 – $10,500" },
                { size: "16' Full Wheel & Vane", price: "$10,500 – $14,500" },
              ].map((row, i) => (
                <div key={i} className={`flex items-center justify-between py-4 px-6 ${i !== 0 ? 'border-t border-white/5' : ''} hover:bg-white/[0.02] transition-colors`}>
                  <div className="flex items-center space-x-3">
                    <Ruler size={12} className="text-heritage-gold/40" strokeWidth={1.5} />
                    <span className="font-sans text-sm text-gray-300">{row.size}</span>
                  </div>
                  <span className="font-serif text-lg text-heritage-gold">{row.price}</span>
                </div>
              ))}
            </div>

            <p className="font-sans text-[11px] text-gray-500 mt-6 leading-relaxed">
              * Prices reflect complete wheel (fan) and vane with standard finish. Professional installation, custom finishes, and half-fan configurations priced separately. All pieces include mounting hardware.
            </p>
          </motion.div>
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
          <h3 className="font-serif text-4xl md:text-5xl text-white tracking-tight mb-6 leading-[1.1]">
            Transform your space with<br className="hidden md:block"/>
            <span className="italic text-gray-400"> American heritage.</span>
          </h3>
          <p className="font-sans text-sm text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
            Whether it's a wedding venue centerpiece, a statement above your fireplace, or a garden showpiece — we'll craft it to perfection.
          </p>
          <Link 
            to="/consultation"
            className="inline-flex items-center justify-center px-12 py-5 border border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold hover:text-industrial-charcoal-dark transition-all duration-500 font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase group"
          >
            Request a Décor Consultation
            <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
