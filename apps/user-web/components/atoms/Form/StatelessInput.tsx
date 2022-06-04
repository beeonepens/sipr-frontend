import clsx from 'clsx';
import * as React from 'react';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  leftIcon?: JSX.Element;
  error?: boolean;
}

export default function StatelessInput({
  type = 'text',
  id,
  leftIcon,
  error,
  ...others
}: Props) {
  const [eyeOn, setEyeOn] = React.useState(false);

  if (leftIcon)
    return (
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          {leftIcon}{' '}
        </div>
        <input
          type={type}
          id={id}
          name={id}
          {...others}
          className={clsx(
            'block w-full rounded-lg bg-white pl-10 disabled:cursor-not-allowed disabled:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:caret-gray-500 dark:disabled:bg-gray-900 sm:text-sm',
            error
              ? 'border-red-600 focus:border-red-800 focus:ring-red-800 dark:border-red-600 dark:focus:border-red-500 dark:focus:ring-red-500'
              : 'focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-300 dark:focus:ring-primary-300 border-gray-300 dark:border-gray-600'
          )}
        />
      </div>
    );

  if (type === 'password')
    return (
      <div className="relative">
        <input
          type={!eyeOn ? 'password' : 'text'}
          id={id}
          name={id}
          {...others}
          className={clsx(
            'block w-full rounded-lg bg-white pr-10 disabled:cursor-not-allowed disabled:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:caret-gray-500 dark:disabled:bg-gray-900 sm:text-sm',
            error
              ? 'border-red-600 focus:border-red-800 focus:ring-red-800 dark:border-red-600 dark:focus:border-red-500 dark:focus:ring-red-500'
              : 'focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-300 dark:focus:ring-primary-300 border-gray-300 dark:border-gray-600'
          )}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {!eyeOn ? (
            <EyeIcon
              onClick={() => setEyeOn((cv) => !cv)}
              className="h-5 w-5 cursor-pointer text-gray-500 dark:text-gray-400"
            />
          ) : (
            <EyeOffIcon
              onClick={() => setEyeOn((cv) => !cv)}
              className="h-5 w-5 cursor-pointer text-gray-500 dark:text-gray-400"
            />
          )}
        </div>
      </div>
    );

  return (
    <input
      type={type}
      id={id}
      name={id}
      {...others}
      className={clsx(
        'block rounded-lg bg-white disabled:cursor-not-allowed disabled:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:caret-gray-500 dark:disabled:bg-gray-900 sm:text-sm',
        error
          ? 'border-red-600 focus:border-red-800 focus:ring-red-800 dark:border-red-600 dark:focus:border-red-500 dark:focus:ring-red-500'
          : 'focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-300 dark:focus:ring-primary-300 border-gray-300 dark:border-gray-600'
      )}
    />
  );
}
