import React from 'react';
import clsx from 'clsx';

interface Props {
  children: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'solid' | 'outline';
  fullWidth?: boolean;
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}

export default function PrimaryButton({
  children = 'Button',
  type = 'button',
  variant = 'solid',
  fullWidth,
  rounded = 'md',
}: Props) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        'rounded-md border-2 py-2.5 px-6 font-semibold transition duration-150 ease-in',
        variant === 'solid' &&
          'bg-primary-900 border-primary-900 hover:bg-primary-700 hover:border-primary-700 text-white',
        variant === 'outline' &&
          'border-primary-900 text-primary-900 hover:text-primary-800 hover:border-primary-700 bg-transparent hover:bg-black hover:bg-opacity-10',
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
