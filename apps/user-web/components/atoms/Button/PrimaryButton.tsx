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

export default function PrimaryButton({
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
        'border-2 py-2.5 px-6 font-semibold transition duration-100 ease-in',
        variant === 'solid' &&
          'bg-primary-950 border-primary-950 hover:bg-primary-850 hover:border-primary-850 text-white',
        variant === 'outline' &&
          'border-primary-950 text-primary-950 hover:text-primary-850 hover:border-primary-850 bg-transparent hover:bg-black hover:bg-opacity-10',
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
