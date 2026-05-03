import { useState } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';
import { ProjectCard } from '@/components/ProjectCard';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Data Centers', 'Energy', 'Defense', 'Transport'];

const projects = [
  { 
    title: 'Hyperscale Data Center', 
    category: 'Data Centers', 
    location: 'Mumbai Tech Corridor', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010911182e?w=800&auto=format' 
  },
  { 
    title: 'Nuclear Power Station', 
    category: 'Energy', 
    location: 'Tamil Nadu', 
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format' 
  },
  { 
    title: 'Strategic Air Base', 
    category: 'Defense', 
    location: 'Border Region', 
    image: 'https://images.unsplash.com/photo-1533421680516-f616d8c5ad05?w=800&auto=format' 
  },
  { 
    title: 'International Cargo Hub', 
    category: 'Transport', 
    location: 'Navi Mumbai', 
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format' 
  },
  { 
    title: 'Solar Megawatt Park', 
    category: 'Energy', 
    location: 'Rajasthan', 
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&auto=format' 
  },
  { 
    title: 'Maritime Port Authority', 
    category: 'Transport', 
    location: 'Gujarat Coast', 
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?w=800&auto=format' 
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="bg-background pt-32">
      <section className="pb-20">
        <div className="luxury-container text-center">
          <AnimatedSection>
            <span className="text-accent font-bold tracking-[0.2em] uppercase text-xs">Deployment History</span>
            <h1 className="mt-6 mb-8 text-6xl md:text-7xl font-black">Strategic <br /> <span className="text-accent">Infrastructure</span></h1>
            <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
              A record of our high-integrity security deployments across the most critical industrial and national assets.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="section-padding">
        <div className="luxury-container">
          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <Button 
                key={cat} 
                className={`rounded-full px-8 py-6 text-sm font-bold uppercase tracking-widest transition-all ${
                  filter === cat ? 'bg-accent text-white scale-105 shadow-xl' : 'bg-secondary/50 text-muted-foreground hover:bg-secondary'
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filtered.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <div className="group relative bg-card border border-border rounded-[2rem] overflow-hidden hover:shadow-2xl transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-8">
                    <div className="text-accent text-xs font-black uppercase tracking-widest mb-2">{project.category}</div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                    <div className="text-muted-foreground text-sm flex items-center gap-2">
                      <div className="w-1 h-1 bg-muted-foreground rounded-full" />
                      {project.location}
                    </div>
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
