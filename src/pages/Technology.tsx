import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';
import { Cpu, Shield, Zap, Globe, Database, Network } from 'lucide-react';

const techSpecs = [
  {
    title: 'Distributed Fiber Sensing',
    description: 'Our proprietary sensory arrays use light-based vibration analysis to detect intrusion attempts over kilometres of perimeter with pinpoint accuracy.',
    icon: Network,
  },
  {
    title: 'AI Threat Classification',
    description: 'Edge-computing modules that filter environmental noise from actual threats, reducing false alarms by up to 98%.',
    icon: Cpu,
  },
  {
    title: 'Solar Energy Management',
    description: 'Intelligent power distribution systems that ensure security infrastructure remains active even in remote, off-grid locations.',
    icon: Zap,
  },
  {
    title: 'Cloud Integration Layer',
    description: 'Unified dashboard for global site monitoring, providing real-time telemetry and predictive maintenance alerts.',
    icon: Database,
  }
];

export default function Technology() {
  return (
    <div className="bg-background pt-32">
      <section className="pb-20">
        <div className="luxury-container text-center">
          <AnimatedSection>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Innovation Stack</span>
            <h1 className="mt-6 mb-8 text-6xl md:text-7xl">The Science of <br /> <span className="text-accent">Defense</span></h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              We integrate deep tech into every layer of our physical infrastructure, transforming static barriers into intelligent security networks.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Tech Grid */}
      <section className="section-padding">
        <div className="luxury-container">
          <div className="grid md:grid-cols-2 gap-8">
            {techSpecs.map((tech, i) => (
              <AnimatedSection key={tech.title} delay={i * 0.1}>
                <div className="glass-effect p-10 rounded-[2.5rem] border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-500 h-full">
                  <div className="flex gap-8">
                    <div className="bg-accent/10 w-20 h-20 rounded-[1.5rem] flex items-center justify-center shrink-0">
                      <tech.icon className="w-10 h-10 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{tech.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* R&D Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="luxury-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Continuous <br /> Research & Development</h2>
              <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
                Our labs are constantly testing new materials and sensors against evolving threat vectors. From ballistic-resistant alloys to quantum-secured communication links, we stay ahead of the curve.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/40 font-bold">Patents Filed</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">Global</div>
                  <div className="text-xs uppercase tracking-widest text-primary-foreground/40 font-bold">R&D Hubs</div>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format" alt="R&D Lab" className="w-full aspect-square object-cover" />
                <div className="absolute inset-0 bg-accent/20 mix-blend-overlay" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
