import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import { blogs } from '@/data/blogs';
import { Clock, User, Calendar, Share2, Link as LinkIcon, Twitter, Linkedin, Facebook, ArrowLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find(b => b.id === id);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!blog) return <div>Post not found</div>;

  return (
    <div className="bg-[#0B0F19] min-h-screen pb-32">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img src={blog.image} className="w-full h-full object-cover" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest mb-8 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Back to Intelligence Hub
            </Link>
            <h1 className="text-4xl md:text-7xl font-black text-white mb-8 leading-tight tracking-tighter">
              {blog.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/50 text-[10px] font-black uppercase tracking-widest">
              <span className="flex items-center gap-2"><User className="w-4 h-4 text-primary" /> {blog.author.name}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-primary" /> {blog.date}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> {blog.readTime}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 mt-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Sticky Sidebar */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32 flex flex-col gap-6">
              <div className="text-[10px] font-black uppercase tracking-widest text-white/30 transform -rotate-90 origin-left translate-y-20 whitespace-nowrap">
                Share Article
              </div>
              <div className="flex flex-col gap-4 pt-24">
                {[Twitter, Linkedin, Facebook, LinkIcon].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:bg-white/10 transition-all">
                    <Icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="lg:col-span-8">
            <article className="prose prose-invert prose-lg max-w-none 
              prose-headings:text-white prose-headings:font-black prose-headings:tracking-tighter
              prose-p:text-white/60 prose-p:leading-relaxed
              prose-strong:text-white prose-blockquote:border-primary prose-blockquote:bg-primary/5 prose-blockquote:p-8 prose-blockquote:rounded-3xl
              prose-li:text-white/60
            ">
              <div dangerouslySetInnerHTML={{ __html: blog.content }} />
            </article>

            {/* Author Footer */}
            <div className="mt-20 p-12 glass rounded-[3rem] border-white/5 flex flex-col md:flex-row items-center gap-8">
              <img src={blog.author.avatar} alt="" className="w-24 h-24 rounded-full border-4 border-primary/20" />
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-bold text-white mb-2">{blog.author.name}</h4>
                <p className="text-primary text-xs font-black uppercase tracking-widest mb-4">{blog.author.role}</p>
                <p className="text-white/40 text-sm leading-relaxed max-w-xl">
                  Expert in e-governance and cognitive system architecture with over 15 years of industry experience at Akiko Sherman Infotech.
                </p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Newsletter/Related */}
          <div className="lg:col-span-3 space-y-12">
            <div className="glass p-8 rounded-[2.5rem] border-white/5">
              <h4 className="text-lg font-bold text-white mb-6">Stay Informed</h4>
              <p className="text-white/40 text-sm mb-8 leading-relaxed">Join 5,000+ professionals getting the latest on GovTech and AI.</p>
              <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white text-sm mb-4 focus:border-primary outline-none transition-all" />
              <Button className="w-full bg-primary py-6 rounded-2xl font-bold">Subscribe</Button>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Related Posts</h4>
              {blogs.filter(b => b.id !== id).slice(0, 2).map(related => (
                <Link key={related.id} to={`/blog/${related.id}`} className="block group">
                  <div className="glass p-4 rounded-2xl border-white/5 hover:border-white/20 transition-all">
                    <img src={related.image} className="w-full h-32 object-cover rounded-xl mb-4" alt="" />
                    <h5 className="text-sm font-bold text-white group-hover:text-primary transition-colors line-clamp-2">{related.title}</h5>
                  </div>
                </Link>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
