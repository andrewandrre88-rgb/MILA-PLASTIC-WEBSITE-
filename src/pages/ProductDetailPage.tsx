import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import Markdown from "react-markdown";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Droplets, 
  Settings, 
  ChevronRight,
  Download,
  Info
} from "lucide-react";
import { products } from "../data/products";
import useSEO from "../hooks/useSEO";

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    setSelectedImage(null);
  }, [id]);

  useSEO({
    title: product ? `${product.name}` : "Product Details",
    description: product ? `${product.description.slice(0, 150)}...` : "Premium plastic trigger sprayers, mist sprayers, foam pumps, and lotion pumps manufactured with 100% optical inspection.",
    keywords: product ? `${product.name.toLowerCase()}, ${product.category.toLowerCase()}, trigger sprayer, lotion pump` : "trigger sprayer, mist sprayer, lotion pump"
  });

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-4xl font-black uppercase mb-4">Product Not Found</h2>
          <Link to="/products" className="text-blue-600 font-bold uppercase tracking-widest text-sm">Return to Catalog</Link>
        </div>
      </div>
    );
  }

  const galleryImages = (product as any).images && (product as any).images.length >= 4 
    ? (product as any).images 
    : [product.imageSrc, product.imageSrc, product.imageSrc, product.imageSrc];

  const activeImage = selectedImage || product.imageSrc;

  return (
    <div className="bg-white">
      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200 py-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 architectural-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/products" className="hover:text-blue-600">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-900">{product.id}</span>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] architectural-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            {/* Image Gallery Area */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div className="aspect-[4/5] bg-slate-50 border border-slate-200 overflow-hidden relative group">
                <img 
                  src={activeImage} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6">
                  <div className="bg-white/90 backdrop-blur-md p-4 border border-slate-200 shadow-xl">
                    <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Batch Code</div>
                    <div className="text-sm font-black text-slate-900">{product.id}</div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {galleryImages.map((img: string, i: number) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedImage(img)}
                    className={`aspect-square bg-slate-50 border cursor-pointer overflow-hidden transition-all ${
                      activeImage === img 
                        ? 'border-blue-600 opacity-100 ring-2 ring-blue-100' 
                        : 'border-slate-200 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`Detail ${i + 1}`} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Content Area */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-12"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="px-3 py-1 bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.3em]">Technical Specs</div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-600" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">Tested 100k Cycles</span>
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6">
                  {product.name}
                </h1>
                <p className="text-slate-600 text-lg leading-relaxed max-w-lg">
                  {product.description} Engineered for high-consistency applications where dosage precision and reliability are non-negotiable.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid sm:grid-cols-2 gap-8 border-t border-slate-100 pt-8">
                {product.features.map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-1">Architecture</h4>
                      <p className="text-slate-500 text-[11px] leading-relaxed font-bold uppercase tracking-tight">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Information Table */}
              <div className="bg-slate-50 p-8 space-y-4">
                <div className="flex items-center gap-2 mb-4">
                   <Info className="w-4 h-4 text-slate-400" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Core Variables</span>
                </div>
                {(product as any).price && (
                  <div className="flex justify-between items-center py-3 border-b border-white/50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Price</span>
                    <span className="text-sm font-black text-slate-900">{(product as any).price}</span>
                  </div>
                )}
                {(product as any).moq && (
                  <div className="flex justify-between items-center py-3 border-b border-white/50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">MOQ</span>
                    <span className="text-[11px] font-bold text-slate-900">{(product as any).moq}</span>
                  </div>
                )}
                {(product as any).packaging && (
                  <div className="flex justify-between items-center py-3 border-b border-white/50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Standard Packaging</span>
                    <span className="text-[11px] font-bold text-slate-900">{(product as any).packaging}</span>
                  </div>
                )}
                {(product as any).deliveryPeriod && (
                  <div className="flex justify-between items-center py-3 border-b border-white/50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Delivery Period</span>
                    <span className="text-[11px] font-bold text-slate-900">{(product as any).deliveryPeriod}</span>
                  </div>
                )}
                {(product as any).paymentMethod && (
                  <div className="flex justify-between items-center py-3 border-b border-white/50">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Payment Method</span>
                    <span className="text-[11px] font-bold text-slate-900">{(product as any).paymentMethod}</span>
                  </div>
                )}
                {[
                  ["Material", (product as any).specs?.material || "Reinforced PP"],
                  ["Closure Size", (product as any).specs?.sizes || (product.id === "FM-410" ? "24/410" : "28/410")],
                  ["Dosage", (product as any).specs?.dosage || (product.id === "FM-410" ? "0.12ml" : "0.18ml")],
                  ["Spring", (product as any).specs?.spring || "Stainless Steel"],
                  ["Supply Cap.", (product as any).supplyCapacity || (product as any).capacity || "5M PCS/WEEK"]
                ].map(([label, val], idx) => (
                  <div key={idx} className="flex justify-between items-center py-3 border-b border-white/50 last:border-0">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">{label}</span>
                    <span className="text-[11px] font-bold text-slate-900">{val as string}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-8">
                <a 
                  href="https://wa.me/8618157476044"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-3 px-10 py-5 bg-[#25D366] text-white font-black text-xs uppercase tracking-[0.2em] text-center hover:bg-[#128C7E] transition-all shadow-xl shadow-green-600/20"
                >
                  <i className="fa-brands fa-whatsapp text-lg"></i>
                  Get Best Price Chat Now
                </a>
                <a 
                  href="mailto:sales@milaplastics.com"
                  className="flex-grow sm:flex-grow-0 px-10 py-5 bg-blue-600 text-white font-black text-xs uppercase tracking-[0.2em] text-center hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
                >
                  Inquire Now
                </a>
                <button className="flex-grow sm:flex-grow-0 flex items-center justify-center gap-3 px-10 py-5 border-2 border-slate-200 text-slate-900 font-black text-xs uppercase tracking-[0.2em] hover:bg-slate-50 transition-all">
                  <Download className="w-4 h-4" />
                  Drawing PDF
                </button>
              </div>
            </motion.div>
          </div>

          {/* Detailed Info Section */}
          {(product as any).detailedInfo && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-32 pt-32 border-t border-slate-100"
            >
              <div className="max-w-4xl">
                <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">Product <span className="text-blue-600">Deep Dive.</span></h2>
                <div className="prose prose-slate max-w-none prose-headings:font-black prose-headings:uppercase prose-headings:tracking-tighter prose-headings:text-slate-900 prose-p:text-slate-500 prose-li:text-slate-500">
                  <Markdown>{(product as any).detailedInfo}</Markdown>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Cross-Sell Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex items-center justify-between mb-16">
            <h3 className="text-3xl font-black uppercase tracking-tighter">Related Components</h3>
            <Link to="/products" className="text-[10px] font-black uppercase tracking-widest text-blue-600 flex items-center gap-2">
              Browse All
              <ArrowLeft className="w-4 h-4 rotate-180" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {products.filter(p => p.id !== product.id).slice(0, 4).map(p => (
              <Link key={p.id} to={`/product/${p.id}`} className="group">
                <div className="aspect-[4/5] bg-white border border-slate-200 overflow-hidden mb-4 relative">
                   <img 
                    src={p.imageSrc} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    referrerPolicy="no-referrer"
                  />
                   <div className="absolute top-2 right-2 bg-slate-900/80 text-white text-[8px] font-black p-1 tracking-tighter">#{p.id}</div>
                </div>
                <h4 className="text-xs font-black uppercase tracking-tight group-hover:text-blue-600 transition-colors">{p.name}</h4>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
