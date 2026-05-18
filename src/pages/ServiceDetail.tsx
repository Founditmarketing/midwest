import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  if (!service) return <Navigate to="/services" />;

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <span className="text-accent font-mono text-xs uppercase tracking-widest mb-4 block">Service Excellence</span>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white mb-8 tracking-tighter uppercase">
              {service.title}
            </h1>
            <p className="text-zinc-400 text-xl max-w-2xl mx-auto leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features & Process */}
      <section className="py-32 px-6 bg-slate-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.features.map((feature) => (
                <div key={feature} className="glass-card p-6 flex items-start gap-4">
                  <CheckCircle2 className="text-accent shrink-0" size={24} />
                  <span className="text-zinc-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-display font-bold text-white mb-12">The Process</h2>
            <div className="space-y-8">
              {service.process.map((step, i) => (
                <div key={step.step} className="flex gap-6">
                  <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-black shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-display font-bold text-white mb-2">{step.step}</h4>
                    <p className="text-zinc-500 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-obsidian">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-white mb-16 text-center">Common Questions</h2>
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div key={i} className="glass-card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-bold">{faq.question}</span>
                  {openFaq === i ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-accent" />}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="px-6 pb-6 text-zinc-500 text-sm"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 bg-accent/5">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-white mb-8">READY FOR A QUOTE?</h2>
          <p className="text-zinc-400 mb-12">Get a transparent, no-nonsense estimate for your {service.title} project today.</p>
          <Link to="/contact" className="btn-primary">
            Contact RCS Now
          </Link>
        </div>
      </section>
    </div>
  );
}
