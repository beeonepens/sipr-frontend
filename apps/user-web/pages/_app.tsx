import React from 'react';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { isPublicUrl } from '@utils/constant';
import Sidebar from '@components/organisms/Sidebar';
import Header from '@components/organisms/Header';

import '../styles/globals.css';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <div
      className={clsx(
        'min-h-screen font-sans text-gray-900',
        !isPublicUrl(pathname)
          ? 'flex min-h-screen flex-row justify-between'
          : ''
      )}
    >
      {/* only show sidebar in non-public url */}
      {!isPublicUrl(pathname) && <Sidebar />}
      <main className="relative z-0 w-full duration-300">
        {/* only show header in non-public url */}
        {!isPublicUrl(pathname) && <Header />}
        <Component {...pageProps} />
      </main>
    </div>
  );
}
