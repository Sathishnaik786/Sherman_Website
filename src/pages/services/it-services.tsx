import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceCards } from '@/components/services/ServiceCards';
import { UseCases } from '@/components/services/UseCases';
import { Process } from '@/components/services/Process';
import { TechStack } from '@/components/services/TechStack';
import { CTA } from '@/components/services/CTA';
import { Database, ShieldCheck, Headphones, Server, Zap, Lock } from 'lucide-react';

const itFeatures = [
  {
    title: 'Managed Services',
    description: '24/7 proactive monitoring and management of your mission-critical IT environment.',
    icon: Headphones
  },
  {
    title: 'Cybersecurity Audit',
    description: 'Advanced threat detection, vulnerability assessments, and compliance hardening.',
    icon: Lock
  },
  {
    title: 'Infrastructure Ops',
    description: 'Optimizing server health, network performance, and storage scalability.',
    icon: Server
  },
  {
    title: 'Disaster Recovery',
    description: 'Zero-loss data backup strategies and automated failover systems.',
    icon: ShieldCheck
  }
];

const itUseCases = [
  {
    title: 'Bank Data Security',
    description: 'Implementing high-security protocols for a national banking network.',
    metric: '99.99%',
    metricLabel: 'Security Uptime'
  },
  {
    title: 'Retail Tech Support',
    description: 'Supporting 500+ outlets with centralized cloud-managed IT services.',
    metric: '15min',
    metricLabel: 'Resolution Time'
  },
  {
    title: 'Health Data Vault',
    description: 'Compliant storage and management of sensitive patient records.',
    metric: 'HIPAA',
    metricLabel: 'Compliant'
  }
];

const itTech = [
  { name: 'Cisco / Juniper', category: 'Networking' },
  { name: 'Splunk / ELK', category: 'Monitoring' },
  { name: 'Fortinet', category: 'Security' },
  { name: 'Terraform', category: 'IaC' },
  { name: 'Docker', category: 'Containers' },
  { name: 'Microsoft 365', category: 'Enterprise' }
];

export default function ITServicesPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ServiceHero 
        title="Enterprise Managed"
        accentTitle="IT Solutions"
        subtitle="Ensuring zero-fail digital operations for global infrastructure and mission-critical systems."
        gradientColor="from-indigo-600"
      />
      <ServiceCards features={itFeatures} />
      <UseCases useCases={itUseCases} />
      <Process />
      <TechStack technologies={itTech} />
      <CTA />
    </div>
  );
}
