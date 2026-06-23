import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { blogPosts } from "../data/blog";
import useSEO from "../hooks/useSEO";

export default function BlogPage() {
  useSEO({
    title: "Trigger Sprayer Industry Insights & Technical Journal",
    description: "Explore Mila Plastics' Technical Journal. Gain deep industry insights on polymer science, industrial automation, and sustainable mechanical spraying technology.",
    keywords: "trigger sprayer blog, polymer innovations, plastic injection molding news, spray bottle manufacturer articles, wholesale B2B packaging blog",
    canonicalPath: "/blog"
  });

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 architectural-grid"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-block px-3 py-1 bg-blue-600 text-[10px] font-black uppercase tracking-[0.3em] mb-6 text-white">Mila Insights</div>
            <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] mb-8">
              <span className="text-blue-500">Technical</span> <br />
              <span className="text-white italic">Journal.</span>
            </h1>
            <p className="text-slate-400 text-xl leading-relaxed">
              Exploring the intersections of polymer science, industrial automation, and mechanical precision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog List */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid gap-20">
            {blogPosts.map((post, idx) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="grid md:grid-cols-2 gap-12 items-center group"
              >
                <Link to={`/blog/${post.id}`} className="block relative overflow-hidden aspect-video bg-slate-100">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 text-[9px] font-black uppercase tracking-widest text-slate-900 border border-slate-200">
                       {post.category}
                    </span>
                  </div>
                </Link>
                <div className="space-y-6">
                  <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    <div className="flex items-center gap-2">
                       <Calendar className="w-3 h-3" />
                       {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                       <User className="w-3 h-3" />
                       By {post.author}
                    </div>
                  </div>
                  <Link to={`/blog/${post.id}`} className="block hover:text-blue-600 transition-colors">
                    <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 border-b-2 border-slate-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-all group"
                  >
                    Read Technical Report
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Banner */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-10 text-center">
           <div className="max-w-2xl mx-auto">
              <h3 className="text-3xl font-black uppercase tracking-tighter mb-6">Stay Ahead of Industry Shifts.</h3>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-10 opacity-70">Join our B2B technical newsletter for monthly reports on polymer pricing and innovation.</p>
              <div className="flex max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="EXECUTIVE EMAIL" 
                  className="bg-white border border-slate-200 px-6 py-4 w-full text-xs font-bold uppercase tracking-widest focus:outline-none focus:border-blue-600"
                />
                <button className="bg-slate-900 text-white px-8 font-black uppercase tracking-widest text-[10px] hover:bg-slate-800 transition-colors">
                  Submit
                </button>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}
