import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';
import { Shield, Globe, Award, Target, Users, Zap } from 'lucide-react';

const values = [
  { title: 'Reliability', description: 'Zero-fail infrastructure for high-stakes environments.', icon: Shield },
  { title: 'Global Vision', description: 'Deploying security standards that transcend borders.', icon: Globe },
  { title: 'Innovation', description: 'Pioneering the fusion of physical and digital defense.', icon: Zap },
  { title: 'Integrity', description: 'Transparent engineering and honest partnerships.', icon: Award }
];

export default function About() {
  return (
    <div className="bg-background pt-32">
      {/* Hero Section */}
      <section className="pb-20">
        <div className="luxury-container">
          <div className="max-w-4xl">
            <AnimatedSection>
              <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Our Mission</span>
              <h1 className="mt-6 mb-8 text-6xl md:text-8xl font-black leading-[0.9]">Architecting Secure <span className="text-accent">Boundaries.</span></h1>
              <p className="text-muted-foreground text-2xl leading-relaxed">
                We are a global leader in high-performance perimeter security infrastructure. For over two decades, we have been the trusted partner for governments, tech giants, and critical industry players.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-secondary/30">
        <div className="luxury-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format" alt="Enterprise Building" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <h2 className="text-4xl font-bold mb-8">A Legacy of <br /> Engineering Excellence</h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Founded on the principles of structural integrity and forward-thinking engineering, we have evolved from a specialized fencing contractor into a comprehensive security infrastructure firm.
              </p>
              <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
                Today, we operate at the intersection of material science and digital technology, ensuring that our perimeters do more than just stand—they sense, react, and protect.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl"><Target className="w-6 h-6 text-accent" /></div>
                  <span className="font-bold">Precision Driven</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-accent/10 p-3 rounded-xl"><Users className="w-6 h-6 text-accent" /></div>
                  <span className="font-bold">Expert Led</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="section-padding">
        <div className="luxury-container">
          <AnimatedSection className="text-center mb-20">
            <h2 className="text-4xl font-bold">The Core Values That <br /> Drive Our Operations</h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="p-10 bg-card border border-border rounded-3xl hover:border-accent transition-colors duration-500 group h-full">
                  <value.icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
