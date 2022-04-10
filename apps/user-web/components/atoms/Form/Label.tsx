import * as React from 'react';

interface Props {
  id: string;
  children: string;
}

export default function Label({ children = 'label', id }: Props) {
  return (
    <label htmlFor={id} className="text-sm font-medium text-gray-700">
      {children}
    </label>
  );
}
