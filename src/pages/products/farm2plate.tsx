import { ProductHero } from '@/components/products/ProductHero';
import { FeaturesGrid } from '@/components/products/FeaturesGrid';
import { UseCases } from '@/components/products/UseCases';
import { Workflow } from '@/components/products/Workflow';
import { Stats } from '@/components/products/Stats';
import { CTA } from '@/components/products/CTA';
import { Globe, Leaf, Truck, BarChart3, ShieldCheck, ShoppingCart } from 'lucide-react';

const features = [
  { title: 'End-to-End Traceability', desc: 'Tracking every batch from the farmer\'s field to the consumer\'s table.', icon: Globe },
  { title: 'Demand Forecasting', desc: 'AI-driven insights to predict market needs and reduce agricultural waste.', icon: BarChart3 },
  { title: 'Logistics Orchestration', desc: 'Real-time monitoring of cold chains and transport efficiency.', icon: Truck },
  { title: 'Quality Assurance', desc: 'Automated certification and compliance tracking for organic and export standards.', icon: ShieldCheck },
  { title: 'Farmer Marketplace', desc: 'Direct-to-retail platform empowering producers with fair market pricing.', icon: Leaf },
  { title: 'Retail Integration', desc: 'Seamless API connections for supermarkets and e-commerce platforms.', icon: ShoppingCart }
];

const useCases = [
  { title: 'Organic Export Hubs', desc: 'Ensuring global compliance for high-value agricultural exports.' },
  { title: 'National Food Security', desc: 'Managing buffer stocks and public distribution through smart logistics.' }
];

const stats = [
  { value: '30%', label: 'WASTE REDUCTION' },
  { value: '25%', label: 'HIGHER REVENUE' },
  { value: '50k+', label: 'FARMERS ONBOARDED' }
];

export default function Farm2PlatePage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ProductHero 
        title="Farm2Plate"
        subtitle="Agri-Supply Chain"
        description="Revolutionizing global food security with blockchain-backed traceability and intelligent demand forecasting."
        gradient="from-emerald-600"
      />
      <FeaturesGrid features={features} />
      <UseCases useCases={useCases} />
      <Workflow />
      <Stats stats={stats} />
      <CTA productName="Farm2Plate" />
    </div>
  );
}
