import { ProductHero } from '@/components/products/ProductHero';
import { FeaturesGrid } from '@/components/products/FeaturesGrid';
import { UseCases } from '@/components/products/UseCases';
import { Workflow } from '@/components/products/Workflow';
import { Stats } from '@/components/products/Stats';
import { CTA } from '@/components/products/CTA';
import { FileText, ShieldCheck, Map, Calculator, Scale, Gavel } from 'lucide-react';

const features = [
  { title: 'Workflow Automation', desc: 'End-to-end digitization of the land acquisition lifecycle from notification to possession.', icon: FileText },
  { title: 'Compensation Engine', desc: 'Automated valuation and disbursement algorithms ensuring transparency and accuracy.', icon: Calculator },
  { title: 'GIS Integration', desc: 'Real-time spatial mapping and boundary verification for precise land tracking.', icon: Map },
  { title: 'Legal Case Tracking', desc: 'Unified dashboard for monitoring litigation, appeals, and court proceedings.', icon: Gavel },
  { title: 'Stakeholder Portal', desc: 'Secure access for departments, landowners, and legal teams to view real-time status.', icon: ShieldCheck },
  { title: 'Compliance Audit', desc: 'Automated checks against central and state land acquisition acts.', icon: Scale }
];

const useCases = [
  { title: 'National Highway Projects', desc: 'Accelerating land acquisition for multi-state infrastructure corridors.' },
  { title: 'Industrial Development', desc: 'Managing large-scale land pools for SEZs and industrial townships.' }
];

const stats = [
  { value: '45%', label: 'FASTER PROCESSING' },
  { value: '100%', label: 'DATA TRANSPARENCY' },
  { value: '800k+', label: 'ACRES MANAGED' }
];

export default function LandAcquisitionPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ProductHero 
        title="Land"
        subtitle="Acquisition Engine"
        description="The industry standard for government-scale land management, combining legal precision with automated workflows."
      />
      <FeaturesGrid features={features} />
      <UseCases useCases={useCases} />
      <Workflow />
      <Stats stats={stats} />
      <CTA productName="Land Acquisition" />
    </div>
  );
}
