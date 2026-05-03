import { ProductHero } from '@/components/products/ProductHero';
import { FeaturesGrid } from '@/components/products/FeaturesGrid';
import { UseCases } from '@/components/products/UseCases';
import { Workflow } from '@/components/products/Workflow';
import { Stats } from '@/components/products/Stats';
import { CTA } from '@/components/products/CTA';
import { Recycle, ClipboardList, Layout, BarChart, ShieldAlert, Globe } from 'lucide-react';

const features = [
  { title: 'Compliance Tracking', desc: 'Real-time monitoring of waste management vs. regulatory standards.', icon: ClipboardList },
  { title: 'Digital Reporting', desc: 'Automated generation of environmental impact and compliance certificates.', icon: BarChart },
  { title: 'Live Dashboards', desc: 'Command center views for waste processing plants and municipal bodies.', icon: Layout },
  { title: 'Violation Alerts', desc: 'Instant notifications when processing parameters deviate from safety norms.', icon: ShieldAlert },
  { title: 'Asset Tracking', desc: 'Monitoring of waste collection vehicles and processing machinery.', icon: Recycle },
  { title: 'Global Standards', desc: 'Pre-configured templates for international environmental certifications.', icon: Globe }
];

const useCases = [
  { title: 'Municipal Waste', desc: 'Standardizing compliance for city-wide waste processing centers.' },
  { title: 'Industrial Effluents', desc: 'Tracking chemical and industrial waste discharge for safety audits.' }
];

const stats = [
  { value: '100%', label: 'COMPLIANCE RATE' },
  { value: '40%', label: 'LESS LANDFILL' },
  { value: '500+', label: 'PLANTS MONITORED' }
];

export default function OWCPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ProductHero 
        title="OWC"
        subtitle="Waste Compliance"
        description="The mission-critical portal for environmental monitoring and regulatory waste compliance tracking."
        gradient="from-cyan-600"
      />
      <FeaturesGrid features={features} />
      <UseCases useCases={useCases} />
      <Workflow />
      <Stats stats={stats} />
      <CTA productName="OWC" />
    </div>
  );
}
