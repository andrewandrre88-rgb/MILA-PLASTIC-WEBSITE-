import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, Phone, Mail, MapPin, Globe, Clock, ChevronRight } from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    subject: "Technical Inquiry",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
    alert("Thank you. Our engineering team will review your request and contact you within 24 hours.");
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 architectural-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-white">Direct Channel</div>
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] md:leading-[0.8] mb-8">
              <span className="text-blue-500">Connect with</span> <br />
              <span className="text-white italic">Engineering.</span>
            </h1>
            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-2xl px-2 sm:px-0">
              From custom tooling specifications to global supply chain logistics, our technical sales team is ready to scale your production.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid lg:grid-cols-2 gap-24">
            
            {/* Left: Contact Info */}
            <div className="space-y-12 sm:space-y-16">
              <div className="px-4 md:px-0">
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter mb-8 sm:mb-12 flex items-center gap-4">
                   Global Hubs
                   <div className="h-px flex-grow bg-slate-100"></div>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
                   <div className="space-y-4">
                      <div className="text-[10px] font-black uppercase tracking-widest text-blue-600">Headquarters</div>
                      <h3 className="text-xl font-black uppercase tracking-tight">Main Campus</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        Kecheng District<br />
                        Quzhou City<br />
                        Zhejiang Province, China
                      </p>
                      <div className="flex items-center gap-3 text-sm text-slate-400">
                         <Phone className="w-4 h-4" />
                         <span>+1 (555) 012-3456</span>
                      </div>
                   </div>
                   <div className="space-y-4">
                      <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">APAC Operations</div>
                      <h3 className="text-xl font-black uppercase tracking-tight">Technical Center</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        No. 88 Science Park Dr<br />
                        Pudong District<br />
                        Shanghai, China 200120
                      </p>
                      <div className="flex items-center gap-3 text-sm text-slate-400">
                         <Globe className="w-4 h-4" />
                         <span>apac-office@mila.tech</span>
                      </div>
                   </div>
                </div>
              </div>

              <div className="bg-slate-50 p-10 border border-slate-100 space-y-8">
                 <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 border-b border-slate-200 pb-4">Standard Response Protocols</h3>
                 <div className="space-y-6">
                    {[
                      { icon: Clock, label: "Response Window", val: "Under 24 Hours" },
                      { icon: Mail, label: "Direct Support", val: "sales@mila.tech" },
                      { icon: Phone, label: "Emergency Line", val: "24/7 Priority Support" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white border border-slate-200 flex items-center justify-center">
                           <item.icon className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                           <div className="text-[9px] font-black uppercase tracking-widest text-slate-400">{item.label}</div>
                           <div className="text-xs font-black text-slate-900">{item.val}</div>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-20 h-20 bg-blue-600/5 -z-10 rounded-full blur-2xl"></div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white border border-slate-200 p-8 md:p-12 shadow-2xl shadow-slate-200/50"
              >
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Full Identity</label>
                       <input 
                         required
                         type="text" 
                         placeholder="John Doe"
                         className="w-full bg-slate-50 border border-slate-100 p-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-blue-600 transition-colors"
                         value={formState.name}
                         onChange={(e) => setFormState({...formState, name: e.target.value})}
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Enterprise Email</label>
                       <input 
                         required
                         type="email" 
                         placeholder="j.doe@company.com"
                         className="w-full bg-slate-50 border border-slate-100 p-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-blue-600 transition-colors"
                         value={formState.email}
                         onChange={(e) => setFormState({...formState, email: e.target.value})}
                       />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Corporation</label>
                       <input 
                         type="text" 
                         placeholder="Industries Inc."
                         className="w-full bg-slate-50 border border-slate-100 p-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-blue-600 transition-colors"
                         value={formState.company}
                         onChange={(e) => setFormState({...formState, company: e.target.value})}
                       />
                    </div>
                    <div className="space-y-2">
                       <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Subject Matter</label>
                       <select 
                         className="w-full bg-slate-50 border border-slate-100 p-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-blue-600 transition-colors appearance-none"
                         value={formState.subject}
                         onChange={(e) => setFormState({...formState, subject: e.target.value})}
                       >
                          <option>Technical Inquiry</option>
                          <option>Custom Tooling</option>
                          <option>Logistics & Supply</option>
                          <option>Quality Assurance</option>
                       </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                     <label className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Detailed Requirement</label>
                     <textarea 
                       required
                       rows={6}
                       placeholder="SPECIFY VOLUME, MATERIAL PREFERENCE, AND TIMELINES."
                       className="w-full bg-slate-50 border border-slate-100 p-4 text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-blue-600 transition-colors resize-none"
                       value={formState.message}
                       onChange={(e) => setFormState({...formState, message: e.target.value})}
                     ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-slate-900 text-white p-5 flex items-center justify-between font-black uppercase tracking-[0.3em] text-[10px] hover:bg-blue-600 transition-all group"
                  >
                     Initiate Contact
                     <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <p className="text-[8px] text-center text-slate-400 font-bold uppercase tracking-widest">
                    By submitting this form, you agree to our enterprise data protection protocols and privacy policy.
                  </p>
                </form>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Global Map Section Recap */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-10 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
               <h3 className="text-2xl font-black uppercase tracking-tighter mb-4">Optimized Global Transit.</h3>
               <p className="text-slate-500 text-sm leading-relaxed mb-8">
                 Our distribution network is architected for redundancy, ensuring that even under global supply tension, your production lines remain active.
               </p>
               <button className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-[9px] group">
                  View Logistics Map
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
            </div>
            <div className="w-full md:w-1/3 aspect-video bg-slate-200 overflow-hidden relative border border-slate-300">
               <img 
                 src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/f57d6395-e6ba-4fd6-bb31-a6e642e4a875.png" 
                 alt="Logistics Map Thumbnail" 
                 className="w-full h-full object-cover opacity-50"
                 referrerPolicy="no-referrer"
               />

            </div>
         </div>
      </section>
    </div>
  );
}
