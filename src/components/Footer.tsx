import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube, Shield } from 'lucide-react';

const solutions = [
  { name: 'Perimeter Intelligence', path: '/solutions#intelligence' },
  { name: 'Structural Defense', path: '/solutions#structural' },
  { name: 'Cyber-Physical Integration', path: '/solutions#integration' },
  { name: 'R&D Lab', path: '/technology' },
];

const industries = [
  { name: 'Data Centers', path: '/industries' },
  { name: 'Critical Energy', path: '/industries' },
  { name: 'Defense', path: '/industries' },
  { name: 'Logistics', path: '/industries' },
];

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Technology', path: '/technology' },
  { name: 'Contact', path: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#020617] text-white border-t border-white/5">
      {/* Main Footer */}
      <div className="luxury-container section-padding pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Shield className="w-8 h-8 text-accent" />
              <h3 className="text-2xl font-black tracking-tighter">XYZ INFRA</h3>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed text-sm">
              Global leaders in next-generation perimeter security infrastructure. Engineering resilience for critical enterprise assets.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Youtube, Facebook, Instagram].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-accent transition-all duration-300 border border-white/5 hover:border-accent hover:-translate-y-1"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-slate-500">Solutions</h4>
            <ul className="space-y-4">
              {solutions.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-slate-400 hover:text-accent transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-slate-500">Industries</h4>
            <ul className="space-y-4">
              {industries.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-slate-400 hover:text-accent transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-8 text-slate-500">Headquarters</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="w-5 h-5 shrink-0 text-accent" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Annapoorna Building, Jayanagar<br />
                  Bengaluru, KA 560011, IN
                </span>
              </li>
              <li>
                <a href="tel:918367447870" className="flex gap-4 text-slate-400 hover:text-accent transition-colors text-sm font-medium">
                  <Phone className="w-5 h-5 shrink-0 text-accent" />
                  +91 8367 447 870
                </a>
              </li>
              <li>
                <a href="mailto:solutions@xyzfencing.com" className="flex gap-4 text-slate-400 hover:text-accent transition-colors text-sm font-medium">
                  <Mail className="w-5 h-5 shrink-0 text-accent" />
                  solutions@xyzinfra.tech
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="luxury-container py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500 font-bold uppercase tracking-widest">
            <p>© {new Date().getFullYear()} XYZ INFRASTRUCTURE SOLUTIONS. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Compliance Specs</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
