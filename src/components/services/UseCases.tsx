import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/GlassCard';

interface UseCase {
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

interface UseCasesProps {
  useCases: UseCase[];
}

export function UseCases({ useCases }: UseCasesProps) {
  return (
    <section className="py-24 bg-[#0B0F19]/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Real World Impact</span>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-4">Proven Use Cases</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((useCase, i) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full border-white/5">
                <h3 className="text-2xl font-bold text-white mb-4">{useCase.title}</h3>
                <p className="text-white/40 mb-8 leading-relaxed">
                  {useCase.description}
                </p>
                {useCase.metric && (
                  <div className="pt-6 border-t border-white/5">
                    <div className="text-3xl font-black text-primary">{useCase.metric}</div>
                    <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{useCase.metricLabel}</div>
                  </div>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
