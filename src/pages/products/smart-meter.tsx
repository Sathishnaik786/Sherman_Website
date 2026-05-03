import { ProductHero } from '@/components/products/ProductHero';
import { FeaturesGrid } from '@/components/products/FeaturesGrid';
import { UseCases } from '@/components/products/UseCases';
import { Workflow } from '@/components/products/Workflow';
import { Stats } from '@/components/products/Stats';
import { CTA } from '@/components/products/CTA';
import { Zap, Activity, CreditCard, ShieldCheck, Database, Smartphone } from 'lucide-react';

const features = [
  { title: 'Real-time Monitoring', desc: 'Live consumption tracking for electricity, water, and gas utilities.', icon: Activity },
  { title: 'Automated Billing', desc: 'Precision billing engines that eliminate human error and delay.', icon: CreditCard },
  { title: 'Leakage Detection', desc: 'Instant alerts for unusual consumption patterns or grid inefficiencies.', icon: Zap },
  { title: 'Remote Control', desc: 'Ability to toggle or limit supply based on payments or emergency triggers.', icon: ShieldCheck },
  { title: 'Data Analytics', desc: 'Aggregated insights into peak usage and grid performance.', icon: Database },
  { title: 'Consumer App', desc: 'Intuitive mobile interface for users to track usage and pay bills.', icon: Smartphone }
];

const useCases = [
  { title: 'Urban Utility Grids', desc: 'Modernizing legacy meters in high-density residential zones.' },
  { title: 'Industrial Clusters', desc: 'Managing heavy-load energy consumption for manufacturing units.' }
];

const stats = [
  { value: '15%', label: 'GRID EFFICIENCY' },
  { value: '0.01%', label: 'BILLING ERROR' },
  { value: '2M+', label: 'METERS CONNECTED' }
];

export default function SmartMeterPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ProductHero 
        title="Smart Meter"
        subtitle="Utility Intel"
        description="Empowering utility providers with real-time data ingestion and zero-delay automated billing systems."
        gradient="from-yellow-600"
      />
      <FeaturesGrid features={features} />
      <UseCases useCases={useCases} />
      <Workflow />
      <Stats stats={stats} />
      <CTA productName="Smart Meter" />
    </div>
  );
}
