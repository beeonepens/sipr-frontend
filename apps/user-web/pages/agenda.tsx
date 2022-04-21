import * as React from 'react';
import Head from 'next/head';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enGB from 'date-fns/locale/en-GB';
import MeetingDetailsModal from '@components/molecules/Agenda/MeetingDetailsModal';
import { EVENTS } from '@utils/constant';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import AgendaSubHeader from '@components/organisms/Agenda/AgendaSubHeader';

export interface EventType {
  id: number;
  title: string;
  description: string;
  allDay: boolean;
  start: Date;
  end: Date;
  isOnline: boolean;
  link?: string;
  location?: string;
}

/** date locales options */
const locales = {
  'en-GB': enGB,
};

/** date localizer with date-fns */
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function Agenda() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [openEvent, setOpenEvent] = React.useState<EventType | null>(null);

  function toggleModal() {
    setIsModalOpen((prevState) => !prevState);
  }

  const handleSelectEvent = React.useCallback((e) => {
    console.log(e);
    setOpenEvent(e);
    // push(`/calendar/${e.id}`);
    toggleModal();
  }, []);

  return (
    <>
      <Head>
        <title>Agenda | SIPR</title>
      </Head>

      <AgendaSubHeader />
      <article className="py-4 px-4 md:px-8">
        <p>Agenda Table</p>
      </article>

      <MeetingDetailsModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        openEvent={openEvent}
      />
    </>
  );
}
