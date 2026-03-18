import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Wind, Wrench, Droplets, PackageSearch } from 'lucide-react';

const services = [
  {
    num: '01',
    icon: <Wind size={22} className="text-heritage-gold" strokeWidth={1.5} />,
    title: 'Custom Windmill Installation',
    subtitle: 'Bespoke Landmarks for Grand Estates',
    desc: 'From sprawling agricultural estates to high-end commercial resorts, we provide end-to-end white-glove installation of authentic steel windmills. We don\'t just erect a structure — we craft a functioning historical landmark that commands the horizon with absolute permanence.',
    detail: 'Each installation is preceded by wind-pattern analysis, soil engineering, and a private design consultation to ensure your windmill becomes the defining feature of your property.',
    image: '/images/realistic_hero_windmill.png',
    stat: { value: '60ft', label: 'Max Tower Height' }
  },
  {
    num: '02',
    icon: <Droplets size={22} className="text-heritage-gold" strokeWidth={1.5} />,
    title: 'Pond Aeration & Water Delivery',
    subtitle: 'Wind-Powered Environmental Engineering',
    desc: 'Midwest Windmill is the only firm with the capability to retrofit heritage windmills for modern pond aeration. We utilize sub-surface mathematical engineering and massive rotor torque to deeply oxygenate expansive bodies of water — eliminating algae and fostering aquatic life.',
    detail: 'Our systems aerate up to 2.5 acres of surface water using zero electricity, making them the most sustainable and elegant solution for estate ponds and commercial lakes alike.',
    image: '/images/realistic_aeration_windmill.png',
    stat: { value: '2.5ac', label: 'Aeration Capacity' }
  },
  {
    num: '03',
    icon: <Wrench size={22} className="text-heritage-gold" strokeWidth={1.5} />,
    title: 'Heritage Repairs & Restoration',
    subtitle: 'Preserving American Industrial History',
    desc: 'Our master craftsmen have preserved thousands of vintage windmills across the country. We repair catastrophic storm damage, replace rusted motors with precisely calibrated modern equivalents, and completely restore leaning towers to their absolute original glory.',
    detail: 'We specialize in Aermotor, Dempster, and Baker windmill restorations — sourcing rare components and hand-fitting each piece to match the original engineering specifications.',
    image: '/images/realistic_barn_windmill.png',
    stat: { value: '10k+', label: 'Windmills Restored' }
  },
  {
    num: '04',
    icon: <PackageSearch size={22} className="text-heritage-gold" strokeWidth={1.5} />,
    title: 'Replacement Parts Logistics',
    subtitle: 'American-Made Components, Shipped Direct',
    desc: 'Beyond full-scale installations, we act as the premier supplier for rare and standard Aermotor replacement parts. We ship high-grade American steel components directly to your site, bypassing cheap imports to guarantee decade-spanning durability.',
    detail: 'Our warehouse stocks over 500 unique part numbers including gearboxes, sucker rods, wheel assemblies, and galvanized tower sections — all manufactured in the United States.',
    image: '/images/estate_farm_windmill.png',
    stat: { value: '500+', label: 'Parts in Stock' }
  }
];

function ServiceBlock({ svc, index }: { svc: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const isReversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-0 lg:gap-0 relative`}
    >
      {/* Image Block */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        className="w-full lg:w-[55%] relative group overflow-hidden"
      >
        <div className="aspect-[4/3] sm:aspect-[3/4] lg:aspect-auto lg:h-full min-h-[500px] md:min-h-[700px] overflow-hidden relative">
          <motion.img
            style={{ y: imgY }}
            src={svc.image}
            alt={svc.title}
            className="absolute inset-0 w-full h-[115%] object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-[2s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-industrial-charcoal/60 via-industrial-charcoal/10 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-industrial-charcoal/10 group-hover:bg-transparent transition-colors duration-1000 z-10"></div>
        </div>

        {/* Floating Stat Card */}
        <div className={`absolute bottom-8 ${isReversed ? 'right-8' : 'left-8'} z-20`}>
          <div className="bg-black/50 backdrop-blur-2xl border border-white/10 px-8 py-6 shadow-2xl">
            <div className="font-serif text-3xl md:text-4xl text-heritage-gold font-light mb-1">{svc.stat.value}</div>
            <div className="font-sans text-[8px] md:text-[9px] tracking-[0.25em] uppercase text-gray-400 font-light">{svc.stat.label}</div>
          </div>
        </div>
      </motion.div>

      {/* Text Block */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? -40 : 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="w-full lg:w-[45%] flex flex-col justify-center px-8 py-16 md:px-16 lg:px-20 lg:py-24 relative"
      >
        {/* Background Numeral */}
        <span className="absolute top-8 right-8 lg:top-12 lg:right-12 font-serif text-[8rem] lg:text-[14rem] text-white/[0.03] font-light leading-none select-none pointer-events-none">
          {svc.num}
        </span>

        <div className="relative z-10">
          {/* Icon + Label */}
          <div className="flex items-center space-x-5 mb-10">
            <div className="p-3.5 border border-heritage-gold/20 bg-heritage-gold/5 rounded-full">
              {svc.icon}
            </div>
            <div className="w-10 h-[1px] bg-heritage-gold/30"></div>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.3em] uppercase text-heritage-gold/70 font-light">
              Service {svc.num}
            </span>
          </div>

          {/* Title */}
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light tracking-tight leading-[1.15] mb-4">
            {svc.title}
          </h2>

          {/* Subtitle */}
          <p className="font-sans text-xs md:text-sm text-heritage-gold/60 tracking-wide font-light mb-10 italic">
            {svc.subtitle}
          </p>

          {/* Thin Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-heritage-gold/30 via-white/5 to-transparent mb-10"></div>

          {/* Descriptions */}
          <p className="font-sans text-sm md:text-[15px] text-gray-300 font-light leading-[2] mb-6">
            {svc.desc}
          </p>
          <p className="font-sans text-xs md:text-sm text-gray-500 font-light leading-[1.9] mb-12">
            {svc.detail}
          </p>

          {/* CTA */}
          <Link
            to="/consultation"
            className="group inline-flex items-center space-x-4"
          >
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.2em] uppercase text-white/80 group-hover:text-heritage-gold transition-colors duration-300 border-b border-white/15 group-hover:border-heritage-gold/50 pb-1.5">
              Inquire About This Service
            </span>
            <span className="text-heritage-gold text-sm group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default function Services() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroImgY = useTransform(heroScroll, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  return (
    <main className="bg-industrial-charcoal min-h-screen relative overflow-hidden">

      {/* ─── EDITORIAL HERO ─── */}
      <section ref={heroRef} className="relative h-[75vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroImgY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-industrial-charcoal/40 via-industrial-charcoal/70 to-industrial-charcoal z-10"></div>
          <img
            src="/images/realistic_resort_windmill.png"
            alt="Heritage windmill at a luxury resort"
            className="w-full h-[120%] object-cover"
          />
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '4rem' }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-[1px] bg-heritage-gold/50 mx-auto mb-10 overflow-hidden"
          />
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans text-[10px] md:text-[11px] tracking-[0.5em] uppercase text-heritage-gold font-light mb-8 block"
          >
            Our Capabilities
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="font-serif text-5xl sm:text-6xl md:text-8xl text-white font-light tracking-tight leading-[1.05]"
          >
            Engineering<br />
            <span className="italic text-gray-400">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="font-sans text-sm md:text-base text-gray-400 font-light leading-relaxed max-w-xl mx-auto mt-10"
          >
            A full-service heritage engineering firm specializing in the preservation, installation, and optimization of authentic American windmills.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-heritage-gold/50 to-transparent animate-pulse"></div>
        </motion.div>
      </section>

      {/* ─── SERVICE BLOCKS ─── */}
      <section>
        {services.map((svc, index) => (
          <div key={svc.num}>
            {/* Thin separator between services */}
            {index > 0 && (
              <div className="max-w-7xl mx-auto px-8">
                <div className="h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
              </div>
            )}
            <ServiceBlock svc={svc} index={index} />
          </div>
        ))}
      </section>

      {/* ─── END CTA ─── */}
      <section className="py-28 md:py-40 bg-industrial-charcoal-dark border-t border-white/5 text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-heritage-gold/15 via-transparent to-transparent"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative z-10"
        >
          <div className="w-16 h-[1px] bg-heritage-gold/30 mx-auto mb-12"></div>
          <h3 className="font-serif text-4xl md:text-6xl text-white font-light tracking-tight leading-[1.15] mb-6">
            Ready to create your<br />
            <span className="italic text-gray-400">heritage landmark?</span>
          </h3>
          <p className="font-sans text-sm text-gray-500 font-light max-w-md mx-auto mb-14">
            Begin with a private consultation. Our team will guide you through every step of the commission experience.
          </p>
          <Link
            to="/consultation"
            className="inline-flex items-center justify-center px-12 py-5 border border-heritage-gold text-heritage-gold hover:bg-heritage-gold hover:text-industrial-charcoal-dark transition-all duration-500 font-sans text-[10px] tracking-[0.3em] uppercase group"
          >
            Request a Consultation
            <span className="ml-4 group-hover:translate-x-2 transition-transform duration-300">→</span>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
