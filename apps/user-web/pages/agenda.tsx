import * as React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import MeetingDetailsModal from '@components/molecules/Agenda/MeetingDetailsModal';
import DeleteMeetingModal from '@components/molecules/Agenda/DeleteMeetingModal';
import { EventType } from '@utils/constant';
import AgendaSubHeader from '@components/organisms/Agenda/AgendaSubHeader';
import AgendaTable from '@components/organisms/Agenda/AgendaTable';
import { useQuery } from 'react-query';
import CreateMeetingModal from '@components/molecules/Dashboard/CreateMeetingModal';
import { Button } from 'ui';
import { FilterIcon, PlusIcon } from '@heroicons/react/outline';
import Search from '@components/molecules/Search';
import { getDateTimeByUid, getMeetingByUid } from '@utils/queries/meetQuery';
import { formatToMs } from '@utils/formatDateTime';

export default function Agenda() {
  const [isNewModalOpen, setIsNewModalOpen] = React.useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [openEvent, setOpenEvent] = React.useState<EventType | null>(null);

  const meetings = useQuery(
    ['meetings', typeof window !== 'undefined' && localStorage.getItem('uid')],
    getMeetingByUid
  );
  const datetimes = useQuery(
    ['datetimes', typeof window !== 'undefined' && localStorage.getItem('uid')],
    getDateTimeByUid
  );

  const meetingList = React.useMemo(() => {
    /** if meetings & datetime data not found, return empty array */
    if (!meetings.data || !datetimes.data) return [];

    return (
      datetimes.data
        /** combine datetime & meeting detail data */
        .map((dt) => ({
          ...dt,
          ...meetings.data.find((meet) => meet.id_meet === dt.id_meet),
        }))
        /** sort by the nearest time */
        .sort(
          (a, b) => formatToMs(a.start_datetime) - formatToMs(b.start_datetime)
        )
    );
  }, [meetings.data, datetimes.data]);

  function toggleNewModal() {
    setIsNewModalOpen((prevState) => !prevState);
  }

  function toggleDetailModal() {
    setIsDetailModalOpen((prevState) => !prevState);
  }

  function toggleDeleteModal() {
    setIsDeleteModalOpen((prevState) => !prevState);
  }

  const handleSelectEvent = React.useCallback((e) => {
    console.log(e);
    setOpenEvent(e);
    toggleDetailModal();
  }, []);

  const handleDeleteEvent = React.useCallback((e) => {
    console.log(e);
    setOpenEvent(e);
    toggleDeleteModal();
  }, []);

  return (
    <>
      <Head>
        <title>Agenda | SIPR</title>
      </Head>

      <AgendaSubHeader />
      <motion.article
        initial={{ opacity: 0.6, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-4 px-4 md:px-8"
      >
        {/* table toolbar */}
        <div className="flex flex-col items-center justify-between gap-3 lg:flex-row">
          <div className="flex flex-row justify-start gap-6">
            <Button onClick={toggleNewModal} padding="sm" text="sm">
              <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
                <PlusIcon className="h-4 w-4" />
                New Meeting
              </span>
            </Button>
            <Button padding="sm" text="sm" variant="outline">
              <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
                <FilterIcon className="h-4 w-4" />
                Filter
              </span>
            </Button>
          </div>

          <Search placeholder="Search meeting name" />
        </div>

        {meetings.isLoading && (
          <div className="relative mt-4 overflow-x-auto rounded-md border border-gray-300 bg-white p-4 shadow-md shadow-gray-300/25 dark:border-gray-700 dark:bg-gray-800 dark:shadow-black/20 sm:rounded-lg">
            <Skeleton count={8} />
          </div>
        )}
        {meetings.isSuccess && (
          <AgendaTable
            events={meetingList}
            handleDeleteEvent={handleDeleteEvent}
            handleSelectEvent={handleSelectEvent}
          />
        )}
      </motion.article>

      <CreateMeetingModal
        isModalOpen={isNewModalOpen}
        toggleModal={toggleNewModal}
      />

      <MeetingDetailsModal
        isModalOpen={isDetailModalOpen}
        toggleModal={toggleDetailModal}
        openEvent={openEvent}
      />

      <DeleteMeetingModal
        isModalOpen={isDeleteModalOpen}
        toggleModal={toggleDeleteModal}
        openEvent={openEvent}
      />
    </>
  );
}
