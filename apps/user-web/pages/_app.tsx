import React from 'react';
import Head from 'next/head';

import '../styles/globals.css';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>User App | SIPR</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
