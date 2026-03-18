import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowRight } from 'lucide-react';

export default function Consultation() {
  const [projectType, setProjectType] = useState('');
  const [investmentTier, setInvestmentTier] = useState('');
  const [machineryAccess, setMachineryAccess] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const isLegacyParts = projectType === 'Legacy Parts/DIY';

  return (
    <main className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed opacity-40"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop')" }}
        ></div>
        <div className="absolute inset-0 bg-industrial-charcoal-dark/80 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-heritage-gold block mb-4 font-light">
            Private Consultation
          </span>
          <h1 className="font-serif text-5xl md:text-6xl text-white leading-tight mb-6 font-light">
            Bespoke Engineering Request
          </h1>
          <p className="font-sans text-gray-300 font-light leading-relaxed max-w-xl mx-auto text-sm">
            Due to the exclusive nature of our heritage projects, please provide detailed information regarding your estate or commercial venue. Our lead engineer reviews all submissions personally.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-black/40 backdrop-blur-xl border border-white/10 p-8 md:p-12 shadow-2xl space-y-8"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">Primary Contact</label>
              <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-heritage-gold/50 transition-colors font-sans text-sm backdrop-blur-sm" placeholder="Full Name" />
            </div>
            <div className="space-y-2">
              <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">Email Address</label>
              <input type="email" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-heritage-gold/50 transition-colors font-sans text-sm backdrop-blur-sm" placeholder="contact@estate.com" />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">Property / Estate Name</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-heritage-gold/50 transition-colors font-sans text-sm backdrop-blur-sm" placeholder="e.g., The Vanderbilt Estate" />
          </div>

          <div className="space-y-2">
            <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">Project Classification</label>
            <select 
              value={projectType}
              onChange={(e) => setProjectType(e.target.value)}
              className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-heritage-gold/50 transition-colors font-sans text-sm appearance-none backdrop-blur-sm"
            >
              <option value="" disabled>Select Classification...</option>
              <option value="Private Estate">Private Estate Installation</option>
              <option value="Luxury Resort">Luxury Resort / Commercial</option>
              <option value="Wedding/Event Venue">Wedding / Event Venue</option>
              <option value="Historical Restoration">Historical Restoration</option>
              <option value="Legacy Parts/DIY">Legacy Parts / DIY Repair</option>
            </select>
          </div>

          {isLegacyParts ? (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-red-950/40 backdrop-blur-md border border-red-900/50 p-6 flex items-start space-x-4"
            >
              <ShieldAlert className="text-red-500 shrink-0 mt-1" size={24} />
              <div>
                <h4 className="font-serif text-xl text-red-200 mb-2 font-light">Consultation Unavailable</h4>
                <p className="font-sans text-sm text-red-200/70 leading-relaxed mb-4 font-light">
                  We are currently at capacity for small-scale repairs and do not offer phone support or consultations for individual parts. All legacy parts are fulfilled via our self-service portal.
                </p>
                <Link to="/legacy-parts" className="inline-flex items-center text-[10px] tracking-[0.2em] uppercase text-red-400 hover:text-red-300 transition-colors font-sans">
                  Visit Legacy Parts Portal <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ) : (
            <>
              <div className="space-y-2">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400">Anticipated Investment Tier</label>
                <select 
                  value={investmentTier}
                  onChange={(e) => setInvestmentTier(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-heritage-gold/50 transition-colors font-sans text-sm appearance-none backdrop-blur-sm"
                >
                  <option value="" disabled>Select Tier...</option>
                  <option value="$25k-$50k">$25,000 - $50,000 (Minimum)</option>
                  <option value="$50k-$100k">$50,000 - $100,000</option>
                  <option value="$100k+">$100,000+</option>
                </select>
              </div>

              <div className="space-y-4 pt-6 border-t border-white/10">
                <label className="font-sans text-[10px] tracking-[0.2em] uppercase text-gray-400 block">Site Logistics</label>
                <p className="font-sans text-sm text-gray-400 mb-4 font-light">Does the property have heavy machinery access to accommodate a 60ft installation crane?</p>
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
                  {['Yes, full access', 'No, restricted access', 'Unsure / Requires Survey'].map((option) => (
                    <label key={option} className="flex items-center space-x-3 cursor-pointer group">
                      <div className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${machineryAccess === option ? 'border-heritage-gold' : 'border-white/20 group-hover:border-heritage-gold/50'}`}>
                        {machineryAccess === option && <div className="w-2 h-2 rounded-full bg-heritage-gold"></div>}
                      </div>
                      <input 
                        type="radio" 
                        name="machinery" 
                        value={option}
                        className="hidden"
                        onChange={(e) => setMachineryAccess(e.target.value)}
                      />
                      <span className="font-sans text-sm text-gray-300 font-light">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-8 space-y-6">
                <label className="flex items-start space-x-4 cursor-pointer group">
                  <div className={`mt-0.5 w-5 h-5 rounded-sm border flex items-center justify-center transition-colors shrink-0 ${termsAccepted ? 'border-heritage-gold bg-heritage-gold/20' : 'border-white/20 group-hover:border-heritage-gold/50'}`}>
                    {termsAccepted && <div className="w-2.5 h-2.5 bg-heritage-gold"></div>}
                  </div>
                  <input 
                    type="checkbox" 
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    className="hidden"
                  />
                  <span className="font-sans text-xs text-gray-300 font-light leading-relaxed">
                    I acknowledge that Midwest Windmill is a premium heritage engineering firm. We do not supply individual "$10 parts" or provide phone support for DIY repairs. Our minimum project commission begins at $25,000.
                  </span>
                </label>

                <button 
                  type="button"
                  disabled={!termsAccepted || !projectType || !investmentTier || !machineryAccess}
                  className="w-full bg-heritage-gold/90 backdrop-blur-sm text-industrial-charcoal-dark font-sans text-[10px] tracking-[0.3em] uppercase py-5 hover:bg-heritage-gold disabled:opacity-50 disabled:hover:bg-heritage-gold/90 transition-colors duration-300 flex items-center justify-center group font-medium"
                >
                  Submit for Review
                  <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500 mt-6">
                  Our lead engineer will respond within 48 hours if your project is selected.
                </p>
              </div>
            </>
          )}
        </motion.form>
      </div>
    </main>
  );
}
