import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Customers', path: '/customers' },
  { label: 'Vendors', path: '/vendors' },
  { label: 'Riders', path: '/riders' },
  { label: 'Cities', path: '/cities' },
  { label: 'Pricing', path: '/pricing' },
  { label: 'About', path: '/about' },
  { label: 'Help', path: '/help' },
  { label: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleDownloadAppClick = () => {
    setShowToast(true);
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/80 backdrop-blur-md ${
          scrolled ? 'shadow-sm border-b border-neutral-100' : 'border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className="text-xl font-bold tracking-tight text-black transition-colors duration-200">
                Rivo<span className="text-[#2ECC71]">.City</span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={`relative px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                      isActive ? 'text-black' : 'text-neutral-600 hover:text-black'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#2ECC71] rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Active Download Button */}
            <div className="hidden md:flex items-center">
              <button
                type="button"
                onClick={handleDownloadAppClick}
                className="px-5 py-2.5 rounded-full bg-[#2ECC71] text-white hover:bg-[#27ae60] active:scale-95 transition-all duration-200 text-xs font-semibold tracking-wide shadow-sm"
              >
                Download App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 rounded-full text-black hover:bg-neutral-50 md:hidden transition-colors duration-200"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="border-b border-neutral-100 bg-white md:hidden overflow-hidden"
            >
              <div className="px-6 py-6 flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center justify-between ${
                        isActive
                          ? 'text-black bg-neutral-50 font-semibold'
                          : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#2ECC71]" />}
                    </Link>
                  );
                })}
                <div className="pt-4 px-4 border-t border-neutral-100 mt-2">
                  <button
                    type="button"
                    onClick={handleDownloadAppClick}
                    className="w-full py-3 rounded-xl bg-[#2ECC71] text-white hover:bg-[#27ae60] active:scale-95 transition-all duration-200 font-semibold text-center text-sm shadow-sm"
                  >
                    Download App
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Lightweight Premium Animated Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95, x: '-50%' }}
            animate={{ opacity: 1, y: 0, scale: 1, x: '-50%' }}
            exit={{ opacity: 0, y: 20, scale: 0.95, x: '-50%' }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-8 left-1/2 z-50 flex items-center gap-2.5 px-5 py-3.5 bg-neutral-900 text-white rounded-2xl shadow-xl shadow-black/10 border border-neutral-800"
          >
            <Sparkles className="w-4 h-4 text-[#2ECC71] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide">
              Rivo apps are launching soon.
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;