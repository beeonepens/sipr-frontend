import React from 'react';
import Link from 'next/link';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Link href="/" passHref>
        <a href="/">Logout</a>
      </Link>
    </div>
  );
}
