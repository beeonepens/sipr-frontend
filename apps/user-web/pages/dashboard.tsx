import Head from 'next/head';
import { motion } from 'framer-motion';
import NewMeeting from '@components/organisms/Dashboard/NewMeeting';
import SmallCalendar from '@components/organisms/Dashboard/SmallCalendar';
import TodayMeeting from '@components/organisms/Dashboard/TodayMeeting';
import { EVENTS } from '@utils/constant';
import { Button } from 'ui';
import { DesktopComputerIcon, UserGroupIcon } from '@heroicons/react/outline';

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
            <div className="flex h-11 flex-row items-center">
              <h2 className="text-primary-700 dark:text-primary-300 text-3xl font-bold">
                Today
              </h2>
            </div>

            <TodayMeeting events={[EVENTS[0], EVENTS[1]]} />
          </section>
        </div>

        <div className="mt-6 grid grid-cols-1 items-start gap-6 md:mt-6 md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-10">
          <section className="col-span-1 flex flex-col gap-4">
            <h3 className="text-primary-700 dark:text-primary-300 text-2xl font-bold">
              Upcoming Schedule
            </h3>

            <div className="mb-8 grid grid-cols-1 justify-center gap-4 rounded-lg border border-gray-300 p-4 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:shadow-black/25">
              {EVENTS.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="grid grid-cols-5 items-center gap-3"
                >
                  {/* meeting status icon */}
                  <div className="border-primary-700 col-span-1 rounded-lg border p-3 dark:border-gray-600">
                    {item.isOnline ? (
                      <DesktopComputerIcon className="text-primary-700 dark:text-primary-300 h-full w-full" />
                    ) : (
                      <UserGroupIcon className="text-primary-700 dark:text-primary-300 h-full w-full" />
                    )}
                  </div>

                  {/* meeting info icon */}
                  <div className="col-span-4 flex flex-col">
                    <p className="font-semibold">{item.title}</p>
                    <span className="text-sm text-gray-600 dark:text-gray-500">
                      {item.isOnline ? item.link : item.location}
                    </span>
                  </div>
                </div>
              ))}

              <Button variant="outline" text="sm" rounded="lg">
                See All Schedule
              </Button>
            </div>
          </section>
        </div>
      </motion.article>
    </>
  );
}
