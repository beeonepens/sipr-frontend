import * as React from 'react';
import Head from 'next/head';
import MeetingDetailsModal from '@components/molecules/Agenda/MeetingDetailsModal';
import { EVENTS, EventType } from '@utils/constant';
import AgendaSubHeader from '@components/organisms/Agenda/AgendaSubHeader';
import AgendaTable from '@components/organisms/Agenda/AgendaTable';

import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function Agenda() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [openEvent, setOpenEvent] = React.useState<EventType | null>(null);

  function toggleModal() {
    setIsModalOpen((prevState) => !prevState);
  }

  const handleSelectEvent = React.useCallback((e) => {
    console.log(e);
    setOpenEvent(e);
    toggleModal();
  }, []);

  return (
    <>
      <Head>
        <title>Agenda | SIPR</title>
      </Head>

      <AgendaSubHeader />
      <article className="py-4 px-4 md:px-8">
        <AgendaTable events={EVENTS} handleSelectEvent={handleSelectEvent} />
      </article>

      <MeetingDetailsModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        openEvent={openEvent}
      />
    </>
  );
}
