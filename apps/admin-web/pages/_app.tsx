import React from 'react';
import Head from 'next/head';

import '../styles/globals.css';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>SIPR Admin Page</title>
      </Head>

      <div className="font-sans text-gray-900">
        <Component {...pageProps} />
      </div>
    </>
  );
}
