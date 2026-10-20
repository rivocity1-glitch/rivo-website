import React from 'react';
import { useLanguage } from '../components/LanguageProvider';
import { LegalLayout } from '../components/LegalLayout';

const Refund: React.FC = () => {
  const { t } = useLanguage();
  return (
  <LegalLayout title="Refund & Cancellation Policy" activePage="refund" lastUpdated="22 August 2026">
    <div className="space-y-10 text-brand-black font-light leading-relaxed text-sm md:text-base">
      <section className="space-y-3"><h3 className="text-xl font-bold">1. Introduction</h3><p>{t('policy.refund.1')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">2. Customer Cancellation</h3><p>{t('policy.refund.2')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">3. Vendor Cancellation</h3><p>{t('policy.refund.3')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">4. Rivo Cancellation</h3><p>{t('policy.refund.4')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">5. Refund Eligibility</h3><p>{t('policy.refund.5')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">6. Non-Refundable Situations</h3><p>{t('policy.refund.6')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">7. Refund Method</h3><p>{t('policy.refund.7')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">8. Refund Processing Time</h3><p>{t('policy.refund.8')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">9. Disputes</h3><p>{t('policy.refund.9')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">10. Contact</h3><p>{t('policy.refund.10')}</p><p className="font-bold text-brand-black bg-[#FAF9FA] border border-neutral-200 rounded-xl p-4 inline-block tracking-tight select-all">support@rivocity.com</p></section>
    </div>
  </LegalLayout>
  );
};

export default Refund;
