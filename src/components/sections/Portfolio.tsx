import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const solutions = [
  {
    title: 'Land Acquisition System',
    category: 'Government Tech',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&auto=format',
    description: 'A comprehensive GIS-integrated platform for national land management and valuation.'
  },
  {
    title: 'Infracon',
    category: 'Infrastructure',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800&auto=format',
    description: 'Cloud-based resource management for large-scale infrastructure and construction firms.'
  },
  {
    title: 'Farm2Plate',
    category: 'Agri-Tech',
    image: 'https://images.unsplash.com/photo-1523348830342-d0187cf0c28d?w=800&auto=format',
    description: 'Supply chain transparency solution connecting farmers directly to global markets.'
  },
  {
    title: 'TAMRA',
    category: 'Resource Management',
    image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&auto=format',
    description: 'Real-time monitoring system for mineral resources and mining compliance.'
  },
  {
    title: 'Smart Metering',
    category: 'Energy',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&auto=format',
    description: 'IoT-driven utility monitoring with automated billing and leakage detection.'
  },
  {
    title: 'OWC Platform',
    category: 'Logistics',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format',
    description: 'Integrated logistics hub for ocean, rail, and road freight synchronization.'
  }
];

export function Portfolio() {
  return (
    <section id="solutions" className="py-32 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs">Proprietary Assets</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4">
              Strategic <span className="text-white/30">Solutions</span>
            </h2>
          </div>
          <motion.button 
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs group"
          >
            Explore Full Portfolio <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl"
            >
              {/* Image */}
              <img 
                src={solution.image} 
                alt={solution.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-x-0 bottom-0 p-10 translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-primary font-bold uppercase tracking-widest text-[10px] mb-4">
                  {solution.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {solution.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {solution.description}
                </p>
                <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs">
                  View Case Study <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
