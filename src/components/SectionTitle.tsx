import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  badge?: string; // Serves as the eyebrow text (optional)
  title: string;  // Serves as the main title (required)
  subtitle?: string; // Serves as the description (optional)
  align?: 'left' | 'center'; // Alignment (optional)
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = 'center'
}) => {
  const isLeft = align === 'left';
  
  return (
    <div className={`flex flex-col mb-12 md:mb-16 ${isLeft ? 'items-start text-left' : 'items-center text-center'}`}>
      {badge && (
        <span className="text-xs uppercase tracking-[0.15em] text-[#2ECC71] font-bold mb-3 select-none">
          {badge}
        </span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black max-w-3xl leading-[1.15]`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <p className={`mt-4 text-sm md:text-base text-neutral-500 max-w-2xl leading-relaxed ${isLeft ? 'mr-auto' : 'mx-auto'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};