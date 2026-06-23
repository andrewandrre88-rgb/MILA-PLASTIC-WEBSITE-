import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Home, Leaf, FlaskConical, Droplets, Car, PlusSquare, Sparkles, ArrowRight } from "lucide-react";
import useSEO from "../hooks/useSEO";

const useCases = [
  {
    id: "home-care",
    category: "Home Care",
    title: "Industrial Strength Cleaning",
    description: "Heavy-duty trigger sprayers built to withstand corrosive chemicals and acidic cleaning agents without structural degradation.",
    icon: Home,
    image: "https://github.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/blob/main/kitchen%20cleaning.png?raw=true",
    path: "/real-use-cases/home-care"
  },
  {
    id: "agriculture",
    category: "Agriculture & Greening",
    title: "High-Volume Coverage",
    description: "Proprietary nozzle geometry for garden and greening applications, providing wider spray patterns for efficient plant care.",
    icon: Leaf,
    image: "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/garden%20.png",
    path: "/real-use-cases/agriculture"
  },
  {
    id: "automotive",
    category: "Automotive Industry",
    title: "Vehicle Interior Care",
    description: "Specialized sprayers for automotive detailing and surface protection, offering ergonomic grips for sustained professional use.",
    icon: Car,
    image: "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/automotive.png",
    path: "/real-use-cases/automotive"
  },
  {
    id: "healthcare",
    category: "Hospital & Healthcare",
    title: "Medical-Grade Sanitary",
    description: "High-precision dispensing systems for hospital sterilization and industrial sanitizers, ensuring complete surface coverage and hygienic safety.",
    icon: PlusSquare,
    image: "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/sanitizer.png",
    path: "/real-use-cases/healthcare"
  },
  {
    id: "personal-care",
    category: "Personal Care & Hair Care",
    title: "Precision Styling Mist",
    description: "Ultra-fine atomization technology for hair stylists and salon professionals, delivering consistent coverage for high-end styling products.",
    icon: Sparkles,
    image: "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/hairCaree.png",
    path: "/real-use-cases/personal-care"
  }
];

export default function RealUseCasesPage() {
  useSEO({
    title: "Industrial Applications of Heavy-Duty Trigger Sprayers",
    description: "Discover real-world use cases of Mila Plastics' heavy-duty sprayers and lotion pumps engineered for Home Care, Agriculture, Automotive Care, Healthcare, and Personal Styling.",
    keywords: "industrial sprayer solutions, heavy chemical trigger spray, garden trigger mist, medical trigger bottle",
    canonicalPath: "/real-use-cases"
  });

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
            <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-white">Application Architecture</div>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              <span className="text-blue-500">Real Use</span> <br />
              <span className="text-white italic">Cases.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              From delicate cosmetic mists to rugged industrial cleaners, our dispensing systems are engineered for diverse environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Grid */}
      <section className="py-24 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-slate-200 p-8 md:p-12 hover:border-blue-600/50 transition-colors group relative overflow-hidden"
              >
                <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
                   <useCase.icon className="w-64 h-64 text-slate-900" />
                </div>
                <div className="relative z-10">
                  {useCase.image && (
                    <div className="mb-8 overflow-hidden rounded-sm border border-slate-100 aspect-video group-hover:border-blue-600/30 transition-colors">
                      <img 
                        src={useCase.image} 
                        alt={useCase.title}
                        className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-100"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <div className="flex items-center gap-4 text-blue-600 mb-6">
                    <useCase.icon className="w-6 h-6" />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em]">{useCase.category}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-6">
                    {useCase.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-8">
                    {useCase.description}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-100 pt-8">
                    <div className="flex gap-8">
                       <div className="flex flex-col">
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Standard</span>
                          <span className="text-xs font-bold text-slate-900">MILA-S1</span>
                       </div>
                       <div className="flex flex-col">
                          <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-1">Status</span>
                          <span className="text-xs font-bold text-slate-900">Active</span>
                       </div>
                    </div>
                    
                    <Link 
                      to={useCase.path}
                      className="flex items-center gap-2 text-slate-900 font-black text-[10px] uppercase tracking-widest group/link hover:text-blue-600 transition-colors"
                    >
                      Read Case Study
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Factory Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="inline-block px-3 py-1 bg-slate-900 text-[10px] font-black uppercase tracking-[0.3em] text-white">Production Powerhouse</div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]">
                Advanced <br />
                <span className="text-blue-600">Manufacturing.</span>
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                Our state-of-the-colt facility in China features 50+ high-precision automated assembly lines and specialized dust-free clean rooms for medical and cosmetic grade dispensing components.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
                <div>
                  <div className="text-3xl font-black text-slate-900 mb-1">50,000 m²</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Total Facility Area</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900 mb-1">1.2M+</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Daily Output Capacity</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] bg-slate-100 border border-slate-200 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/mmexport1777554925969.jpg" 
                  alt="Mila Plastics Advanced Manufacturing Facility"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 text-white flex items-center justify-center p-6 text-center leading-none font-black uppercase text-[10px] tracking-widest hidden md:flex">
                ISO 9001 Certified Facility
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Summary */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-3 gap-16">
             <div className="space-y-6">
                <FlaskConical className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-black uppercase tracking-tighter">Food & Beverage</h3>
                <p className="text-slate-400 text-sm leading-relaxed">FDA-compliant polymers for oil sprayers and vinegar mists, ensuring safety in food processing.</p>
             </div>
             <div className="space-y-6">
                <Droplets className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-black uppercase tracking-tighter">Perfume Sprayers</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Micro-mist technology for high-end fragrances, providing consistent atomization per stroke.</p>
             </div>
             <div className="space-y-6">
                <Leaf className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-black uppercase tracking-tighter">Personal Hygiene</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Antibacterial surface options for hand sanitizer and medical-grade sterilization sprays.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
