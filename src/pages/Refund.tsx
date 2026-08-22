import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

const Refund: React.FC = () => (
  <LegalLayout title="Refund & Cancellation Policy" activePage="refund" lastUpdated="22 August 2026">
    <div className="space-y-10 text-brand-black font-light leading-relaxed text-sm md:text-base">
      <section className="space-y-3"><h3 className="text-xl font-bold">1. Introduction</h3><p>This Refund & Cancellation Policy explains the rules for cancelling orders and requesting refunds on Rivo. Eligibility depends on the order stage, reason for cancellation, transaction status, and applicable law.</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">2. Customer Cancellation</h3><p>Customers may cancel an order through the app while the cancellation option is available. Once the vendor has accepted and started preparing an order, cancellation may no longer be available.</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">3. Vendor Cancellation</h3><p>A vendor may cancel when an item is unavailable, the store cannot fulfil the order, or an operational issue prevents completion. Eligible amounts paid digitally for a vendor-cancelled order may be refunded.</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">4. Rivo Cancellation</h3><p>Rivo may cancel an order where necessary for fraud prevention, payment failure, technical issues, rider safety, operational constraints, or other legitimate platform or legal reasons.</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">5. Refund Eligibility</h3><p>A refund may be available for eligible cancellations, failed transactions where funds were debited but an order was not placed, vendor cancellations, duplicate payments, or delivery failures attributable to the platform. Requests may be reviewed against order and transaction records.</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">6. Non-Refundable Situations</h3><p>Refunds may not be available where an order was successfully fulfilled, a customer supplied an incorrect address or contact information, products were opened/consumed/used or damaged after delivery, or the requested cancellation is outside the applicable cancellation window, subject to applicable consumer rights and law.</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">7. Refund Method</h3><p>Approved digital refunds are generally returned through the relevant payment method or payment provider flow. COD refunds, where approved, may require additional verification before settlement. Refunds remain subject to the capabilities and processing rules of the applicable payment provider.</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">8. Refund Processing Time</h3><p>After approval, the time for a refund to reach the customer depends on the payment provider, banking network, and applicable verification procedures. Rivo initiates eligible refunds as promptly as reasonably possible after approval.</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">9. Disputes</h3><p>If you believe a refund or cancellation decision is incorrect, contact Rivo Support. We may request order details, screenshots, receipts, or other information necessary to investigate the matter.</p></section>
      <section className="space-y-3"><h3 className="text-xl font-bold">10. Contact</h3><p>For cancellation and refund support, contact:</p><p className="font-bold text-brand-black bg-[#FAF9FA] border border-neutral-200 rounded-xl p-4 inline-block tracking-tight select-all">support@rivocity.com</p></section>
    </div>
  </LegalLayout>
);

export default Refund;
