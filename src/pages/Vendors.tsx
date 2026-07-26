// src/pages/Vendors.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Laptop, FileText, Sparkles } from 'lucide-react';
import { ComingSoonModal, type AppType } from '../components/ComingSoonModal';

export const Vendors: React.FC = () => {
  const [modalApp, setModalApp] = useState<AppType>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-12 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Existing Content / Hero Section ... */}

        {/* Download Vendor App Trigger */}
        <div className="mb-12 flex justify-center">
          <button
            onClick={() => setModalApp('vendor')}
            className="rounded-xl bg-emerald-600 px-6 py-3.5 font-bold text-white shadow-lg transition-all hover:bg-emerald-700"
          >
            Download Vendor App
          </button>
        </div>

        {/* --- MINIMUM REQUIREMENTS SECTION --- */}
        <section className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-gray-200/80 bg-white/80 p-8 shadow-xl backdrop-blur-xl dark:border-gray-800 dark:bg-gray-900/80"
          >
            <h2 className="mb-8 text-center text-3xl font-extrabold text-gray-900 dark:text-white">
              Minimum Requirements
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Hardware */}
              <div className="rounded-2xl bg-gray-50/50 p-6 dark:bg-gray-800/50">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                  <Laptop className="h-5 w-5 text-emerald-600" />
                  Hardware
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span>💻 Computer or Laptop (Windows/macOS/Linux)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span>🌐 Stable Internet Connection</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span>📱 Smartphone (to receive important notifications and account updates)</span>
                  </li>
                </ul>
              </div>

              {/* Business Documents */}
              <div className="rounded-2xl bg-gray-50/50 p-6 dark:bg-gray-800/50">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-gray-900 dark:text-white">
                  <FileText className="h-5 w-5 text-emerald-600" />
                  Business Documents
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span>🧾 GST Certificate (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span>🏪 Shop Registration / Business License (if applicable)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span>🪪 Owner Identity Proof (Aadhaar / PAN)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span>🏦 Bank Account Details</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span>📍 Accurate Store Address</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Management Soft Green Info Card */}
            <div className="mt-8 rounded-2xl border border-emerald-200/60 bg-emerald-50/80 p-6 dark:border-emerald-900/50 dark:bg-emerald-950/30">
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-emerald-100 p-2 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-400">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-emerald-950 dark:text-emerald-200">
                    Product Management
                  </h4>
                  <p className="text-sm leading-relaxed text-emerald-800 dark:text-emerald-300">
                    Have digital bills, invoices, or product lists? Upload them during setup and Rivo will help populate your catalog automatically. Otherwise, you can add products manually from the Vendor Portal.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* Reusable Coming Soon Modal */}
      <ComingSoonModal
        isOpen={modalApp !== null}
        appType={modalApp}
        onClose={() => setModalApp(null)}
      />
    </div>
  );
};