import { Hero } from '@/components/sections/Hero';
import { ServicesBento } from '@/components/sections/ServicesBento';
import { AboutHighlight } from '@/components/sections/AboutHighlight';
import { Portfolio } from '@/components/sections/Portfolio';
import { Clients } from '@/components/sections/Clients';
import { Blogs } from '@/components/sections/Blogs';
import { CTA } from '@/components/sections/CTA';

export default function AkikoHome() {
  return (
    <div className="min-h-screen bg-[#0B0F19] selection:bg-primary/30">
      <main>
        <Hero />
        <ServicesBento />
        <AboutHighlight />
        <Portfolio />
        <Clients />
        <Blogs />
        <CTA />
      </main>
    </div>
  );
}
