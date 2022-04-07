import React from 'react';

interface Props {
  className?: string;
  onClick?: () => void;
}

export default function PlusIcon({ className = 'h-6 w-6', onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}
