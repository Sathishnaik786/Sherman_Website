import { ProductHero } from '@/components/products/ProductHero';
import { FeaturesGrid } from '@/components/products/FeaturesGrid';
import { UseCases } from '@/components/products/UseCases';
import { Workflow } from '@/components/products/Workflow';
import { Stats } from '@/components/products/Stats';
import { CTA } from '@/components/products/CTA';
import { Diamond, FileCheck, Layers, MapPin, Search, ShieldCheck } from 'lucide-react';

const features = [
  { title: 'Clearance Tracking', desc: 'Real-time monitoring of statutory clearances for mining operations.', icon: FileCheck },
  { title: 'Resource Mapping', desc: 'GIS-driven spatial intelligence for mineral asset management.', icon: MapPin },
  { title: 'Workflow Visibility', desc: 'Transparent view of application status across multiple government tiers.', icon: Layers },
  { title: 'Regulatory Compliance', desc: 'Automated verification against mining acts and environmental laws.', icon: ShieldCheck },
  { title: 'Field Audits', desc: 'Digital logs for on-site inspections and mineral extraction verification.', icon: Search },
  { title: 'Economic Analysis', desc: 'Predictive modeling for mineral yield and royalty projections.', icon: Diamond }
];

const useCases = [
  { title: 'State Mining Dept', desc: 'Centralizing lease management and clearance workflows for an entire state.' },
  { title: 'Mineral Export Hubs', desc: 'Ensuring transparency in resource extraction for international trade.' }
];

const stats = [
  { value: '60%', label: 'FASTER CLEARANCE' },
  { value: '100%', label: 'LEGAL TRACE' },
  { value: '10k+', label: 'MINES TRACKED' }
];

export default function TAMRAPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ProductHero 
        title="TAMRA"
        subtitle="Mining & Minerals"
        description="Providing ultimate transparency and resource governance for the global mining and mineral sector."
        gradient="from-amber-700"
      />
      <FeaturesGrid features={features} />
      <UseCases useCases={useCases} />
      <Workflow />
      <Stats stats={stats} />
      <CTA productName="TAMRA" />
    </div>
  );
}
