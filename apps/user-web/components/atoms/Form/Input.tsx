import clsx from 'clsx';
import * as React from 'react';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
}

export default function Input({ type = 'text', id, ...others }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      {...register(id)}
      type={type}
      id={id}
      name={id}
      {...others}
      className={clsx(
        'rounded-lg sm:text-sm',
        errors && errors[id]
          ? 'border-red-600 focus:border-red-800 focus:ring-red-800'
          : 'focus:border-primary-850 focus:ring-primary-850 border-gray-300'
      )}
    />
  );
}
