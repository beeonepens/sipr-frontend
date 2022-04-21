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
        'rounded-lg sm:text-sm',
        errors && errors[id]
          ? 'border-red-600 focus:border-red-800 focus:ring-red-800'
          : 'focus:border-primary-600 focus:ring-primary-600 border-gray-300'
      )}
    />
  );
}
