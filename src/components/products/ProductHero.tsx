import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

interface ProductHeroProps {
  title: string;
  subtitle: string;
  description: string;
  gradient?: string;
}

export function ProductHero({ title, subtitle, description, gradient = "from-primary" }: ProductHeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]`} />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Proprietary Solution</span>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            {title} <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradient} to-accent`}>
              {subtitle}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="h-16 px-10 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-2xl">
              Request Live Demo
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10 rounded-full text-lg font-bold border-white/10 text-white hover:bg-white/5 backdrop-blur-xl">
              Explore Solutions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
