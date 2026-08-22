import React, { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, Shield, UserRound } from 'lucide-react';
import { Button } from '../components/Button';

const SUPPORT_EMAIL = 'support@rivocity.com';

const DeleteAccount: React.FC = () => {
  const [email, setEmail] = useState('');
  const [identifier, setIdentifier] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent('RivoCity Account Deletion Request');
    const body = encodeURIComponent(
      `Hello Rivo Support,\n\nI request deletion of my RivoCity account.\n\nAccount email: ${email}\nAccount phone/identifier: ${identifier || 'Not provided'}\n\nPlease confirm receipt of this request and process the deletion in accordance with RivoCity's account deletion policy.\n\nThank you.`
    );

    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-white text-brand-black selection:bg-brand-primary selection:text-brand-black">
      <section className="relative overflow-hidden border-b border-neutral-100 pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="absolute inset-x-0 top-0 -z-0 h-72 bg-gradient-to-b from-[#2ECC71]/10 via-[#2ECC71]/[0.03] to-transparent" />
        <div className="container-custom relative z-10 mx-auto max-w-5xl px-5 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-[#2ECC71]/20 bg-[#2ECC71]/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-brand-primary"
          >
            Account & Privacy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl"
          >
            Delete your RivoCity account
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-gray-muted sm:text-lg"
          >
            Submit a request to permanently delete your RivoCity customer account and associated personal data, subject to information we must retain for legal, security, fraud-prevention, transaction, or dispute obligations.
          </motion.p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container-custom mx-auto grid max-w-6xl grid-cols-1 gap-10 px-5 lg:grid-cols-12 lg:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="rounded-3xl border border-neutral-200 bg-[#FAF9FA] p-6 shadow-sm sm:p-8">
              <div className="mb-8 flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2ECC71]/10 text-brand-primary">
                  <UserRound className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="text-2xl font-black tracking-tight">Request account deletion</h2>
                  <p className="mt-1 text-sm leading-relaxed text-brand-gray-muted">
                    Use the account details associated with your RivoCity customer account.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-bold">Account email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#2ECC71] focus:ring-4 focus:ring-[#2ECC71]/10"
                  />
                </div>

                <div>
                  <label htmlFor="identifier" className="mb-2 block text-sm font-bold">Phone number or other account identifier <span className="font-normal text-brand-gray-muted">(optional)</span></label>
                  <input
                    id="identifier"
                    type="text"
                    value={identifier}
                    onChange={(event) => setIdentifier(event.target.value)}
                    placeholder="Phone number, if applicable"
                    className="w-full rounded-2xl border border-neutral-200 bg-white px-4 py-3.5 text-sm outline-none transition focus:border-[#2ECC71] focus:ring-4 focus:ring-[#2ECC71]/10"
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full justify-center px-6 py-4 text-base font-semibold">
                  Send deletion request <ArrowRight className="ml-1 h-5 w-5" />
                </Button>

                {submitted && (
                  <div className="flex items-start gap-3 rounded-2xl border border-[#2ECC71]/20 bg-[#2ECC71]/10 p-4 text-sm text-brand-black">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-primary" />
                    <p>Your email client should now contain a pre-filled deletion request addressed to Rivo Support. Send that email to complete the request.</p>
                  </div>
                )}
              </form>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 lg:col-span-5"
          >
            <div className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-8">
              <Shield className="mb-4 h-7 w-7 text-brand-primary" />
              <h2 className="text-xl font-black">What happens after you request deletion?</h2>
              <ul className="mt-5 space-y-4 text-sm leading-relaxed text-brand-gray-muted">
                <li>• We verify the request and account ownership where necessary.</li>
                <li>• Your RivoCity customer account and eligible personal data are scheduled for deletion.</li>
                <li>• Information that must be retained for legal, tax, security, fraud-prevention, transaction, or dispute purposes may be retained for the required period.</li>
                <li>• We will contact you through the provided account email if additional information is required.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-neutral-200 bg-[#FAF9FA] p-6 sm:p-8">
              <Mail className="mb-4 h-7 w-7 text-brand-primary" />
              <h2 className="text-xl font-black">Need help?</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-gray-muted">
                If you cannot access your account or need help with a deletion request, contact Rivo Support.
              </p>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="mt-4 inline-block font-bold text-brand-primary hover:underline">
                {SUPPORT_EMAIL}
              </a>
            </div>
          </motion.aside>
        </div>
      </section>
    </div>
  );
};

export default DeleteAccount;
