import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  accentTitle?: string;
  gradientColor?: string;
}

export function ServiceHero({ title, subtitle, accentTitle, gradientColor = "from-primary" }: ServiceHeroProps) {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-pulse`} />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Solutions Engineering</span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
            {title} <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${gradientColor} to-accent`}>
              {accentTitle}
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-white/50 mb-12 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="h-16 px-10 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-2xl">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-3" />
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10 rounded-full text-lg font-bold border-white/10 text-white hover:bg-white/5 backdrop-blur-xl">
              Explore Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
