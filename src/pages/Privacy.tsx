import React from 'react';
import { useLanguage } from '../components/LanguageProvider';
import { LegalLayout } from '../components/LegalLayout';

const Privacy: React.FC = () => {
  const { t } = useLanguage();
  return (
  <LegalLayout title="Privacy Policy" activePage="privacy" lastUpdated="22 August 2026">
    <div className="space-y-10 text-brand-black font-light leading-relaxed text-sm md:text-base">
      <section className="space-y-3"><h3 className="text-xl font-bold">1. Introduction</h3><p>{t('policy.privacy.1')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">2. Information We Collect</h3><p>{t('policy.privacy.2')}</p><ul className="list-disc pl-5 space-y-2 text-brand-gray-muted font-normal"><li>{t('policy.privacy.3')}</li><li>{t('policy.privacy.4')}</li><li>{t('policy.privacy.5')}</li><li>{t('policy.privacy.6')}</li><li>{t('policy.privacy.7')}</li><li>{t('policy.privacy.8')}</li><li>{t('policy.privacy.9')}</li></ul></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">3. How We Use Information</h3><p>{t('policy.privacy.10')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">4. Location Information</h3><p>{t('policy.privacy.11')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">5. Cookies & Similar Technologies</h3><p>{t('policy.privacy.12')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">6. Information Sharing</h3><p>{t('policy.privacy.13')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">7. Data Security</h3><p>{t('policy.privacy.14')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">8. Data Retention</h3><p>{t('policy.privacy.15')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">9. User Rights</h3><p>{t('policy.privacy.16')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">10. Children's Privacy</h3><p>{t('policy.privacy.17')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">11. Third-Party Services</h3><p>{t('policy.privacy.18')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">12. Policy Updates</h3><p>{t('policy.privacy.19')}</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">13. Contact</h3><p>{t('policy.privacy.20')}</p><p className="font-bold text-brand-black bg-[#FAF9FA] border border-neutral-200 rounded-xl p-4 inline-block tracking-tight select-all">support@rivocity.com</p></section>
    </div>
  </LegalLayout>
  );
};

export default Privacy;
