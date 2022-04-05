import React from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className="border-b border-gray-300 py-4 px-8 text-xl font-semibold text-blue-800">
      <h4 className="capitalize">{pathname.replace('/', '')}</h4>
    </header>
  );
}
