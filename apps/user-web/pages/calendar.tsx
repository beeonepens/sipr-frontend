import * as React from 'react';
import Head from 'next/head';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enGB from 'date-fns/locale/en-GB';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useRouter } from 'next/router';

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
  const { push } = useRouter();

  const handleSelectEvent = React.useCallback(
    (e) => {
      console.log(e);
      push(`/calendar/${e.id}`);
    },
    [push]
  );

  /** events for the calendar */
  const events = React.useMemo(
    () => [
      {
        id: 0,
        title: 'Kuliah RPL/WPPL',
        allDay: false,
        start: new Date(2022, 3, 11, 8, 0),
        end: new Date(2022, 3, 11, 12, 0),
      },
      {
        id: 1,
        title: 'Daily Scrum 3',
        allDay: false,
        start: new Date(2022, 3, 11, 10, 0),
        end: new Date(2022, 3, 11, 11, 30),
      },
      {
        id: 2,
        title: 'Daily Scrum 4',
        allDay: false,
        start: new Date(2022, 3, 12, 5, 0),
        end: new Date(2022, 3, 12, 5, 30),
      },
      {
        id: 3,
        title: 'Daily Scrum 5',
        allDay: false,
        start: new Date(2022, 3, 13, 5, 0),
        end: new Date(2022, 3, 13, 5, 30),
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
    </>
  );
}
