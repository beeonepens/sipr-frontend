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

      <div className="min-h-screen font-sans text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Component {...pageProps} />
      </div>
    </>
  );
}
