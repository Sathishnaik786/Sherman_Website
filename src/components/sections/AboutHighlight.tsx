import { motion } from 'framer-motion';
import { CheckCircle2, History, Target, Users2 } from 'lucide-react';

const features = [
  {
    title: '25+ Years of Legacy',
    description: 'A quarter-century of pioneering technical solutions since the dawn of the internet era.',
    icon: History
  },
  {
    title: '800+ Global Projects',
    description: 'An extensive portfolio of mission-critical deployments for state and enterprise.',
    icon: Target
  },
  {
    title: 'Government Trusted',
    description: 'Preferred technology partner for major Indian ministries and national infrastructure.',
    icon: CheckCircle2
  },
  {
    title: 'Elite Tech Talent',
    description: 'A global team of 200+ engineers, data scientists, and creative strategists.',
    icon: Users2
  }
];

export function AboutHighlight() {
  return (
    <section className="py-32 bg-[#0B0F19] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs">Our Legacy</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-8 leading-[1.1]">
              Engineered for <br />
              <span className="text-white/30">Reliability & Scale</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-10 max-w-xl">
              Akiko Sherman Infotech isn't just a technology firm; we are the architects of digital resilience. We specialize in building complex systems that power nations and industries.
            </p>
            
            <div className="space-y-6">
              {['ISO 9001:2015 Certified Operations', 'Military-Grade Security Protocols', 'Agile Product Lifecycle Management'].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-white font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-[2.5rem]"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
