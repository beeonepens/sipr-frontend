import React from 'react';
import clsx from 'clsx';

interface Props {
  children: string;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'solid' | 'outline';
}

export default function PrimaryButton({
  children = 'Button',
  type = 'button',
  variant = 'solid',
}: Props) {
  return (
    <button
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        'rounded-md border-2 py-2.5 px-6 font-semibold transition duration-150 ease-in',
        variant === 'solid' &&
          'bg-primary-600 border-primary-600 hover:bg-primary-800 hover:border-primary-800 text-white',
        variant === 'outline' &&
          'border-primary-600 text-primary-600 hover:text-primary-800 hover:border-primary-800 bg-transparent hover:bg-black hover:bg-opacity-10'
      )}
    >
      {children}
    </button>
  );
}
