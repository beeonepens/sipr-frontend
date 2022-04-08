import React from 'react';
import Link from 'next/link';

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <Link href="/dashboard" passHref>
        <a href="/">Login</a>
      </Link>
    </div>
  );
}
