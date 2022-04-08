import { Button } from 'ui';
import LinkTo from '@components/atoms/LinkTo';
import React from 'react';

export default function AuthenticationLinks() {
  return (
    <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-8 md:w-1/5 md:grid-cols-2">
      <LinkTo to="/register">
        <Button fullWidth variant="outline">
          Register
        </Button>
      </LinkTo>
      <LinkTo to="/login">
        <Button fullWidth>Login</Button>
      </LinkTo>
    </div>
  );
}
