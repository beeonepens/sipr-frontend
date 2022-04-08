import React from 'react';
import LinkTo from '@components/atoms/LinkTo';
import { Button } from 'ui';

export default function Login() {
  return (
    <div className="container mx-auto py-4">
      <h1>Login Page</h1>
      <LinkTo to="/dashboard">
        <Button>Login</Button>
      </LinkTo>
    </div>
  );
}
