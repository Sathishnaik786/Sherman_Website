import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface Feature {
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface FeaturesGridProps {
  features: Feature[];
  title?: string;
  subtitle?: string;
}

export function FeaturesGrid({ features, title = "Core Features", subtitle }: FeaturesGridProps) {
  return (
    <section className="py-24 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white">{title}</h2>
          {subtitle && <p className="text-white/40 mt-4 max-w-xl mx-auto">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 rounded-[2.5rem] hover:scale-[1.03] transition-transform duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
