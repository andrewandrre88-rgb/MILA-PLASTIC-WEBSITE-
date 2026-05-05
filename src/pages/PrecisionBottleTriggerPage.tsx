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
  Leaf, 
  Microscope,
  BarChart3,
  CheckCircle2,
  Cpu,
  Globe,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

const productData = {
  name: "Precision Bottle Trigger Sprayer",
  subtitle: "Fine Mist Trigger Spray Head 1.0cc Customizable (Type D)",
  images: [
    "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/Yellowtrigger.png",
    "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/Yellowtrigger2.png"
  ],
  moq: "10,000 PCS",
  price: "Negotiable",
  packaging: "500PCS/CTN, Means(CM): 57*33*39",
  delivery: "10-15 Days",
  payment: "D/P, T/T",
  capacity: "500,000 PCS/WEEK",
  origin: "Quzhou, Zhejiang, China",
  specs: [
    { label: "Product", value: "Bottle Trigger Sprayer" },
    { label: "Dosage", value: "1.0 ± 0.1ml" },
    { label: "Material", value: "PP (Polypropylene)" },
    { label: "Spring", value: "All-Plastic (Non-Metal)" },
    { label: "Neck Size", value: "28/400, 28/410" },
    { label: "Color", value: "Any Custom Color" },
  ],
  highlights: [
    "Precision 1.0cc Output",
    "Laboratory-Grade Reliability",
    "Sustainable All-Plastic Spring"
  ],
  description: `The Precision Trigger-Type D spray head delivers exactly 1.0±0.1ml per spray, eliminating product waste and ensuring consistent application. Features a seamless outer shell for better durability and hygiene, preventing residue buildup — ideal for skincare and cosmetics.`,
  technicalSections: [
    {
      title: "Precision Dispensing",
      icon: Cpu,
      items: [
        { label: "Dosage Control", text: "Delivers exactly 1.0±0.1ml per spray for formula integrity" },
        { label: "Spray Patterns", text: "Choose from fine mist, stream, or adjustable patterns" },
        { label: "Integrated Design", text: "Seamless shell for sleek appearance and hygiene" },
        { label: "Non-Metal Spring", text: "All-plastic mechanical path prevents formula oxidation" }
      ]
    },
    {
      title: "Material & Build",
      icon: Settings,
      items: [
        { label: "PP Housing", text: "Chemical-resistant medical-grade polypropylene" },
        { label: "Dip Tube Options", text: "Soft or rigid tubes, custom-cut to any bottle length" },
        { label: "Closure Precision", text: "High-tolerance 28/400 and 28/410 threading" },
        { label: "Crevice-Free", text: "No-residue architecture for highest hygiene standards" }
      ]
    },
    {
      title: "Partnership Perks",
      icon: BarChart3,
      items: [
        { label: "Customization", text: "Full color matching and custom carton printing" },
        { label: "Samples", text: "Free samples available for compatibility testing" },
        { label: "Scalability", text: "500,000 units weekly capacity for global growth" }
      ]
    }
  ],
  manufacturing: [
    { title: "Optical Inspection", detail: "100% automated vision systems for dimensional accuracy" },
    { title: "Leak Verification", detail: "Negative pressure testing on every production batch" },
    { title: "Material Purity", detail: "Only virgin medical-grade PP utilized" }
  ],
  applications: [
    { name: "Cosmetics", description: "Facial mists, Makeup removers", icon: "✨" },
    { name: "Skincare", description: "Toners, Setting sprays", icon: "🧴" },
    { name: "Personal Care", description: "Sanitizers, Leave-in conditioners", icon: "🧼" },
    { name: "Home & Life", description: "Room sprays, Aromatherapy", icon: "🌸" }
  ],
  customization: [
    { title: "Color Match", detail: "Pantone/RAL matching for all components" },
    { title: "Spray Mode", detail: "Fine mist, Stream, or Adjustable nozzle" },
    { title: "Tube Length", detail: "Custom length & material for dip tubes" },
    { title: "Branding", detail: "Custom carton printing & shipping marks" }
  ],
  faqs: [
    { q: "Is the spring metal?", a: "No, this model features our proprietary all-plastic spring system, making it more eco-friendly and preventing chemical reactions with metal-sensitive formulas." },
    { q: "What is the lead time?", a: "Typically 10-15 days after deposit receipt for standard configurations." },
    { q: "Can I get samples?", a: "Yes, we encourage compatibility testing. Contact us for free samples." }
  ]
};

const QC_STEPS = [
  { title: "Sourcing", desc: "Virgin PP & Plastic spring verif." },
  { title: "Molding", desc: "High-precision Type-D mold check" },
  { title: "Verification", desc: "1.0cc ±0.1ml dosage accuracy" },
  { title: "Packing", desc: "Bulk packed with individual protection" }
];

export default function PrecisionBottleTriggerPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 lg:pt-32 pb-20 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-black text-[10px] uppercase tracking-widest rounded-full">
                  Trigger-Type D | Precision Series
                </span>
                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-[0.95]">
                  1.0cc <br className="hidden lg:block" />
                  <span className="text-blue-600">Pure Mist.</span>
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
                  <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-slate-400">Lead Time</p>
                  <p className="text-base sm:text-lg md:text-xl font-black text-slate-900">{productData.delivery}</p>
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
                  Chat Now
                </a>
                <a 
                  href="#specs"
                  className="flex items-center justify-center px-8 sm:px-10 py-5 border-2 border-blue-600 text-blue-600 font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all w-full sm:w-auto"
                >
                  Technical Specs
                </a>
              </div>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4 pt-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Global Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-blue-500" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Quality Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-3.5 h-3.5 text-orange-500" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">1.0cc Precision</span>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-6 lg:gap-8 order-1 lg:order-2">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative aspect-square bg-[#f8fafc] flex items-center justify-center p-4 sm:p-8 lg:p-12 border border-slate-100 group overflow-hidden"
                >
                  <div className="absolute top-4 right-4 lg:top-10 lg:right-10 flex gap-2 lg:gap-4 z-10">
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white flex items-center justify-center shadow-lg border border-slate-100">
                        <Droplets className="w-4 h-4 lg:w-6 lg:h-6 text-blue-600" />
                    </div>
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white flex items-center justify-center shadow-lg border border-slate-100">
                        <Microscope className="w-4 h-4 lg:w-6 lg:h-6 text-slate-900" />
                    </div>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.img 
                      key={activeImageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 1.1 }}
                      transition={{ duration: 0.4, ease: "circOut" }}
                      src={productData.images[activeImageIndex]} 
                      alt={productData.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </AnimatePresence>

                  {/* Carousel Controls */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button 
                      onClick={() => setActiveImageIndex((prev) => (prev > 0 ? prev - 1 : productData.images.length - 1))}
                      className="w-10 h-10 bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button 
                      onClick={() => setActiveImageIndex((prev) => (prev < productData.images.length - 1 ? prev + 1 : 0))}
                      className="w-10 h-10 bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>

                  <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
                    <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] vertical-text">SERIAL: TYPE-D-1.0CC</p>
                  </div>
                </motion.div>

                {/* Thumbnails */}
                <div className="flex justify-center lg:justify-start gap-4">
                  {productData.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-20 h-20 border-2 transition-all p-2 bg-slate-50 ${activeImageIndex === idx ? 'border-blue-600' : 'border-transparent hover:border-slate-200'}`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-contain mix-blend-multiply" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Scenarios Section */}
      <section className="py-20 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4 px-4">
              Precision <span className="text-blue-600">Applications.</span>
            </h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[9px] sm:text-[10px]">Engineered for high-end personal care and home branding</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {productData.applications.map((app, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-6 sm:p-8 bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all text-center"
              >
                <div className="text-4xl mb-6">{app.icon}</div>
                <h3 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-2">{app.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{app.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {productData.technicalSections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 sm:p-10 border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mb-8">
                   <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-slate-900 mb-6 lg:mb-8">{section.title}</h3>
                <ul className="space-y-5 lg:space-y-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="space-y-1">
                      <p className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-blue-600">{item.label}</p>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics Stats */}
      <section className="py-16 sm:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
            <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
              <BarChart3 className="w-8 h-8 text-slate-300" />
              <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400">Weekly Capacity</h4>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">{productData.capacity}</p>
            </div>
            <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
              <Package className="w-8 h-8 text-slate-300" />
              <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400">Standard Qty</h4>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">500 PCS/CTN</p>
            </div>
            <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
              <Globe className="w-8 h-8 text-slate-300" />
              <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400">Origin Site</h4>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">Zhejiang, CN</p>
            </div>
            <div className="space-y-3 flex flex-col items-center sm:items-start text-center sm:text-left">
              <CheckCircle2 className="w-8 h-8 text-blue-600" />
              <h4 className="text-[9px] font-black uppercase tracking-widest text-slate-400">Testing Samples</h4>
              <p className="text-2xl sm:text-3xl font-black text-slate-900">AVAILABLE FREE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Flow */}
      <section className="py-20 lg:py-32 bg-white text-slate-900 overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-10 lg:mb-20 gap-8 text-center lg:text-left">
            <div className="max-w-2xl px-4 sm:px-0">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4 sm:mb-6 leading-[0.9]">
                <span className="text-blue-600 block mb-2 cursor-default">Verification.</span>
                1.0cc Precision
              </h2>
              <p className="text-slate-500 text-sm sm:text-base lg:text-lg">Every Trigger-Type D is verified for dosage consistency before warehouse entry.</p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4">
               <div className="px-4 sm:px-6 py-2.5 sm:py-3 border border-slate-200 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em]">MILA INTERNAL QC</div>
               <div className="px-4 sm:px-6 py-2.5 sm:py-3 border border-slate-200 text-[8px] sm:text-[10px] font-black uppercase tracking-[0.3em]">SGS LAB READY</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:gap-12 relative">
            {QC_STEPS.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-blue-600 text-white flex items-center justify-center font-black text-xl lg:text-2xl mb-6 lg:mb-8">
                   0{idx + 1}
                </div>
                <h4 className="text-lg lg:text-xl font-black uppercase tracking-tight mb-2 text-slate-900">{step.title}</h4>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
            {/* Background Line */}
            <div className="hidden md:block absolute top-[24px] lg:top-[32px] left-0 w-full h-px bg-slate-100 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Full Specs Table */}
      <section id="specs" className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="mb-12 sm:mb-16 lg:mb-20 text-center lg:text-left px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-slate-900">The <span className="text-blue-600">Full Spec.</span></h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-10 lg:space-y-12">
              <div className="grid grid-cols-1 gap-2 sm:gap-4">
                {productData.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center py-4 lg:py-5 border-b border-slate-100">
                    <span className="text-[10px] lg:text-xs font-black uppercase tracking-widest text-slate-400">{spec.label}</span>
                    <span className="text-slate-900 font-bold text-sm lg:text-base">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 sm:p-8 bg-blue-50 border border-blue-100 rounded-xl">
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest text-blue-600 mb-6 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" /> Payment & Logistics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                  <div className="space-y-1">
                    <p className="text-[9px] lg:text-[10px] uppercase font-bold text-slate-400">Methods</p>
                    <p className="text-sm font-black text-slate-900">{productData.payment}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[9px] lg:text-[10px] uppercase font-bold text-slate-400">Packaging</p>
                    <p className="text-xs sm:text-sm font-black text-slate-900 leading-tight">{productData.packaging}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-12 text-slate-900 border border-slate-100 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tighter mb-8 lg:mb-10 text-center lg:text-left">Engineering Partnership</h3>
              <div className="space-y-10 lg:space-y-12">
                {productData.manufacturing.map((m, idx) => (
                  <div key={idx} className="flex gap-4 lg:gap-6">
                    <div className="text-blue-600 font-black text-xl lg:text-2xl tracking-tighter">0{idx + 1}</div>
                    <div className="space-y-1 lg:space-y-2">
                       <h4 className="text-base lg:text-lg font-black uppercase tracking-tight">{m.title}</h4>
                       <p className="text-slate-500 text-sm leading-relaxed">{m.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 lg:mt-20 pt-8 lg:pt-10 border-t border-slate-100 uppercase italic text-[9px] lg:text-[10px] tracking-[0.3em] text-slate-400 text-center lg:text-left">
                Trigger-Type D | Patented Precision Dispensing
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 lg:py-24 bg-white overflow-hidden relative border-t border-slate-100">
        <div className="absolute inset-0 opacity-5">
           <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 text-center">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-8 lg:mb-12 italic leading-none">Elevate Your <span className="text-blue-600">Brand</span> Experience.</h2>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6">
            <a 
              href="mailto:sales@milaplastics.com" 
              className="px-8 lg:px-12 py-5 lg:py-6 bg-blue-600 text-white font-black text-xs lg:text-sm uppercase tracking-[0.3em] shadow-xl shadow-blue-600/20 hover:scale-105 transition-all w-full sm:w-auto"
            >
              Get Best Price
            </a>
            <a 
              href="https://wa.me/8618567413851" 
              className="px-8 lg:px-12 py-5 lg:py-6 border-2 border-slate-900 text-slate-900 font-black text-xs lg:text-sm uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all w-full sm:w-auto"
            >
              Chat for Samples
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
