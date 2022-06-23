import { useTeamDetailQuery } from '@utils/hooks/queryHooks/useTeamQuery';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useRouter } from 'next/router';

function TeamDetailPage() {
  const { query } = useRouter();
  const team = useTeamDetailQuery(query.id as string);

  return (
    <>
      <Head>
        <title>Calendar | SIPR</title>
      </Head>

      <motion.article
        initial={{ opacity: 0.6, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-4 px-4 md:px-8"
      >
        <h1>Team Details</h1>

        {team.isLoading && <h4>Loading</h4>}
        {team.isSuccess && (
          <div className="my-5">
            <p>Name: {team.data[0].name_teams}</p>
            <p>Description: {team.data[0].description}</p>
            <p>Invite Code: {team.data[0].team_invite_code}</p>
          </div>
        )}
      </motion.article>
    </>
  );
}

export default TeamDetailPage;
