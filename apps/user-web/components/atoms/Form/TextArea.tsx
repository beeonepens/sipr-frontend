import React from 'react';

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  rows?: number;
  ref?: string;
}

export default function TextArea({ id, ref, rows = 3, ...others }: Props) {
  return (
    <textarea
      id={id}
      name={id}
      ref={ref}
      rows={rows}
      {...others}
      className="focus:border-primary-850 focus:ring-primary-850 rounded-lg border-gray-300 sm:text-sm "
    />
  );
}
