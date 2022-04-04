import PrimaryButton from '@components/atoms/Button/PrimaryButton';
import LinkTo from '@components/atoms/LinkTo';
import React from 'react';

export default function AuthenticationLinks() {
  return (
    <div className="flex flex-row items-center justify-center gap-8">
      <LinkTo to="/register">
        <PrimaryButton variant="outline">Register</PrimaryButton>
      </LinkTo>
      <LinkTo to="/login">
        <PrimaryButton>Login</PrimaryButton>
      </LinkTo>
    </div>
  );
}
