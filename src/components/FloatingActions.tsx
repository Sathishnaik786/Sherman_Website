import { useState, useEffect } from 'react';
import { ChevronUp, PhoneCall, Mail } from 'lucide-react';

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Left Side - Scroll to Top */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed left-6 bottom-6 w-14 h-14 bg-background border border-border text-foreground rounded-2xl shadow-2xl flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-500 z-50 glass-effect"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}

      {/* Right Side - Support and Call */}
      <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
        {/* Call Button */}
        <a
          href="tel:918367447870"
          className="w-14 h-14 bg-accent text-white rounded-2xl shadow-[0_0_20px_rgba(59,130,246,0.3)] flex items-center justify-center hover:scale-110 transition-all duration-300"
          aria-label="Call Expert"
        >
          <PhoneCall className="w-6 h-6" />
        </a>
        
        {/* Email/Support Button */}
        <a
          href="mailto:solutions@xyzinfra.tech"
          className="w-14 h-14 bg-slate-900 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 border border-white/10"
          aria-label="Email Spec"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}