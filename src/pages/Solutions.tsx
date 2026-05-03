import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';
import { Shield, Lock, Activity, Eye, Zap, Layers } from 'lucide-react';

const solutions = [
  {
    title: 'High-Security Structural Barriers',
    description: 'Engineered physical perimeters designed for data centers, military installations, and critical utilities. Features anti-climb, anti-cut mesh and high-tensile reinforcement.',
    icon: Shield,
    features: ['Anti-Climb Design', 'Impact Resistance', 'Corrosion Protection'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format'
  },
  {
    title: 'Electronic Sensory Arrays',
    description: 'Fiber-optic vibration sensors and intelligent cable systems that detect breach attempts before they occur. Fully integrated with centralized security platforms.',
    icon: Activity,
    features: ['Real-time Detection', 'Zero False Alarms', 'Sub-metre Accuracy'],
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format'
  },
  {
    title: 'Autonomous Monitoring Hubs',
    description: 'Self-sustaining, solar-powered monitoring stations equipped with thermal imaging and AI-driven behavior analysis.',
    icon: Eye,
    features: ['Solar Powered', 'AI Analysis', 'Thermal Imaging'],
    image: 'https://images.unsplash.com/photo-1557597774-9d2739f85a76?w=800&auto=format'
  }
];

export default function Solutions() {
  return (
    <div className="bg-background pt-32">
      <section className="pb-20">
        <div className="luxury-container text-center">
          <AnimatedSection>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Enterprise Solutions</span>
            <h1 className="mt-6 mb-8 text-6xl md:text-7xl">Advanced Perimeter <br /> <span className="text-accent">Infrastructure</span></h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              Our solutions bridge the gap between physical durability and digital intelligence, providing a unified defense for high-value assets.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="section-padding">
        <div className="luxury-container">
          <div className="space-y-32">
            {solutions.map((solution, i) => (
              <AnimatedSection key={solution.title} direction={i % 2 === 0 ? 'left' : 'right'} className="grid lg:grid-cols-2 gap-16 items-center">
                <div className={i % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}>
                  <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                    <solution.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6">{solution.title}</h2>
                  <p className="text-muted-foreground text-lg mb-8 leading-relaxed">{solution.description}</p>
                  <ul className="grid grid-cols-2 gap-4">
                    {solution.features.map(feature => (
                      <li key={feature} className="flex items-center gap-3 text-sm font-bold text-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={i % 2 === 0 ? 'order-2' : 'order-1'}>
                  <div className="relative rounded-[2rem] overflow-hidden group shadow-2xl">
                    <img src={solution.image} alt={solution.title} className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
                  </div>
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
