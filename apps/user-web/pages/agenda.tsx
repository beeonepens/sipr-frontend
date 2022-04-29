import * as React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import MeetingDetailsModal from '@components/molecules/Agenda/MeetingDetailsModal';
import DeleteMeetingModal from '@components/molecules/Agenda/DeleteMeetingModal';
import { EventType } from '@utils/constant';
import AgendaSubHeader from '@components/organisms/Agenda/AgendaSubHeader';
import AgendaTable from '@components/organisms/Agenda/AgendaTable';
import { useQuery } from 'react-query';
import { getAllMeeting } from '@utils/queries/meetQuery';
import CreateMeetingModal from '@components/molecules/Dashboard/CreateMeetingModal';
import { Button } from 'ui';
import { FilterIcon, PlusIcon } from '@heroicons/react/outline';
import Search from '@components/molecules/Search';

export default function Agenda() {
  const [isNewModalOpen, setIsNewModalOpen] = React.useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = React.useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = React.useState(false);
  const [openEvent, setOpenEvent] = React.useState<EventType | null>(null);

  const meetings = useQuery(['meetings'], getAllMeeting);

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

        {meetings.isLoading && <p>Loading...</p>}
        {meetings.isSuccess && (
          <AgendaTable
            events={meetings.data.data}
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
