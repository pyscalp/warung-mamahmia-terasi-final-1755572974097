import React from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

const Button = ({ children, className, variant = 'primary', ...props }) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-primary text-white hover:bg-secondary focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-primary focus:ring-secondary',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
  };

  return (
    <button
      className={twMerge(clsx(baseStyles, variants[variant]), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;