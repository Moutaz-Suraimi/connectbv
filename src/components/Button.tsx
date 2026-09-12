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
      primary: 'bg-primary text-white hover:bg-dark shadow-[0_4px_20px_rgba(15,23,42,0.15)] hover:shadow-[0_8px_25px_rgba(15,23,42,0.25)] hover:-translate-y-0.5',
      secondary: 'bg-accent text-white hover:bg-blue-600 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:-translate-y-0.5',
      outline: 'border-2 border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white hover:-translate-y-0.5',
      ghost: 'text-primary hover:bg-primary/5 hover:text-accent',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'group relative inline-flex items-center justify-center gap-2.5 overflow-hidden px-7 py-3.5 rounded-full font-medium text-sm tracking-wide transition-all duration-300 active:scale-95 cursor-pointer',
          variants[variant],
          className
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {withArrow && (
          <div className="relative z-10 w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
            <ArrowRight className="h-3.5 w-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
