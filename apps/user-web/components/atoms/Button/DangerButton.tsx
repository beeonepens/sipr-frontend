import React from 'react';
import clsx from 'clsx';

interface Props {
  children: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'solid' | 'outline';
  fullWidth?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  onClick?: () => void;
}

export default function DangerButton({
  children = 'Button',
  type = 'button',
  variant = 'solid',
  fullWidth,
  rounded = 'md',
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        'rounded-md border-2 py-2.5 px-6 font-semibold transition duration-100 ease-in',
        variant === 'solid' &&
          'border-red-600 bg-red-600 text-white hover:border-red-700 hover:bg-red-700',
        variant === 'outline' &&
          'border-red-600 bg-transparent text-red-600 hover:border-red-700 hover:bg-black hover:bg-opacity-10 hover:text-red-700',
        fullWidth && 'w-full',
        rounded === 'none' && 'rounded-none',
        rounded === 'sm' && 'rounded-sm',
        rounded === 'md' && 'rounded-md',
        rounded === 'lg' && 'rounded-lg',
        rounded === 'xl' && 'rounded-xl'
      )}
    >
      {children}
    </button>
  );
}
