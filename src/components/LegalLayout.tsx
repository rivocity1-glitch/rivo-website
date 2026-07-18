import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, FileText, Shield, RefreshCcw } from 'lucide-react';
import { NavLink } from "react-router-dom";

export interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
  activePage: 'terms' | 'privacy' | 'refund';
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({
  title,
  lastUpdated,
  children,
  activePage
}) => {
  // Navigation sidebar configuration mapped to updated application routes
  const navigationItems = [
    { id: 'terms', name: 'Terms & Conditions', icon: FileText, href: '/legal/terms' },
    { id: 'privacy', name: 'Privacy Policy', icon: Shield, href: '/legal/privacy' },
    { id: 'refund', name: 'Refund & Cancellation', icon: RefreshCcw, href: '/legal/refund-policy' }
  ];

  return (
    <div className="bg-white min-h-screen overflow-x-hidden selection:bg-brand-primary selection:text-brand-black">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28 border-b border-neutral-100" aria-labelledby="legal-hero-heading">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <div className="flex flex-col space-y-6 items-center">
            
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#2ECC71]/10 border border-[#2ECC71]/20 rounded-full text-xs font-semibold tracking-wider text-brand-primary uppercase"
            >
              Legal
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1 
                id="legal-hero-heading"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-brand-black"
              >
                Legal Center
              </motion.h1>
            </div>

            {/* Paragraph */}
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-base sm:text-lg lg:text-xl text-brand-gray-muted leading-relaxed font-normal max-w-2xl"
            >
              Everything you need to know about using Rivo, your privacy and our policies.
            </motion.p>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: TWO-COLUMN CONTENT AREA ================= */}
      <section className="py-16 md:py-24 bg-white" aria-label="Policy Documentation">
        <div className="container-custom max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
            
            {/* LEFT COLUMN: STICKY SIDEBAR */}
            <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-4 z-10">
              <div className="bg-[#FAF9FA] border border-neutral-200 rounded-2xl p-4 space-y-2">
                <p className="text-[10px] uppercase font-bold tracking-widest text-brand-gray-muted px-3 mb-3">Navigation</p>
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activePage === item.id;
                  return (
                    <NavLink
                      key={item.id}
                      to={item.href}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-bold tracking-tight transition-all duration-300 ${
                        isActive
                          ? "bg-white border border-neutral-200 text-brand-primary shadow-xs"
                          : "text-brand-gray-muted hover:text-brand-black hover:bg-neutral-100/50"
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${isActive ? "text-brand-primary" : "text-neutral-400"}`} />
                      <span>{item.name}</span>
                    </NavLink>
                  );
                })}
              </div>
            </aside>

            {/* RIGHT COLUMN: POLICY RENDER AREA */}
            <main className="lg:col-span-8 w-full max-w-[800px] mx-auto flex flex-col space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="space-y-2 pb-6 border-b border-neutral-100 text-left"
              >
                <h2 className="text-3xl md:text-4xl font-black text-brand-black tracking-tight">{title}</h2>
                <p className="text-xs text-brand-gray-muted font-light">Last Updated: {lastUpdated}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-neutral max-w-none text-left"
              >
                {children}
              </motion.div>
            </main>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: FINAL CTA ================= */}
      <section className="py-20 md:py-32 bg-[#FAF9FA] border-t border-b border-neutral-100" aria-labelledby="legal-cta-heading">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center space-y-8">
            
            <h2 id="legal-cta-heading" className="text-4xl md:text-5xl font-black text-brand-black tracking-tight leading-tight">
              Need help understanding these policies?
            </h2>
            
            <p className="text-base md:text-lg text-brand-gray-muted font-light leading-relaxed max-w-2xl">
              If you have any questions about our policies, our support team is here to help.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
              <Button variant="primary" className="px-10 py-4 text-base font-semibold shadow-md shadow-brand-primary/10">
                Contact Support <ArrowRight className="w-5 h-5 ml-1" />
              </Button>
              <Button variant="outline" className="px-10 py-4 text-base font-semibold bg-white">
                Help Center
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};