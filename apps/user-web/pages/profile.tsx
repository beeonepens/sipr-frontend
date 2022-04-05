import React from 'react';
import DangerButton from '@components/atoms/Button/DangerButton';
import LinkTo from '@components/atoms/LinkTo';

export default function Profile() {
  return (
    <article className="p-4">
      <h2 className="mb-6">Profile Page</h2>

      <LinkTo to="/">
        <DangerButton>Logout</DangerButton>
      </LinkTo>
    </article>
  );
}
