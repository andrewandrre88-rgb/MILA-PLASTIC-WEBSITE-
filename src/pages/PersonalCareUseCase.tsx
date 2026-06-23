import React from "react";
import { motion } from "motion/react";
import { Sparkles, Droplets, Heart, CheckCircle2, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import useSEO from "../hooks/useSEO";

export default function PersonalCareUseCase() {
  useSEO({
    title: "Personal Care, Cosmetic Mists, & Salon Spray Pumps",
    description: "Delivering ultra-fine atomization with absolute precision. Ideal for body mists, professional salon hair applications, face toners, and cosmetic packaging.",
    keywords: "cosmetic mist sprayer, salon spray mechanism, luxury body spray pump, fine hair misting bottle",
    canonicalPath: "/real-use-cases/personal-care"
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-8">
        <Link to="/real-use-cases" className="flex items-center gap-2 text-slate-500 font-black text-[10px] uppercase tracking-widest hover:text-blue-600 transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Use Cases
        </Link>
      </div>

      {/* Hero Header */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <div className="inline-block px-3 py-1 bg-pink-50 text-pink-600 text-[10px] font-black uppercase tracking-[0.3em]">Personal & Beauty Care</div>
              <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-slate-900">
                Ultra-Fine <br />
                <span className="text-pink-600 italic">Mist.</span>
              </h1>
              <p className="text-slate-500 text-lg leading-relaxed max-w-xl">
                Hair stylists and salon professionals demand a cloud-like mist that doesn't soak the client's hair but provides enough saturation for precision cutting and styling.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 border border-slate-100">
                  <Sparkles className="w-4 h-4 text-pink-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Salon Grade</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 border border-slate-100">
                  <Droplets className="w-4 h-4 text-pink-600" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Zero Drip</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video bg-slate-100 overflow-hidden border border-slate-200"
            >
              <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/hairCaree.png" 
                alt="Personal care styling application"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-10">
          <article className="prose prose-slate lg:prose-xl max-w-none">
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-900 mb-8">Elevating the Salon Experience</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              In a high-end salon, every touchpoint matters. The sound of the trigger, the consistency of the mist, and the balance of the bottle all contribute to the professional's workflow. Mila's fine-mist technology is designed to replicate the feel of expensive aerosol sprays without the need for propellants.
            </p>

            <div className="grid md:grid-cols-2 gap-12 my-16">
              <div className="bg-white p-10 border border-slate-200 shadow-sm">
                <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Atomization Engine</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Our core misting engine uses a proprietary swirl chamber that breaks down liquid into particles as small as 40 microns, ensuring a true "dry" mist for setting sprays and toners.
                </p>
              </div>
              <div className="bg-white p-10 border border-slate-200 shadow-sm">
                <h4 className="text-xl font-black uppercase tracking-tighter text-slate-900 mb-4">Aesthetic Customization</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The beauty industry is visually driven. We offer metallic plating, matte soft-touch finishes, and custom color-matching for all pump components to align with brand DNA.
                </p>
              </div>
            </div>

            <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 mb-6 italic">Sustainability & Luxury</h3>
            <p className="text-slate-600 text-lg leading-relaxed mb-12">
              With the growing shift toward eco-conscious beauty, high-performance mechanical sprayers are replacing aerosols. Our technology allows brands to move to glass or recycled plastic (rPET) bottles while maintaining the "premium feel" customers expect.
            </p>

            <div className="bg-slate-900 p-12 text-white my-16">
              <h4 className="text-2xl font-black uppercase tracking-tighter mb-8">Beauty Series Engineering Specs</h4>
              <ul className="space-y-4">
                {[
                  "Low dosage (0.1cc - 0.3cc) to prevent product saturation",
                  "Continuous spray options for effortless 360-degree coverage",
                  "Soft-touch trigger coating for maximum comfort",
                  "Over-cap options for travel-safe protection"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                    <span className="text-sm font-bold uppercase tracking-widest">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>

      {/* Recommended Product */}
      <section className="py-24 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 flex flex-col items-center">
          <h2 className="text-2xl font-black uppercase tracking-widest text-slate-900 mb-12">Salon Standards</h2>
          <div className="group relative bg-slate-50 p-12 border border-slate-100 max-w-sm text-center">
             <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/Yellowtrigger.png" 
                alt="Beauty Sprayer"
                className="w-48 h-48 mx-auto mb-8 object-contain"
             />
             <h3 className="text-xl font-black uppercase tracking-tight mb-2">MILA-B2 Beauty Mist</h3>
             <p className="text-slate-500 text-xs uppercase tracking-widest mb-6">40-Micron Ultra Fine Atomization</p>
             <Link to="/products" className="inline-block px-10 py-4 bg-pink-600 text-white text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-colors">
                Explore The Range
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
