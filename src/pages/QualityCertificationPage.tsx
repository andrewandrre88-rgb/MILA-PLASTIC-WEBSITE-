import React from "react";
import { motion } from "motion/react";
import { Award, FileCheck, Shield, Zap, Globe, Target } from "lucide-react";

const certifications = [
  {
    title: "ISO 9001:2015",
    org: "Quality Management System",
    description: "Certified for our commitment to customer satisfaction and consistent high-quality product delivery through rigorous process management.",
    icon: Shield
  },
  {
    title: "ISO 14001:2015",
    org: "Environmental Management",
    description: "Verified systems for measuring and improving our environmental impact throughout the injection molding lifecycle.",
    icon: Globe
  },
  {
    title: "SGS Global Standards",
    org: "Product Safety & Compliance",
    description: "All trigger mechanisms undergo third-party SGS testing to ensure compliance with international chemical and mechanical safety standards.",
    icon: FileCheck
  },
  {
    title: "Zero-Defect Initiative",
    org: "Internal MILA Standard",
    description: "Our proprietary 100% optical inspection protocol achieves a verified market defect rate of less than 0.01%.",
    icon: Target
  }
];

export default function QualityCertificationPage() {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 architectural-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Compliance & Trust</div>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              <span className="text-blue-500">Quality &</span> <br />
              <span className="text-white italic">Certification.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Global manufacturing excellence backed by international standard verification and a relentless pursuit of engineering perfection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] architectural-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-10 bg-slate-50 border border-slate-100 hover:border-blue-600 transition-all hover:shadow-2xl hover:shadow-slate-200/50"
              >
                <div className="w-16 h-16 bg-white flex items-center justify-center text-blue-600 mb-8 border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <cert.icon className="w-8 h-8" />
                </div>
                <div className="mb-6">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-1 leading-none">{cert.title}</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">{cert.org}</p>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
                  {cert.description}
                </p>
                <div className="mt-8 pt-8 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Status: Verified</span>
                  <Award className="w-4 h-4 text-slate-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="inline-block px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.3em] mb-6">Original Engineering</div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
                Patented <span className="text-blue-600 italic">Innovation.</span>
              </h2>
              <p className="text-slate-500 text-sm uppercase tracking-widest font-bold opacity-60">
                Technical blueprints and intellectual property filing for our proprietary mechanical mechanisms.
              </p>
            </div>
            <div className="text-right">
              <span className="text-5xl md:text-8xl font-black text-slate-100 uppercase tracking-tighter">001—006</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {[
              "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/20260306145741_83178.png",
              "https://github.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/blob/main/20260306145751_33323.png?raw=true",
              "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/20260306145803_29863.png",
              "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/20260306145812_53596.png",
              "https://github.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/blob/main/20260306145821_68526.png?raw=true",
              "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/20260306145828_85996.png"
            ].map((url, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group relative aspect-square bg-slate-50 border border-slate-100 overflow-hidden"
              >
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/5 transition-colors z-10"></div>
                <img 
                  src={url} 
                  alt={`Patent Drawing ${idx + 1}`} 
                  className="w-full h-full object-contain p-8 mix-blend-multiply transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 text-[8px] font-black font-mono text-slate-300 group-hover:text-blue-600 transition-colors">
                  FIG. {idx + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Excellence Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-block px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.3em] mb-6">Precision Core</div>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.95] mb-8">
                The Science of <span className="text-blue-600 italic">Consistency.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                Beyond formal certificates, we maintain internal benchmarks that exceed industry requirements. Our commitment to polymer synthesis and mechanical leverage research ensures that every "Mila" trigger performs under the most demanding conditions.
              </p>
              <div className="space-y-4">
                {[
                  "Automated Optical QC on 100% of Production",
                  "Chemical Resistance Stability Analysis",
                  "Cycle Tolerance Testing (Up to 100,000 Pulls)",
                  "Thermal stress environment verification"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Zap className="w-4 h-4 text-blue-600" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-900">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-3xl -z-10"></div>
              <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/208b9fb6-7dcd-4fa5-a1cd-b4795b225aca.png" 
                alt="Technical Quality" 
                className="w-full h-auto drop-shadow-2xl border border-white"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Document CTA */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="bg-slate-900 p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
            <div className="max-w-xl">
              <h2 className="text-white text-4xl font-black uppercase tracking-tighter mb-6 leading-none">Download <br />Technical Certificates.</h2>
              <p className="text-slate-400 text-sm leading-relaxed uppercase tracking-widest font-bold opacity-60">Full ISO documentation and laboratory reports available for authorized partners.</p>
            </div>
            <button className="px-10 py-5 bg-blue-600 text-white font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all">
              Access Data Portal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
