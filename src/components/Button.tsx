import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon = false,
}) => {
  // Base classes
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md";
  
  // Size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  
  // Variant classes
  const variantClasses = {
    primary: "bg-amber-600 hover:bg-amber-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-slate-800 hover:bg-slate-900 text-white shadow-lg hover:shadow-xl",
    outline: "bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white",
  };
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;
  
  const iconElement = icon ? <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={size === 'sm' ? 16 : size === 'md' ? 18 : 20} /> : null;
  
  // Render as Link if 'to' prop is provided
  if (to) {
    return (
      <Link to={to} className={`${classes} group`}>
        {children}
        {iconElement}
      </Link>
    );
  }
  
  // Render as anchor if 'href' prop is provided
  if (href) {
    return (
      <a href={href} className={`${classes} group`}>
        {children}
        {iconElement}
      </a>
    );
  }
  
  // Otherwise render as button
  return (
    <button onClick={onClick} className={`${classes} group`}>
      {children}
      {iconElement}
    </button>
  );
};

export default Button;