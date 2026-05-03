import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Cpu, Shield, Globe, Database, Cloud, ShoppingCart, Settings, Zap, MapPin, Mail, Phone, Clock, ChevronRight, FileText, Target, Users, Layout, Smartphone, Network, BarChart3, Rocket } from 'lucide-react';

interface MegaMenuProps {
  type: 'company' | 'services' | 'solutions' | 'technologies' | 'contact' | null;
  isOpen: boolean;
}

const menuData = {
  company: {
    categories: [
      {
        id: 'overview',
        name: 'The Company',
        items: [
          { title: 'About Us', desc: 'Our mission and legacy.', path: '/about', icon: Users },
          { title: 'Leadership', desc: 'Meet our visionaries.', path: '/about', icon: Target },
          { title: 'Success Stories', desc: '800+ projects delivered.', path: '/projects', icon: FileText }
        ],
        preview: {
          title: '25 Years of Trust',
          desc: 'Delivering excellence in e-governance and digital innovation since 1999.',
          image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&auto=format'
        }
      }
    ]
  },
  services: {
    categories: [
      { 
        id: 'tech', 
        name: 'Technical Services', 
        items: [
          { title: 'AI & ML', desc: 'Advanced neural networks.', path: '/services/ai-ml', icon: Cpu },
          { title: 'Cloud & Modernization', desc: 'Infrastructure scaling.', path: '/services/cloud-modernization', icon: Cloud },
          { title: 'Web & Mobility', desc: 'High-performance platforms.', path: '/services/web-mobility', icon: Smartphone },
          { title: 'IT Services', desc: 'Managed operations.', path: '/services/it-services', icon: Database }
        ],
        preview: {
          title: 'Digital Resilience',
          desc: 'Building robust digital ecosystems for the global enterprise market.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&auto=format'
        }
      },
      { 
        id: 'enterprise', 
        name: 'Enterprise Solutions', 
        items: [
          { title: 'E-Governance', desc: 'Secure public services.', path: '/services/e-governance', icon: Shield },
          { title: 'Salesforce Implementation', desc: 'CRM excellence.', path: '/services/salesforce', icon: Settings },
          { title: 'E-Commerce', desc: 'High-conversion stores.', path: '/services/ecommerce', icon: ShoppingCart }
        ],
        preview: {
          title: 'Outcome Driven',
          desc: 'Transforming business processes with intelligent automation and data.',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format'
        }
      }
    ]
  },
  solutions: {
    categories: [
      {
        id: 'products',
        name: 'Products & Assets',
        items: [
          { title: 'Land Acquisition', desc: 'Centralized land management.', path: '/solutions/land-acquisition', icon: Layout },
          { title: 'Farm2Plate', desc: 'Agri-supply chain tracking.', path: '/solutions/farm2plate', icon: Globe },
          { title: 'Infracon', desc: 'Infrastructure monitoring.', path: '/solutions/infracon', icon: Network },
          { title: 'Smart Meter', desc: 'Utility data analytics.', path: '/solutions/smart-meter', icon: Zap },
          { title: 'OWC', desc: 'Waste compliance portal.', path: '/solutions/owc', icon: Shield },
          { title: 'TAMRA', desc: 'Mining transparency hub.', path: '/solutions/tamra', icon: BarChart3 },
          { title: 'Bogo Ninja', desc: 'Digital rewards engine.', path: '/solutions/bogo-ninja', icon: Rocket }
        ],
        preview: {
          title: 'Proprietary Engines',
          desc: 'Field-tested solutions architected for high-stakes industry challenges.',
          image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&auto=format'
        }
      }
    ]
  },
  technologies: {
    categories: [
      {
        id: 'stack',
        name: 'Innovation Stack',
        items: [
          { title: 'Full Stack', desc: 'Next.js, Node.js, Python.', path: '/technology', icon: Cpu },
          { title: 'Cloud Native', desc: 'AWS, Azure, GCP.', path: '/technology', icon: Cloud },
          { title: 'Data & AI', desc: 'TensorFlow, OpenAI, SQL.', path: '/technology', icon: Database }
        ],
        preview: {
          title: 'Modern Stack',
          desc: 'Leveraging cutting-edge technologies to build scalable enterprise futures.',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format'
        }
      }
    ]
  },
  contact: {
    categories: [
      {
        id: 'connect',
        name: 'Get in Touch',
        items: [
          { title: 'General Inquiries', desc: 'Connect with our team.', path: '/contact', icon: Mail },
          { title: 'Business Strategy', desc: 'Consult with architects.', path: '/contact', icon: Target },
          { title: 'Global Offices', desc: 'Find our locations.', path: '/contact', icon: MapPin }
        ],
        preview: {
          title: 'Start Innovating',
          desc: 'Ready to modernize your operations? Our consultants are standing by.',
          image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=400&auto=format'
        }
      }
    ]
  }
};

export function MegaMenu({ type, isOpen }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<any>(null);

  useEffect(() => {
    if (type && menuData[type]) {
      setActiveCategory(menuData[type].categories[0]);
    }
  }, [type]);

  if (!isOpen || !type || !activeCategory) return null;

  const currentData = menuData[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.98 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="absolute top-full left-0 right-0 mt-4 mx-auto max-w-7xl px-6 z-[60]"
    >
      <div className="glass rounded-[3rem] border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.6)] overflow-hidden flex min-h-[450px]">
        <div className="grid grid-cols-12 w-full">
          
          {/* LEFT: Categories */}
          <div className="col-span-3 border-r border-white/5 bg-white/[0.02] p-8">
            <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30 mb-8 px-4">Sections</h3>
            <div className="space-y-2">
              {currentData.categories.map((cat: any) => (
                <button
                  key={cat.id}
                  onMouseEnter={() => setActiveCategory(cat)}
                  className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group ${
                    activeCategory.id === cat.id 
                      ? 'bg-primary/20 text-white border border-primary/20 shadow-[0_0_20px_rgba(37,99,235,0.1)]' 
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="text-sm font-bold">{cat.name}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform ${activeCategory.id === cat.id ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                </button>
              ))}
            </div>
          </div>

          {/* CENTER: Items */}
          <div className="col-span-5 p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 gap-2"
              >
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-black text-white/30 mb-4 px-2">Featured</h3>
                {activeCategory.items.map((item: any) => (
                  <Link
                    key={item.title}
                    to={item.path}
                    className="flex items-center gap-5 p-3 rounded-2xl bg-white/[0.01] border border-transparent hover:border-white/10 hover:bg-white/[0.05] transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-0.5">{item.title}</h4>
                      <p className="text-white/40 text-[11px]">{item.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT: Preview */}
          <div className="col-span-4 relative overflow-hidden group/preview">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <img 
                  src={activeCategory.preview.image} 
                  alt={activeCategory.preview.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover/preview:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-[#0B0F19]/60 to-transparent" />
                <div className="absolute bottom-0 p-10">
                  <h4 className="text-2xl font-black text-white mb-3 leading-tight">{activeCategory.preview.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    {activeCategory.preview.desc}
                  </p>
                  <button className="flex items-center gap-2 text-primary text-[10px] uppercase tracking-widest font-black group/btn">
                    View Case Study <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </motion.div>
  );
}
