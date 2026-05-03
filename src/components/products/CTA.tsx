import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Send, Calendar } from 'lucide-react';

interface CTAProps {
  productName: string;
}

export function CTA({ productName }: CTAProps) {
  return (
    <section className="py-32 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/20 blur-[150px] rounded-full" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
              Transform Your Operations <br />
              <span className="text-white/30">With {productName}</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join leading government departments and global enterprises in digitizing mission-critical workflows with our proven engines.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="h-16 px-12 rounded-full text-lg font-bold bg-white text-black hover:bg-white/90 shadow-2xl transition-all">
                Contact Sales
                <Send className="w-5 h-5 ml-3" />
              </Button>
              <Button variant="outline" size="lg" className="h-16 px-12 rounded-full text-lg font-bold border-white/10 text-white hover:bg-white/5 backdrop-blur-xl transition-all">
                <Calendar className="w-5 h-5 mr-3" />
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
