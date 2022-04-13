import * as React from 'react';
import clsx from 'clsx';

interface Props {
  children: string | JSX.Element;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'solid' | 'outline';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  text?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'danger';
  isLoading?: boolean;
  isDisabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

export function Button({
  children = 'Button',
  type = 'button',
  variant = 'solid',
  rounded = 'md',
  text = 'md',
  color = 'primary',
  isLoading = false,
  isDisabled = false,
  fullWidth,
  onClick,
}: Props) {
  return (
    <button
      onClick={onClick}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={clsx(
        'border-2 py-2.5 px-6 transition duration-75',
        color === 'primary' && [
          variant === 'solid' &&
            'bg-primary-950 border-primary-950 dark:bg-primary-300 dark:hover:bg-primary-400 dark:text-primary-950 hover:bg-primary-850 hover:border-primary-850 dark:border-primary-300 dark:hover:border-primary-400 text-white',
          variant === 'outline' &&
            'border-primary-950 dark:border-primary-300 hover:text-primary-850 hover:border-primary-850 dark:text-primary-300 dark:hover:bg-primary-300 bg-transparent text-gray-900 hover:bg-black hover:bg-opacity-10 dark:hover:bg-opacity-20 ',
        ],
        color === 'danger' && [
          variant === 'solid' &&
            'border-red-600 bg-red-600 text-white hover:border-red-700 hover:bg-red-700 dark:border-red-200 dark:bg-red-200 dark:text-red-800 dark:hover:border-red-300 dark:hover:bg-red-300',
          variant === 'outline' &&
            'border-red-600 bg-transparent text-red-600 hover:border-red-700 hover:bg-black hover:bg-opacity-10 hover:text-red-600 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-200 dark:hover:bg-opacity-20',
        ],
        fullWidth && 'w-full',
        rounded === 'none' && 'rounded-none',
        rounded === 'sm' && 'rounded-sm',
        rounded === 'md' && 'rounded-md',
        rounded === 'lg' && 'rounded-lg',
        rounded === 'xl' && 'rounded-xl',
        text === 'sm' && 'text-sm font-normal',
        text === 'md' && 'text-base font-medium',
        text === 'lg' && 'text-lg font-medium'
      )}
    >
      {children}
    </button>
  );
}
