import Head from 'next/head';
import AuthenticationLinks from '@components/molecules/HomePage/AuthenticationLinks';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to SIPR</title>
      </Head>

      <article className="bg-primary-50 flex w-full flex-col gap-8 px-8 py-16">
        <div>
          <h3 className="text-center text-2xl font-bold text-gray-800">
            Welcome to
          </h3>
          <h1 className="text-primary-900 mt-1 text-center text-4xl font-bold">
            Sistem Informasi Penjadwalan Rapat
          </h1>
        </div>

        <hr />
        <AuthenticationLinks />
      </article>
    </>
  );
}
