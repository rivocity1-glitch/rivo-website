import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Languages } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: 'nav.home', path: '/' },
  { label: 'nav.apps', path: '/apps' },
  { label: 'nav.vendors', path: '/vendors' },
  { label: 'nav.cities', path: '/cities' },
  { label: 'nav.pricing', path: '/pricing' },
  { label: 'nav.about', path: '/about' },
  { label: 'nav.help', path: '/help' },
  { label: 'nav.contact', path: '/contact' },
];

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let frame = 0;

    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        setScrolled(window.scrollY > 16);
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled
          ? 'border-neutral-200/80 bg-white/95 shadow-[0_8px_30px_-20px_rgba(0,0,0,0.25)]'
          : 'border-transparent bg-white/80'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link
            to="/"
            aria-label="RivoCity home"
            className="group flex items-center gap-2 rounded-full"
          >
            <span className="text-xl font-extrabold tracking-tight text-black transition-transform duration-200 group-hover:-translate-y-px">
              RivoCity
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={t(item.label)}
                  to={item.path}
                  className={`relative rounded-full px-3 py-2 text-xs font-semibold transition-colors duration-200 ${
                    isActive ? 'text-black' : 'text-neutral-600 hover:text-black'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-[#2ECC71]"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <label className="flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-semibold text-neutral-700" aria-label={t('language.label')}>
              <Languages className="h-4 w-4 text-[#2ECC71]" aria-hidden="true" />
              <span className="sr-only">{t('language.label')}</span>
              <select value={language} onChange={(event) => setLanguage(event.target.value as 'en' | 'mr' | 'hi')} className="bg-transparent outline-none" aria-label={t('language.label')}>
                <option value="en">English</option><option value="mr">मराठी</option><option value="hi">हिन्दी</option>
              </select>
            </label>
            <Link
              to="/apps"
              className="rounded-full bg-[#2ECC71] px-5 py-2.5 text-xs font-bold tracking-wide text-black shadow-sm transition-[transform,background-color,box-shadow] duration-200 hover:bg-[#27ae60] hover:shadow-md active:scale-[0.98]"
            >
              {t('nav.getRivoCity')}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="rounded-full p-2 text-black transition-colors duration-200 hover:bg-neutral-100 lg:hidden"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-neutral-100 bg-white/98 lg:hidden"
          >
            <div className="mx-auto max-w-7xl px-5 py-5 sm:px-6">
              <label className="mb-3 flex items-center gap-2 rounded-xl border border-neutral-200 px-4 py-3 text-sm font-semibold text-neutral-700">
                <Languages className="h-4 w-4 text-[#2ECC71]" aria-hidden="true" />
                <span>{t('language.label')}</span>
                <select value={language} onChange={(event) => setLanguage(event.target.value as 'en' | 'mr' | 'hi')} className="ml-auto bg-transparent outline-none">
                  <option value="en">English</option><option value="mr">मराठी</option><option value="hi">हिन्दी</option>
                </select>
              </label>
              <div className="flex flex-col gap-1">
                {navItems.map((item) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <Link
                      key={item.label}
                      to={item.path}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition-colors duration-200 ${
                        isActive
                          ? 'bg-neutral-50 text-black'
                          : 'text-neutral-600 hover:bg-neutral-50 hover:text-black'
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <span className="h-1.5 w-1.5 rounded-full bg-[#2ECC71]" />}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-4 border-t border-neutral-100 pt-4">
                <Link
                  to="/apps"
                  className="block w-full rounded-xl bg-[#2ECC71] px-4 py-3 text-center text-sm font-bold text-black transition-[transform,background-color] duration-200 hover:bg-[#27ae60] active:scale-[0.99]"
                >
                  {t('nav.getRivoCity')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
