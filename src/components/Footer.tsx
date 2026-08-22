import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-100 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tight text-black mb-6 block">RivoCity</Link>
            <p className="text-neutral-500 text-sm max-w-sm leading-relaxed mb-8">
              RivoCity connects customers, local businesses and delivery partners through one trusted city commerce platform built for local communities.
            </p>
            <div className="flex gap-4">
              <button type="button" disabled className="text-neutral-400 hover:text-black transition-colors duration-200 cursor-not-allowed" aria-label="Instagram (Disabled)"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg></button>
              <button type="button" disabled className="text-neutral-400 hover:text-black transition-colors duration-200 cursor-not-allowed" aria-label="Facebook (Disabled)"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></button>
              <button type="button" disabled className="text-neutral-400 hover:text-black transition-colors duration-200 cursor-not-allowed" aria-label="LinkedIn (Disabled)"><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg></button>
            </div>
          </div>
          <div><h4 className="font-semibold text-xs uppercase tracking-wider text-black mb-6">Navigation</h4><ul className="space-y-4">
            {['Home','Customers','Vendors','Riders','Cities','Pricing','About','Help','Contact'].map((label) => <li key={label}><Link to={label === 'Home' ? '/' : `/${label.toLowerCase()}`} className="text-sm text-neutral-500 hover:text-black transition-colors duration-200">{label}</Link></li>)}
          </ul></div>
          <div><h4 className="font-semibold text-xs uppercase tracking-wider text-black mb-6">Legal</h4><ul className="space-y-4">
            <li><Link to="/legal/terms" className="text-sm text-neutral-500 hover:text-black transition-colors duration-200">Terms & Conditions</Link></li>
            <li><Link to="/legal/privacy" className="text-sm text-neutral-500 hover:text-black transition-colors duration-200">Privacy Policy</Link></li>
            <li><Link to="/legal/refund-policy" className="text-sm text-neutral-500 hover:text-black transition-colors duration-200">Refund & Cancellation</Link></li>
            <li><Link to="/delete-account" className="text-sm text-neutral-500 hover:text-black transition-colors duration-200">Delete Account</Link></li>
          </ul></div>
          <div><h4 className="font-semibold text-xs uppercase tracking-wider text-black mb-6">Contact</h4><ul className="space-y-4"><li><a href="mailto:support@rivocity.com" className="text-sm text-neutral-500 hover:text-black transition-colors duration-200 break-all">support@rivocity.com</a></li></ul></div>
        </div>
        <div className="border-t border-neutral-100 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-400">&copy; 2026 RivoCity. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-neutral-400"><Link to="/legal/privacy" className="hover:text-black transition-colors duration-200">Privacy Policy</Link><Link to="/legal/terms" className="hover:text-black transition-colors duration-200">Terms & Conditions</Link></div>
        </div>
      </div>
    </footer>
  );
};
