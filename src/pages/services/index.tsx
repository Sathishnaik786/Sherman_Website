import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BentoGrid, BentoCard } from '@/components/ui/GlassCard';
import { Cpu, Shield, Cloud, Smartphone, BarChart3, Database, Globe, ShoppingCart, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    description: 'Transforming data into actionable intelligence with custom neural networks and predictive analytics.',
    icon: Cpu,
    size: 'lg',
    color: 'from-blue-600/20 to-indigo-600/20'
  },
  {
    id: 'e-governance',
    title: 'E-Governance',
    description: 'Digitizing public services with robust, secure, and transparent governmental platforms.',
    icon: Shield,
    size: 'md',
    color: 'from-purple-600/20 to-pink-600/20'
  },
  {
    id: 'cloud-modernization',
    title: 'Cloud Modernization',
    description: 'Scalable enterprise cloud infrastructure migration and optimization.',
    icon: Cloud,
    size: 'md',
    color: 'from-cyan-600/20 to-blue-600/20'
  },
  {
    id: 'web-mobility',
    title: 'Web & Mobility',
    description: 'Scalable web and mobile platforms with performance-first architecture.',
    icon: Smartphone,
    size: 'sm',
    color: 'from-emerald-600/20 to-teal-600/20'
  },
  {
    id: 'it-services',
    title: 'Enterprise IT Services',
    description: 'Comprehensive 24/7 managed services and infrastructure support.',
    icon: Database,
    size: 'sm',
    color: 'from-indigo-600/20 to-blue-600/20'
  },
  {
    id: 'salesforce',
    title: 'Salesforce Excellence',
    description: 'Optimizing CRM workflows with custom Lightning components.',
    icon: Globe,
    size: 'sm',
    color: 'from-sky-600/20 to-blue-600/20'
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Engines',
    description: 'High-conversion digital storefronts built for scale and security.',
    icon: ShoppingCart,
    size: 'sm',
    color: 'from-pink-600/20 to-rose-600/20'
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-[0.3em] uppercase text-xs"
          >
            Digital Ecosystem
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-white mt-4 tracking-tighter"
          >
            Our <span className="text-white/30">Services</span>
          </motion.h1>
        </div>

        <BentoGrid>
          {services.map((service, i) => (
            <BentoCard 
              key={service.id} 
              size={service.size as 'sm' | 'md' | 'lg'}
              className="cursor-pointer group"
            >
              <Link to={`/services/${service.id}`} className="block h-full">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm mb-8">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px]">
                  Explore Solutions <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </BentoCard>
          ))}
        </BentoGrid>
      </div>
    </div>
  );
}
