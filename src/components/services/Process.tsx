import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket } from 'lucide-react';

const steps = [
  { title: 'Analyze', description: 'Deep dive into your operations to identify optimization opportunities.', icon: Search },
  { title: 'Design', description: 'Architecting scalable systems with a focus on UX and security.', icon: PenTool },
  { title: 'Develop', description: 'Engineering the solution using cutting-edge enterprise stacks.', icon: Code2 },
  { title: 'Deploy', description: 'Seamless integration and 24/7 performance monitoring.', icon: Rocket }
];

export function Process() {
  return (
    <section className="py-32 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black text-white">How it Works</h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">Our four-stage engineering methodology ensures precision delivery and long-term scalability.</p>
        </div>
        
        <div className="relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-white/5 shadow-2xl relative">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-background rounded-full border border-white/5 flex items-center justify-center text-xs font-black text-primary">
                    0{i + 1}
                  </div>
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed px-4">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
