import Head from 'next/head';
import { motion } from 'framer-motion';
import ParticipantItem from '@components/organisms/Participant/ParticipantItem';
import ParticipantSubHeader from '@components/organisms/Participant/ParticipantSubHeader';
import { PlusCircleIcon } from '@heroicons/react/outline';

export default function Participant() {
  return (
    <>
      <Head>
        <title>Participant | SIPR</title>
      </Head>

      <ParticipantSubHeader />
      <motion.article
        initial={{ opacity: 0.6, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-4 px-4 md:px-8"
      >
        <div className="mt-4 mb-4 grid grid-cols-2 gap-6 lg:mb-2 lg:grid-cols-4 xl:grid-cols-6">
          {/* add item button */}
          <figure className="relative flex h-full w-full flex-col items-center justify-center rounded-lg bg-white  shadow-md shadow-gray-300/25 outline-dashed outline-1 outline-gray-300 hover:cursor-pointer dark:bg-zinc-900 dark:shadow-black/20 dark:outline-gray-700">
            <PlusCircleIcon className="text-primary-600 dark:text-primary-300 mb-4 h-8 w-8" />
            <h2 className="text-gray-600 dark:text-gray-300">Add New</h2>
            <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full rounded-lg bg-gray-700 opacity-0 transition duration-75 hover:opacity-20 dark:bg-zinc-700" />
          </figure>

          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <ParticipantItem key={item} />
          ))}
        </div>
      </motion.article>
    </>
  );
}
