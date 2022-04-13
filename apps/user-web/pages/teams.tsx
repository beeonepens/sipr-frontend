import * as React from 'react';
import Head from 'next/head';
import { Button } from 'ui';

export default function Teams() {
  return (
    <>
      <Head>
        <title>Teams | SIPR</title>
      </Head>

      <article className="py-4 px-4 md:px-8">
        <h2 className="mb-6">Teams Page (in Progress)</h2>
        <Button
          color="danger"
          onClick={() => {
            throw new Error('Sentry Frontend Error');
          }}
        >
          Sentry Test
        </Button>
      </article>
    </>
  );
}
