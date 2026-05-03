import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const blogs = [
  {
    title: 'The Future of AI in E-Governance',
    preview: 'Exploring how machine learning models are streamlining public service delivery across South Asia.',
    date: 'Oct 12, 2025',
    author: 'Dr. S. K. Sharma',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format'
  },
  {
    title: 'Cloud Security in Mission-Critical Systems',
    preview: 'Best practices for architecting resilient cloud infrastructure for national security agencies.',
    date: 'Sep 28, 2025',
    author: 'A. Malhotra',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&auto=format'
  },
  {
    title: 'Blockchain: The New Trust Layer for Agri-Tech',
    preview: 'How our Farm2Plate initiative uses distributed ledgers to eliminate supply chain friction.',
    date: 'Sep 15, 2025',
    author: 'V. Reddy',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&auto=format'
  }
];

export function Blogs() {
  return (
    <section className="py-32 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Knowledge Base</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4">
              Insights & <span className="text-white/30">Innovation</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.div
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card group rounded-[2rem] overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-10 flex flex-col flex-1">
                <div className="flex items-center gap-6 mb-6 text-[10px] uppercase tracking-widest font-bold text-white/30">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3 text-accent" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3 text-accent" />
                    {blog.author}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors leading-tight">
                  {blog.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8 flex-1">
                  {blog.preview}
                </p>
                <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] group/btn">
                  Read Article <ArrowRight className="w-4 h-4 text-accent group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
