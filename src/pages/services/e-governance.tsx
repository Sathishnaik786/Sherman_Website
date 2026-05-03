import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceCards } from '@/components/services/ServiceCards';
import { UseCases } from '@/components/services/UseCases';
import { Process } from '@/components/services/Process';
import { TechStack } from '@/components/services/TechStack';
import { CTA } from '@/components/services/CTA';
import { ShieldCheck, FileText, Globe, Users, Database, Landmark } from 'lucide-react';

const govFeatures = [
  {
    title: 'Citizen Portals',
    description: 'Unified digital gateways for public service delivery and government communication.',
    icon: Globe
  },
  {
    title: 'Digital Approvals',
    description: 'End-to-end paperless workflow management with cryptographic signatures.',
    icon: FileText
  },
  {
    title: 'Secure Infrastructure',
    description: 'Mission-critical database architecture with high-level encryption and redundancy.',
    icon: ShieldCheck
  },
  {
    title: 'Public Data Analytics',
    description: 'Empowering policy decisions through real-time demographic and operational insights.',
    icon: Database
  }
];

const govUseCases = [
  {
    title: 'Municipal Licensing',
    description: 'Automated permit issuance system for urban governance.',
    metric: '80%',
    metricLabel: 'Less Paperwork'
  },
  {
    title: 'Smart City Data',
    description: 'Centralized command center for traffic and utility management.',
    metric: '40%',
    metricLabel: 'Efficiency Gain'
  },
  {
    title: 'Direct Benefit Transfer',
    description: 'Secure payment gateway for government subsidy distribution.',
    metric: '0%',
    metricLabel: 'Leakage Rate'
  }
];

const govTech = [
  { name: 'Java Spring', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'React', category: 'Frontend' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'ElasticSearch', category: 'Search' },
  { name: 'Blockchain', category: 'Security' }
];

export default function EGovernancePage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ServiceHero 
        title="Next-Generation"
        accentTitle="E-Governance Systems"
        subtitle="Transforming public administration through transparent, secure, and accessible digital infrastructure."
        gradientColor="from-purple-600"
      />
      <ServiceCards features={govFeatures} />
      <UseCases useCases={govUseCases} />
      <Process />
      <TechStack technologies={govTech} />
      <CTA />
    </div>
  );
}
