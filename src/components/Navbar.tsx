import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ toggleTheme, isDark }: { toggleTheme: () => void, isDark: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shrink-0 w-full relative z-50 transition-all duration-300">
      <div className="w-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-semibold tracking-tighter flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-gold-600 to-gold-400 block box-glow" />
          <span className="text-glow">AuraNest</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-text-secondary hover:text-gold-400 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={toggleTheme} className="p-2 text-text-secondary hover:text-gold-400 transition-colors rounded-full hover:bg-gold-400/10">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <a href="#contact" className="px-6 py-2.5 rounded-full bg-gold-400 bg-opacity-10 text-gold-400 border border-gold-400/20 hover:bg-gold-400 hover:text-dark-900 transition-all text-sm font-medium">
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button onClick={toggleTheme} className="p-2 text-text-secondary">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setMobileMenuOpen(true)} className="text-text-primary">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-bg-primary z-50 p-6 flex flex-col"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-semibold text-glow">AuraNest</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-text-primary">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col gap-6 text-lg">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className="text-text-secondary hover:text-gold-400">
                  {link.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-gold-400 mt-4">
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
