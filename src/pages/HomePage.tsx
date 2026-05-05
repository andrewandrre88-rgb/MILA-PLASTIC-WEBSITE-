import { motion, useScroll, useTransform } from "motion/react";
import {
  Factory,
  Droplets,
  Settings,
  ShieldCheck,
  Globe2,
  Cpu,
  ArrowRight,
  ArrowUpRight,
  Target,
  Recycle
} from "lucide-react";
import { useRef } from "react";
import { products } from "../data/products";
import { Link } from "react-router-dom";

export default function HomePage() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const bannerY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <>
      {/* Hero Section */}
      <section ref={targetRef} className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-900 text-white">
        {/* Decorative Grid Overlay */}
        <div className="absolute inset-0 architectural-grid opacity-10 pointer-events-none z-0"></div>

        {/* Background sprayer image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full h-full relative"
          >
            <img 
              src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/bd131f07-5d43-4fd1-8cca-ad6a179990da.png"
              className="w-full h-full object-cover lg:object-contain lg:object-right transform lg:translate-x-[20%]"
              alt="Mila Plastics Hardware Architecture"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-10 w-full relative z-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-white">Advanced Dispensing Systems</div>
              <h1 className="text-4xl sm:text-6xl lg:text-[8rem] font-black leading-[0.9] lg:leading-[0.8] mb-8 md:mb-10 tracking-tighter uppercase">
                <span className="text-blue-500">The No.1</span> <br />
                <span className="text-white italic">Manufacturer.</span>
              </h1>
              
              <p className="text-lg md:text-2xl text-slate-400 mb-10 md:mb-12 max-w-lg leading-relaxed font-medium">
                of Liquid Dispensing Systems in China.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-10 border-t border-white/10">
                <button className="px-6 sm:px-10 py-4 sm:py-5 bg-blue-600 text-white font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-white hover:text-slate-900 transition-all active:scale-95 flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/20 w-full sm:w-auto">
                  Request Data Portal
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link to="/products" className="px-6 sm:px-10 py-4 sm:py-5 border-2 border-white/20 text-white font-bold text-xs sm:text-sm uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95 text-center w-full sm:w-auto">
                  Full Inventory
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom Data Grid */}
      <section className="border-t border-slate-200 bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 flex-shrink-0">
        <div className="p-6 md:p-10">
          <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 font-mono">Daily Capacity</div>
          <div className="text-3xl sm:text-4xl font-black">550,000</div>
          <div className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase font-bold opacity-60">Units per 24h cycle</div>
        </div>
        <div className="p-6 md:p-10">
          <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 font-mono">Nozzle Variants</div>
          <div className="text-3xl sm:text-4xl font-black text-blue-600 italic">Stream/Spray</div>
          <div className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase font-bold opacity-60">Adjustable & Foamer Options</div>
        </div>
        <div className="p-6 md:p-10">
          <div className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 font-mono">Global Lead Time</div>
          <div className="text-3xl sm:text-4xl font-black">14 Days</div>
          <div className="text-[10px] sm:text-xs text-slate-500 mt-1 uppercase font-bold opacity-60">Express tooling available</div>
        </div>
        <div className="p-6 md:p-10 bg-slate-900 text-white flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-slate-800 transition-colors">
          <div className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-bold mb-3 opacity-40">B2B Portal Access</div>
          <div className="text-sm font-black underline underline-offset-8 group-hover:text-blue-400 transition-colors uppercase tracking-widest">Wholesale Login →</div>
        </div>
      </section>

      {/* Brief Products Section */}
      <section id="standard-sprayers" className="py-20 md:py-32 bg-white relative overflow-hidden data-border border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-6 tracking-tighter leading-none">
                Mila <span className="text-blue-600 italic">Series</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Precision-engineered dispensing solutions for global enterprises. Guaranteed zero-defect manufacturing.
              </p>
            </div>
            <Link to="/products" className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 border-b border-slate-200 pb-2 hover:text-blue-600 hover:border-blue-600 transition-all flex items-center gap-2 group">
              Full Specs Catalog
              <ArrowUpRight className="w-3 h-3 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {products.slice(0, 3).map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group flex flex-col"
              >
                <Link to={(product as any).customPath || `/products/${product.id}`} className="block">
                  <div className="aspect-[4/5] bg-slate-50 border border-slate-100 overflow-hidden relative mb-8">
                    <img
                      src={product.imageSrc}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-0 right-0 p-4">
                      <div className="text-3xl font-light text-slate-200 font-mono tracking-tighter group-hover:text-blue-100 transition-colors">
                        #{product.id.split('-')[1] || product.id}
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Premium Grade</span>
                  </div>
                  <Link to={(product as any).customPath || `/products/${product.id}`} className="hover:text-blue-600 transition-colors">
                    <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">{product.name}</h3>
                  </Link>
                  <p className="text-slate-500 mb-8 text-sm leading-relaxed flex-grow">
                    {product.description}
                  </p>
                  <Link to={(product as any).customPath || `/products/${product.id}`} className="w-fit flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] text-slate-900 group/btn border-b-2 border-transparent hover:border-blue-600 transition-all pb-1">
                    Request Data
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Showcase Section */}
      <section className="py-20 md:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-slate-100 overflow-hidden border border-slate-200"
              >
                <img 
                  src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/mmexport1777554925969.jpg"
                  className="w-full h-full object-cover transition-all duration-1000 cursor-crosshair"
                  alt="Mila Plastics Production Facility"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 text-white bg-slate-900/80 backdrop-blur-sm px-4 py-2 border border-white/20">
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] leading-none">Automated Assembly</div>
                </div>
              </motion.div>
            </div>
            <div className="lg:col-span-4">
              <div className="space-y-6 px-4 lg:px-0">
                <div className="inline-block px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.3em]">Manufacturing Capacity</div>
                <h3 className="text-4xl font-black uppercase leading-none tracking-tighter">
                  Industrial <br />Powerhouse.
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                  Our core facility leverages top-tier robotics and 24/7 monitoring systems to ensure consistency across every single production run. From raw polymer to final QC, we own the entire value chain.
                </p>
                <div className="flex gap-8 pt-6">
                   <div>
                      <div className="text-2xl font-black text-blue-600">120+</div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Injection Units</div>
                   </div>
                   <div>
                      <div className="text-2xl font-black text-blue-600">550k+</div>
                      <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Daily Units</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Content Section */}
      <section id="technology" className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-industrial-100 -z-10 rounded-full blur-3xl opacity-50"></div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative z-10 border-[8px] sm:border-[12px] border-slate-50"
              >
                <img
                  src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/ebd03adf-216f-469f-8cde-0448b7be6b52.png"
                  alt="Precision Injection Molding"
                  className="w-full h-auto transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>

            <div className="space-y-10 order-2 lg:order-none">
              <div className="px-4 lg:px-0">
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.4em] text-industrial-500 mb-4 block">Manufacturing Excellence</span>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight uppercase tracking-tighter">
                  Where Science <br />Meets Synthesis
                </h2>
              </div>
              
              <div className="space-y-6 sm:space-y-8 px-4 lg:px-0">
                {[
                  {
                    title: "Medical-Grade Environment",
                    desc: "Class 100,000 clean rooms for specialized medical and laboratory sprayers.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Bi-Injection Tech",
                    desc: "State-of-the-art multi-component injection for soft-touch grips and integrated seals.",
                    icon: Cpu
                  },
                  {
                    title: "Advanced Rheology",
                    desc: "Predictive molding simulations ensure zero-variance in polymer flow and structural integrity.",
                    icon: Droplets
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-50 flex items-center justify-center group-hover:bg-industrial-900 group-hover:text-white transition-colors">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-lg font-bold uppercase mb-2 group-hover:text-industrial-700 transition-colors">{item.title}</h5>
                      <p className="text-slate-500 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Components Section */}
      <section id="components" className="py-20 md:py-32 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#0066FF]/5 rounded-3xl blur-3xl -z-10"></div>
                <img 
                  src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/208b9fb6-7dcd-4fa5-a1cd-b4795b225aca.png"
                  alt="Precision Engineering Components"
                  className="w-full h-auto drop-shadow-2xl rounded-2xl border border-white/50"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Detail Tags */}
                <div className="absolute top-10 right-0 translate-x-1/4 hidden md:block">
                  <div className="bg-white p-4 shadow-xl border border-slate-100 flex items-center gap-4">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">50k+ Cycles Tested</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 space-y-6 sm:space-y-8"
            >
              <div className="inline-block px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.3em]">Internal Architecture</div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] md:leading-[0.9]">
                Molecular <br />
                <span className="text-[#0066FF] italic">Precision.</span>
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg">
                The soul of our trigger systems lies in the internal sub-assemblies. Utilizing a proprietary blend of high-density polymers, each spring, valve, and gasket is engineered to withstand extreme chemical environments and repeated mechanical stress.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="p-6 bg-white border border-slate-200">
                  <h4 className="text-sm font-black uppercase mb-2 tracking-tight">Zero-Stress Molding</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Advanced cooling cycles prevent internal warping, ensuring microns-level accuracy across millions of units.</p>
                </div>
                <div className="p-6 bg-white border border-slate-200">
                  <h4 className="text-sm font-black uppercase mb-2 tracking-tight">Polymer Synthesis</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">Custom material compounding specifically optimized for friction reduction and long-term elasticity.</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center gap-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center overflow-hidden">
                       <ShieldCheck className="w-5 h-5 text-blue-600 opacity-40" />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">
                  Trusted by 200+ <br />Global Chemical Brands
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Banner */}
      <section id="quality" className="py-20 bg-slate-900 relative h-[600px] flex items-center justify-center text-center overflow-hidden">
        <img
          src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/bd131f07-5d43-4fd1-8cca-ad6a179990da.png"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          alt="Quality Control"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <ShieldCheck className="w-16 h-16 text-industrial-500 mx-auto mb-8" />
            <h2 className="text-4xl md:text-7xl font-bold text-white uppercase italic tracking-tighter mb-8 leading-none">
              Zero Variance <br />Is Our Baseline
            </h2>
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
              Every single MILA unit undergoes computerized optical inspection and pneumatic pressure testing before leaving our facility.
            </p>
            <button className="bg-white text-industrial-950 px-10 py-4 font-bold uppercase tracking-widest hover:bg-industrial-100 transition-all">
              Download QC Report
            </button>
          </motion.div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4 space-y-8">
              <div className="inline-block px-3 py-1 bg-blue-600 text-white text-[9px] font-black uppercase tracking-[0.3em]">Supply Chain Integrity</div>
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Global <br />
                <span className="text-blue-600 italic">Distribution.</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Our logistics network spans across six continents, ensuring that our precision trigger systems reach high-volume manufacturers with localized efficiency. From our core hub, we manage complex international transit protocols to guarantee delivery timelines.
              </p>
              
              <div className="space-y-6 pt-4 border-t border-slate-100">
                {[
                  { label: "Transit Hubs", val: "14 Strategic Points" },
                  { label: "Annual Export", val: "150M Units" },
                  { label: "Active Regions", val: "45+ Countries" }
                ].map((stat, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                    <span className="text-sm font-black text-slate-900">{stat.val}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10"
              >
                <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-3xl opacity-30 -z-10"></div>
                <img 
                  src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/ChatGPT%20Image%20May%205%2C%202026%2C%2004_54_04%20AM.png"
                  alt="Global Distribution Map"
                  className="w-full h-auto drop-shadow-2xl border border-slate-100"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              {/* Decorative Map Accents */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-50 border-8 border-white -z-10 hidden xl:block"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
