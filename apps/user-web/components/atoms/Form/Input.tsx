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
    <div className="flex flex-row items-center gap-3 text-gray-300 lg:gap-2">
      {leftIcon}
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
    </div>
  ) : (
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
