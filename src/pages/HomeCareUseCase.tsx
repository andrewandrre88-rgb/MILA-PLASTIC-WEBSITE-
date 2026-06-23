import React from "react";
import { motion } from "motion/react";
import { Home, Shield, Zap, CheckCircle2, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function HomeCareUseCase() {
  useSEO({
    title: "Household Cleaner & Detergent Bottle Trigger Sprayers",
    description: "Discover our chemical-resistant trigger sprayers for home care and household cleaners, featuring 100% leakproof sealing and high formula compatibility.",
    keywords: "home care sprayers, detergent spray bottle, chemical resistant trigger sprayer, household cleaner packaging",
    canonicalPath: "/real-use-cases/home-care"
  });

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
              <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-black uppercase tracking-[0.3em]">Home Care Industry</div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-slate-900">
                Industrial <br />
                <span className="text-blue-600">Strength.</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                In the competitive home care market, durability isn't just a feature—it's the foundation of brand trust. Our heavy-duty trigger sprayers are engineered for the most demanding cleaning formulations.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 border border-slate-100">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Acid-Resistant</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 border border-slate-100">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">High-Output</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video bg-slate-100 overflow-hidden border border-slate-200"
            >
              <img 
                src="https://github.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/blob/main/kitchen%20cleaning.png?raw=true" 
                alt="Industrial kitchen cleaning application"
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
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-8">The Challenge: Chemical Integrity</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Household cleaners have evolved. From high-concentration degreasers to acidic bathroom descalers, the chemical profile of modern cleaning agents is more aggressive than ever. Standard dispensing systems often fail under these conditions, leading to trigger fatigue, spring corrosion, and catastrophic leaks.
            </p>

            <div className="grid md:grid-cols-2 gap-12 my-16">
              <div className="bg-white p-10 border border-slate-200">
                <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Precision Engineering</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our S1 Series utilizes reinforced Polypropylene internal components and fluoropolymer gaskets, ensuring 100% compatibility with a wide range of solvent chemistries.
                </p>
              </div>
              <div className="bg-white p-10 border border-slate-200">
                <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Ergonomic Leverage</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The trigger geometry is designed for professional janitorial use, reducing hand strain during long-duration cleaning tasks through optimized mechanical advantage.
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-6 italic">Sustainability & Durability</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              Mila Plastics focuses on the lifecycle of the product. By providing a sprayer that outlasts the contents of the bottle, we enable "refill-at-home" models, significantly reducing single-use plastic waste for top-tier cleaning brands.
            </p>

            <div className="bg-slate-900 p-12 text-white my-16">
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">Technical Requirements for Home Care</h4>
              <ul className="space-y-4">
                {[
                  "Acid and Alkaline Compatibility (pH 2-12)",
                  "Fatigue-resistant spring mechanism (>10,000 strokes)",
                  "Zero-leak technology for e-commerce shipping",
                  "Adjustable nozzle from fine mist to 5m jet stream"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex flex-col items-center">
          <h2 className="text-2xl font-black uppercase tracking-widest text-slate-900 mb-12">Optimized For This Industry</h2>
          <div className="group relative bg-slate-50 p-12 border border-slate-100 max-w-sm text-center">
             <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/a95aebb0-0e7c-4d99-a995-c215051add65.png" 
                alt="Heavy Duty Trigger"
                className="w-48 h-48 mx-auto mb-8 object-contain"
             />
             <h3 className="text-xl font-black uppercase tracking-tight mb-2">MILA-S1 Heavy Duty</h3>
             <p className="text-slate-500 text-xs uppercase tracking-widest mb-6">Reinforced Architectural System</p>
             <Link to="/products" className="inline-block px-10 py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors">
                View Full Specs
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
