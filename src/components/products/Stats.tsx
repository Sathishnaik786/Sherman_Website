import { motion } from 'framer-motion';

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats: Stat[];
}

export function Stats({ stats }: StatsProps) {
  return (
    <section className="py-24 bg-[#0B0F19]/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="text-center p-12 glass rounded-[3rem]"
            >
              <div className="text-5xl md:text-7xl font-black text-primary mb-4 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-[0.3em] font-bold text-white/30">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
