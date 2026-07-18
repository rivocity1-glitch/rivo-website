import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';

const NotFound: React.FC = () => {
  return (
    <main className="min-h-[80vh] flex flex-col justify-center items-center bg-white px-6 text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="flex flex-col items-center max-w-lg"
      >
        {/* Simple Premium Geometric Illustration (Minimal Canvas) */}
        <div className="w-24 h-24 mb-10 relative flex items-center justify-center">
          {/* Subtle grid background */}
          <div className="absolute inset-0 border border-dashed border-neutral-100 rounded-full" />
          {/* Accent Ring */}
          <div className="absolute w-16 h-16 border-2 border-dashed border-[#2ECC71]/30 rounded-full animate-[spin_40s_linear_infinite]" />
          {/* Solid Minimal Core Shapes */}
          <div className="w-10 h-10 bg-neutral-50 border border-neutral-100 rounded-2xl rotate-45 flex items-center justify-center shadow-xs">
            <div className="w-4 h-4 bg-[#2ECC71] rounded-lg" />
          </div>
        </div>

        {/* Small Eyebrow */}
        <span className="text-xs uppercase tracking-[0.15em] text-[#2ECC71] font-bold mb-4">
          404 Error
        </span>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-4">
          Page not found.
        </h1>

        {/* Description */}
        <p className="text-neutral-500 max-w-sm mb-10 text-sm md:text-base leading-relaxed">
          The page you are looking for doesn't exist or may have been moved.
        </p>

        {/* Dual Actions Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
          <Link to="/" className="w-full sm:w-auto">
            <Button variant="primary" className="w-full sm:w-auto px-8">
              Go Home
            </Button>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full sm:w-auto px-8">
              Contact Support
            </Button>
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default NotFound;