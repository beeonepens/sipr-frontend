import Head from 'next/head';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import TeamsSearch from '@components/molecules/Teams/TeamsSearch';
import TeamToolbar from '@components/organisms/Teams/TeamToolbar';
import TeamsItem from '@components/organisms/Teams/TeamsItem';
import { useUserTeamQuery } from '@utils/hooks/queryHooks/useTeamQuery';

// const teams = [1, 2, 3, 4];

export default function Teams() {
  const teams = useUserTeamQuery();

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
        <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
          <TeamToolbar />
          <TeamsSearch />
        </div>
        {teams.isLoading && <h4>Loading</h4>}
        {teams.isSuccess && (
          <div
            className={clsx(
              'mt-4 mb-4 grid gap-6 lg:mb-2',
              teams.data.length > 0
                ? 'grid-cols-1 lg:grid-cols-3 xl:grid-cols-4'
                : 'grid-cols-1'
            )}
          >
            {/* add item button */}
            {/* <TeamToolbar totalTeams={teams.data.length} /> */}
            {teams.data.map((item) => (
              <TeamsItem key={item.id_team} item={item} />
            ))}
          </div>
        )}
      </motion.article>
    </>
  );
}
