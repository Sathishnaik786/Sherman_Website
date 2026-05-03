import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import FloatingActions from '@/components/FloatingActions';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Solutions from './pages/Solutions';
import Industries from './pages/Industries';
import Technology from './pages/Technology';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

// Services Pages
import ServicesIndex from './pages/services/index';
import AIMLPage from './pages/services/ai-ml';
import EGovernancePage from './pages/services/e-governance';
import WebMobilityPage from './pages/services/web-mobility';
import ITServicesPage from './pages/services/it-services';
import SalesforcePage from './pages/services/salesforce';
import EcommercePage from './pages/services/ecommerce';
import CloudModernizationPage from './pages/services/cloud-modernization';

// Product Pages
import LandAcquisitionPage from './pages/products/land-acquisition';
import Farm2PlatePage from './pages/products/farm2plate';
import InfraconPage from './pages/products/infracon';
import SmartMeterPage from './pages/products/smart-meter';
import OWCPage from './pages/products/owc';
import TAMRAPage from './pages/products/tamra';
import BogoNinjaPage from './pages/products/bogo-ninja';

// Blog Pages
import BlogListing from './pages/blog/index';
import BlogDetail from './pages/blog/BlogDetail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0B0F19] text-foreground font-sans">
        <ScrollToTop />
        <Navbar />
        <main className="overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Services Routes */}
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/ai-ml" element={<AIMLPage />} />
            <Route path="/services/e-governance" element={<EGovernancePage />} />
            <Route path="/services/web-mobility" element={<WebMobilityPage />} />
            <Route path="/services/it-services" element={<ITServicesPage />} />
            <Route path="/services/salesforce" element={<SalesforcePage />} />
            <Route path="/services/ecommerce" element={<EcommercePage />} />
            <Route path="/services/cloud-modernization" element={<CloudModernizationPage />} />
            
            {/* Products & Solutions Routes */}
            <Route path="/solutions/land-acquisition" element={<LandAcquisitionPage />} />
            <Route path="/solutions/farm2plate" element={<Farm2PlatePage />} />
            <Route path="/solutions/infracon" element={<InfraconPage />} />
            <Route path="/solutions/smart-meter" element={<SmartMeterPage />} />
            <Route path="/solutions/owc" element={<OWCPage />} />
            <Route path="/solutions/tamra" element={<TAMRAPage />} />
            <Route path="/solutions/bogo-ninja" element={<BogoNinjaPage />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogListing />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </Router>
  );
}
