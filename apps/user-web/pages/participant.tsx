import SubHeader from '@components/organisms/SubHeader';
import Head from 'next/head';
import { Button } from 'ui';

export default function Participant() {
  return (
    <>
      <Head>
        <title>Participant | SIPR</title>
      </Head>

      <SubHeader />
      <article className="py-4 px-4 md:px-8">
        <h2 className="mb-6">Participant Page (in Progress)</h2>
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
