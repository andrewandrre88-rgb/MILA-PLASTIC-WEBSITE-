import React from "react";
import { motion } from "motion/react";
import { Code, Factory, ShieldAlert, BadgeInfo, Users2, Rocket, Headphones } from "lucide-react";

const teamGroups = [
  {
    title: "R&D & Design",
    icon: Code,
    description: "Led by senior engineers focused on spray nozzle structural innovation and mold design. Capability for rapid structural prototyping based on market trends."
  },
  {
    title: "Production & Manufacturing",
    icon: Factory,
    description: "Skilled technicians and automated equipment operators strictly adhering to standardized operational procedures at 30,000 sqm facility."
  },
  {
    title: "Quality Management",
    icon: ShieldAlert,
    description: "Independent QC department equipped with professional testing instruments. Multi-stage inspection protocols ensuring zero-defect delivery."
  },
  {
    title: "Sales & Support",
    icon: Headphones,
    description: "Specialized industry knowledge provides accurate selection advice. 24/7 online consultation for a seamless ordering process."
  }
];

export default function TeamPage() {
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
            <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-white">Our People</div>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              <span className="text-blue-500">Expert</span> <br />
              <span className="text-white italic">Craftsmanship.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Our team consists of 350+ experienced and passionate professionals dedicated to unwavering quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Breakdown */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="mb-20">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-6">The Power Driving Quality</h2>
            <p className="text-slate-500 text-sm uppercase tracking-widest font-bold opacity-60">An excellent team is the cornerstone of manufacturing superior products.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamGroups.map((group, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col"
              >
                <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center text-blue-600 mb-8">
                  <group.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black uppercase tracking-tighter mb-4">{group.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{group.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-12">
              Driven by <span className="text-blue-600 italic">Philosophy.</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-10">
              <div>
                <Rocket className="w-5 h-5 text-blue-600 mb-4" />
                <h4 className="text-xs font-black uppercase tracking-widest mb-3">Innovation Driver</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Adhering to technological innovation as our primary growth driver for custom solutions.</p>
              </div>
              <div>
                <Users2 className="w-5 h-5 text-blue-600 mb-4" />
                <h4 className="text-xs font-black uppercase tracking-widest mb-3">Collaborative Value</h4>
                <p className="text-slate-600 text-xs leading-relaxed">Close collaboration between departments ensuring zero-defect output for our global clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
