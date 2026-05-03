import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceCards } from '@/components/services/ServiceCards';
import { UseCases } from '@/components/services/UseCases';
import { Process } from '@/components/services/Process';
import { TechStack } from '@/components/services/TechStack';
import { CTA } from '@/components/services/CTA';
import { Smartphone, Monitor, Layers, Zap, Code2, Globe } from 'lucide-react';

const webFeatures = [
  {
    title: 'Scalable Platforms',
    description: 'High-performance web applications built for millions of concurrent users.',
    icon: Globe
  },
  {
    title: 'Native Mobile Apps',
    description: 'Premium iOS and Android experiences with high-density UI/UX.',
    icon: Smartphone
  },
  {
    title: 'Progressive Web Apps',
    description: 'Bridging the gap between web and native for seamless offline access.',
    icon: Layers
  },
  {
    title: 'API Engineering',
    description: 'Robust, documented, and secure backends for cross-platform data sync.',
    icon: Code2
  }
];

const webUseCases = [
  {
    title: 'Fintech Mobile Suite',
    description: 'A multi-billion dollar transaction engine with 99.9% uptime.',
    metric: '10M+',
    metricLabel: 'Active Users'
  },
  {
    title: 'Enterprise ERP Web',
    description: 'Real-time supply chain management platform for global logistics.',
    metric: '50ms',
    metricLabel: 'Latency'
  },
  {
    title: 'Educational App',
    description: 'Scalable video-on-demand learning platform for thousands of students.',
    metric: '4.9',
    metricLabel: 'App Rating'
  }
];

const webTech = [
  { name: 'React / Next.js', category: 'Frontend' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Node.js / Bun', category: 'Backend' },
  { name: 'GraphQL', category: 'API' },
  { name: 'Vercel / AWS', category: 'Hosting' },
  { name: 'Tailwind CSS', category: 'Design' }
];

export default function WebMobilityPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ServiceHero 
        title="Scalable Web &"
        accentTitle="Mobile Platforms"
        subtitle="Engineering performance-first digital experiences for the global enterprise market."
        gradientColor="from-emerald-600"
      />
      <ServiceCards features={webFeatures} />
      <UseCases useCases={webUseCases} />
      <Process />
      <TechStack technologies={webTech} />
      <CTA />
    </div>
  );
}
