import React from 'react';
import Head from 'next/head';
import { Button } from 'ui';
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
          <Button color="danger">Logout</Button>
        </LinkTo>
      </article>
    </>
  );
}
