import React from 'react';
import Link from 'next/link';

interface Props {
  to: string;
  children: string | JSX.Element;
  className?: string;
}

export default function LinkTo({ to, children = 'Link', className }: Props) {
  return (
    <Link href={to} passHref>
      <a href="/" className={className}>
        {children}
      </a>
    </Link>
  );
}
