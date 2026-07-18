import React, { useEffect, useState } from 'react';

export interface PageLoaderProps {
  loading?: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ loading = true }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (loading) {
      // Small delay to trigger smooth CSS transition
      const timer = setTimeout(() => setMounted(true), 10);
      return () => clearTimeout(timer);
    } else {
      setMounted(false);
    }
  }, [loading]);

  if (!loading) return null;

  return (
    <div 
      role="status"
      aria-live="polite"
      aria-label="Loading"
      className={`fixed inset-0 z-50 bg-white flex flex-col items-center justify-center gap-4 select-none transition-opacity duration-300 ease-out ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Thin, brand-green circular spinner with smooth rotation */}
      <div className="w-8 h-8 border-[2px] border-neutral-100 border-t-[#2ECC71] rounded-full animate-[spin_0.8s_linear_infinite]" />
      
      {/* Small, muted status typography */}
      <p className="text-xs font-medium text-neutral-400 tracking-wider">
        Loading...
      </p>
    </div>
  );
};

export default PageLoader;