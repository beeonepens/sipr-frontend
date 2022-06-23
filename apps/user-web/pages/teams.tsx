import Head from 'next/head';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import TeamsSearch from '@components/molecules/Teams/TeamsSearch';
import NewTeams from '@components/organisms/Teams/NewTeams';
import TeamsItem from '@components/organisms/Teams/TeamsItem';

const teams = [1, 2, 3, 4];

export default function Teams() {
  return (
    <>
      <Head>
        <title>Teams | SIPR</title>
      </Head>

      {/* <ParticipantSubHeader /> */}
      <motion.article
        initial={{ opacity: 0.6, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-4 px-4 md:px-8"
      >
        <TeamsSearch />
        <div
          className={clsx(
            'mt-4 mb-4 grid gap-6 lg:mb-2',
            teams.length > 0
              ? 'grid-cols-1 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1'
          )}
        >
          {/* add item button */}
          <NewTeams totalTeams={teams.length} />
          {teams.map((item) => (
            <TeamsItem key={item} item={item} />
          ))}
        </div>
      </motion.article>
    </>
  );
}
