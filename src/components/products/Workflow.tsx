import { motion } from 'framer-motion';
import { Database, Cpu, Search, CheckCircle } from 'lucide-react';

const defaultSteps = [
  { title: 'Data Input', desc: 'Secure ingestion of multi-format enterprise data.', icon: Database },
  { title: 'Processing', desc: 'Real-time analysis via proprietary AI engines.', icon: Cpu },
  { title: 'Analysis', desc: 'Deep intelligence extraction and validation.', icon: Search },
  { title: 'Output', desc: 'Actionable reports and automated decisions.', icon: CheckCircle }
];

export function Workflow({ steps = defaultSteps }: { steps?: typeof defaultSteps }) {
  return (
    <section className="py-32 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white">How it Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-white/5 hidden md:block" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center relative z-10"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 border border-white/5 shadow-2xl">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
