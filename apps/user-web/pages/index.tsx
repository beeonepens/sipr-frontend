import * as React from 'react';
import Head from 'next/head';
import AuthenticationLinks from '@components/molecules/HomePage/AuthenticationLinks';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to SIPR</title>
      </Head>

      <article className="bg-primary-50 py-16">
        <h3 className="text-center text-2xl font-bold text-gray-800">
          Welcome to
        </h3>
        <h1 className="text-primary-900 mt-1 mb-8 text-center text-4xl font-bold">
          Sistem Informasi Penjadwalan Rapat
        </h1>

        <AuthenticationLinks />
      </article>
    </>
  );
}
