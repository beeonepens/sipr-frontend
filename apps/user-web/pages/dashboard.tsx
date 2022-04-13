import * as React from 'react';
import Head from 'next/head';
import NewMeeting from '@components/organisms/Dashboard/NewMeeting';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | SIPR</title>
      </Head>

      <article className="h-[120vh] py-4 px-4 md:px-8">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-4">
          <NewMeeting />

          <h2 className="text-primary-950 text-3xl font-bold">Today</h2>
        </div>
      </article>
    </>
  );
}
