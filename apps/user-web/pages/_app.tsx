import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';

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
