import PrimaryButton from '@components/atoms/Button/PrimaryButton';
import LinkTo from '@components/atoms/LinkTo';
import React from 'react';

export default function AuthenticationLinks() {
  return (
    <div className="mx-auto grid w-full grid-cols-1 items-center justify-center gap-8 md:w-1/5 md:grid-cols-2">
      <LinkTo to="/register">
        <PrimaryButton fullWidth variant="outline">
          Register
        </PrimaryButton>
      </LinkTo>
      <LinkTo to="/login">
        <PrimaryButton fullWidth>Login</PrimaryButton>
      </LinkTo>
    </div>
  );
}
