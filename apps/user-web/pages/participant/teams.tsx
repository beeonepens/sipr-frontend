import Head from 'next/head';
import { PlusCircleIcon } from 'ui';
import SubHeader from '@components/organisms/Participant/SubHeader';
import TeamsItem from '@components/organisms/Participant/Teams/TeamsItem';

export default function Teams() {
  return (
    <>
      <Head>
        <title>Teams | SIPR</title>
      </Head>

      <SubHeader />
      <article className="py-4 px-4 md:px-8">
        <div className="mt-4 mb-4 grid grid-cols-1 gap-6 lg:mb-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* add item button */}
          <div className="flex flex-col items-center justify-center rounded-lg bg-white py-4 px-3 outline-dashed outline-1 outline-gray-300 transition duration-75 hover:cursor-pointer hover:bg-gray-200">
            <PlusCircleIcon className="text-primary-600 mb-2 h-6 w-6" />
            <p className="text-base text-gray-600">Create new team</p>
          </div>

          {[1, 2, 3, 4, 5].map((item) => (
            <TeamsItem key={item} item={item} />
          ))}
        </div>
      </article>
    </>
  );
}
