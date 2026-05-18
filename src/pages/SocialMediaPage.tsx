import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

const socialChannels = [
  {
    name: "LinkedIn",
    icon: "fa-brands fa-linkedin",
    handle: "Mila Plastics Manufacturing",
    description: "Follow us for professional updates, manufacturing insights, and industry news.",
    color: "bg-[#0077b5]",
    link: "https://www.linkedin.com"
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    handle: "@milaplastics_official",
    description: "A visual journey through our factory, product excellence, and team culture.",
    color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
    link: "https://www.instagram.com"
  },
  {
    name: "X",
    icon: "fa-brands fa-x-twitter",
    handle: "@MilaPlastics",
    description: "Real-time updates on our latest innovations and trade show appearances.",
    color: "bg-black",
    link: "https://twitter.com"
  },
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook",
    handle: "Mila Plastics Factory",
    description: "Connect with our global community and stay updated with company milestones.",
    color: "bg-[#1877f2]",
    link: "https://www.facebook.com"
  },
  {
    name: "YouTube",
    icon: "fa-brands fa-youtube",
    handle: "Mila Plastics TV",
    description: "Watch our automated lines in action and deep-dive into engineering teardowns.",
    color: "bg-[#FF0000]",
    link: "https://www.youtube.com"
  },
  {
    name: "WhatsApp",
    icon: "fa-brands fa-whatsapp",
    handle: "+86 13738132673",
    description: "Connect directly with our logistics and technical support teams in real-time.",
    color: "bg-[#25D366]",
    link: "https://wa.me/8613738132673"
  },
  {
    name: "TikTok",
    icon: "fa-brands fa-tiktok",
    handle: "@milaplastics_factory",
    description: "Bite-sized factory tours and ASMR manufacturing content.",
    color: "bg-black",
    link: "https://www.tiktok.com"
  },
  {
    name: "WeChat",
    icon: "fa-brands fa-weixin",
    handle: "Mila_plastics",
    description: "Scan our QR code or add us by ID for instant engineering collaboration.",
    color: "bg-[#07C160]",
    link: "#"
  }
];

const feedItems = [
  {
    id: 1,
    title: "Eco-Friendly Innovation",
    platform: "LinkedIn",
    date: "2 days ago",
    content: "We are proud to announce our new line of recyclable HDPE pumps. Engineering sustainability into every drop.",
    image: "https://images.unsplash.com/photo-1532033375034-a29004f76011?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    title: "Precision at Scale",
    platform: "Instagram",
    date: "5 days ago",
    content: "A look inside our ISO-certified clean room. 1.2M daily output capacity with zero-defect goals.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    title: "Team Spotlight",
    platform: "Facebook",
    date: "1 week ago",
    content: "Meet Chen, our lead engineer, who ensures every mold meets the highest precision standards.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=1000"
  }
];

export default function SocialMediaPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-[#0a0f1a] overflow-hidden border-b border-slate-800">
        {/* Tactical Grid Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(74, 85, 104, 0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(74, 85, 104, 0.6) 1px, transparent 1px)', backgroundSize: '45px 45px' }}></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0f1a] via-transparent to-[#0a0f1a]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-1.5 bg-[#1d4ed8] text-white text-[10px] sm:text-[11px] font-black uppercase tracking-[0.2em] mb-8 md:mb-10">
              Social Ecosystem
            </div>
            
            <h1 className="flex flex-col mb-10 overflow-hidden leading-[1.05]">
              <span className="text-[12vw] sm:text-[10vw] md:text-[140px] font-black text-[#3b82f6] uppercase tracking-tighter leading-[0.8] mb-2">
                Mila Social
              </span>
              <span className="text-[12vw] sm:text-[10vw] md:text-[140px] font-black text-white uppercase tracking-tighter leading-[0.8] italic">
                Insights.
              </span>
            </h1>
            
            <p className="text-slate-400 text-base sm:text-lg md:text-2xl max-w-2xl font-medium leading-relaxed opacity-80 px-2 sm:px-0">
              Explore our global digital footprint, from industrial-grade manufacturing updates to real-time engineering insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Primary Channels */}
      <section className="py-20 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {socialChannels.map((channel, index) => (
              <motion.a
                key={channel.name}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-slate-50 p-8 border border-slate-200 hover:border-blue-500 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className={`${channel.color} w-12 h-12 flex items-center justify-center text-white rounded-lg shadow-lg`}>
                    <i className={`${channel.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-black uppercase tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">{channel.name}</h3>
                  <p className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">{channel.handle}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{channel.description}</p>
                </div>
                <div className="pt-6 flex items-center text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-slate-900 transition-colors">
                  Join Community <ExternalLink className="w-3 h-3 ml-2" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Curated Feed */}
      <section className="py-20 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 px-2 sm:px-0">
            <div className="max-w-xl">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight mb-4 text-slate-900">
                Latest <span className="text-blue-600">Updates.</span>
              </h2>
              <p className="text-slate-500 font-bold tracking-widest text-[10px] sm:text-xs uppercase">Curated highlights from across our digital platforms.</p>
            </div>
            <div className="flex gap-4">
               <button className="px-6 py-3 bg-white border border-slate-200 text-slate-900 font-black uppercase text-[10px] tracking-widest hover:bg-slate-900 hover:text-white transition-all w-full sm:w-auto">View All Posts</button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {feedItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-slate-200 group"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[9px] font-black uppercase tracking-wider text-slate-900 border border-slate-200">
                    {item.platform}
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-[9px] font-black text-blue-600 uppercase tracking-widest mb-2">{item.date}</div>
                  <h4 className="text-xl font-black uppercase tracking-tight text-slate-900 mb-3">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.content}</p>
                  <div className="flex items-center text-slate-900 font-black tracking-widest uppercase text-[10px] cursor-pointer hover:text-blue-600 transition-colors">
                    Read More <i className="fa-regular fa-comment-dots ml-2 text-xs"></i>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-24 lg:py-32 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-10 relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 sm:mb-12 leading-tight">
            Don't miss a <br />single <span className="italic">innovation.</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="flex-1 bg-white/10 border border-white/20 px-6 py-4 text-white placeholder:text-white/40 font-bold tracking-widest uppercase text-[10px] sm:text-xs focus:outline-none focus:bg-white/20 transition-all"
            />
            <button className="bg-white text-blue-600 px-8 py-4 font-black uppercase tracking-widest text-[10px] sm:text-xs hover:bg-slate-900 hover:text-white transition-all">
              Subscribe
            </button>
          </div>
          <p className="mt-8 text-white/60 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em]">Weekly industry digest. No spam, just precision.</p>
        </div>
      </section>
    </main>
  );
}
