import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, CheckCircle2, ClipboardCheck, Microscope, Headphones } from "lucide-react";

const qcSystages = [
  {
    stage: "1. Pre-Production Verification",
    process: "Before order confirmation, we conduct a strict material and color verification against an approved physical sample.",
    purpose: "Ensures all raw materials and color formulas precisely match your specifications and expectations before mass production begins.",
    icon: Microscope
  },
  {
    stage: "2. In-Production Monitoring",
    process: "We implement comprehensive production phase tracking from start to finish. Our team monitors each step, from molding and assembly to initial testing.",
    purpose: "Provides full traceability, allows for early intervention if needed, and ensures the manufacturing process adheres to agreed-upon standards.",
    icon: CheckCircle2
  },
  {
    stage: "3. Pre-Packing Inspection",
    process: "Every individual unit undergoes a final quality inspection and cleaning process before being packed.",
    purpose: "Guarantees that only products meeting our strict criteria for function, appearance, and cleanliness are prepared for shipment.",
    icon: ClipboardCheck
  },
  {
    stage: "4. Pre-Shipment Inspection (Optional)",
    process: "Before delivery, clients are welcome to send their own Quality Control (QC) inspector to our facility to perform an independent check.",
    purpose: "Offers you complete confidence and direct verification of product quality prior to shipment and balance payment.",
    icon: ShieldCheck
  },
  {
    stage: "5. Post-Delivery Support",
    process: "We are committed to promptly assisting clients in resolving any issues that may occur, providing dedicated after-sales support.",
    purpose: "Demonstrates our partnership commitment to your satisfaction and the long-term success of your product in the market.",
    icon: Headphones
  }
];

export default function QualityControlPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 architectural-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-white">Standards of Excellence</div>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              <span className="text-blue-500">Quality</span> <br />
              <span className="text-white italic">Control.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              We maintain a rigorous, multi-stage quality control system to ensure every order meets the highest standards of quality and consistency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] architectural-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <div className="mb-20 max-w-3xl">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">Our Protocol</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our process is designed for full transparency and partnership. We integrate quality into every step of the manufacturing lifecycle.
            </p>
          </div>

          <div className="space-y-4">
            {qcSystages.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group grid md:grid-cols-12 border border-slate-100 items-stretch bg-white hover:border-blue-600 transition-colors"
              >
                <div className="md:col-span-1 bg-slate-50 flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <item.icon className="w-8 h-8" />
                </div>
                <div className="md:col-span-3 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
                  <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600 mb-2">{item.stage}</h3>
                  <p className="text-slate-900 font-bold uppercase tracking-tight text-sm leading-tight">Mila Standards Compliance</p>
                </div>
                <div className="md:col-span-4 p-8 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-100">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 font-mono">Process Definition</div>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.process}</p>
                </div>
                <div className="md:col-span-4 p-8 flex flex-col justify-center bg-slate-50/50">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 font-mono">Strategic Impact</div>
                  <p className="text-slate-500 text-sm leading-relaxed italic">{item.purpose}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 bg-slate-900 text-white border-l-8 border-blue-600"
          >
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-6 underline decoration-blue-600 decoration-4 underline-offset-8">Our Commitment</h3>
            <p className="text-slate-400 text-lg leading-relaxed max-w-4xl">
              Quality is integrated into every step. We are your reliable manufacturing partner, ensuring that the products you receive are precisely as specified and of the quality your brand deserves.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 text-center">
          <div className="max-w-2xl mx-auto">
            <CheckCircle2 className="w-12 h-12 text-blue-600 mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6">Ready to scale production?</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-10 opacity-70">Experience zero-variance manufacturing excellence.</p>
            <div className="flex justify-center gap-6">
              <button className="bg-slate-900 text-white px-10 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-colors">
                Request Audit Report
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
