import clsx from 'clsx';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  format?: string;
}

export default function InputFile({ id, format, ...others }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      {...register(id)}
      aria-describedby={id}
      id={id}
      accept={format}
      type="file"
      name={id}
      {...others}
      className={clsx(
        'block rounded-lg border bg-white dark:bg-gray-800 dark:text-gray-300 dark:caret-gray-500 sm:text-sm',
        errors && errors[id]
          ? 'border-red-600 focus:border-red-800 focus:ring-red-800 dark:border-red-600 dark:focus:border-red-500 dark:focus:ring-red-500'
          : 'focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-300 dark:focus:ring-primary-300 border-gray-300 dark:border-gray-600'
      )}
    />
  );
}
