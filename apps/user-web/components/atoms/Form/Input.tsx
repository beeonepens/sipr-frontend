import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  id: string;
  ref?: string;
}

export default function Input({ type = 'text', id, ref, ...others }: Props) {
  return (
    <input
      type={type}
      id={id}
      name={id}
      ref={ref}
      {...others}
      className="focus:border-primary-800 focus:ring-primary-800 rounded-lg border-gray-300 sm:text-sm "
    />
  );
}
