import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 md:px-6 py-2 mb-8 md:mb-10 border-white/10 mx-auto"
        >
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.15em] md:tracking-[0.3em] text-white/80 whitespace-nowrap">
            Innovation Excellence Since 1999
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1] md:leading-[0.9]"
        >
          Transforming Enterprises <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-accent">
            with AI & Digital Innovation
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white/50 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Powering 800+ mission-critical projects over 25 years. Trusted by global government ministries and enterprise leaders to architect the digital future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button size="lg" className="h-16 px-10 rounded-full text-lg font-bold bg-primary hover:bg-primary/90 text-white shadow-[0_0_30px_rgba(37,99,235,0.4)] transition-all hover:scale-105">
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
          <Button variant="outline" size="lg" className="h-16 px-10 rounded-full text-lg font-bold border-white/10 text-white hover:bg-white/5 backdrop-blur-xl">
            <Play className="w-5 h-5 mr-3 fill-white" />
            Explore Solutions
          </Button>
        </motion.div>

        {/* Metrics/Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-white/5"
        >
          {[
            { label: 'Success Projects', value: '800+' },
            { label: 'Years Experience', value: '25+' },
            { label: 'Global Clients', value: '150+' },
            { label: 'Tech Experts', value: '200+' }
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-white/30 font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
