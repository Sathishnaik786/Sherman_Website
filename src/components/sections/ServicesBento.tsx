import { motion } from 'framer-motion';
import { Cpu, Cloud, Globe, Smartphone, Shield, BarChart3, ShoppingCart, Database } from 'lucide-react';

const services = [
  {
    title: 'AI & Machine Learning',
    description: 'Transforming data into actionable intelligence with custom neural networks and predictive analytics.',
    icon: Cpu,
    size: 'lg',
    color: 'from-blue-600/20 to-indigo-600/20'
  },
  {
    title: 'E-Governance',
    description: 'Digitizing public services with robust, secure, and transparent governmental platforms.',
    icon: Shield,
    size: 'md',
    color: 'from-purple-600/20 to-pink-600/20'
  },
  {
    title: 'Cloud Modernization',
    description: 'Seamless migration and optimization for scalable enterprise cloud infrastructure.',
    icon: Cloud,
    size: 'sm',
    color: 'from-cyan-600/20 to-blue-600/20'
  },
  {
    title: 'Web & Mobility',
    description: 'Next-gen cross-platform applications with performance-first architecture.',
    icon: Smartphone,
    size: 'sm',
    color: 'from-emerald-600/20 to-teal-600/20'
  },
  {
    title: 'Business Intelligence',
    description: 'Dynamic data visualization and real-time decision support systems.',
    icon: BarChart3,
    size: 'md',
    color: 'from-orange-600/20 to-red-600/20'
  },
  {
    title: 'Enterprise IT Services',
    description: 'Comprehensive 24/7 managed services and infrastructure support.',
    icon: Database,
    size: 'sm',
    color: 'from-indigo-600/20 to-blue-600/20'
  },
  {
    title: 'Salesforce Excellence',
    description: 'Optimizing CRM workflows with custom Lightning components and integrations.',
    icon: Globe,
    size: 'sm',
    color: 'from-sky-600/20 to-blue-600/20'
  },
  {
    title: 'E-Commerce Engines',
    description: 'Scalable digital storefronts designed for high conversion and security.',
    icon: ShoppingCart,
    size: 'sm',
    color: 'from-pink-600/20 to-rose-600/20'
  }
];

export function ServicesBento() {
  return (
    <section id="services" className="py-32 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-xs"
          >
            Capabilities
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mt-4"
          >
            Digital Ecosystem <span className="text-white/30">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`glass-card p-8 rounded-[2rem] flex flex-col justify-between group ${
                service.size === 'lg' ? 'md:col-span-2 md:row-span-2' : 
                service.size === 'md' ? 'md:col-span-2' : ''
              }`}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              {service.size === 'lg' && (
                <div className="mt-8 pt-8 border-t border-white/5">
                  <div className="flex flex-wrap gap-3">
                    {['Neural Networks', 'Predictive Analysis', 'NLP', 'Computer Vision'].map(tag => (
                      <span key={tag} className="px-4 py-1.5 rounded-full bg-white/5 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
