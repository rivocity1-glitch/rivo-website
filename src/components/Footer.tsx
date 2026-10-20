import React from 'react';
import { useLanguage } from './LanguageProvider';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const navigation = [
    ['nav.home', '/'],
    ['footer.customers', '/customers'],
    ['nav.vendors', '/vendors'],
    ['footer.riders', '/riders'],
    ['nav.cities', '/cities'],
    ['nav.pricing', '/pricing'],
    ['nav.about', '/about'],
    ['nav.help', '/help'],
    ['nav.contact', '/contact'],
  ] as const;

  return (
    <footer className="mt-auto border-t border-neutral-100 bg-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block text-2xl font-extrabold tracking-tight text-black transition-transform duration-200 hover:-translate-y-px">
              RivoCity
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">
              {t('footer.tagline')}
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-black">{t('footer.navigation')}</h2>
            <ul className="space-y-3">
              {navigation.map(([label, path]) => (
                <li key={label}>
                  <Link to={path} className="text-sm text-neutral-500 transition-colors duration-200 hover:text-black">
                    {t(label)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-black">{t('footer.legal')}</h2>
            <ul className="space-y-3">
              <li><Link to="/legal/terms" className="text-sm text-neutral-500 transition-colors duration-200 hover:text-black">{t('footer.terms')}</Link></li>
              <li><Link to="/legal/privacy" className="text-sm text-neutral-500 transition-colors duration-200 hover:text-black">{t('footer.privacy')}</Link></li>
              <li><Link to="/legal/refund-policy" className="text-sm text-neutral-500 transition-colors duration-200 hover:text-black">{t('footer.refund')}</Link></li>
              <li><Link to="/delete-account" className="text-sm text-neutral-500 transition-colors duration-200 hover:text-black">{t('footer.delete')}</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-black">{t('footer.contact')}</h2>
            <a href="mailto:support@rivocity.com" className="break-all text-sm text-neutral-500 transition-colors duration-200 hover:text-black">
              support@rivocity.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-100 pt-7 md:flex-row">
          <p className="text-xs text-neutral-400">&copy; 2026 RivoCity. {t('footer.rights')}</p>
          <div className="flex gap-6 text-xs text-neutral-400">
            <Link to="/legal/privacy" className="transition-colors duration-200 hover:text-black">{t('footer.privacy')}</Link>
            <Link to="/legal/terms" className="transition-colors duration-200 hover:text-black">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
