import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost' | 'secondary';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((
  {
    variant = 'primary',
    children,
    className = '',
    disabled,
    ...props
  },
  ref,
) => {
  const baseStyle =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-[transform,background-color,border-color,box-shadow,color] duration-200 ease-out outline-none select-none focus-visible:ring-2 focus-visible:ring-[#2ECC71] focus-visible:ring-offset-2';

  const activeStyle = disabled
    ? 'cursor-not-allowed opacity-50'
    : 'cursor-pointer active:scale-[0.98]';

  const variants: Record<NonNullable<ButtonProps['variant']>, string> = {
    primary:
      'bg-[#2ECC71] text-black shadow-sm shadow-[#2ECC71]/10 hover:bg-[#27ae60] hover:shadow-md hover:shadow-[#2ECC71]/15',
    outline:
      'border border-neutral-200 bg-white text-black hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-sm',
    ghost: 'bg-transparent text-black hover:bg-neutral-50',
    secondary:
      'border border-neutral-200 bg-white text-black hover:border-neutral-300 hover:bg-neutral-50 hover:shadow-sm',
  };

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${activeStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
