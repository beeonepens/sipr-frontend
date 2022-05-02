import * as React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import MeetingDetailsModal from '@components/molecules/Agenda/MeetingDetailsModal';
import DeleteMeetingModal from '@components/molecules/Agenda/DeleteMeetingModal';
import AgendaSubHeader from '@components/organisms/Agenda/AgendaSubHeader';
import AgendaTable from '@components/organisms/Agenda/AgendaTable';
import { formatToMs } from '@utils/formatDateTime';
import { MeetWithDate } from '@utils/types/meet.dto';
import {
  useMeetingQuery,
  useMeetTimeQuery,
} from '@utils/hooks/queryHooks/useMeetingQuery';

export default function Agenda() {
  const [isDetailModalOpen, setIsDetailModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [openEvent, setOpenEvent] = React.useState<MeetWithDate | null>(null);

  const meetings = useMeetingQuery();
  const datetimes = useMeetTimeQuery();

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

  function toggleDetailModal() {
    setIsDetailModalOpen((prevState) => !prevState);
  }

  function toggleDeleteModal() {
    setIsDeleteModalOpen((prevState) => !prevState);
  }

  const handleSelectEvent = React.useCallback((e) => {
    setOpenEvent(e);
    toggleDetailModal();
  }, []);

  const handleDeleteEvent = React.useCallback((e) => {
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
        {(meetings.isLoading || datetimes.isLoading) && (
          <div className="relative mt-4 overflow-x-auto rounded-md border border-gray-300 bg-white p-4 shadow-md shadow-gray-300/25 dark:border-gray-700 dark:bg-gray-800 dark:shadow-black/20 sm:rounded-lg">
            <Skeleton count={8} />
          </div>
        )}
        {meetings.isSuccess && datetimes.isSuccess && (
          <AgendaTable
            meets={meetingList}
            handleDeleteEvent={handleDeleteEvent}
            handleSelectEvent={handleSelectEvent}
          />
        )}
      </motion.article>

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
