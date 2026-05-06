import React from "react";
import { motion } from "motion/react";
import { Leaf, Droplets, Wind, CheckCircle2, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function AgricultureUseCase() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-8">
        <Link to="/real-use-cases" className="flex items-center gap-2 text-slate-500 font-black text-[10px] uppercase tracking-widest hover:text-blue-600 transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>
      </div>

      {/* Hero Header */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-block px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase tracking-[0.3em]">Horticulture & Agriculture</div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-slate-900">
                Green <br />
                <span className="text-green-600">Precision.</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                Indoor gardening and large-scale plant care require consistent nutrient delivery and pest control. Our high-volume sprayers are calibrated for maximum coverage with minimal effort.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 border border-slate-100">
                  <Wind className="w-4 h-4 text-green-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Wide Coverage</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 border border-slate-100">
                  <Droplets className="w-4 h-4 text-green-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Clog-Free Nozzle</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video bg-slate-100 overflow-hidden border border-slate-200"
            >
              <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/garden%20.png" 
                alt="Agriculture application"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-10">
          <article className="prose prose-slate lg:prose-xl max-w-none">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-8">Nourishing at Scale</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Whether it's foliar feeding in a greenhouse or applying organic pest control in a vertical farm, the quality of the spray determines the effectiveness of the treatment. Large droplets lead to runoff and waste, while inconsistent misting leaves plants vulnerable.
            </p>

            <div className="grid md:grid-cols-2 gap-12 my-16">
              <div className="bg-white p-10 border border-slate-200">
                <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">High-Flow Output</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our agriculture-optimized models feature a 1.2cc internal chamber, allowing for faster saturation of large foliage areas with fewer trigger strokes.
                </p>
              </div>
              <div className="bg-white p-10 border border-slate-200">
                <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Ergonomic Integration</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The balanced center of gravity ensures that even when paired with a 1-liter bottle, the tool remains stable and easy to hover over elevated garden beds.
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-6 italic">Built for the Outdoors</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              Agricultural environments are taxing. Exposure to UV rays, dirt, and varied temperatures means our plastics must be UV-stabilized. Mila's greening series components are tested to withstand outdoor storage without becoming brittle or discoloring.
            </p>

            <div className="bg-green-600 p-12 text-white my-16">
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">Greening Series Technical Specs</h4>
              <ul className="space-y-4">
                {[
                  "UV-Stabilized Polypropylene construction",
                  "Adjustable nozzle (Stream, Mist, Off)",
                  "Customizable dip tube lengths for deep tanks",
                  "Compatible with organic fertilizers & neem oil mists"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Suggested Component */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex flex-col items-center">
          <h2 className="text-2xl font-black uppercase tracking-widest text-slate-900 mb-12">The Professional's Choice</h2>
          <div className="group relative bg-slate-50 p-12 border border-slate-100 max-w-sm text-center">
             <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/a95aebb0-0e7c-4d99-a995-c215051add65.png" 
                alt="Garden Sprayer"
                className="w-48 h-48 mx-auto mb-8 object-contain"
             />
             <h3 className="text-xl font-black uppercase tracking-tight mb-2">MILA-G3 Garden Series</h3>
             <p className="text-slate-500 text-xs uppercase tracking-widest mb-6">High Volume / High Torque</p>
             <Link to="/products" className="inline-block px-10 py-4 bg-green-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-colors">
                View Collection
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
