import Head from 'next/head';
import AuthenticationLinks from '@components/molecules/HomePage/AuthenticationLinks';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to SIPR</title>
      </Head>

      <article className="flex min-h-screen w-full flex-col gap-8 bg-white dark:bg-zinc-900 px-8 py-16">
        <div>
          <h3 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-300">
            Welcome to
          </h3>
          <h1 className="text-primary-700 dark:text-primary-300 mt-1 text-center text-4xl font-bold">
            Sistem Informasi Penjadwalan Rapat
          </h1>
        </div>

        <hr className="opacity-100 dark:opacity-30" />
        <AuthenticationLinks />
      </article>
    </>
  );
}
