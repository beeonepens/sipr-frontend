import SubHeader from '@components/organisms/Participant/SubHeader';
import Head from 'next/head';
import { PlusCircleIcon } from 'ui';

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
            <PlusCircleIcon className="text-primary-850 mb-2 h-6 w-6" />
            <p className="text-base text-gray-600">Create new team</p>
          </div>

          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="outline-accent-400 rounded-lg bg-white py-4 px-3 outline outline-1 transition duration-75 hover:cursor-pointer hover:bg-gray-200"
            >
              <h4 className="text-lg font-medium">Team Name</h4>
              <p className="text-sm text-gray-500">Member of class 2 D3 IT B</p>

              <p className="mt-4 text-sm text-gray-700">{3 + item} members</p>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
