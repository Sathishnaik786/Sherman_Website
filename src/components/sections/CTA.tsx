import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Rocket, Send } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-32 bg-[#0B0F19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden border border-white/10"
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-primary/20"
            >
              <Rocket className="w-10 h-10 text-white" />
            </motion.div>

            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
              Let’s Build Your Next <br />
              <span className="text-white/30">Digital Transformation</span>
            </h2>
            
            <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join 800+ successful organizations that have modernized their operations with our mission-critical engineering solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="h-16 px-12 rounded-full text-lg font-bold bg-white text-black hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-2xl">
                Contact Us Now
                <Send className="w-5 h-5 ml-3" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 rounded-full text-lg font-bold border-white/10 text-white hover:bg-white/5 backdrop-blur-xl transition-all">
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Extreme Background Decor */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-accent/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-primary/10 blur-[150px] rounded-full" />
    </section>
  );
}
