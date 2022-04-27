import Head from 'next/head';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { PlusCircleIcon } from '@heroicons/react/outline';
import ParticipantSubHeader from '@components/organisms/Participant/ParticipantSubHeader';
import TeamsItem from '@components/organisms/Participant/Teams/TeamsItem';

const teams = [1, 2, 3, 4];

export default function Teams() {
  return (
    <>
      <Head>
        <title>Teams | SIPR</title>
      </Head>

      <ParticipantSubHeader />
      <motion.article
        initial={{ opacity: 0.6, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-4 px-4 md:px-8"
      >
        <div
          className={clsx(
            'mt-4 mb-4 grid gap-6 lg:mb-2',
            teams.length > 0
              ? 'grid-cols-1 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          )}
        >
          {/* add item button */}
          <div
            className={clsx(
              'flex flex-col items-center justify-center rounded-lg bg-white py-4 px-3 shadow-md shadow-gray-300/25 outline-dashed outline-1 outline-gray-300 transition duration-75 hover:cursor-pointer hover:bg-gray-200 dark:bg-zinc-900 dark:shadow-black/20 dark:outline-gray-700 dark:hover:bg-zinc-800',
              teams.length > 0 ? 'h-full w-full' : 'h-36 w-full'
            )}
          >
            <PlusCircleIcon className="text-primary-600 dark:text-primary-300 mb-2 h-6 w-6" />
            <p className="text-base text-gray-600 dark:text-gray-300">
              Create new team
            </p>
          </div>

          {teams.map((item) => (
            <TeamsItem key={item} item={item} />
          ))}
        </div>
      </motion.article>
    </>
  );
}
