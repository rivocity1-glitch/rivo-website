import React from 'react';
import { useLanguage } from '../components/LanguageProvider';
import { LegalLayout } from '../components/LegalLayout';

const Terms: React.FC = () => {
  const { t } = useLanguage();
  return (
  <LegalLayout title="Terms & Conditions" activePage="terms" lastUpdated="22 August 2026">
    <div className="space-y-10 text-brand-black font-light leading-relaxed text-sm md:text-base">
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading1')}</h3><p>{t('legal.terms.1')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading2')}</h3><p>{t('legal.terms.2')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading3')}</h3><p>{t('legal.terms.3')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading4')}</h3><p>{t('legal.terms.4')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading5')}</h3><p>{t('legal.terms.5a')}</p><p>{t('legal.terms.5b')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading6')}</h3><p>{t('legal.terms.6a')}</p><p>{t('legal.terms.6b')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading7')}</h3><p>{t('legal.terms.7a')}</p><p>{t('legal.terms.7b')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading8')}</h3><p>{t('legal.terms.8')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading9')}</h3><p>{t('legal.terms.9')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading10')}</h3><p>{t('legal.terms.10')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading11')}</h3><p>{t('legal.terms.11')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading12')}</h3><p>{t('legal.terms.12')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading13')}</h3><p>{t('legal.terms.13')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading14')}</h3><p>{t('legal.terms.14')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading15')}</h3><p>{t('legal.terms.15')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading16')}</h3><p>{t('legal.terms.16')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading17')}</h3><p>{t('legal.terms.17')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading18')}</h3><p>{t('legal.terms.18')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">{t('legal.terms.heading19')}</h3><p>{t('legal.terms.19')}</p><p className="font-bold text-brand-black bg-[#FAF9FA] border border-neutral-200 rounded-xl p-4 inline-block tracking-tight select-all">support@rivocity.com</p></section>
    </div>
  </LegalLayout>
  );
};

export default Terms;
