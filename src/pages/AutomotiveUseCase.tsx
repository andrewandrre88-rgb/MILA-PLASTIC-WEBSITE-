import React from "react";
import { motion } from "motion/react";
import { Car, Fuel, ShieldAlert, CheckCircle2, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function AutomotiveUseCase() {
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
              <div className="inline-block px-3 py-1 bg-slate-100 text-slate-900 text-[10px] font-black uppercase tracking-[0.3em]">Automotive Detailing</div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-slate-900">
                Precision <br />
                <span className="text-slate-500 underline underline-offset-8">Finish.</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                Detailing professionals require tools that can handle heavy solvents and petroleum-based waxes while providing a high-output mist for large body panels.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 border border-slate-100">
                  <Fuel className="w-4 h-4 text-slate-900" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Solvent Safe</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 border border-slate-100">
                  <ShieldAlert className="w-4 h-4 text-slate-900" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">High Viscosity</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video bg-slate-100 overflow-hidden border border-slate-200"
            >
              <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/automotive.png" 
                alt="Automotive application"
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
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-8">The Professional Detailing Standard</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              A car's finish is fragile. Professionals use specialized liquids—wheel cleaners, iron removers, and spray waxes—that often contain aggressive solvents or high pH levels. Standard sprayers often swell or seize when exposed to these chemicals over time.
            </p>

            <div className="grid md:grid-cols-2 gap-12 my-16">
              <div className="bg-white p-10 border border-slate-200">
                <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Industrial Gaskets</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our automotive-grade trigger sprayers feature Viton or EPDM gaskets, specifically chosen for their resistance to mineral oils and hydrocarbon-based detailers.
                </p>
              </div>
              <div className="bg-white p-10 border border-slate-200">
                <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">High-Output Pump</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Coverage is key. With a 1.5cc output per stroke, our sprayers allow detailers to cover an entire hood or door panel in seconds, ensuring even application before the product dries.
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-6 italic">Ergonomic Fatigue Management</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              Spending 8 hours a day detailing requires tools that don't cause hand cramping. Mila's automotive series features a curved three-finger trigger and a balanced center of gravity, redistributing the weight of the bottle across the hand and wrist.
            </p>

            <div className="bg-slate-900 p-12 text-white my-16">
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">Automotive Performance Metrics</h4>
              <ul className="space-y-4">
                {[
                  "Solvent-resistant polymer blend",
                  "Over-sized filter on the dip tube to prevent clogging from waxes",
                  "Extra-wide three-finger trigger for gloved use",
                  "360-degree spray capability (spray upside down)"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Suggested Product */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex flex-col items-center">
          <h2 className="text-2xl font-black uppercase tracking-widest text-slate-900 mb-12">Recommended for Detailing</h2>
          <div className="group relative bg-slate-50 p-12 border border-slate-100 max-w-sm text-center">
             <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/ebd03adf-216f-469f-8cde-0448b7be6b52.png" 
                alt="Automotive Sprayer"
                className="w-48 h-48 mx-auto mb-8 object-contain"
             />
             <h3 className="text-xl font-black uppercase tracking-tight mb-2">MILA-A5 Auto Series</h3>
             <p className="text-slate-500 text-xs uppercase tracking-widest mb-6">Solvent Safe / High Viscosity</p>
             <Link to="/products" className="inline-block px-10 py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors">
                Technical Data Sheet
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
