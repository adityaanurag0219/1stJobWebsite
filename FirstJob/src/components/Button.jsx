import React from 'react';

const Button = ({ children, variant = 'default', className = '', ...props }) => {
  const baseStyle = 'px-4 py-2 rounded text-white font-semibold';
  const variants = {
    default: 'bg-blue-600 hover:bg-blue-700',
    outline: 'border border-blue-600 bg-blue-400  text-blue-600 hover:bg-blue-600',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant] || ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
