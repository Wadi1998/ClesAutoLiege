import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'gradient';
  hover?: boolean;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

// Composant utilisé dans ServicesGrid. Les sous-parties (Header/Title/Content/Footer)
// ont été retirées car non consommées ailleurs.
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  hover = false,
  className = '',
  padding = 'md',
  onClick,
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300';
  
  const variantClasses: Record<NonNullable<CardProps['variant']>, string> = {
    default: 'bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700',
    glass: 'glass backdrop-blur-lg',
    gradient: 'gradient-orange text-white',
  };

  const paddingClasses: Record<NonNullable<CardProps['padding']>, string> = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverClasses = hover 
    ? 'hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02] cursor-pointer' 
    : '';

  const classes = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${hoverClasses} ${className}`;

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};
