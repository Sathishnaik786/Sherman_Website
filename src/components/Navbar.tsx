import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logos/logo.jpeg';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Industries', path: '/industries' },
  { name: 'Technology', path: '/technology' },
  { name: 'Projects', path: '/projects' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/80 backdrop-blur-xl shadow-2xl border-b border-border/50 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="luxury-container">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Shield className={`w-8 h-8 transition-colors ${isScrolled ? 'text-accent' : 'text-white'}`} />
              <div className={`text-2xl font-black tracking-tighter transition-colors ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}>
                XYZ INFRA
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs font-bold uppercase tracking-[0.2em] transition-all hover:text-accent ${
                    isScrolled ? 'text-foreground/70' : 'text-white/80'
                  } ${location.pathname === link.path ? 'text-accent' : ''}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA & Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <Link to="/contact" className="hidden md:block">
                <Button 
                  size="sm"
                  className={`rounded-full px-6 font-bold uppercase tracking-widest text-[10px] h-10 ${
                    !isScrolled 
                      ? 'bg-white text-black hover:bg-accent hover:text-white' 
                      : 'bg-accent hover:bg-accent/90 text-white'
                  }`}
                >
                  Get Spec
                </Button>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div 
              className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-80 bg-background shadow-2xl max-w-[calc(100%-3rem)] sm:max-w-[calc(100%-6rem)]"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-4 sm:px-6">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className={`block py-3 px-4 text-lg font-medium rounded-lg transition-colors ${
                          location.pathname === link.path 
                            ? 'bg-primary text-primary-foreground' 
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="mt-auto">
                  <Link to="/contact">
                    <Button className="w-full" size="lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Get Free Quote
                    </Button>
                  </Link>
                  
                  <a 
                    href="tel:918367447870" 
                    className="flex items-center justify-center gap-2 mt-4 text-muted-foreground hover:text-foreground"
                  >
                    <Phone className="w-4 h-4" />
                    +918367447870
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
