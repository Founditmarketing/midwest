import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronRight, Phone } from 'lucide-react';
import { getEntityBySlug } from '../data/serviceEntities';
import SEOHead, { buildServiceSchema, buildFAQSchema } from '../components/SEOHead';

export default function ServiceEntityPage() {
  const { slug } = useParams<{ slug: string }>();
  const entity = slug ? getEntityBySlug(slug) : undefined;

  if (!entity) {
    return <Navigate to="/services" replace />;
  }

  const serviceSchema = buildServiceSchema(entity);
  const faqSchema = buildFAQSchema(entity.faqs);

  return (
    <main className="bg-industrial-charcoal min-h-screen relative overflow-hidden font-light">
      <SEOHead
        title={entity.metaTitle}
        description={entity.metaDescription}
        canonical={`https://www.midwestwindmillcompany.com/services/${entity.slug}`}
        schema={[serviceSchema, faqSchema]}
      />

      {/* Hero */}
      <section className="relative py-32 md:py-44 flex items-center justify-center border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center opacity-30"
            style={{ backgroundImage: `url('${entity.heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-industrial-charcoal-dark/90 via-industrial-charcoal-dark/50 to-industrial-charcoal-dark" />
        </div>
        <div className="relative z-10 text-center px-6 mt-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '40px' }}
            transition={{ duration: 1, delay: 0.2 }}
            className="h-[1px] bg-heritage-gold/50 mx-auto mb-8"
          />
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold mb-6 block"
          >
            {entity.heroSubtitle}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1]"
          >
            {entity.h1}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="mt-8 font-sans text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            {entity.metaDescription}
          </motion.p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-6">
        <nav className="flex items-center space-x-2 font-sans text-[10px] tracking-[0.15em] uppercase text-gray-500">
          <Link to="/" className="hover:text-heritage-gold transition-colors">Home</Link>
          <ChevronRight size={10} />
          <Link to="/services" className="hover:text-heritage-gold transition-colors">Services</Link>
          <ChevronRight size={10} />
          <span className="text-gray-400">{entity.h1}</span>
        </nav>
      </div>

      {/* Overview */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-10"
          >
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold block mb-4">
              Overview
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-[1.15]">
              What We Offer
            </h2>
          </motion.div>
          <div className="space-y-6">
            {entity.overview.map((para, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="font-sans text-sm md:text-base text-gray-300 leading-[2] font-light"
              >
                {para}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-14"
          >
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold block mb-4">
              Key Benefits
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-[1.15]">
              Why Choose<br className="hidden md:block" />
              <span className="italic text-gray-400"> Midwest Windmill.</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {entity.features.map((feat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.08 }}
                className="border border-white/5 bg-white/[0.02] p-8 hover:border-heritage-gold/20 transition-all duration-500 group"
              >
                <div className="w-8 h-[1px] bg-heritage-gold/40 mb-6 group-hover:w-12 transition-all duration-500" />
                <h3 className="font-serif text-lg text-white mb-3 font-light tracking-wide">{feat.title}</h3>
                <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-14"
          >
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold block mb-4">
              Our Process
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-[1.15]">
              How It Works
            </h2>
          </motion.div>
          <div className="space-y-0">
            {entity.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
                className="flex gap-6 md:gap-8 py-8 border-b border-white/5 last:border-0"
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 border border-heritage-gold/30 flex items-center justify-center text-heritage-gold font-serif text-lg font-light">
                    {i + 1}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-white mb-2 font-light">{step.step}</h3>
                  <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / AEO Section */}
      <section className="py-16 md:py-24 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="mb-14"
          >
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-heritage-gold block mb-4">
              Frequently Asked
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-white tracking-tight leading-[1.15]">
              Common Questions
            </h2>
          </motion.div>
          <div className="space-y-0">
            {entity.faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="py-8 border-b border-white/5 last:border-0"
              >
                <h3 className="font-serif text-lg md:text-xl text-white mb-4 font-light leading-snug">
                  {faq.question}
                </h3>
                <p className="font-sans text-sm md:text-base text-gray-400 font-light leading-[2]">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-5xl text-white tracking-tight mb-6 leading-[1.1]">
            Ready to Get Started<br className="hidden md:block" />
            <span className="italic text-gray-400"> with {entity.h1.split(' ').slice(0, 3).join(' ')}?</span>
          </h2>
          <p className="font-sans text-sm text-gray-400 mb-12 max-w-xl mx-auto leading-relaxed">
            Contact Midwest Windmill Company today for a free consultation. We serve all 50 states.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:6603418951"
              className="inline-flex items-center justify-center px-10 py-4 bg-heritage-gold text-industrial-charcoal-dark font-sans text-[10px] tracking-[0.3em] uppercase hover:bg-heritage-gold-light transition-all duration-500 group w-full sm:w-auto"
            >
              <Phone size={14} className="mr-3" />
              Call 660-341-8951
            </a>
            <Link
              to="/consultation"
              className="inline-flex items-center justify-center px-10 py-4 border border-heritage-gold/50 text-heritage-gold hover:bg-heritage-gold hover:text-industrial-charcoal-dark transition-all duration-500 font-sans text-[10px] tracking-[0.3em] uppercase group w-full sm:w-auto"
            >
              Request Consultation
              <span className="ml-3 group-hover:translate-x-2 transition-transform duration-300">→</span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Back to Services */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-16">
        <Link
          to="/services"
          className="inline-flex items-center font-sans text-[10px] tracking-[0.2em] uppercase text-gray-500 hover:text-heritage-gold transition-colors"
        >
          <ArrowLeft size={14} className="mr-2" />
          All Services
        </Link>
      </div>
    </main>
  );
}
