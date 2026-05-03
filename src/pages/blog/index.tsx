import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogs, BlogPost } from '@/data/blogs';
import { ArrowRight, Clock, User, ChevronRight } from 'lucide-react';

const categories = ['All', 'AI', 'Technology', 'E-Governance', 'Business', 'Innovation'];

export default function BlogListing() {
  const [activeCategory, setActiveCategory] = useState('All');
  const featuredBlog = blogs[0];

  const filteredBlogs = activeCategory === 'All' 
    ? blogs.slice(1) 
    : blogs.filter(b => b.category === activeCategory);

  return (
    <div className="bg-[#0B0F19] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Featured Blog Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-[60vh] rounded-[3rem] overflow-hidden group mb-20"
        >
          <img 
            src={featuredBlog.image} 
            alt={featuredBlog.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-12 max-w-3xl">
            <span className="px-4 py-1.5 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 text-primary text-[10px] font-black uppercase tracking-widest mb-6 inline-block">
              Featured Story
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight tracking-tighter">
              {featuredBlog.title}
            </h1>
            <p className="text-white/60 text-lg mb-8 line-clamp-2 leading-relaxed">
              {featuredBlog.excerpt}
            </p>
            <Link 
              to={`/blog/${featuredBlog.id}`}
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-white/90 transition-all group/btn"
            >
              Read Full Article 
              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-16 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat 
                  ? 'bg-primary border-primary text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]' 
                  : 'bg-white/5 border-white/10 text-white/50 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredBlogs.map((blog, i) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link to={`/blog/${blog.id}`} className="group block h-full">
                <div className="glass rounded-[2.5rem] overflow-hidden h-full flex flex-col border-white/5 hover:border-white/20 transition-all duration-500 hover:translate-y-[-8px]">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                    <div className="absolute top-6 left-6">
                      <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold uppercase tracking-widest">
                        {blog.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-white/30 text-[10px] uppercase font-bold tracking-widest mb-4">
                      <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {blog.readTime}</span>
                      <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> {blog.author.name}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-3">
                      {blog.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-primary text-[10px] font-black uppercase tracking-widest">
                      Read More <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 text-center">
          <button className="px-12 py-5 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
            Load More Articles
          </button>
        </div>
      </div>
    </div>
  );
}
