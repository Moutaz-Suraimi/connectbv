import React from 'react';
import { cn } from '../utils/utils';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  withArrow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', withArrow = false, children, ...props }, ref) => {
    
    const variants = {
      primary: 'bg-primary text-white hover:bg-dark',
      secondary: 'bg-accent text-white hover:bg-blue-700',
      outline: 'border border-primary text-primary hover:bg-primary hover:text-white',
      ghost: 'text-primary hover:bg-primary/5',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'group relative inline-flex items-center justify-center gap-2 overflow-hidden px-8 py-4 font-medium transition-all duration-300',
          variants[variant],
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {withArrow && (
          <ArrowRight className="h-4 w-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
