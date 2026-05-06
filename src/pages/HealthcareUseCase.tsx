import React from "react";
import { motion } from "motion/react";
import { PlusSquare, ShieldCheck, Microscope, CheckCircle2, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function HealthcareUseCase() {
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
              <div className="inline-block px-3 py-1 bg-red-50 text-red-600 text-[10px] font-black uppercase tracking-[0.3em]">Hospital & Healthcare</div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-slate-900">
                Medical <br />
                <span className="text-blue-600 italic">Integrity.</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                Sanitization in medical environments requires zero-tolerance for failure. Our medical-grade dispensing systems ensure consistent, high-precision surface sterilization.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">High Precision</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 border border-slate-100">
                  <Microscope className="w-4 h-4 text-blue-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Lab Tested</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video bg-slate-100 overflow-hidden border border-slate-200"
            >
              <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/sanitizer.png" 
                alt="Healthcare sanitization application"
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
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-8">The Sterile Barrier</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Dispensing disinfectant is a critical first step in preventing HAIs (Healthcare-Associated Infections). In a hospital setting, sprayers must handle high concentrations of alcohol (70%+) and peroxide-based cleaners without degrading or emitting micro-plastics into the environment.
            </p>

            <div className="grid md:grid-cols-2 gap-12 my-16">
              <div className="bg-white p-10 border border-slate-200 shadow-sm">
                <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Precision Dosing</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our medical series are calibrated to deliver an exact 1.0ml ± 0.1ml per stroke, allowing hospital staff to accurately calculate disinfectant usage per surface area.
                </p>
              </div>
              <div className="bg-white p-10 border border-slate-200 shadow-sm">
                <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Clean-Room Manufacturing</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  All medical-grade components are assembled in Class 100,000 clean rooms, ensuring that no particulate matter or dust is trapped within the pump mechanism.
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-6 italic">Sustainability in Sanitation</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              Large healthcare organizations are under pressure to reduce plastic waste. Mila Plastics partners with health systems by providing bulk-buy dispensers that allow institutions to purchase 20L containers of sanitizer and refill high-quality bottles in-house.
            </p>

            <div className="bg-slate-900 p-12 text-white my-16">
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">Healthcare Compliance Standards</h4>
              <ul className="space-y-4">
                {[
                  "ISO 13485 (Medical Device) manufacturing standards",
                  "100% test rate for dosage accuracy on every production batch",
                  "Antimicrobial plastic options for high-touch trigger surfaces",
                  "Alcohol-resistant external housing components"
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

      {/* Recommended Component */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex flex-col items-center">
          <h2 className="text-2xl font-black uppercase tracking-widest text-slate-900 mb-12">Institutional Grade</h2>
          <div className="group relative bg-slate-50 p-12 border border-slate-100 max-w-sm text-center">
             <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/0487069b-862d-488e-85c2-490d1238a8c2.png" 
                alt="Medical Pump"
                className="w-48 h-48 mx-auto mb-8 object-contain"
             />
             <h3 className="text-xl font-black uppercase tracking-tight mb-2">MILA-M1 Clinical Pump</h3>
             <p className="text-slate-500 text-xs uppercase tracking-widest mb-6">High Precision / Clean-Room Assembled</p>
             <Link to="/products" className="inline-block px-10 py-4 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors">
                View Certification Details
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
