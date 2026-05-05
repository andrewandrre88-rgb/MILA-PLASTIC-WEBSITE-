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
import Markdown from "react-markdown";

const productData = {
  name: "Precision 0.1cc Fine Mist Sprayer",
  subtitle: "SS304 Spring PP Mist Sprayer Pump For Bottles",
  images: [
    "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/cb9a265b-1986-4ea4-8b41-ca3e25b1cbdc.png",
    "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/3fc052cb-b807-44e7-89c6-9871ecbc8bf7%20(1).png",
    "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/3fc052cb-b807-44e7-89c6-9871ecbc8bf7%20(1).png",
    "https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/3fc052cb-b807-44e7-89c6-9871ecbc8bf7%20(1).png"
  ],
  moq: "10,000 PCS",
  price: "Negotiable",
  packaging: "1400-2500PCS/CTN, Means(CM): 57*33*39",
  delivery: "10-15 Days",
  payment: "D/P, T/T",
  capacity: "5,000,000 PCS/WEEK",
  origin: "Quzhou, Zhejiang, China",
  specs: [
    { label: "Product", value: "Fine Mist Sprayer" },
    { label: "Dosage", value: "0.1CC" },
    { label: "Material", value: "PP (Food Grade)" },
    { label: "Spring", value: "304 Stainless Steel" },
    { label: "Available Sizes", value: "18/410, 20/410, 24/410, 28/410" },
    { label: "Color", value: "Any Custom RAL/Pantone" },
  ],
  highlights: [
    "Precision Fine Mist Sprayer",
    "0.1cc Consistent Dosage",
    "SS304 Marine Grade Spring"
  ],
  description: `Our cutting-edge fine mist sprayer represents the next evolution in precision dispensing technology, engineered to deliver superior performance across premium product categories. This advanced system transforms liquid formulations into consistently fine aerosol particles, ensuring optimal coverage and enhanced user experience through scientific atomization principles.`,
  technicalSections: [
    {
      title: "Technical Superiority",
      icon: Cpu,
      items: [
        { label: "Ultra-Fine Atomization", text: "Proprietary nozzle technology creates 50-100 micron particles" },
        { label: "Precision Dosing", text: "0.1cc ± 0.05ml metering accuracy maintains formula integrity" },
        { label: "Broad Compatibility", text: "Accommodates viscosities from 1-100 centipoise" },
        { label: "Ergonomic Design", text: "Optimized 2.8N actuation force with non-slip ribbed surface" }
      ]
    },
    {
      title: "Innovative Applications",
      icon: Microscope,
      items: [
        { label: "Skincare", text: "Vitamin C, Retinol, Hyaluronic Acid, and Peptide treatments" },
        { label: "Fragrance", text: "Scent layering systems and long-lasting diffusion" },
        { label: "Healthcare", text: "Topical medications, sanitization, and wound care" }
      ]
    },
    {
      title: "Sustainable Technology",
      icon: Leaf,
      items: [
        { label: "Efficiency", text: "22% reduced plastic usage versus standard designs" },
        { label: "Circular", text: "Easily disassembled for component recycling" },
        { label: "Impact", text: "Extended lifecycle reduces environmental footprint" }
      ]
    }
  ],
  manufacturing: [
    { title: "Clean Room Assembly", detail: "ISO Class 8 environment for critical components" },
    { title: "Defect Detection", detail: "Machine vision systems with 0.01mm precision" },
    { title: "Performance Logging", detail: "Batch-to-batch performance documentation" }
  ],
  applications: [
    { name: "Cosmetics", description: "Toner, makeup setting spray, floral water", icon: "✨" },
    { name: "Skincare", description: "Moisturizing spray, facial mist", icon: "🧴" },
    { name: "Fragrance", description: "Body mist, room spray, hair perfume", icon: "🌸" },
    { name: "Personal Care", description: "Sunscreen, hand sanitizer, hair care", icon: "🧼" }
  ],
  customization: [
    { title: "Colors", detail: "Pantone/RAL matching for pump & cap" },
    { title: "Closure", detail: "Ribbed, smooth, or metal-sheathed options" },
    { title: "Tube", detail: "Custom lengths (70mm to 250mm) & materials" },
    { title: "Branding", detail: "Screen printing & hot stamping available" }
  ],
  faqs: [
    { q: "Can I get free samples?", a: "Yes, we provide 1-3 free samples. Shipping cost is covered by the buyer." },
    { q: "What is the standard lead time?", a: "10-15 days for standard colors, 20-25 days for custom Pantone matching." },
    { q: "What certificates do you have?", a: "Our factory is ISO 9001:2015 certified, and products meet CE/SGS standards." }
  ]
};

const QC_STEPS = [
  { title: "Raw Material", desc: "100% Virgin PP verification" },
  { title: "Injection", desc: "High-precision mold state check" },
  { title: "Assembly", desc: "Automated leak & spray testing" },
  { title: "Packaging", desc: "Dust-free layer-by-layer packing" }
];

export default function PrecisionMistSprayerPage() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % productData.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + productData.images.length) % productData.images.length);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 lg:pt-32 pb-20 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1"
            >
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-black text-[10px] uppercase tracking-widest rounded-full">
                  Advanced Dispensing System
                </span>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-slate-900 leading-[0.95]">
                  Precision <br className="hidden lg:block" />
                  <span className="text-blue-600">0.1cc Mist.</span>
                </h1>
                <p className="text-lg md:text-xl font-bold text-slate-400 uppercase tracking-tight">{productData.subtitle}</p>
              </div>

              <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                {productData.description}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 py-8 border-y border-slate-100 w-full">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">MOQ</p>
                  <p className="text-lg md:text-xl font-black text-slate-900">{productData.moq}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Price</p>
                  <p className="text-lg md:text-xl font-black text-blue-600">{productData.price}</p>
                </div>
                <div className="space-y-1 col-span-2 sm:col-span-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Lead Time</p>
                  <p className="text-lg md:text-xl font-black text-slate-900">{productData.delivery}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-4 w-full">
                <a 
                  href="https://wa.me/8618567413851"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-10 py-5 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  Chat Now
                </a>
                <a 
                  href="#specs"
                  className="flex items-center justify-center px-10 py-5 border-2 border-blue-600 text-blue-600 font-black text-xs uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all"
                >
                  Technical Specs
                </a>
              </div>

              <div className="flex items-center gap-6 pt-4 text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">In-Stock</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Trade Assurance</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-orange-500" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Fast Delivery</span>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col gap-6 lg:gap-8 order-1 lg:order-2">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative aspect-square bg-[#f8fafc] flex items-center justify-center p-8 lg:p-12 border border-slate-100 group overflow-hidden"
              >
                <div className="absolute top-6 right-6 lg:top-10 lg:right-10 flex gap-3 lg:gap-4 z-10">
                   <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white flex items-center justify-center shadow-lg border border-slate-100">
                      <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                   </div>
                   <div className="w-10 h-10 lg:w-12 lg:h-12 bg-white flex items-center justify-center shadow-lg border border-slate-100">
                      <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-orange-500" />
                   </div>
                </div>

                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={prevImage}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="w-10 h-10 bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

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

                <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
                  <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] vertical-text">MODEL: MILA-RIBBED-01</p>
                </div>
              </motion.div>

              {/* Thumbnails */}
              <div className="flex gap-3 items-center justify-center">
                <button onClick={prevImage} className="text-slate-300 hover:text-blue-600 transition-colors p-1">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2 lg:gap-4">
                  {productData.images.map((img, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-16 h-16 lg:w-20 lg:h-20 bg-[#f8fafc] border-2 transition-all p-1.5 ${activeImageIndex === idx ? 'border-blue-600 shadow-md ring-4 ring-blue-50' : 'border-slate-100 grayscale opacity-40 hover:opacity-100 hover:grayscale-0'}`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-contain mix-blend-multiply" />
                    </button>
                  ))}
                </div>
                <button onClick={nextImage} className="text-slate-300 hover:text-blue-600 transition-colors p-1">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Usage Scenarios Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter text-slate-900 mb-4">
              Endless <span className="text-blue-600">Possibilities.</span>
            </h2>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Optimized for versatile liquid formulations</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {productData.applications.map((app, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-slate-50 border border-slate-100 hover:border-blue-200 transition-all text-center"
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
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid md:grid-cols-3 gap-8">
            {productData.technicalSections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-10 border border-slate-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center mb-8">
                   <section.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-900 mb-8">{section.title}</h3>
                <ul className="space-y-6">
                  {section.items.map((item, i) => (
                    <li key={i} className="space-y-1">
                      <p className="text-[10px] font-black uppercase tracking-widest text-blue-600">{item.label}</p>
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
      <section className="py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-3">
              <BarChart3 className="w-8 h-8 text-slate-300" />
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Weekly Output</h4>
              <p className="text-3xl font-black text-slate-900">{productData.capacity}</p>
            </div>
            <div className="space-y-3">
              <Package className="w-8 h-8 text-slate-300" />
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Carton Units</h4>
              <p className="text-3xl font-black text-slate-900">2,500 PCS</p>
            </div>
            <div className="space-y-3">
              <Globe className="w-8 h-8 text-slate-300" />
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Origin Site</h4>
              <p className="text-3xl font-black text-slate-900">Quzhou, CN</p>
            </div>
            <div className="space-y-3">
              <CheckCircle2 className="w-8 h-8 text-blue-600" />
              <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Sample Unit</h4>
              <p className="text-3xl font-black text-slate-900">FREE OFFER</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Control Flow */}
      <section className="py-32 bg-white text-slate-900 overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                <span className="text-blue-600 block mb-2 cursor-default">Philosophy.</span>
                Zero-Defect
              </h2>
              <p className="text-slate-500 text-lg">Every single unit undergoes rigorous multi-stage verification before dispatch.</p>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-3 border border-slate-200 text-[10px] font-black uppercase tracking-[0.3em]">ISO 9001:2015</div>
               <div className="px-6 py-3 border border-slate-200 text-[10px] font-black uppercase tracking-[0.3em]">SGS CERTIFIED</div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-12 relative">
            {QC_STEPS.map((step, idx) => (
              <div key={idx} className="relative z-10">
                <div className="w-16 h-16 bg-blue-600 text-white flex items-center justify-center font-black text-2xl mb-8">
                  0{idx + 1}
                </div>
                <h4 className="text-xl font-black uppercase tracking-tight mb-2 text-slate-900">{step.title}</h4>
                <p className="text-slate-500 text-sm">{step.desc}</p>
              </div>
            ))}
            {/* Background Line */}
            <div className="hidden md:block absolute top-8 left-0 w-full h-px bg-slate-100 -z-0"></div>
          </div>
        </div>
      </section>

      {/* Customization Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
               <div>
                 <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900 mb-6">
                   Tailored to <br /><span className="text-blue-600">Your Vision.</span>
                 </h2>
                 <p className="text-slate-500 text-lg leading-relaxed">
                   From bespoke color matching to unique branding applications, we engineer the pump to align perfectly with your packaging aesthetics.
                 </p>
               </div>
               
               <div className="grid grid-cols-2 gap-8">
                 {productData.customization.map((item, idx) => (
                   <div key={idx} className="space-y-2">
                     <div className="w-10 h-10 bg-slate-100 flex items-center justify-center">
                        <Settings className="w-5 h-5 text-slate-400" />
                     </div>
                     <h4 className="text-sm font-black uppercase tracking-tight text-slate-900">{item.title}</h4>
                     <p className="text-xs text-slate-500 leading-relaxed">{item.detail}</p>
                   </div>
                 ))}
               </div>
            </div>
            <div className="relative">
               <div className="aspect-[4/3] bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/5 to-transparent"></div>
                  <img 
                    src={productData.images[0]} 
                    alt="Customization" 
                    className="w-3/4 h-3/4 object-contain opacity-20 grayscale"
                  />
                  <div className="absolute inset-0 flex flex-center items-center justify-center">
                    <span className="text-[10px] font-black uppercase tracking-[1em] text-slate-300 vertical-text">CUSTOM CONFIGURATIONS</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Specs Table */}
      <section id="specs" className="py-32">
        <div className="max-w-7xl mx-auto px-10">
          <div className="mb-20">
            <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-900">The <span className="text-blue-600">Full Spec.</span></h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="space-y-12">
              <div className="grid grid-cols-1 gap-4">
                {productData.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center py-5 border-b border-slate-100">
                    <span className="text-xs font-black uppercase tracking-widest text-slate-400">{spec.label}</span>
                    <span className="text-slate-900 font-bold">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="p-8 bg-blue-50 border border-blue-100 rounded-xl">
                <h4 className="text-sm font-black uppercase tracking-widest text-blue-600 mb-4 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" /> Payment & Logistics
                </h4>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Methods</p>
                    <p className="text-sm font-black text-slate-900">{productData.payment}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase font-bold text-slate-400">Packaging</p>
                    <p className="text-sm font-black text-slate-900 leading-tight">{productData.packaging}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-12 text-slate-900 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-10">Manufacturing Excellence</h3>
              <div className="space-y-12">
                {productData.manufacturing.map((m, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="text-blue-600 font-black text-2xl tracking-tighter">0{idx + 1}</div>
                    <div className="space-y-2">
                      <h4 className="text-lg font-black uppercase tracking-tight">{m.title}</h4>
                      <p className="text-slate-500 text-sm">{m.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-20 pt-10 border-t border-slate-100 uppercase italic text-[10px] tracking-[0.3em] text-slate-400">
                Quality Guaranteed by MILA Industrial Standards
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & Support Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900">Expert <span className="text-blue-600">Assistance.</span></h2>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">Common questions about our dispensing solutions</p>
            </div>
            
            <div className="space-y-6">
              {productData.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-8 border border-slate-200">
                  <h4 className="text-lg font-black uppercase tracking-tight text-slate-900 mb-4">{faq.q}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-20 p-10 bg-white border-2 border-dashed border-slate-200 text-center">
               <p className="text-slate-500 font-medium mb-6">Have a specific technical requirement or need a custom quote?</p>
               <a 
                href="mailto:sales@milaplastics.com"
                className="inline-flex items-center gap-3 text-blue-600 font-black uppercase tracking-widest text-xs border-b-2 border-blue-600 pb-1 hover:gap-6 transition-all"
               >
                 Consult with our Engineers <ChevronRight className="w-4 h-4" />
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white overflow-hidden relative border-t border-slate-100">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-10 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter mb-8 italic">Ready to <span className="text-blue-600">Transform</span> Your Branding?</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="mailto:sales@milaplastics.com" 
              className="px-12 py-6 bg-blue-600 text-white font-black text-sm uppercase tracking-[0.3em] shadow-xl shadow-blue-600/20 hover:scale-105 transition-transform"
            >
              Request Quote
            </a>
            <a 
              href="https://wa.me/8618567413851" 
              className="px-12 py-6 border-2 border-slate-900 text-slate-900 font-black text-sm uppercase tracking-[0.3em] hover:bg-slate-900 hover:text-white transition-all"
            >
              Consult Engineering
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
