import clsx from 'clsx';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  rows?: number;
}

export default function TextArea({ id, rows = 3, ...others }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <textarea
      {...register(id)}
      id={id}
      name={id}
      rows={rows}
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
