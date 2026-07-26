// src/components/ComingSoonModal.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Construction, ExternalLink, X } from 'lucide-react';

export type AppType = 'customer' | 'rider' | 'vendor' | null;

interface ComingSoonModalProps {
  isOpen: boolean;
  appType: AppType;
  onClose: () => void;
}

const modalContent: Record<
  NonNullable<AppType>,
  { title: string; description: string; showVendorPortal?: boolean }
> = {
  customer: {
    title: 'Customer App Coming Soon',
    description: 'The Rivo Customer App will be available soon.\nStay tuned for the official launch.',
  },
  rider: {
    title: 'Rider App Coming Soon',
    description: 'The Rivo Rider App will be available soon.\nStay tuned for the official launch.',
  },
  vendor: {
    title: 'Vendor App Coming Soon',
    description: 'The Vendor App is currently under development.\nUntil then, you can manage your business using the Vendor Portal.',
    showVendorPortal: true,
  },
};

export const ComingSoonModal: React.FC<ComingSoonModalProps> = ({
  isOpen,
  appType,
  onClose,
}) => {
  if (!appType) return null;

  const content = modalContent[appType];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.3 }}
            className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl z-10 dark:bg-gray-900"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600 dark:hover:bg-gray-800"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-950/50 dark:text-amber-400">
                <Construction className="h-7 w-7" />
              </div>

              <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                🚧 {content.title}
              </h3>

              <p className="mb-6 whitespace-pre-line text-sm text-gray-600 dark:text-gray-300">
                {content.description}
              </p>

              <div className="flex w-full flex-col gap-2">
                {content.showVendorPortal && (
                  <a
                    href="https://vendorportal-7kq.pages.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all hover:bg-emerald-700 active:scale-[0.98]"
                  >
                    Open Vendor Portal
                    <ExternalLink className="h-4 w-4" />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 font-semibold text-gray-700 transition-all hover:bg-gray-100 active:scale-[0.98] dark:border-gray-800 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};