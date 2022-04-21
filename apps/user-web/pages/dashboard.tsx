import Head from 'next/head';
import { motion } from 'framer-motion';
import NewMeeting from '@components/organisms/Dashboard/NewMeeting';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | SIPR</title>
      </Head>

      <motion.article
        initial={{ opacity: 0.6, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-[120vh] py-4 px-4 md:px-8"
      >
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-4">
          <NewMeeting />

          <h2 className="text-primary-700 text-3xl font-bold">Today</h2>
        </div>
      </motion.article>
    </>
  );
}
