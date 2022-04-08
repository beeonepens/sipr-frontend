import React from 'react';

interface Props {
  className?: string;
  onClick?: () => void;
}

export function MenuIcon({ className = 'h-6 w-6', onClick }: Props) {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  );
}
