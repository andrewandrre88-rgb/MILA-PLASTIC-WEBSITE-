import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, Filter, X } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeMaterial, setActiveMaterial] = useState<string>("All");

  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map(p => p.category)))], []);
  const materials = useMemo(() => ["All", ...Array.from(new Set(products.map(p => p.material)))], []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const categoryMatch = activeCategory === "All" || product.category === activeCategory;
      const materialMatch = activeMaterial === "All" || product.material === activeMaterial;
      return categoryMatch && materialMatch;
    });
  }, [activeCategory, activeMaterial]);

  return (
    <div className="bg-white">
      {/* Products Header */}
      <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 architectural-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6">Full Inventory</div>
            <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
              <span className="text-blue-500">Mila Series</span> <br />
              <span className="text-white italic">Precision.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed max-w-lg">
              Explore our full range of high-performance trigger systems, from industrial-grade streamers to cosmetics-ready fine mist sprayers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 py-4 sm:py-6 flex flex-col md:flex-row md:items-center gap-4 sm:gap-8">
          <div className="flex items-center gap-3 text-slate-400">
             <Filter className="w-4 h-4" />
             <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">Filter Catalog</span>
          </div>

          <div className="flex-grow flex flex-col gap-4 overflow-hidden">
            <div className="flex items-center gap-4">
              <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest shrink-0">Category:</span>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none mask-fade-right">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap shrink-0 ${
                      activeCategory === cat 
                      ? "bg-slate-900 text-white border-slate-900" 
                      : "bg-transparent text-slate-400 border-slate-100 hover:border-slate-300"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest shrink-0">Material:</span>
              <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none mask-fade-right">
                {materials.map(mat => (
                  <button
                    key={mat}
                    onClick={() => setActiveMaterial(mat)}
                    className={`px-3 py-1 text-[9px] sm:text-[10px] font-black uppercase tracking-widest border transition-all whitespace-nowrap shrink-0 ${
                      activeMaterial === mat 
                      ? "bg-blue-600 text-white border-blue-600" 
                      : "bg-transparent text-slate-400 border-slate-100 hover:border-slate-300"
                    }`}
                  >
                    {mat || "Unspecified"}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {(activeCategory !== "All" || activeMaterial !== "All") && (
            <button 
              onClick={() => { setActiveCategory("All"); setActiveMaterial("All"); }}
              className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors shrink-0"
            >
              <X className="w-3.5 h-3.5" />
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">Reset</span>
            </button>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white min-h-[600px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 lg:gap-16">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, idx) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ scale: 1.02, y: -8 }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeOut",
                    layout: { duration: 0.3 }
                  }}
                  className="group flex flex-col p-6 -m-6 rounded-3xl transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]"
                >
                  <Link to={(product as any).customPath || `/products/${product.id}`} className="block">
                    <div className="aspect-[4/5] bg-slate-50 border border-slate-100 overflow-hidden relative mb-8">
                      <img
                        src={product.imageSrc}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-0 right-0 p-4">
                         <span className="bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-black uppercase tracking-widest border border-slate-100">
                            {product.id}
                         </span>
                      </div>
                      <div className="absolute bottom-4 left-4 flex gap-2">
                         <span className="bg-slate-900/10 backdrop-blur-md px-2 py-1 text-[8px] font-black uppercase tracking-widest text-slate-600 border border-slate-900/10">
                            {product.material}
                         </span>
                         <span className="bg-blue-600/10 backdrop-blur-md px-2 py-1 text-[8px] font-black uppercase tracking-widest text-blue-600 border border-blue-600/10">
                            {product.category} Series
                         </span>
                      </div>
                    </div>
                  </Link>
                  <div className="flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600">Certified Grade</span>
                    </div>
                    <Link to={(product as any).customPath || `/products/${product.id}`} className="hover:text-blue-600 transition-colors">
                      <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">{product.name}</h3>
                    </Link>
                    <p className="text-slate-500 mb-8 text-sm leading-relaxed flex-grow">
                      {product.description}
                    </p>
                    
                    <div className="space-y-3 mb-10">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to={(product as any).customPath || `/products/${product.id}`} className="w-full flex items-center justify-between p-4 bg-slate-900 text-white text-xs font-black uppercase tracking-[0.2em] group-hover:bg-blue-600 transition-colors">
                      Technical Specifications
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {filteredProducts.length === 0 && (
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="py-40 text-center"
            >
               <div className="text-slate-300 mb-6 flex justify-center">
                  <Filter className="w-16 h-16 opacity-20" />
               </div>
               <h3 className="text-2xl font-black uppercase tracking-tighter text-slate-400">No products match your criteria.</h3>
               <button 
                  onClick={() => { setActiveCategory("All"); setActiveMaterial("All"); }}
                  className="mt-8 text-blue-600 font-black uppercase tracking-widest text-xs border-b border-blue-600 pb-1"
               >
                  Reset All Filters
               </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Bulk Order Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-10">
            <div className="bg-white border border-slate-200 p-12 md:p-20 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
               <div className="max-w-xl">
                  <h2 className="text-4xl font-black uppercase tracking-tighter mb-6 leading-none">Custom Wholesale <br />Configurations.</h2>
                  <p className="text-slate-500 text-sm leading-relaxed uppercase tracking-widest font-bold opacity-60">
                    We offer specialized color matching, closure variations, and pallet-level pricing for enterprise contracts.
                  </p>
               </div>
               <a href="tel:+8618567413851" className="px-10 py-5 bg-blue-600 text-white font-black text-sm uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 whitespace-nowrap">
                  Contact Distribution
               </a>
            </div>
         </div>
      </section>
    </div>
  );
}
