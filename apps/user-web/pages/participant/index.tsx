import SubHeader from '@components/organisms/Participant/SubHeader';
import Head from 'next/head';
import Image from 'next/image';
import { PlusCircleIcon } from 'ui';
import placeholderAvatar from '../../public/uploads/avatar-man.png';

export default function Participant() {
  return (
    <>
      <Head>
        <title>Participant | SIPR</title>
      </Head>

      <SubHeader />
      <article className="py-4 px-4 md:px-8">
        <div className="mt-4 mb-4 grid grid-cols-2 gap-6 lg:mb-2 lg:grid-cols-4 xl:grid-cols-6">
          {/* add item button */}
          <figure className="relative flex h-full w-full flex-col items-center justify-center rounded-lg outline-dashed  outline-1 outline-gray-300 hover:cursor-pointer">
            <PlusCircleIcon className="text-primary-850 mb-4 h-8 w-8" />
            <h2>Add New</h2>
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full rounded-lg bg-gray-800 opacity-0 transition duration-75 hover:opacity-30" />
          </figure>

          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <figure
              key={item}
              className="relative h-auto w-full rounded-lg outline outline-1 outline-gray-300 hover:cursor-pointer"
            >
              <Image
                className="block rounded-lg "
                src={placeholderAvatar}
                alt="avatar"
                height="360"
                width="320"
                objectFit="cover"
                placeholder="blur"
                layout="responsive"
                // blurDataURL={rgbDataURL(220, 220, 220)}
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 flex h-full w-full flex-col items-center justify-end rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-900 pb-3">
                <p className="text-sm font-medium text-white shadow">
                  M Arya Pratama
                </p>
                <p className="text-sm text-white text-opacity-75 shadow">
                  aryarya@email.com
                </p>
              </div>
              <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full rounded-lg bg-gray-800 opacity-0 transition duration-75 hover:opacity-30" />
            </figure>
          ))}
        </div>
      </article>
    </>
  );
}
