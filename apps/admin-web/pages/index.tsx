import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h4>Welcome to</h4>
      <h1>SIPR Admin Page</h1>
      <Link href="/login" passHref>
        <a href="/">Login</a>
      </Link>
    </div>
  );
}
