import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

const Privacy: React.FC = () => {
  return (
    <LegalLayout
      title="Privacy Policy"
      activePage="privacy"
      lastUpdated="14 July 2026"
    >
      <div className="space-y-10 text-brand-black font-light leading-relaxed text-sm md:text-base">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">1. Introduction</h3>
          <p>
            At Rivo, we highly value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you visit our website, download our mobile applications, or interact with our hyperlocal marketplace services. 
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">2. Information We Collect</h3>
          <p>
            We collect information that is necessary to provide you with a reliable shopping, selling, or delivery experience. This includes:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-brand-gray-muted font-normal">
            <li>Personal details such as your full name, email address, and mobile number.</li>
            <li>Delivery details including saved delivery addresses and explicit drop-off instructions.</li>
            <li>Profile information and a secure record of your complete order history.</li>
            <li>Payment details required to process transactions, excluding sensitive payment credentials like card PINs or passwords, which are handled directly by secure payment gateways.</li>
            <li>Technical details such as device information, app diagnostics, and browser type.</li>
            <li>Location data collected from your device to facilitate local transactions.</li>
            <li>Communications, messages, and notes exchanged with our customer support teams.</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">3. How We Use Your Information</h3>
          <p>
            Rivo uses the collected data to maintain seamless day-to-day platform operations. Specifically, we use your information to:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-brand-gray-muted font-normal">
            <li>Create, verify, and manage customer, vendor, and rider accounts.</li>
            <li>Process incoming store orders, compile checkout carts, and manage transactions.</li>
            <li>Deliver products efficiently from neighbourhood physical stores to your doorstep.</li>
            <li>Facilitate weekly settlements, secure payment authorizations, and transaction clearings.</li>
            <li>Provide helpful customer support and resolve user queries quickly.</li>
            <li>Send order notifications, updates, and essential service alerts.</li>
            <li>Analyze usage trends to introduce regular platform improvements and fix bugs.</li>
            <li>Prevent fraud, detect unauthorized layout access, and maintain general safety.</li>
            <li>Comply with local regulations and meet mandatory legal requirements under Indian law.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">4. Location Information</h3>
          <p>
            Because Rivo is a hyperlocal commerce platform, location tracking is essential for our operations. Your device location may be used to show you nearby stores, display accurate product availability, improve delivery routes, and assist riders during active deliveries. 
          </p>
          <p>
            We only collect and access your location data when it is truly necessary to perform these tasks. You can manage or restrict location permissions at any time through your device's built-in operating system settings.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">5. Cookies & Similar Technologies</h3>
          <p>
             Rivo uses cookies and basic web tracking tools to make your online experience smoother. These cookies are used for remembering your preferences (like your default city), analyzing website traffic patterns, protecting account security, and improving user experience. You can choose to disable cookies through your browser settings, though some platform features may become unavailable as a result.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">6. Information Sharing</h3>
          <p>
            We do not sell your personal information to third parties. We share your data only when necessary to complete your requests, including sharing with:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-brand-gray-muted font-normal">
            <li>Local vendors so they can accept, prepare, and accurately pack your product items.</li>
            <li>Delivery riders so they know your delivery location and can complete the drop-off.</li>
            <li>Authorized payment partners to process transactions securely.</li>
            <li>Government authorities, law enforcement, or tax regulators when explicitly required by law.</li>
            <li>Trusted service providers who offer infrastructure support, cloud hosting, or technical assistance.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">7. Data Security</h3>
          <p>
            Rivo utilizes reasonable technical and organisational security measures designed to protect your personal data against unauthorized access, loss, alteration, or misuse. However, please be aware that no system or online transmission is absolutely secure, and we cannot guarantee the absolute security of your information.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">8. Data Retention</h3>
          <p>
            We store your personal data only for as long as necessary to complete your orders, fulfill our business obligations, resolve user disputes, and satisfy legal or tax requirements under applicable Indian laws. When information is no longer required, it is securely deleted or completely anonymized.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">9. User Rights</h3>
          <p>
            You have full control over your personal data. You may request to access the specific information we hold about you, correct inaccuracies or outdated profile entries, or delete your account data where legally permitted. If you have any privacy concerns or wish to exercise these rights, please reach out to our support channel.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">10. Children's Privacy</h3>
          <p>
            Rivo is not intended for use by children below the legal age of majority. We do not knowingly collect personal details from minors without explicit parental supervision and consent. If we discover that a minor has created an unapproved account, we will take steps to remove the data promptly.
          </p>
        </section>

        {/* Section 11 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">11. Third-Party Services</h3>
          <p>
            Our platform may contain links to external sites or use external components, such as digital payment gateways. These third-party providers operate independently and maintain their own unique privacy policies. We encourage you to review their terms directly before completing transactions.
          </p>
        </section>

        {/* Section 12 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">12. Policy Updates</h3>
          <p>
            We may modify or update this Privacy Policy from time to time to match changing laws or platform upgrades. When updates are published, we will revise the date listed at the top of this documentation page. We encourage you to review this policy periodically to stay informed about how we protect your data.
          </p>
        </section>

        {/* Section 13 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">13. Contact</h3>
          <p>
            If you have any questions, complaints, or feedback regarding this Privacy Policy or our data management steps, please reach out to us at:
          </p>
          <p className="font-bold text-brand-black bg-[#FAF9FA] border border-neutral-200 rounded-xl p-4 inline-block tracking-tight select-all">
            rivo.cityhelp1@gmail.com
          </p>
        </section>

      </div>
    </LegalLayout>
  );
};

export default Privacy;