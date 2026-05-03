import { ServiceHero } from '@/components/services/ServiceHero';
import { ServiceCards } from '@/components/services/ServiceCards';
import { UseCases } from '@/components/services/UseCases';
import { Process } from '@/components/services/Process';
import { TechStack } from '@/components/services/TechStack';
import { CTA } from '@/components/services/CTA';
import { ShoppingCart, CreditCard, Box, Zap, Lock, BarChart } from 'lucide-react';

const ecommerceFeatures = [
  {
    title: 'Custom Storefronts',
    description: 'High-performance digital shops designed for conversion and brand impact.',
    icon: ShoppingCart
  },
  {
    title: 'Payment Integration',
    description: 'Secure, multi-currency payment gateway integration with fraud protection.',
    icon: CreditCard
  },
  {
    title: 'Inventory Systems',
    description: 'Real-time stock management and warehouse synchronization for omnichannel retail.',
    icon: Box
  },
  {
    title: 'Conversion Audit',
    description: 'Data-driven UI/UX optimizations to maximize sales and reduce cart abandonment.',
    icon: Zap
  }
];

const ecommerceUseCases = [
  {
    title: 'Luxury Retail Hub',
    description: 'A global fashion platform handling peak sale loads without performance degradation.',
    metric: '120%',
    metricLabel: 'Sales Growth'
  },
  {
    title: 'B2B Wholesale Portal',
    description: 'Custom bulk ordering and pricing logic for industrial distribution.',
    metric: '500k+',
    metricLabel: 'Monthly Orders'
  },
  {
    title: 'Subscription Engine',
    description: 'Automated recurring billing and box delivery management for a health brand.',
    metric: '95%',
    metricLabel: 'Retention'
  }
];

const ecommerceTech = [
  { name: 'Shopify Plus', category: 'Platform' },
  { name: 'Magento / Adobe', category: 'Platform' },
  { name: 'Stripe', category: 'Payments' },
  { name: 'ElasticSearch', category: 'Search' },
  { name: 'Cloudflare', category: 'CDN' },
  { name: 'Redis', category: 'Caching' }
];

export default function EcommercePage() {
  return (
    <div className="bg-[#0B0F19] min-h-screen">
      <ServiceHero 
        title="High-Performance"
        accentTitle="E-Commerce Engines"
        subtitle="Building the future of digital retail with scalable, secure, and conversion-optimized storefronts."
        gradientColor="from-pink-600"
      />
      <ServiceCards features={ecommerceFeatures} />
      <UseCases useCases={ecommerceUseCases} />
      <Process />
      <TechStack technologies={ecommerceTech} />
      <CTA />
    </div>
  );
}
