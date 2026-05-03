import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

export function CTASection({
  title = "Ready to Deploy Enterprise Security?",
  subtitle = "Our technical engineers are standing by to help you design and deploy a next-generation perimeter infrastructure for your critical assets.",
  primaryCta = "Request Specification",
  secondaryCta = "Technical Whitepaper",
}: CTASectionProps) {
  return (
    <section className="relative py-32 overflow-hidden bg-[#020617]">
      {/* Background with abstract tech patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 luxury-container text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto glass-effect p-12 md:p-20 rounded-[3rem] border-white/5 shadow-2xl"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-2xl mb-8">
            <ShieldCheck className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">{title}</h2>
          <p className="text-lg md:text-xl text-slate-400 mb-12 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact">
              <Button size="lg" className="h-16 px-10 rounded-2xl bg-accent hover:bg-accent/90 text-white font-bold text-lg transition-all hover:scale-105 active:scale-95">
                {primaryCta}
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
            
            <Link to="/technology">
              <Button 
                size="lg" 
                variant="outline" 
                className="h-16 px-10 rounded-2xl border-white/10 text-white hover:bg-white/5 font-bold text-lg transition-all"
              >
                {secondaryCta}
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
