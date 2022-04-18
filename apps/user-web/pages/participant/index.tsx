import SubHeader from '@components/organisms/Participant/SubHeader';
import Head from 'next/head';
import Image from 'next/image';
import placeholderAvatar from '../../public/uploads/avatar-man.png';

export default function Participant() {
  return (
    <>
      <Head>
        <title>Participant | SIPR</title>
      </Head>

      <SubHeader />
      <article className="py-4 px-4 md:px-8">
        <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-4 xl:grid-cols-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <figure
              key={item}
              className="relative h-auto w-full rounded-xl border border-gray-300 hover:cursor-pointer"
            >
              <Image
                className="block rounded-xl "
                src={placeholderAvatar}
                alt="avatar"
                height="360"
                width="320"
                objectFit="cover"
                placeholder="blur"
                layout="responsive"
                // blurDataURL={rgbDataURL(220, 220, 220)}
              />
              <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full rounded-xl bg-gray-800 opacity-0 transition duration-100 hover:opacity-50" />
            </figure>
          ))}

          <figure className="relative flex h-auto w-full flex-col items-center justify-center rounded-xl border border-gray-300 hover:cursor-pointer">
            <h2>Add New</h2>
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full rounded-xl bg-gray-800 opacity-0 transition duration-100 hover:opacity-50" />
          </figure>
        </div>
      </article>
    </>
  );
}
