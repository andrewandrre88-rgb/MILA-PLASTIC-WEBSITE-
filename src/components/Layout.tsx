import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  Menu, 
  Globe2, 
  Phone, 
  Twitter, 
  Linkedin, 
  Instagram, 
  ArrowRight 
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import MilaAi from "./MilaAi";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Our products", path: "/products" },
    { label: "About Mila", path: "/about" },
    { label: "Social Media", path: "/social-media" },
    { label: "Technical Journal", path: "/blog" },
    { label: "Real Use Cases", path: "/real-use-cases" },
    { label: "Contact Sales", path: "/contact" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <MilaAi />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center gap-2 flex-shrink-0 transition-opacity hover:opacity-80">
              <img 
                src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/166723e1-e79d-4b0d-b111-ac1545336904-modified.png" 
                alt="Mila Plastics Logo" 
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-1.5">
                <span className="font-black text-sm lg:text-lg tracking-tighter uppercase leading-none">
                  MILA
                </span>
                <span className="text-blue-600 font-bold italic text-[10px] sm:text-xs lg:text-sm uppercase tracking-tighter leading-none">
                  PLASTICS
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-4 xl:gap-8 text-[11px] xl:text-xs font-black text-slate-500 tracking-widest uppercase">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`hover:text-blue-600 transition-colors whitespace-nowrap ${location.pathname === item.path ? 'text-blue-600' : ''}`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-slate-900 active:bg-slate-50 transition-colors" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-lg font-black uppercase tracking-tighter text-slate-900 border-b border-slate-50 pb-2 flex justify-between items-center group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                    <ArrowRight className="w-4 h-4 text-blue-600 opacity-0 group-active:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white pt-16 md:pt-24 pb-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-12 gap-x-8 mb-20 lg:mb-32">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-8">
                <img 
                  src="https://raw.githubusercontent.com/andrewandrre88-rgb/MILA-PLASTICS-IMAGES/refs/heads/main/166723e1-e79d-4b0d-b111-ac1545336904-modified.png" 
                  alt="Mila Plastics Logo" 
                  className="h-12 w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <span className="font-black text-lg tracking-tight uppercase italic">
                  MILA <span className="text-blue-600">PLASTICS</span>
                </span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mb-8 uppercase tracking-wider font-medium">
                Global manufacturing excellence in mechanical dispensing systems.
              </p>
              <div className="flex gap-4">
                {[Twitter, Linkedin, Instagram].map((Icon, idx) => (
                  <a key={idx} href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

          <div>
              <h6 className="font-black uppercase tracking-[0.2em] text-[10px] text-slate-400 mb-8">Navigation</h6>
              <ul className="space-y-4">
                {["Products", "Services", "Custom Injection", "Real Use Cases", "Journal", "Contact", "Our Team"].map((item) => (
                  <li key={item}>
                    <Link to={
                      item === "Journal" ? "/blog" : 
                      item === "Products" ? "/products" : 
                      item === "Real Use Cases" ? "/real-use-cases" :
                      item === "Contact" ? "/contact" : 
                      item === "Services" ? "/services" :
                      item === "Our Team" ? "/team" :
                      item === "Custom Injection" ? "/custom-injection" :
                      "#"
                    } className="text-slate-900 hover:text-blue-600 transition-colors text-xs font-bold uppercase tracking-widest">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="font-black uppercase tracking-[0.2em] text-[10px] text-slate-400 mb-8">Corporate</h6>
              <ul className="space-y-4">
                {["About Mila", "History", "Quality Control", "Quality & Certification", "Careers"].map((item) => (
                  <li key={item}>
                    <Link to={
                      item === "About Mila" ? "/about" : 
                      item === "History" ? "/history" : 
                      item === "Quality Control" ? "/quality-control" :
                      item === "Quality & Certification" ? "/quality-certification" :
                      "#"
                    } className="text-slate-900 hover:text-blue-600 transition-colors text-xs font-bold uppercase tracking-widest">{item}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h6 className="font-black uppercase tracking-[0.2em] text-[10px] text-slate-400 mb-8">Headquarters</h6>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Globe2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="text-slate-600 text-xs font-bold uppercase tracking-widest leading-relaxed">
                    Kecheng District, <br />Quzhou City, <br />Zhejiang Province, China
                  </span>
                </li>
                <li className="flex gap-4">
                  <Phone className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <a href="tel:+8618567413851" className="text-slate-600 text-xs font-bold uppercase tracking-widest hover:text-blue-600 transition-colors">
                    +86 185 6741 3851
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h6 className="font-black uppercase tracking-[0.2em] text-[10px] text-slate-400 mb-8">B2B Newsletter</h6>
              <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest leading-relaxed mb-6 italic">
                Get the latest in polymer technology.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="CORP. EMAIL" 
                  className="bg-slate-50 border border-slate-200 px-4 py-3 w-full text-[10px] font-bold uppercase tracking-widest focus:outline-none focus:border-blue-600"
                />
                <button className="bg-slate-900 text-white px-4 hover:bg-slate-800 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-slate-100">
            <span className="text-[8px] sm:text-[9px] font-black text-slate-300 uppercase tracking-[0.4em] text-center sm:text-left">
              © 2024 MILA PLASTICS LTD. STANDARDS OF EXCELLENCE.
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
