import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function Consultation() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property: '',
    projectType: '',
    investmentTier: '',
    machineryAccess: '',
    termsAccepted: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const isLegacyParts = formData.projectType === 'Replacement Parts';

  const updateForm = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to send your request.');
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setSubmitError(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-industrial-charcoal-dark/90 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-8 w-full">
        {!isSubmitted && (
           <div className="mb-16">
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-heritage-gold block mb-4 font-light text-center">
                Free Quote Request
              </span>
              <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-8 font-light text-center">
              Request a Free Quote
            </h1>
              
              {/* Progress Bar */}
              <div className="flex justify-center items-center space-x-4 mb-12">
                 {[1, 2, 3].map(i => (
                    <div key={i} className="flex items-center">
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center font-sans text-xs transition-colors duration-500 ${step === i ? 'bg-heritage-gold text-black' : step > i ? 'bg-white text-black' : 'border border-white/20 text-gray-500'}`}>
                          {step > i ? <CheckCircle2 size={14} /> : i}
                       </div>
                       {i < 3 && (
                          <div className={`w-12 md:w-24 h-[1px] mx-2 transition-colors duration-500 ${step > i ? 'bg-white' : 'bg-white/20'}`}></div>
                       )}
                    </div>
                 ))}
              </div>
           </div>
        )}

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-black/40 backdrop-blur-3xl border border-heritage-gold/30 p-12 md:p-20 text-center shadow-2xl"
            >
              <div className="w-20 h-20 bg-heritage-gold/10 rounded-full flex items-center justify-center mx-auto mb-8 border border-heritage-gold/30">
                <CheckCircle2 size={32} className="text-heritage-gold" />
              </div>
              <h2 className="font-serif text-4xl text-white mb-6 font-light tracking-wide">Inquiry Received</h2>
              <p className="font-sans text-gray-400 leading-relaxed font-light max-w-lg mx-auto mb-8 text-sm md:text-base">
                Thank you for your interest in Midwest Windmill! We've received your information and one of our windmill experts will be in touch within 48 hours with a personalized quote.
              </p>
              <Link to="/" className="inline-block mt-4 text-[10px] tracking-[0.2em] uppercase text-heritage-gold hover:text-white transition-colors">
                Return to Portfolio →
              </Link>
            </motion.div>
          ) : (
            <motion.form
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-black/20 backdrop-blur-3xl border border-white/10 p-8 md:p-14 shadow-2xl relative"
              onSubmit={handleSubmit}
            >
              {/* Step 1: Contact */}
              {step === 1 && (
                <div className="space-y-10">
                  <div className="space-y-1">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">Primary Contact</label>
                    <input type="text" required value={formData.name} onChange={e => updateForm('name', e.target.value)} className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-heritage-gold transition-colors font-sans text-sm placeholder-gray-700" placeholder="Full Name" />
                  </div>
                  <div className="space-y-1">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">Email Address</label>
                    <input type="email" required value={formData.email} onChange={e => updateForm('email', e.target.value)} className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-heritage-gold transition-colors font-sans text-sm placeholder-gray-700" placeholder="contact@estate.com" />
                  </div>
                </div>
              )}

              {/* Step 2: Project Scope */}
              {step === 2 && (
                <div className="space-y-10">
                  <div className="space-y-1">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">Property / Ranch / Farm Name</label>
                    <input type="text" required value={formData.property} onChange={e => updateForm('property', e.target.value)} className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white focus:outline-none focus:border-heritage-gold transition-colors font-sans text-sm placeholder-gray-700" placeholder="e.g., Johnson Family Ranch" />
                  </div>
                  <div className="space-y-3">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">Project Classification</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {['Farm / Ranch', 'Residential Property', 'Commercial / Business', 'Pond Aeration', 'Windmill Restoration', 'Replacement Parts'].map(type => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => updateForm('projectType', type)}
                          className={`text-left border p-4 transition-all duration-300 ${formData.projectType === type ? 'border-heritage-gold bg-heritage-gold/10' : 'border-white/10 hover:border-white/30 hover:bg-white/5'}`}
                        >
                          <span className={`font-sans text-xs tracking-widest uppercase ${formData.projectType === type ? 'text-heritage-gold' : 'text-gray-400'}`}>{type}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {isLegacyParts && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-red-950/40 backdrop-blur-md border border-red-900/50 p-6 flex flex-col items-center text-center space-y-4"
                    >
                      <ShieldAlert className="text-red-500" size={32} />
                      <div>
                        <h4 className="font-serif text-xl text-red-200 mb-2 font-light">Consultation Unavailable</h4>
                        <p className="font-sans text-sm text-red-200/70 leading-relaxed mb-6 font-light">
                          We are currently at capacity for small-scale DIY repairs and do not offer consultations for individual parts. All legacy parts are fulfilled via our self-service portal.
                        </p>
                        <Link to="/legacy-parts" className="inline-flex items-center px-8 py-3 bg-red-900/40 text-[10px] tracking-[0.2em] uppercase text-red-100 hover:bg-red-900/60 transition-colors font-sans border border-red-800/50">
                          Visit Legacy Parts Portal
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}

              {/* Step 3: Logistics & Submit */}
              {step === 3 && !isLegacyParts && (
                <div className="space-y-10">
                  <div className="space-y-4">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">Anticipated Investment Tier</label>
                    <select 
                      value={formData.investmentTier}
                      required
                      onChange={e => updateForm('investmentTier', e.target.value)}
                      className="w-full bg-black/50 border border-white/20 p-4 text-white focus:outline-none focus:border-heritage-gold transition-colors font-sans text-sm appearance-none"
                    >
                      <option value="" disabled>Select Tier...</option>
                      <option value="$7k-$10k">$7,000 - $10,000</option>
                      <option value="$10k-$20k">$10,000 - $20,000</option>
                      <option value="$20k+">$20,000+</option>
                    </select>
                  </div>

                  <div className="space-y-4">
                    <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 block">Site Logistics (Machinery Access)</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {['Yes, full access', 'No, restricted', 'Unsure'].map((option) => (
                        <button
                          key={option}
                          type="button"
                          onClick={() => updateForm('machineryAccess', option)}
                          className={`text-center py-4 border transition-all duration-300 ${formData.machineryAccess === option ? 'border-heritage-gold bg-heritage-gold/10 text-heritage-gold' : 'border-white/10 hover:border-white/30 text-gray-400'}`}
                        >
                          <span className="font-sans text-xs tracking-widest uppercase">{option}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-white/10">
                    <label className="flex items-start space-x-4 cursor-pointer group">
                      <div className={`mt-0.5 w-5 h-5 rounded-sm border flex items-center justify-center transition-colors shrink-0 ${formData.termsAccepted ? 'border-heritage-gold bg-heritage-gold/20' : 'border-white/20 group-hover:border-heritage-gold/50'}`}>
                        {formData.termsAccepted && <div className="w-2.5 h-2.5 bg-heritage-gold"></div>}
                      </div>
                      <input 
                        type="checkbox" 
                        checked={formData.termsAccepted}
                        onChange={(e) => updateForm('termsAccepted', e.target.checked)}
                        className="hidden"
                      />
                      <span className="font-sans text-xs text-gray-400 font-light leading-relaxed">
                        I understand that pricing varies based on windmill size, tower height, and installation requirements. I'd like Midwest Windmill to contact me with a personalized quote.
                      </span>
                    </label>
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="mt-12 flex items-center justify-between pt-8 border-t border-white/10">
                {step > 1 ? (
                  <button type="button" onClick={prevStep} className="flex items-center font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back
                  </button>
                ) : <div></div>}

                {step < 3 ? (
                   <button 
                     type="button" 
                     onClick={nextStep} 
                     disabled={
                        (step === 1 && (!formData.name || !formData.email)) ||
                        (step === 2 && (!formData.property || !formData.projectType || isLegacyParts))
                     }
                     className="flex items-center font-sans text-[10px] tracking-[0.2em] uppercase text-heritage-gold hover:text-white disabled:opacity-30 disabled:hover:text-heritage-gold transition-colors"
                   >
                     Continue <ArrowRight size={16} className="ml-2" />
                   </button>
                ) : (
                  <button 
                    type="submit"
                    disabled={!formData.termsAccepted || !formData.investmentTier || !formData.machineryAccess || isLegacyParts || isSubmitting}
                    className="bg-gold-gradient text-industrial-charcoal-dark font-sans text-[10px] tracking-[0.3em] uppercase px-8 py-3 hover:brightness-110 disabled:opacity-50 disabled:hover:brightness-100 transition-all duration-300 font-semibold"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </button>
                )}
              </div>

              {submitError && (
                <div className="mt-6 bg-red-950/40 border border-red-900/50 p-4 text-center">
                  <p className="font-sans text-sm text-red-200 font-light">{submitError}</p>
                </div>
              )}
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
