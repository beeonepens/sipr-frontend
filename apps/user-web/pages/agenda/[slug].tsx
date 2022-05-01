// import { useRouter } from 'next/router';
// import { ArrowLeftIcon } from 'ui';
// import LinkTo from '@components/atoms/LinkTo';
import Head from 'next/head';
import { motion } from 'framer-motion';
import EditMeetingForms from '@components/organisms/Agenda/Edit/EditMeetingForms';
import LinkTo from '@components/atoms/LinkTo';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import { useMeetDetailQuery } from '@utils/hooks/queryHooks/useMeetingQuery';
import { useAllRoomQuery } from '@utils/hooks/queryHooks/useRoomQuery';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton';

export default function MeetingDetail() {
  const { query } = useRouter();

  const rooms = useAllRoomQuery();
  const meeting = useMeetDetailQuery((query.slug as string) || '');

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
        {/* back button */}
        {/* <div className="flex flex-row items-center justify-start">
          <LinkTo
            to="/calendar"
            className="text-primary-600 hover:text-primary-600"
          >
            <ArrowLeftIcon />
          </LinkTo>
        </div> */}

        <div className="m-4 lg:mx-6">
          <div className="mb-4 flex flex-row items-center justify-between gap-4 md:justify-start">
            <LinkTo
              to="/agenda"
              className="text-primary-700 dark:text-primary-300 dark:hover:text-primary-400 hover:text-primary-600"
            >
              <ArrowLeftIcon className="h-6 w-6" />
            </LinkTo>

            <h3 className="text-primary-700 dark:text-primary-300 text-2xl font-semibold leading-6">
              Edit Meeting Details
            </h3>
          </div>

          {/* edit event form */}
          {(rooms.isLoading || meeting.isLoading) && (
            <div className="w-full rounded-lg border border-gray-300 bg-white p-6 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:bg-gray-800 dark:shadow-black/20">
              <Skeleton count={6} height={32} />
            </div>
          )}
          {rooms.isSuccess && meeting.isSuccess && (
            <EditMeetingForms
              meet={meeting.data.meet[0]}
              datetime={meeting.data.datetime[0]}
              rooms={rooms.data.data}
            />
          )}
        </div>
      </motion.article>
    </>
  );
}
