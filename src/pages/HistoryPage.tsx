import React from "react";
import { motion } from "motion/react";
import { History as HistoryIcon, TrendingUp, Award, Globe } from "lucide-react";

const milestones = [
  {
    year: "2018",
    title: "The Foundation",
    description: "Zhejiang Mila Plastics Co., Ltd. was established on March 7, 2018, in Quzhou, Zhejiang. Founded by Liu Zhenxing to contribute to hometown economic development."
  },
  {
    year: "2019",
    title: "Regional Expansion",
    description: "The founder established Ningbo Niu Yi Plastics Co., Ltd, further strengthening the group's manufacturing footprint in plastic production."
  },
  {
    year: "2020-2022",
    title: "Technological Leap",
    description: "Integration of complete industrial chains from R&D to automatic assembly. Deployment of standardized clean room management."
  },
  {
    year: "Present",
    title: "Global Reach",
    description: "Established a global marketing network covering North America, UK, Korea, Japan, and China. 60+ injection machines and 600M+ annual output."
  }
];

export default function HistoryPage() {
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
            <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-white">Our Journey</div>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              <span className="text-blue-500">Pioneering</span> <br />
              <span className="text-white italic">History.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              From a local hometown initiative to an international standard sprayer enterprise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="space-y-24">
            {milestones.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid md:grid-cols-12 gap-8 items-start"
              >
                <div className="md:col-span-3">
                  <div className="text-6xl md:text-8xl font-black text-slate-100 uppercase tracking-tighter sticky top-24">{item.year}</div>
                </div>
                <div className="md:col-span-1 hidden md:flex justify-center pt-8">
                  <div className="w-px h-full bg-slate-200 relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600"></div>
                  </div>
                </div>
                <div className="md:col-span-8 pt-6">
                  <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">{item.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-10">
          <div className="bg-white p-16 md:p-24 border border-slate-200 relative overflow-hidden">
            <HistoryIcon className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-50 -z-10" />
            <div className="max-w-3xl">
              <h2 className="text-3xl font-black uppercase tracking-tighter mb-10">Technical Foundation</h2>
              <p className="text-slate-600 text-lg leading-relaxed italic mb-10">
                "Our development is built on patented innovations like the Anti-overflow Adjustable Angle Nozzle and advanced injection molding devices. We stay ahead by placing immense importance on new product research."
              </p>
              <div className="flex gap-12">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Registration</span>
                  <span className="text-sm font-bold text-slate-900 lowercase italic">Kecheng District, Quzhou</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Capital</span>
                  <span className="text-sm font-bold text-slate-900">5 Million RMB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
