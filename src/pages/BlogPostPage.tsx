import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { blogPosts } from "../data/blog";

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Post Not Found</h2>
          <Link to="/blog" className="text-blue-600 font-bold uppercase tracking-widest text-[10px]">Return to Journal</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Article Header */}
      <header className="pt-20 pb-12 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 architectural-grid"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-10 relative z-10">
          <Link to="/blog" className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors mb-12">
            <ArrowLeft className="w-4 h-4" />
            Back to Journal
          </Link>
          
          <div className="flex items-center gap-4 mb-8">
            <span className="bg-blue-600 text-white px-3 py-1 text-[9px] font-black uppercase tracking-widest italic">{post.category}</span>
            <div className="h-px w-8 bg-slate-300"></div>
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Industry Insight</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.95] mb-12">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 py-8 border-y border-slate-200 text-[10px] font-bold uppercase tracking-widest text-slate-500">
             <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                {post.date}
             </div>
             <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-blue-600" />
                By {post.author}
             </div>
             <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                5 Min Read
             </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="aspect-video bg-slate-100 overflow-hidden mb-16 border border-slate-200 shadow-2xl"
          >
             <img 
               src={post.image} 
               alt={post.title} 
               className="w-full h-full object-cover"
               referrerPolicy="no-referrer"
             />
          </motion.div>

          <article 
            className="prose prose-slate max-w-none 
              prose-h2:text-4xl prose-h2:font-black prose-h2:uppercase prose-h2:tracking-tighter prose-h2:mt-16 prose-h2:mb-8
              prose-p:text-lg prose-p:leading-relaxed prose-p:text-slate-600 prose-p:mb-8
              prose-blockquote:border-l-4 prose-blockquote:border-blue-600 prose-blockquote:bg-slate-50 prose-blockquote:p-8 prose-blockquote:italic prose-blockquote:font-bold prose-blockquote:text-slate-900
            "
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-20 pt-12 border-t border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-4">
               <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-black uppercase text-[10px]">EV</div>
               <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-900">{post.author}</div>
                  <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Systems Engineering lead</div>
               </div>
            </div>
            <button className="flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors uppercase font-black text-[9px] tracking-widest">
               <Share2 className="w-4 h-4" />
               Share Insight
            </button>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-slate-900 py-32 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none mb-10">
            Engineered for <span className="text-blue-500 italic">Longevity.</span>
          </h2>
          <Link to="/products" className="inline-block px-12 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-slate-900 transition-all shadow-xl shadow-blue-600/20">
            Explore System Architecture
          </Link>
        </div>
      </section>
    </div>
  );
}
