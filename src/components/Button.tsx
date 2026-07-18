import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary'; // Maintained secondary to avoid typescript compilation errors elsewhere
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ 
  variant = 'primary', 
  children, 
  className = '', 
  disabled,
  ...props 
}, ref) => {
  const baseStyle = "px-6 py-3 rounded-full font-medium text-sm transition-all duration-150 ease-out inline-flex items-center justify-center gap-2 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#2ECC71] focus-visible:ring-offset-2 select-none";
  
  const activeStyle = disabled 
    ? "opacity-50 cursor-not-allowed pointer-events-none" 
    : "active:scale-[0.98]";

  const variants: Record<'primary' | 'outline' | 'ghost' | 'secondary', string> = {
    primary: "bg-[#2ECC71] text-black hover:bg-[#27ae60] font-semibold",
    outline: "bg-white border border-neutral-200 text-black hover:bg-neutral-50 hover:border-neutral-300",
    ghost: "bg-transparent text-black hover:bg-neutral-50",
    // Retained secondary to map gracefully to outline to prevent any template breaks, but optimized style
    secondary: "bg-white border border-neutral-200 text-black hover:bg-neutral-50 hover:border-neutral-300"
  };

  const resolvedVariant = variant === 'secondary' ? 'outline' : variant;

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={`${baseStyle} ${variants[resolvedVariant]} ${activeStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';