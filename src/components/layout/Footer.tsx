import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#0B0F19] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src="/akiko-sherman-logo.png" 
                alt="Akiko Sherman Infotech" 
                className="h-10 w-auto object-contain" 
              />
            </Link>
            <p className="text-white/50 text-xs leading-relaxed max-w-[200px]">
              An independent division of the Sherman Group with 25+ years of expertise. Delivering 800+ mission-critical IT projects globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1.5 left-0 w-6 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {['Home', 'Company', 'Technologies', 'Contact', 'Blogs'].map(link => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase()}`} className="text-white/50 hover:text-primary transition-colors text-xs font-medium">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-white text-sm font-bold mb-6 relative inline-block">
              Our Services
              <span className="absolute -bottom-1.5 left-0 w-6 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {[
                'AI & ML',
                'E-Governance',
                'Web & Mobility',
                'IT Services',
                'E-Commerce',
                'Salesforce'
              ].map(service => (
                <li key={service}>
                  <Link to="/services" className="text-white/50 hover:text-primary transition-colors text-xs font-medium">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Solutions */}
          <div>
            <h4 className="text-white text-sm font-bold mb-6 relative inline-block">
              Our Solutions
              <span className="absolute -bottom-1.5 left-0 w-6 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-3">
              {[
                'Farm2Plate',
                'Infracon',
                'Land Acquisition',
                'TAMRA',
                'OWC',
                'Smart Meter'
              ].map(solution => (
                <li key={solution}>
                  <Link to="/solutions" className="text-white/50 hover:text-primary transition-colors text-xs font-medium">
                    {solution}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="text-white text-sm font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1.5 left-0 w-6 h-0.5 bg-primary"></span>
            </h4>
            <ul className="space-y-5">
              <li className="flex gap-2.5 items-start">
                <Mail className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <a href="mailto:info@shermanindia.com" className="text-white/50 hover:text-white transition-colors text-[11px] break-all">
                  info@shermanindia.com
                </a>
              </li>
              <li className="flex gap-2.5 items-start">
                <Phone className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                <div className="text-white/50 text-[11px] space-y-1">
                  <p>+91-8851599751,</p>
                  <p>+91-9319008126,</p>
                  <p>+91-9319008129</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-[10px] uppercase tracking-widest font-medium">
            © {new Date().getFullYear()} Akiko Sherman Infotech.
          </p>
          <div className="flex gap-6 text-white/30 text-[10px] uppercase tracking-widest font-medium">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
