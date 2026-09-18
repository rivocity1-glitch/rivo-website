import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const navigation = [
    ['Home', '/'],
    ['Customers', '/customers'],
    ['Vendors', '/vendors'],
    ['Riders', '/riders'],
    ['Cities', '/cities'],
    ['Pricing', '/pricing'],
    ['About', '/about'],
    ['Help', '/help'],
    ['Contact', '/contact'],
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
              RivoCity connects customers, local businesses and delivery partners through one trusted city commerce platform built for local communities.
            </p>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-black">Navigation</h2>
            <ul className="space-y-3">
              {navigation.map(([label, path]) => (
                <li key={label}>
                  <Link to={path} className="text-sm text-neutral-500 transition-colors duration-200 hover:text-black">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-black">Legal</h2>
            <ul className="space-y-3">
              <li><Link to="/legal/terms" className="text-sm text-neutral-500 transition-colors duration-200 hover:text-black">Terms & Conditions</Link></li>
              <li><Link to="/legal/privacy" className="text-sm text-neutral-500 transition-colors duration-200 hover:text-black">Privacy Policy</Link></li>
              <li><Link to="/legal/refund-policy" className="text-sm text-neutral-500 transition-colors duration-200 hover:text-black">Refund & Cancellation</Link></li>
              <li><Link to="/delete-account" className="text-sm text-neutral-500 transition-colors duration-200 hover:text-black">Delete Account</Link></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-5 text-xs font-bold uppercase tracking-[0.16em] text-black">Contact</h2>
            <a href="mailto:support@rivocity.com" className="break-all text-sm text-neutral-500 transition-colors duration-200 hover:text-black">
              support@rivocity.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-neutral-100 pt-7 md:flex-row">
          <p className="text-xs text-neutral-400">&copy; 2026 RivoCity. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-neutral-400">
            <Link to="/legal/privacy" className="transition-colors duration-200 hover:text-black">Privacy Policy</Link>
            <Link to="/legal/terms" className="transition-colors duration-200 hover:text-black">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
