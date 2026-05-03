import { motion } from 'framer-motion';

interface Tech {
  name: string;
  category: string;
}

interface TechStackProps {
  technologies: Tech[];
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <section className="py-24 bg-[#0B0F19]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-white">Innovation Stack</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.05)' }}
              className="px-8 py-6 glass rounded-2xl border border-white/5 flex flex-col items-center min-w-[160px] group transition-all"
            >
              <div className="text-white/40 text-[10px] uppercase tracking-widest font-bold mb-2 group-hover:text-primary transition-colors">{tech.category}</div>
              <div className="text-white font-bold">{tech.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
