import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Globe, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617]">
      {/* Background with abstract gradients and mesh */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/30 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      <div className="relative z-10 luxury-container pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 glass-effect rounded-full px-5 py-2 mb-10 border-white/10"
          >
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">Next-Gen Perimeter Security</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95]"
          >
            Enterprise <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald">Infrastructure</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-2xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Securing critical assets with intelligent structural barriers and real-time sensory data. The new standard for global perimeter defense.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center"
          >
            <Link to="/contact">
              <Button size="lg" className="rounded-full px-10 h-16 text-lg bg-accent hover:bg-accent/90 text-white shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                Deploy Solution
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
            <Link to="/solutions">
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full px-10 h-16 text-lg border-white/20 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Technical Spec
              </Button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-24 pt-12 border-t border-white/5"
          >
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Deployments</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">Global</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Certification</div>
            </div>
            <div className="hidden md:flex flex-col items-center">
              <div className="text-3xl font-bold text-white mb-1">ISO 27001</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">Compliance</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
