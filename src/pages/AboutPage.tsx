import React from "react";
import { motion } from "motion/react";
import { Factory, MapPin, BarChart3, Users, Calendar, Globe2, Ship } from "lucide-react";

const stats = [
  { label: "Main Market", value: "South America, Europe, Asia", icon: Globe2 },
  { label: "Business Type", value: "Manufacturer", icon: Factory },
  { label: "Employees", value: "300–400", icon: Users },
  { label: "Established", value: "2018", icon: Calendar },
  { label: "Annual Sales", value: "$50M - $53M", icon: BarChart3 },
  { label: "Export Ratio", value: "70% - 80%", icon: Ship }
];

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 architectural-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-white">Mila Plastic Industry</div>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.8] mb-8">
              <span className="text-blue-500">Engineering</span> <br />
              <span className="text-white italic">Excellence.</span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl px-2 sm:px-0">
              Zhejiang Mila Plastic Industry Co., Ltd. is a leading global manufacturer specializing in high-performance cosmetic and industrial sprayer systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12 border-b border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center px-4">
                <stat.icon className="w-5 h-5 text-blue-600 mx-auto mb-4 opacity-50" />
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{stat.label}</div>
                <div className="text-xs font-bold text-slate-900 uppercase">{stat.value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-10">
                A Legacy of <br /> Precision <span className="text-blue-600">Molding.</span>
              </h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  Located in the beautiful city of Quzhou, Zhejiang Province, our facility covers an area of over 30,000 square meters. We specialize in the production of various cosmetic packaging products, including Trigger Sprayers, Mist Sprayers, Lotion Pumps, Foam Pumps, and Perfume Sprayers.
                </p>
                <p>
                  We have built a complete industrial chain integrating R&D design, precision mold manufacturing, automated injection, and assembly equipment manufacturing. Our products are widely used in cosmetics, food, medicine, house cleaning, and greening globally.
                </p>
                <p className="font-bold text-slate-900 italic">
                  "Striving to be a globally reliable nozzle supplier and serving every loyal customer of MILA" is our unremitting goal.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-12 text-white relative"
            >
              <div className="absolute top-0 right-0 p-8">
                <Factory className="w-12 h-12 text-blue-600 opacity-20" />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 underline decoration-blue-600 decoration-4 underline-offset-8 text-[#eaeaea]">Production Capacity</h3>
              <ul className="space-y-8">
                {[
                  { label: "Injection Machines", value: "60 Sets" },
                  { label: "Automatic Lines", value: "20 Sets" },
                  { label: "Annual Sales", value: "$50M - $53M USD" },
                  { label: "Export Ratio", value: "70% - 80%" }
                ].map((item, i) => (
                  <li key={i} className="flex justify-between items-end border-b border-white/10 pb-4">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{item.label}</span>
                    <span className="text-xl font-black uppercase tracking-tighter">{item.value}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Factory Video Section */}
      <section id="factory-video" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-[9px] font-black uppercase tracking-[0.3em] mb-4 border border-blue-100">Video Insight</div>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              Facility <span className="text-blue-600 italic">In Motion.</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed uppercase font-bold tracking-widest opacity-60">
              Live documentation of our automated production and quality assurance lines.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-black shadow-2xl border border-slate-200 overflow-hidden"
          >
            <iframe
              loading="lazy"
              title="Mila Plastics Factory Video"
              src="https://play.gumlet.io/embed/69f35cb71dfaccdc953ce1f5?background=false&autoplay=false&loop=false&disable_player_controls=false"
              style={{ border: "none", position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}
              referrerPolicy="origin"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write;"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Inside the Factory Video Section */}
      <section id="inside-factory" className="py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="mb-12 lg:mb-16 text-center max-w-2xl mx-auto">
            <div className="inline-block px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.3em] mb-4">On-Site Access</div>
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-6">
              Inside <span className="text-blue-600 italic">The Factory.</span>
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed uppercase font-bold tracking-widest opacity-60">
              A deep dive into our core manufacturing units and technical infrastructure.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-black shadow-2xl border border-slate-200 overflow-hidden"
          >
            <iframe
              loading="lazy"
              title="Inside the Factory"
              src="https://play.gumlet.io/embed/69f35cb71dfaccdc953ce1f3?background=false&autoplay=false&loop=false&disable_player_controls=false"
              style={{ border: "none", position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}
              referrerPolicy="origin"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write;"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Machine working video section */}
      <section id="machine-operation" className="py-20 lg:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 px-4 md:px-0">
            <div>
              <div className="inline-block px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.3em] mb-4">Precision Engineering</div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                Machine <br /><span className="text-blue-600 italic">Core Dynamics.</span>
              </h3>
            </div>
            <div className="md:border-l md:border-slate-300 md:pl-10">
              <p className="text-slate-600 text-sm leading-relaxed uppercase font-bold tracking-widest opacity-60">
                Witness the high-speed cycle times and extreme precision of our injection molding hardware in real-time execution.
              </p>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-video bg-black shadow-2xl border border-slate-200 overflow-hidden"
          >
            <iframe
              loading="lazy"
              title="Machine Working"
              src="https://play.gumlet.io/embed/69f35cb7c530a8d6d2b802b5?background=false&autoplay=false&loop=false&disable_player_controls=false"
              style={{ border: "none", position: "absolute", top: 0, left: 0, height: "100%", width: "100%" }}
              referrerPolicy="origin"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write;"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Area */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-10 text-center">
          <div className="inline-block px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest mb-10">Our Philosophy</div>
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-10">
            "Gaining trust with <span className="text-blue-600 italic underline underline-offset-8">Quality.</span>"
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            We regard product quality as our life. We always uphold the enterprise spirit of being practical, innovative, pioneering, and progressive. Relying on advanced technical equipment and high-quality software and hardware investment, we strive to build MILA into an international standard sprayer enterprise.
          </p>
        </div>
      </section>
    </div>
  );
}
