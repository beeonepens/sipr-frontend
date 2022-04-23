import Head from 'next/head';
import { motion } from 'framer-motion';
import NewMeeting from '@components/organisms/Dashboard/NewMeeting';
import SmallCalendar from '@components/organisms/Dashboard/SmallCalendar';
import TodayMeeting from '@components/organisms/Dashboard/TodayMeeting';
import { EVENTS } from '@utils/constant';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard | SIPR</title>
      </Head>

      <motion.article
        initial={{ opacity: 0.6, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-4 px-4 md:px-8"
      >
        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-10">
          <section className="col-span-1 flex flex-col gap-4 md:gap-6">
            <NewMeeting />
            <SmallCalendar />
          </section>

          <section className="col-span-1 flex flex-col gap-4 md:gap-6 lg:col-span-2">
            <div className="flex h-12 flex-row items-center">
              <h2 className="text-primary-700 dark:text-primary-300 text-3xl font-bold">
                Today
              </h2>
            </div>

            <TodayMeeting events={[EVENTS[0], EVENTS[1]]} />
          </section>
        </div>
      </motion.article>
    </>
  );
}
