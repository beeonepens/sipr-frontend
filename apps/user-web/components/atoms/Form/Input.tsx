import clsx from 'clsx';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  leftIcon?: JSX.Element;
}

export default function Input({
  type = 'text',
  id,
  leftIcon,
  ...others
}: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return leftIcon ? (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {leftIcon}{' '}
      </div>
      <input
        {...register(id)}
        type={type}
        id={id}
        name={id}
        {...others}
        className={clsx(
          'block rounded-lg bg-white pl-10 dark:bg-gray-800 dark:text-gray-300 dark:caret-gray-500 sm:text-sm',
          errors && errors[id]
            ? 'border-red-600 focus:border-red-800 focus:ring-red-800 dark:border-red-600 dark:focus:border-red-500 dark:focus:ring-red-500'
            : 'focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-300 dark:focus:ring-primary-300 border-gray-300 dark:border-gray-600'
        )}
      />
    </div>
  ) : (
    <input
      {...register(id)}
      type={type}
      id={id}
      name={id}
      {...others}
      className={clsx(
        'rounded-lg bg-white dark:bg-gray-800 dark:text-gray-300 dark:caret-gray-500 sm:text-sm',
        errors && errors[id]
          ? 'border-red-600 focus:border-red-800 focus:ring-red-800 dark:border-red-600 dark:focus:border-red-500 dark:focus:ring-red-500'
          : 'focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-300 dark:focus:ring-primary-300 border-gray-300 dark:border-gray-600'
      )}
    />
  );
}
