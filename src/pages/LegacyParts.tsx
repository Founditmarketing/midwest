import React from 'react';
import { motion } from 'motion/react';
import { Download, AlertTriangle, ChevronRight } from 'lucide-react';

const parts = [
  { id: 'MW-772A', name: 'Standard Aerator Hub', price: '$145.00', status: 'In Stock' },
  { id: 'MW-801B', name: 'Replacement Tail Vane', price: '$89.50', status: 'Backordered' },
  { id: 'MW-990C', name: 'Industrial Bearing Kit', price: '$210.00', status: 'In Stock' },
  { id: 'MW-102D', name: 'Galvanized Tower Brace', price: '$45.00', status: 'In Stock' },
  { id: 'MW-334E', name: 'Pump Rod Connector', price: '$18.75', status: 'In Stock' },
];

export default function LegacyParts() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-industrial-charcoal relative">
      <div className="max-w-5xl mx-auto px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gray-500 block mb-4 font-light">
            Self-Service Portal
          </span>
          <h1 className="font-serif text-5xl text-white mb-6 font-light">
            Legacy Parts & DIY Repair
          </h1>
          
          <div className="bg-industrial-charcoal-dark border-l-4 border-heritage-gold p-6 md:p-8 flex items-start space-x-6">
            <AlertTriangle className="text-heritage-gold shrink-0 mt-1" size={24} strokeWidth={1.5} />
            <div>
              <h3 className="font-sans text-[10px] tracking-[0.2em] uppercase text-white mb-3">Notice: No Phone Support Available</h3>
              <p className="font-sans text-gray-400 leading-relaxed font-light text-sm">
                Due to the high demand for our custom engineering commissions, all legacy parts orders are fulfilled exclusively through this self-service portal. We do not offer phone support, valuations, or consultation for DIY repairs.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-industrial-charcoal-dark border border-white/5 rounded-sm overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="py-5 px-6 font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500 font-light">Part Number</th>
                  <th className="py-5 px-6 font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500 font-light">Description</th>
                  <th className="py-5 px-6 font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500 font-light">Price</th>
                  <th className="py-5 px-6 font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500 font-light">Status</th>
                  <th className="py-5 px-6 font-sans text-[9px] tracking-[0.2em] uppercase text-gray-500 font-light text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {parts.map((part) => (
                  <tr key={part.id} className="hover:bg-white/5 transition-colors group">
                    <td className="py-4 px-6 font-mono text-xs text-gray-300">{part.id}</td>
                    <td className="py-4 px-6 font-sans text-sm text-gray-200 font-light">{part.name}</td>
                    <td className="py-4 px-6 font-sans text-sm text-heritage-gold">{part.price}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-[9px] tracking-wider uppercase font-sans ${
                        part.status === 'In Stock' ? 'bg-emerald-950/50 text-emerald-400 border border-emerald-900/50' : 'bg-amber-950/50 text-amber-400 border border-amber-900/50'
                      }`}>
                        {part.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button className="inline-flex items-center font-sans text-[10px] tracking-[0.2em] uppercase text-gray-500 hover:text-white transition-colors">
                        Add to Cart <ChevronRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="border border-white/10 p-8 bg-industrial-charcoal-dark/50 hover:bg-industrial-charcoal-dark transition-colors group cursor-pointer">
            <Download className="text-gray-500 group-hover:text-heritage-gold transition-colors mb-6" size={28} strokeWidth={1.5} />
            <h4 className="font-serif text-2xl text-white mb-3 font-light">Installation Manuals</h4>
            <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">
              Download PDF schematics and installation guides for legacy models (1998-2015).
            </p>
          </div>
          <div className="border border-white/10 p-8 bg-industrial-charcoal-dark/50 hover:bg-industrial-charcoal-dark transition-colors group cursor-pointer">
            <Download className="text-gray-500 group-hover:text-heritage-gold transition-colors mb-6" size={28} strokeWidth={1.5} />
            <h4 className="font-serif text-2xl text-white mb-3 font-light">Maintenance Guides</h4>
            <p className="font-sans text-sm text-gray-400 font-light leading-relaxed">
              Routine maintenance schedules and lubrication specifications for DIY owners.
            </p>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
