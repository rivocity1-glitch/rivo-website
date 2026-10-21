import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Smartphone } from 'lucide-react';
import SEO from '../components/SEO';

const Apps: React.FC = () => (
  <>
    <SEO
      title="RivoCity Apps | Coming Soon"
      description="The RivoCity customer and rider apps are coming soon."
      canonical="/apps"
    />
    <main className="relative flex min-h-[75vh] items-center justify-center overflow-hidden bg-white px-6 py-20 text-brand-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2ECC71]/10 blur-3xl" />
      </div>
      <motion.section
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto flex max-w-2xl flex-col items-center text-center"
        aria-labelledby="apps-coming-soon"
      >
        <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-[#2ECC71]/20 bg-[#2ECC71]/10 text-brand-primary">
          <Smartphone className="h-10 w-10" />
        </div>
        <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#2ECC71]/20 bg-[#2ECC71]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-primary">
          <Clock className="h-4 w-4" />
          Coming Soon
        </span>
        <h1 id="apps-coming-soon" className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
          The Rivo apps are almost here.
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-brand-gray-muted sm:text-lg">
          We’re getting the RivoCity customer and rider apps ready for launch.
          Check back soon for updates.
        </p>
      </motion.section>
    </main>
  </>
);

export default Apps;
