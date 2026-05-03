import { ProductHero } from '@/components/products/ProductHero';
import { FeaturesGrid } from '@/components/products/FeaturesGrid';
import { UseCases } from '@/components/products/UseCases';
import { Workflow } from '@/components/products/Workflow';
import { Stats } from '@/components/products/Stats';
import { CTA } from '@/components/products/CTA';
import { HardHat, Layout, ClipboardCheck, Users, Briefcase, FileSearch } from 'lucide-react';

const features = [
  { title: 'Project Management', desc: 'Centralized tracking of infrastructure projects from planning to execution.', icon: Layout },
  { title: 'Vendor Evaluation', desc: 'Data-backed performance rating and selection of contractors and consultants.', icon: Users },
  { title: 'Tender Automation', desc: 'Streamlining the bid submission, evaluation, and award lifecycle.', icon: Briefcase },
  { title: 'Budget Oversight', desc: 'Real-time monitoring of financial outlays vs. physical progress.', icon: ClipboardCheck },
  { title: 'Quality Audits', desc: 'Digital field reports and automated verification of construction standards.', icon: FileSearch },
  { title: 'Resource Tracking', desc: 'Monitoring manpower and equipment utilization across multiple sites.', icon: HardHat }
];

const useCases = [
  { title: 'Smart City Infrastructure', desc: 'Managing multi-vendor developments in urban modernization projects.' },
  { title: 'Public Works Dept', desc: 'Standardizing project delivery across regional engineering divisions.' }
];

const stats = [
  { value: '20%', label: 'COST SAVINGS' },
  { value: '95%', label: 'PROJECT UPTIME' },
  { value: '1.2k+', label: 'VENDORS RATED' }
];

export default function InfraconPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ProductHero 
        title="Infracon"
        subtitle="Infrastructure Hub"
        description="The unified operating system for infrastructure development, vendor management, and digital tendering."
        gradient="from-orange-600"
      />
      <FeaturesGrid features={features} />
      <UseCases useCases={useCases} />
      <Workflow />
      <Stats stats={stats} />
      <CTA productName="Infracon" />
    </div>
  );
}
