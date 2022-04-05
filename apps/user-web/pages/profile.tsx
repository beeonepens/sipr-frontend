import React from 'react';
import Head from 'next/head';
import DangerButton from '@components/atoms/Button/DangerButton';
import LinkTo from '@components/atoms/LinkTo';

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | SIPR</title>
      </Head>

      <article className="p-4">
        <h2 className="mb-6">Profile Page</h2>

        <LinkTo to="/">
          <DangerButton>Logout</DangerButton>
        </LinkTo>
      </article>
    </>
  );
}
