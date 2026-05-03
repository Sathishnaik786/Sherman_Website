import { AnimatedSection } from '@/components/AnimatedSection';
import { CTASection } from '@/components/CTASection';
import { Factory, Zap, Server, ShieldCheck, Landmark, Plane } from 'lucide-react';

const industries = [
  {
    title: 'Data & Tech Centers',
    description: 'Securing the backbone of the digital economy with multi-layered physical and electronic defense systems.',
    icon: Server,
    image: 'https://images.unsplash.com/photo-1558494949-ef010911182e?w=800&auto=format'
  },
  {
    title: 'Critical Energy Infrastructure',
    description: 'Protecting power plants, solar farms, and utility grids from unauthorized access and physical threats.',
    icon: Zap,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format'
  },
  {
    title: 'Logistics & Distribution',
    description: 'High-throughput perimeter solutions for massive warehouse complexes and regional distribution hubs.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format'
  },
  {
    title: 'Government & Defense',
    description: 'Specialized high-security infrastructure meeting the most stringent national security requirements.',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1533421680516-f616d8c5ad05?w=800&auto=format'
  },
  {
    title: 'Aviation & Transport',
    description: 'Extensive perimeter protection for airports, rail yards, and maritime port facilities.',
    icon: Plane,
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?w=800&auto=format'
  },
  {
    title: 'Institutional Estates',
    description: 'Discreet but powerful security solutions for large corporate campuses and educational institutions.',
    icon: Landmark,
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format'
  }
];

export default function Industries() {
  return (
    <div className="bg-background pt-32">
      <section className="pb-20">
        <div className="luxury-container text-center">
          <AnimatedSection>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Sector Expertise</span>
            <h1 className="mt-6 mb-8 text-6xl md:text-7xl">Mission Critical <br /> <span className="text-accent">Protection</span></h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              We provide industry-specific security architecture tailored to the unique risk profiles of different global sectors.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding bg-secondary/20">
        <div className="luxury-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, i) => (
              <AnimatedSection key={industry.title} delay={i * 0.1}>
                <div className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img src={industry.image} alt={industry.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <div className="bg-accent/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-500">
                      <industry.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
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
