import Head from 'next/head';
import { Button } from 'ui';

export default function Invitations() {
  return (
    <>
      <Head>
        <title>Invitations | SIPR</title>
      </Head>

      <article className="py-4 px-4 md:px-8">
        <div className="mt-4 mb-4 grid grid-cols-1 gap-6 lg:mb-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="rounded-lg px-4 py-3 outline outline-1 outline-gray-300 lg:px-6"
            >
              <p className="text-lg font-bold">New Meeting Invitations</p>
              <p className="mt-3 text-sm text-gray-700">
                Arya just invite you to a meeting about{' '}
                <span className="font-bold text-gray-800">
                  &apos;Discuss New Dashboard Design&apos;
                </span>{' '}
                on Saturday, 19 Feb 2022.
              </p>

              <div className="mt-3 flex flex-col items-end justify-between gap-4 lg:flex-row">
                <p className="text-sm text-gray-700">2 hour ago</p>
                <div className="grid w-full grid-cols-2 items-center justify-between gap-6 md:w-fit lg:flex lg:flex-row lg:justify-end">
                  <Button color="danger">Decline</Button>
                  <Button>Accept</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
