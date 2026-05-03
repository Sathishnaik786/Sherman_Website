import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceCards } from '@/components/services/ServiceCards';
import { UseCases } from '@/components/services/UseCases';
import { Process } from '@/components/services/Process';
import { TechStack } from '@/components/services/TechStack';
import { CTA } from '@/components/services/CTA';
import { Cloud, Server, Shield, Zap, Database, Layers } from 'lucide-react';

const cloudFeatures = [
  {
    title: 'Cloud Migration',
    description: 'Safe and efficient transition of legacy on-premise workloads to modern cloud environments.',
    icon: Cloud
  },
  {
    title: 'Serverless Arch',
    description: 'Highly scalable, pay-as-you-go infrastructure for modern microservices.',
    icon: Zap
  },
  {
    title: 'Cloud Security',
    description: 'Zero-trust architecture with identity management and persistent threat monitoring.',
    icon: Shield
  },
  {
    title: 'Cost Optimization',
    description: 'Analyzing and refining cloud resources to eliminate waste and maximize efficiency.',
    icon: Database
  }
];

const cloudUseCases = [
  {
    title: 'Legacy FinTech Migration',
    description: 'Moving a 20-year-old banking backend to AWS with zero downtime.',
    metric: '40%',
    metricLabel: 'Cost Saved'
  },
  {
    title: 'Auto-Scaling Media Hub',
    description: 'Handling 10x traffic spikes for a national news outlet during peak events.',
    metric: '100%',
    metricLabel: 'Availability'
  },
  {
    title: 'Gov Data Lake',
    description: 'Centralized cloud storage for multi-departmental records and AI processing.',
    metric: 'Petabytes',
    metricLabel: 'Data Managed'
  }
];

const cloudTech = [
  { name: 'AWS', category: 'Infrastructure' },
  { name: 'Google Cloud', category: 'Infrastructure' },
  { name: 'Azure', category: 'Infrastructure' },
  { name: 'Terraform', category: 'IaC' },
  { name: 'Kubernetes', category: 'Orchestration' },
  { name: 'Docker', category: 'Containers' }
];

export default function CloudModernizationPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ServiceHero 
        title="Enterprise Cloud"
        accentTitle="Modernization"
        subtitle="Future-proofing your infrastructure with scalable, secure, and cost-efficient cloud engineering."
        gradientColor="from-cyan-600"
      />
      <ServiceCards features={cloudFeatures} />
      <UseCases useCases={cloudUseCases} />
      <Process />
      <TechStack technologies={cloudTech} />
      <CTA />
    </div>
  );
}
