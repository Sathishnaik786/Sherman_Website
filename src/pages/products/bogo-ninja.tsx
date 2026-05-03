import { ProductHero } from '@/components/products/ProductHero';
import { FeaturesGrid } from '@/components/products/FeaturesGrid';
import { UseCases } from '@/components/products/UseCases';
import { Workflow } from '@/components/products/Workflow';
import { Stats } from '@/components/products/Stats';
import { CTA } from '@/components/products/CTA';
import { Utensils, Zap, Users, Gift, ShoppingBag, Bell } from 'lucide-react';

const features = [
  { title: 'Real-time Offers', desc: 'Dynamic "Buy One Get One" deals that trigger based on peak hours and inventory.', icon: Zap },
  { title: 'Customer Engagement', desc: 'Gamified loyalty rewards and personalized dining recommendations.', icon: Users },
  { title: 'Partner Dashboard', desc: 'Comprehensive control center for restaurants to manage menus and deals.', icon: Utensils },
  { title: 'Instant Notifications', desc: 'Geo-fenced alerts that notify users of nearby deals in real-time.', icon: Bell },
  { title: 'Seamless Redemption', desc: 'Digital voucher system ensuring zero-friction checkouts at the venue.', icon: Gift },
  { title: 'Spend Analytics', desc: 'Aggregated insights into user dining patterns and average transaction value.', icon: ShoppingBag }
];

const useCases = [
  { title: 'Urban Food Districts', desc: 'Driving footfall to local restaurant clusters during off-peak hours.' },
  { title: 'National Food Chains', desc: 'Managing centralized loyalty and promotional campaigns at scale.' }
];

const stats = [
  { value: '40%', label: 'FOOTFALL INCREASE' },
  { value: '25%', label: 'AVERAGE BILL UP' },
  { value: '1M+', label: 'DEALS REDEEMED' }
];

export default function BogoNinjaPage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ProductHero 
        title="Bogo Ninja"
        subtitle="Dining Innovation"
        description="The ultimate user engagement platform connecting food enthusiasts with real-time restaurant innovation."
        gradient="from-rose-600"
      />
      <FeaturesGrid features={features} />
      <UseCases useCases={useCases} />
      <Workflow />
      <Stats stats={stats} />
      <CTA productName="Bogo Ninja" />
    </div>
  );
}
