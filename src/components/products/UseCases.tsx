import { motion } from 'framer-motion';

interface UseCase {
  title: string;
  desc: string;
}

interface UseCasesProps {
  useCases: UseCase[];
}

export function UseCases({ useCases }: UseCasesProps) {
  return (
    <section className="py-24 bg-[#0B0F19]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Sector Impact</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4">Industry Use Cases</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
              <p className="text-white/40 leading-relaxed">
                {useCase.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
