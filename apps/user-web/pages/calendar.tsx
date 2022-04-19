import * as React from 'react';
import Head from 'next/head';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enGB from 'date-fns/locale/en-GB';
import MeetingDetailsModal from '@components/molecules/Calendar/MeetingDetailsModal';

import 'react-big-calendar/lib/css/react-big-calendar.css';

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

export default function Calendar() {
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

  /** events for the calendar */
  const events = React.useMemo<EventType[]>(
    () => [
      {
        id: 0,
        title: 'Kuliah RPL/WPPL',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur.',
        allDay: false,
        start: new Date(2022, 3, 11, 8, 0),
        end: new Date(2022, 3, 11, 12, 0),
        isOnline: false,
        location: 'Ruang Database',
      },
      {
        id: 1,
        title: 'Daily Scrum 3',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur.',
        allDay: false,
        start: new Date(2022, 3, 11, 10, 0),
        end: new Date(2022, 3, 11, 11, 30),
        isOnline: true,
        link: 'https://meet.google.com/abcdef',
      },
      {
        id: 2,
        title: 'Daily Scrum 4',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur.',
        allDay: false,
        start: new Date(2022, 3, 12, 15, 30),
        end: new Date(2022, 3, 12, 16, 45),
        isOnline: true,
        link: 'https://meet.google.com/abcdef',
      },
      {
        id: 3,
        title: 'Daily Scrum 5',
        description:
          'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur.',
        allDay: false,
        start: new Date(2022, 3, 13, 5, 0),
        end: new Date(2022, 3, 13, 5, 30),
        isOnline: true,
        link: 'https://meet.google.com/abcdef',
      },
    ],
    []
  );

  return (
    <>
      <Head>
        <title>Calendar | SIPR</title>
      </Head>

      <article className="h-[75vh] py-4 px-4 md:px-8 lg:max-h-[700px] xl:h-[83vh]">
        <BigCalendar
          localizer={localizer}
          events={events}
          onSelectEvent={handleSelectEvent}
          selectable
          startAccessor="start"
          endAccessor="end"
        />
      </article>

      <MeetingDetailsModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        openEvent={openEvent}
      />
    </>
  );
}
