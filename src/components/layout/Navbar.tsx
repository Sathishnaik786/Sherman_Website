import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MegaMenu } from './MegaMenu';
import { Overlay } from './Overlay';

type MenuType = 'company' | 'services' | 'solutions' | 'technologies' | 'contact' | null;

const navLinks: { name: string; path: string; type: MenuType }[] = [
  { name: 'Home', path: '/', type: null },
  { name: 'The Company', path: '/about', type: 'company' },
  { name: 'Services', path: '/services', type: 'services' },
  { name: 'Products & Solutions', path: '/solutions', type: 'solutions' },
  { name: 'Technologies', path: '/technology', type: 'technologies' },
  { name: 'Blog', path: '/blog', type: null },
  { name: 'Contact', path: '/contact', type: 'contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<MenuType>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (type: MenuType) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (type) setActiveMenu(type);
    else setActiveMenu(null);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  return (
    <>
      <Overlay isVisible={activeMenu !== null} onClose={() => setActiveMenu(null)} />
      
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        onMouseLeave={handleMouseLeave}
        className={`fixed top-0 left-0 right-0 z-[50] transition-all duration-500 ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass rounded-full px-10 py-3 flex items-center justify-between transition-all duration-500 ${
            isScrolled || activeMenu ? 'shadow-2xl border-white/10' : 'border-transparent'
          }`}>
            {/* Logo */}
            <Link to="/" className="flex items-center group" onMouseEnter={() => handleMouseEnter(null)}>
              <img 
                src="/akiko-sherman-logo.png" 
                alt="Akiko Sherman Infotech" 
                className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div 
                  key={link.name} 
                  className="relative px-4 py-2"
                  onMouseEnter={() => handleMouseEnter(link.type)}
                >
                  <Link
                    to={link.path}
                    className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${
                      location.pathname === link.path || activeMenu === link.type 
                        ? 'text-primary' 
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center">
              <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 shadow-[0_0_20px_rgba(37,99,235,0.3)] font-bold uppercase tracking-widest text-[10px]">
                Get Quote
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
          
          <AnimatePresence mode="wait">
            {activeMenu && (
              <MegaMenu 
                key={activeMenu} 
                type={activeMenu} 
                isOpen={activeMenu !== null} 
              />
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden glass mx-6 mt-4 rounded-3xl overflow-hidden border border-white/10"
            >
              <div className="p-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg font-bold text-white/70 hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="border-white/10" />
                <Button className="w-full bg-primary py-6 rounded-2xl font-bold">Get Quote</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
