import React from "react";
import { motion } from "motion/react";
import { Factory, Cpu, Zap, Settings, ShieldCheck, Layers } from "lucide-react";

const capabilities = [
  {
    title: "High-Precision Injection",
    description: "Our facility is equipped with over 60 sets of advanced plastic injection machines, ranging from 120T to 450T closure force.",
    icon: Cpu,
    points: ["Multi-cavity mold systems", "Automated robotic arms", "High-speed cycling"]
  },
  {
    title: "Automated Assembly",
    description: "20 sets of fully automatic assembly lines ensure consistent tension, seal integrity, and mechanical reliability in every unit.",
    icon: Zap,
    points: ["100% seal testing", "Visual inspection sensors", "Dust-free assembly environment"]
  },
  {
    title: "Tooling & Mold R&D",
    description: "In-house precision mold manufacturing department allows for rapid iteration and custom closure development for unique brand needs.",
    icon: Settings,
    points: ["CNC machining centers", "EDM spark erosion", "Structural integrity analysis"]
  },
  {
    title: "Material Engineering",
    description: "We work with food-grade and chemical-resistant polymers (PP, PE, ABS) to ensure performance across demanding cosmetic and industrial formulations.",
    icon: Layers,
    points: ["Recycled resin options", "Exact color compounding", "Stress-crack resistance"]
  }
];

export default function CustomInjectionPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 architectural-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-white">Full-Scale Manufacturing</div>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              <span className="text-blue-500">Precision</span> <br />
              <span className="text-white italic">Molding.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              30,000 sqm of manufacturing floor optimized for high-volume, zero-defect distribution of dispensing systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Facilities Overview */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] architectural-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-6">Technological Infrastructure</div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
                Automated <br /><span className="text-blue-600">Scale.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 text-justify">
                Our plant integrates a complete industrial chain from original R&D design to precision mold manufacturing and fully automated assembly. By leveraging standardized clean room management and 20 sets of automatic assembly lines, we achieve an annual output exceeding 600 million pieces.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
                <div>
                   <div className="text-4xl font-black text-slate-900 mb-2">60+</div>
                   <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Injection Machines</div>
                </div>
                <div>
                   <div className="text-4xl font-black text-slate-900 mb-2">20</div>
                   <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">Auto Assembly Lines</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-slate-900 -z-10 rounded-2xl transform rotate-2"></div>
              <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/64295350-f655-4424-bca5-b87332f1704c.png"
                alt="Automated Injection Facility"
                className="w-full h-auto rounded-xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-slate-200 border border-slate-200">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 md:p-16 hover:bg-slate-50 transition-colors group"
              >
                <div className="flex items-center gap-6 mb-8">
                   <div className="w-14 h-14 bg-slate-900 text-white flex items-center justify-center">
                      <cap.icon className="w-6 h-6" />
                   </div>
                   <h3 className="text-2xl font-black uppercase tracking-tighter leading-none">{cap.title}</h3>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">{cap.description}</p>
                <div className="space-y-3">
                  {cap.points.map((point, j) => (
                    <div key={j} className="flex items-center gap-4">
                      <ShieldCheck className="w-4 h-4 text-blue-600" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-900">{point}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="bg-blue-600 p-12 md:p-24 text-white text-center flex flex-col items-center">
             <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-8">
               From Concept to <span className="italic opacity-50 underline decoration-white decoration-2 underline-offset-8">Mass Production.</span>
             </h2>
             <p className="text-white/80 max-w-2xl text-lg mb-12">
               Our engineering team specialized in structural innovation for Dispenser Systems. Partner with us for proprietary mold development.
             </p>
             <button className="px-12 py-5 bg-white text-blue-600 font-black uppercase tracking-widest text-xs hover:bg-slate-900 hover:text-white transition-all shadow-xl">
               Contact Engineering Team
             </button>
          </div>
        </div>
      </section>
    </div>
  );
}
