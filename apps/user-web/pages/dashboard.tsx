import { useMemo } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useQuery } from 'react-query';
import { getDateTimeByUid, getMeetingByUid } from '@utils/queries/meetQuery';
import NewMeeting from '@components/organisms/Dashboard/NewMeeting';
import SmallCalendar from '@components/organisms/Dashboard/SmallCalendar';
import TodayMeeting from '@components/organisms/Dashboard/TodayMeeting';
import UpcomingSchedule from '@components/organisms/Dashboard/UpcomingSchedule';
import TotalActivity from '@components/organisms/Dashboard/TotalActivity';
import { formatToMs } from '@utils/formatDateTime';

export default function Dashboard() {
  const meetings = useQuery(
    ['meetings', typeof window !== 'undefined' && localStorage.getItem('uid')],
    getMeetingByUid
  );
  const datetimes = useQuery(
    ['datetimes', typeof window !== 'undefined' && localStorage.getItem('uid')],
    getDateTimeByUid
  );

  const upcommingEvents = useMemo(() => {
    /** if meetings & datetime data not found, return empty array */
    if (!meetings.data || !datetimes.data) return [];

    /** filter meet with start datetime more than now in milisecond */
    const upMeet = datetimes.data.filter(
      (dt) => new Date(dt.start_datetime).getTime() > new Date().getTime()
    );

    /** return upcoming meet data with it's datetime */
    return upMeet
      .map((dt) => ({
        ...dt,
        ...meetings.data.find((meet) => meet.id_meet === dt.id_meet),
      }))
      .sort(
        (a, b) => formatToMs(a.start_datetime) - formatToMs(b.start_datetime)
      );
  }, [meetings.data, datetimes.data]);

  const todayEvents = useMemo(() => {
    /** if meetings & datetime data not found, return empty array */
    if (!meetings.data || !datetimes.data) return [];

    /** filter events with start date same as today */
    const todayMeet = datetimes.data.filter(
      (dt) =>
        new Date(dt.start_datetime).toLocaleDateString() ===
        new Date().toLocaleDateString()
    );

    /** return upcoming meet data with it's datetime */
    return todayMeet.map((dt) => ({
      ...dt,
      ...meetings.data.find((meet) => meet.id_meet === dt.id_meet),
    }));
  }, [meetings.data, datetimes.data]);

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
          {/* small calendar section */}
          <section className="col-span-1 flex flex-col gap-4 md:gap-6">
            <NewMeeting />
            <SmallCalendar />
          </section>

          {/* today's meetiing section */}
          <section className="col-span-1 flex flex-col gap-4 md:gap-6 lg:col-span-2">
            <div className="flex h-11 flex-row items-center">
              <h2 className="text-primary-700 dark:text-primary-300 text-3xl font-bold">
                Today
              </h2>
            </div>

            <TodayMeeting events={todayEvents} />
          </section>
        </div>

        <div className="mt-6 mb-6 grid grid-cols-1 items-start gap-6 md:mt-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-10">
          {/* upcoming schedule section */}
          <section className="col-span-1 flex flex-col gap-4">
            <h3 className="text-primary-700 dark:text-primary-300 text-2xl font-bold">
              Upcoming Schedule
            </h3>

            <UpcomingSchedule events={upcommingEvents.slice(0, 3)} />
          </section>

          {/* total activity section */}
          <section className="col-span-1 flex h-full w-full flex-col gap-4 lg:col-span-2">
            <h3 className="text-primary-700 dark:text-primary-300 text-2xl font-bold">
              Total Activity
            </h3>

            <TotalActivity />
          </section>
        </div>
      </motion.article>
    </>
  );
}
