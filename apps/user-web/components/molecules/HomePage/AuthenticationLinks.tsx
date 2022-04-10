import { Button } from 'ui';
import LinkTo from '@components/atoms/LinkTo';
import * as React from 'react';

export default function AuthenticationLinks() {
  return (
    <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-8 px-4 md:w-96 md:grid-cols-2">
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
