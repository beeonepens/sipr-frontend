import React from 'react';
import Head from 'next/head';
import CreateMeetingButton from '@components/molecules/Dashboard/CreateMeetingButton';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | SIPR</title>
      </Head>

      <article className="p-4">
        <div className="grid grid-cols-2 items-center gap-4">
          <div>
            <CreateMeetingButton />
          </div>

          <h2 className="text-primary-950 text-3xl font-bold">Today</h2>
        </div>
      </article>
    </>
  );
}
