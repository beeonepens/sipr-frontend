import clsx from 'clsx';
import { LoadingIcon } from '../icons/LoadingIcon';

interface Props {
  children: string | JSX.Element;
  type?: 'button' | 'reset' | 'submit';
  variant?: 'solid' | 'outline';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
  text?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'danger';
  padding?: 'md' | 'sm';
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
  padding = 'md',
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
      disabled={isLoading || isDisabled}
      className={clsx(
        'border-2 capitalize transition duration-75',
        'focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
        padding === 'md' && 'py-2.5 px-6',
        padding === 'sm' && 'py-2 px-4',
        color === 'primary' && 'focus-visible:ring-primary-300',
        color === 'danger' && 'focus-visible:ring-red-400',
        color === 'primary' && [
          variant === 'solid' &&
            'bg-primary-700 border-primary-700 dark:bg-primary-600 dark:hover:bg-primary-700 hover:bg-primary-600 disabled:bg-primary-600 disabled:border-primary-600 hover:border-primary-600 dark:border-primary-600 dark:hover:border-primary-700 text-white dark:text-white',
          variant === 'outline' &&
            'border-primary-700 dark:border-primary-600 hover:text-primary-600 hover:border-primary-600 dark:hover:bg-primary-600 disabled:border-primary-700 bg-transparent text-gray-900 hover:bg-black hover:bg-opacity-10 disabled:bg-black disabled:bg-opacity-0 disabled:text-gray-900 dark:text-gray-300 dark:hover:bg-opacity-20',
        ],
        color === 'danger' && [
          variant === 'solid' &&
            'border-red-600 bg-red-600 text-white hover:border-red-700 hover:bg-red-700 dark:border-red-700 dark:bg-red-700 dark:text-white dark:hover:border-red-800 dark:hover:bg-red-800',
          variant === 'outline' &&
            'border-red-600 bg-transparent text-red-600 hover:border-red-700 hover:bg-black hover:bg-opacity-10 hover:text-red-600 dark:border-red-700 dark:text-white dark:hover:bg-red-700 dark:hover:bg-opacity-20',
        ],
        fullWidth && 'w-full',
        rounded === 'none' && 'rounded-none',
        rounded === 'sm' && 'rounded-sm',
        rounded === 'md' && 'rounded-md',
        rounded === 'lg' && 'rounded-lg',
        rounded === 'xl' && 'rounded-xl',
        text === 'sm' && 'text-sm font-normal',
        text === 'md' && 'text-base font-medium',
        text === 'lg' && 'text-lg font-medium',
        isLoading && 'cursor-not-allowed',
        isDisabled && 'cursor-not-allowed'
      )}
    >
      {isLoading ? <LoadingIcon /> : children}
    </button>
  );
}
