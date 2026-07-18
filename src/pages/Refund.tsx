import React from 'react';
import { LegalLayout } from '../components/LegalLayout';

const Refund: React.FC = () => {
  return (
    <LegalLayout
      title="Refund & Cancellation Policy"
      activePage="refund"
      lastUpdated="14 July 2026"
    >
      <div className="space-y-10 text-brand-black font-light leading-relaxed text-sm md:text-base">
        
        {/* Section 1 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">1. Introduction</h3>
          <p>
            This Refund & Cancellation Policy outlines the rules and procedures for cancelling orders and receiving refunds on the Rivo platform. We aim to keep our process simple, transparent, and fair for all customers, vendors, and riders inside our local community.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">2. Order Cancellation by Customer</h3>
          <p>
            Customers may cancel an order through the app before the physical store vendor begins preparing it, provided the cancellation option is active. Once the vendor accepts the request and begins preparation, cancellation is generally not possible as products may already be packed or set aside for you.
          </p>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">3. Order Cancellation by Vendor</h3>
          <p>
            A vendor may occasionally need to cancel an order if a listed item is out of stock, the store cannot fulfil the order due to unexpected operating constraints, or local operational issues prevent completion. If an order is cancelled by the vendor after a digital payment has successfully gone through, the eligible amount will be processed for a refund.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">4. Order Cancellation by Rivo</h3>
          <p>
            Rivo reserves the right to cancel an order at any stage for safety and integrity reasons. This includes situations involving fraud prevention, absolute payment processing failure, severe technical system issues, rider safety concerns, or major operational challenges.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">5. Refund Eligibility</h3>
          <p>
            Refunds are not guaranteed for every cancellation request and are subject to verification. You may be eligible for a refund under specific conditions, including:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-brand-gray-muted font-normal">
            <li>Successful cancellation through the app before store fulfilment starts.</li>
            <li>A failed transaction where money was successfully debited from your account but the order failed to place.</li>
            <li>An order cancellation initiated entirely by the vendor or store.</li>
            <li>Duplicate payments caused by a digital transaction error.</li>
            <li>Hyperlocal delivery runs that cannot be completed due to platform errors.</li>
          </ul>
          <p>
            Rivo reviews each request individually against transaction records before granting final approval.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">6. Non-Refundable Situations</h3>
          <p>
            Refunds will not be issued in situations where the platform rules were met but fulfillment was interrupted by user error. Non-refundable situations include:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-brand-gray-muted font-normal">
            <li>A customer changing their mind after the order has been successfully prepared and delivered.</li>
            <li>Products that have already been opened, consumed, used, or damaged post-delivery.</li>
            <li>An incorrect delivery address or wrong contact details provided by the customer at checkout, resulting in an undeliverable order.</li>
            <li>Other situations where the order was successfully completed according to the original order details.</li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">7. Refund Method</h3>
          <p>
            Approved digital refunds for UPI transactions are sent back to the original source account used to make the payment. For Cash on Delivery (COD) orders where a refund is deemed necessary, our support team will require additional account verification and personal identification details to process the settlement manually. Any future payment methods introduced to the platform will follow their respective source payment refund flows.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">8. Refund Processing Time</h3>
          <p>
            Once a refund is approved by Rivo, the actual time it takes for the balance to reflect in your account varies. This timeline depends heavily on banking networks, third-party payment gateways, and individual verification checks. We initiate the process immediately on approval, but final clearing remains subject to standard external banking rules.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">9. Disputes</h3>
          <p>
            If you believe a refund decision or cancellation charge is incorrect, you can contact Rivo support for an evaluation. Our team may request additional context, order screenshots, or payment receipts to help review your case thoroughly.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-3">
          <h3 className="text-xl font-bold tracking-tight text-brand-black">10. Contact</h3>
          <p>
            For any queries, requests, or support inquiries regarding cancellations and refunds, please drop us an email at:
          </p>
          <p className="font-bold text-brand-black bg-[#FAF9FA] border border-neutral-200 rounded-xl p-4 inline-block tracking-tight select-all">
            rivo.cityhelp1@gmail.com
          </p>
        </section>

      </div>
    </LegalLayout>
  );
};

export default Refund;