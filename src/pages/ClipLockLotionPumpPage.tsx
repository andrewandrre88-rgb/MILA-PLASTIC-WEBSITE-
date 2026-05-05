import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Droplets, 
  Settings, 
  Truck, 
  Package, 
  CreditCard, 
  Zap, 
  BarChart3,
  CheckCircle2,
  Cpu,
  Globe,
  Lock,
  RefreshCw,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const productData = {
  name: "Clip Lock Lotion Pump",
  subtitle: "PP 24/410 High-Precision Dispensing System (Type LP-20)",
  images: [
    "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/0487069b-862d-488e-85c2-490d1238a8c2.png"
  ],
  moq: "10,000 PCS",
  price: "Negotiable",
  packaging: "1000PCS/CTN, Means(CM): 57*33*39",
  delivery: "10-15 Days",
  payment: "T/T, D/P",
  capacity: "3,000,000 PCS/WEEK",
  origin: "Quzhou, Zhejiang, China",
  specs: [
    { label: "Product", value: "Clip Lock Lotion Pump" },
    { label: "Dosage", value: "1.0 ± 0.1ml" },
    { label: "Material", value: "Food-Grade PP" },
    { label: "Lock Type", value: "360° Clip Lock + Twist" },
    { label: "Neck Size", value: "24/410, 28/410, 32/410" },
    { label: "Color", value: "Any Custom Color" },
  ],
  description: `The PP 24/410 Replacement Pump is a premium clip-lock dispensing system designed to upgrade personal care, cosmetic, and household product packaging. Engineered for both functionality and visual appeal, it provides consistent, luxurious user experience while ensuring precise, waste-free application.`,
  technicalSections: [
    {
      title: "Dispensing Engineering",
      icon: Cpu,
      items: [
        { label: "Dosage Control", text: "1.0ml ± 0.1ml per actuation for perfect formula metering" },
        { label: "Mechanism", text: "Precision piston chamber prevents backflow and clogging" },
        { label: "Consistency", text: "Luxurious tactile feedback with 99% formula evacuation" },
        { label: "Locking", text: "Integrated 360° Clip Lock prohibits accidental discharge" }
      ]
    },
    {
      title: "Material & Durability",
      icon: ShieldCheck,
      items: [
        { label: "Polypropylene", text: "BPA-free, food-contact grade material for safety" },
        { label: "Cycle Life", text: "Exceeds 10,000 actuations for long-term brand trust" },
        { label: "Leak Proof", text: "72-hour inverted pressure testing on every batch" },
        { label: "Compatibility", text: "Resistance to pH 3-10 solutions and various oils" }
      ]
    },
    {
      title: "Global Partnership",
      icon: Globe,
      items: [
        { label: "ODM/OEM", text: "Full in-house development for custom brand shapes" },
        { label: "Color Matching", text: "Pantone/RAL matched components at no extra cost" },
        { label: "Time-to-Market", text: "Rapid 10-15 day production cycle post-deposit" }
      ]
    }
  ],
  applications: [
    { name: "Cosmetics", description: "Body lotions, serums, facial cleansers", icon: "✨" },
    { name: "Skin Care", description: "Moisturizers, shaving creams, oils", icon: "🧴" },
    { name: "Personal Care", description: "Hand soaps, sanitizers, conditioners", icon: "🧼" },
    { name: "Hospitality", description: "Bespoke hotel amenity collections", icon: "🏨" }
  ],
  customization: [
    { title: "Neck Sizes", detail: "20/410, 24/410, 28/410, 32/410" },
    { title: "Tube Length", detail: "Custom precision-cut dip tubes for any bottle" },
    { title: "Surface Finish", detail: "Glossy, Matte, or Metallic plating options" },
    { title: "Branding", detail: "Logo printing for shipping marks and cartons" }
  ]
};

const QC_METRICS = [
  { label: "Dosage Accuracy", value: "1.0ml ± 0.1ml", detail: "Predictable uses per bottle" },
  { label: "Reliability", value: ">10,000 Cycles", detail: "Professional endurance testing" },
  { label: "Seal Integrity", value: "100% Leak-Free", detail: "Mail-order and travel secure" },
  { label: "Compatibility", value: "pH 3-10", detail: "Versatile aqueous formula support" }
];

export default function ClipLockLotionPumpPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Product Hero */}
      <section className="relative pt-20 lg:pt-32 pb-20 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-widest rounded-full">
                  Lotion Series | LP-20 Clip Lock
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-[0.95]">
                  Travel <br className="hidden lg:block" />
                  <span className="text-blue-600">Secured.</span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-bold text-slate-400 uppercase tracking-tight">{productData.subtitle}</p>
              </div>

              <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
                {productData.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4 md:gap-8 py-6 sm:py-8 border-y border-slate-100 w-full">
                <div className="space-y-1">
                  <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-400">MOQ</p>
                  <p className="text-base sm:text-lg md:text-xl font-black text-slate-900">{productData.moq}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-400">Price</p>
                  <p className="text-base sm:text-lg md:text-xl font-black text-blue-600">{productData.price}</p>
                </div>
                <div className="space-y-1 col-span-2 sm:col-span-1">
                  <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-400">Supply</p>
                  <p className="text-base sm:text-lg md:text-xl font-black text-slate-900 leading-none">3M units/wk</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full px-4 sm:px-0">
                <a 
                  href="https://wa.me/8618567413851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-8 sm:px-10 py-5 bg-blue-600 text-white font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 hover:scale-105 transition-all w-full sm:w-auto"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  Get Sample
                </a>
                <a 
                  href="#details"
                  className="flex items-center justify-center px-8 sm:px-10 py-5 border-2 border-slate-900 text-slate-900 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-slate-900 hover:text-white transition-all w-full sm:w-auto"
                >
                  Tech Specs
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4 pt-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <Lock className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Clip Lock Security</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">ODM/OEM Ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-3.5 h-3.5 text-orange-500" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">10k+ Cycle Life</span>
                </div>
              </div>
            </motion.div>

            <div className="lg:order-2 order-1">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative aspect-square bg-slate-50 flex items-center justify-center p-8 sm:p-12 lg:p-20 border border-slate-100 group overflow-hidden"
                >
                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeImageIndex}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      src={productData.images[activeImageIndex]} 
                      alt={productData.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </AnimatePresence>
                  
                  <div className="absolute top-1/2 -translate-y-1/2 inset-x-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : productData.images.length -1))} className="w-10 h-10 bg-white/80 backdrop-blur-sm shadow flex items-center justify-center hover:bg-white"><ChevronLeft /></button>
                    <button onClick={() => setActiveImageIndex((prev) => (prev < productData.images.length - 1 ? prev + 1 : 0))} className="w-10 h-10 bg-white/80 backdrop-blur-sm shadow flex items-center justify-center hover:bg-white"><ChevronRight /></button>
                  </div>

                  <div className="absolute bottom-10 right-10 flex gap-4">
                    <div className="w-12 h-12 bg-white flex items-center justify-center shadow-lg border border-slate-100">
                      <Lock className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </motion.div>

                <div className="flex gap-4">
                  {productData.images.map((img, idx) => (
                    <button 
                      key={idx} 
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-20 h-20 border-2 bg-slate-50 p-2 transition-all ${activeImageIndex === idx ? 'border-blue-600' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img src={img} alt="thumb" className="w-full h-full object-contain mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {QC_METRICS.map((metric, idx) => (
              <div key={idx} className="p-8 bg-slate-50 border border-slate-100 space-y-3">
                <h4 className="text-[9px] font-black uppercase tracking-[0.2em] text-blue-600">{metric.label}</h4>
                <p className="text-3xl font-black text-slate-900">{metric.value}</p>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Details Grid */}
      <section id="details" className="py-20 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 lg:mb-24 gap-8">
            <div className="max-w-2xl px-4 sm:px-0">
              <span className="text-blue-500 font-black text-xs uppercase tracking-widest mb-4 block">Manufacturing Specifications</span>
              <h2 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9]">Professional <br />Dispensing Power.</h2>
            </div>
            <div className="flex gap-4 px-4 sm:px-0">
               <div className="px-6 py-4 border border-white/20 text-[10px] font-black uppercase tracking-widest">ISO 9001 CERTIFIED</div>
               <div className="px-6 py-4 border border-white/20 text-[10px] font-black uppercase tracking-widest text-blue-400">ODM/OEM OPTIMIZED</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {productData.technicalSections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-md p-8 sm:p-12 border border-white/10"
              >
                <section.icon className="w-10 h-10 text-blue-500 mb-8" />
                <h3 className="text-2xl font-black uppercase tracking-tight mb-8 text-white">{section.title}</h3>
                <ul className="space-y-6 lg:space-y-8">
                  {section.items.map((item, i) => (
                    <li key={i} className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-blue-400">{item.label}</p>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16 lg:mb-24">
             <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4 px-4">Market <span className="text-blue-600">Integrations.</span></h2>
             <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Optimized for versatile viscous formula applications</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productData.applications.map((app, idx) => (
              <div key={idx} className="group p-10 bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all text-center">
                <div className="text-4xl mb-6">{app.icon}</div>
                <h4 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-3">{app.name}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{app.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Spec Table */}
      <section className="py-20 lg:py-32 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-10 lg:space-y-12">
                 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-slate-900">Technical <br /><span className="text-blue-600">Inventory.</span></h2>
                 <div className="grid grid-cols-1 gap-2">
                    {productData.specs.map((spec, idx) => (
                      <div key={idx} className="flex justify-between items-center py-4 border-b border-slate-200">
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{spec.label}</span>
                        <span className="text-slate-900 font-bold text-sm lg:text-base">{spec.value}</span>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="bg-white p-8 sm:p-12 border border-slate-200 shadow-sm space-y-10">
                 <h3 className="text-2xl font-black uppercase tracking-tight text-slate-900">Customization Pathways</h3>
                 <div className="space-y-8 lg:space-y-10">
                    {productData.customization.map((c, idx) => (
                      <div key={idx} className="flex gap-6">
                        <div className="text-blue-600 font-black text-2xl tracking-tighter">0{idx + 1}</div>
                        <div className="space-y-1">
                           <h4 className="text-lg font-black uppercase tracking-tight">{c.title}</h4>
                           <p className="text-slate-500 text-sm leading-relaxed">{c.detail}</p>
                        </div>
                      </div>
                    ))}
                 </div>
                 <div className="pt-8 border-t border-slate-100">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">LP-20 Precision Series | Industrial Grade</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl lg:text-[7rem] font-black text-slate-900 uppercase tracking-tighter mb-10 lg:mb-16 leading-[0.8] italic px-4"
          >
            Ready to <br /><span className="text-blue-600">Dispense?</span>
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <a 
              href="mailto:sales@milaplastics.com" 
              className="px-10 lg:px-16 py-6 bg-blue-600 text-white font-black text-[11px] lg:text-sm uppercase tracking-[0.3em] shadow-2xl shadow-blue-600/30 hover:scale-105 transition-all w-full sm:w-auto"
            >
              Get Best Price
            </a>
            <a 
              href="https://wa.me/8618567413851" 
              className="px-10 lg:px-16 py-6 border-2 border-slate-900 text-slate-900 font-black text-[11px] lg:text-sm uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all w-full sm:w-auto"
            >
              Chat Sales Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
