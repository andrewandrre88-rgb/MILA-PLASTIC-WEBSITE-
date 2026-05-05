import React from "react";
import { motion } from "motion/react";
import { Settings, ShieldCheck, Truck, Headphones, CheckCircle2, Zap } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Product Customization",
      icon: Settings,
      details: [
        "Specification Customization: Support for 28/400, 28/410, 28/415 calibers.",
        "Color Customization: Exact matching to customer-specified color codes.",
        "Logo Customization: Mold engraving, screen printing, and hot stamping."
      ]
    },
    {
      title: "Quality Assurance",
      icon: ShieldCheck,
      details: [
        "Full-process monitoring from raw material to delivery.",
        "Ensuring products are burr-free, leak-proof, and consistent.",
        "Premium eco-friendly materials (PP, ABS) compliant with industry standards."
      ]
    },
    {
      title: "Production & Delivery",
      icon: Truck,
      details: [
        "Direct manufacturer with automated injection and assembly lines.",
        "Large-scale capacity for fast delivery of bulk orders.",
        "Regular inventory maintained for small trial and urgent orders."
      ]
    },
    {
      title: "After-Sales Support",
      icon: Headphones,
      details: [
        "Professional technical consultation and application guidance.",
        "Quick response team for any quality or usage concerns.",
        "Worry-free replacement and solution protocols."
      ]
    }
  ];

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
            <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-white">Service Excellence</div>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              <span className="text-blue-500">Complete</span> <br />
              <span className="text-white italic">Solutions.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Customized & Quality Assured – Your complete spray nozzle gun solution from R&D to global delivery.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02] architectural-grid pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <div className="grid md:grid-cols-2 gap-px bg-slate-100 border border-slate-100">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-12 md:p-16 hover:bg-slate-50 transition-colors group"
              >
                <service.icon className="w-12 h-12 text-blue-600 mb-8 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 leading-none">{service.title}</h3>
                <ul className="space-y-4">
                  {service.details.map((detail, j) => (
                    <li key={j} className="flex items-start gap-4 text-slate-600 text-sm leading-relaxed">
                      <Zap className="w-4 h-4 text-blue-600 shrink-0 mt-1" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capability Footer */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="bg-slate-900 p-12 md:p-20 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <h2 className="text-white text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] mb-6">
                Request a <span className="text-blue-500 italic">Custom Quote.</span>
              </h2>
              <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Discuss your brand's unique specifications with our engineering team.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-10 py-5 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all">
                Project Brief
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
