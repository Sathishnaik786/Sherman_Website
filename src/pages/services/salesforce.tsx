import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceCards } from '@/components/services/ServiceCards';
import { UseCases } from '@/components/services/UseCases';
import { Process } from '@/components/services/Process';
import { TechStack } from '@/components/services/TechStack';
import { CTA } from '@/components/services/CTA';
import { Cloud, Target, MessageCircle, BarChart, Settings, Users } from 'lucide-react';

const salesforceFeatures = [
  {
    title: 'Custom Implementations',
    description: 'Tailoring Sales Cloud and Service Cloud to match your unique business workflows.',
    icon: Cloud
  },
  {
    title: 'Lightning Development',
    description: 'Building custom components and apps with Salesforce Lightning Web Components (LWC).',
    icon: Settings
  },
  {
    title: 'CRM Strategy',
    description: 'Designing data architectures that drive customer engagement and lead conversion.',
    icon: Target
  },
  {
    title: 'Integration Services',
    description: 'Connecting Salesforce with your existing ERP, marketing, and legacy systems.',
    icon: Users
  }
];

const salesforceUseCases = [
  {
    title: 'Global Sales Ops',
    description: 'Centralized dashboard for a multi-national sales force across 12 countries.',
    metric: '45%',
    metricLabel: 'Lead Increase'
  },
  {
    title: 'Support Automation',
    description: 'Automated case routing and service bot implementation for 24/7 support.',
    metric: '30%',
    metricLabel: 'Faster Support'
  },
  {
    title: 'Marketing ROI Hub',
    description: 'Attributing sales revenue to specific marketing campaigns for budget optimization.',
    metric: '20%',
    metricLabel: 'ROI Boost'
  }
];

const salesforceTech = [
  { name: 'Apex', category: 'Language' },
  { name: 'LWC', category: 'Framework' },
  { name: 'Einstein AI', category: 'AI' },
  { name: 'MuleSoft', category: 'Integration' },
  { name: 'Marketing Cloud', category: 'Platform' },
  { name: 'Tableau', category: 'Analytics' }
];

export default function SalesforcePage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ServiceHero 
        title="Salesforce Transformation"
        accentTitle="& Excellence"
        subtitle="Maximizing your CRM potential with high-performance customizations and AI-driven insights."
        gradientColor="from-sky-600"
      />
      <ServiceCards features={salesforceFeatures} />
      <UseCases useCases={salesforceUseCases} />
      <Process />
      <TechStack technologies={salesforceTech} />
      <CTA />
    </div>
  );
}
