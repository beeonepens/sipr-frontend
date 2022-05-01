import * as React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Skeleton from 'react-loading-skeleton';
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enGB from 'date-fns/locale/en-GB';
import AgendaSubHeader from '@components/organisms/Agenda/AgendaSubHeader';
import MeetingDetailsModal from '@components/molecules/Agenda/MeetingDetailsModal';
import {
  useMeetingQuery,
  useMeetTimeQuery,
} from '@utils/hooks/queryHooks/useMeetingQuery';
import {
  MeetForCalendar,
  MeetWithDate,
  Meet,
  Datetime,
} from '@utils/types/meet.dto';

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

function useMeetingData(meetData: Meet[], dateData: Datetime[]) {
  const meetingList = React.useMemo(() => {
    /** if meetings & datetime data not found, return empty array */
    if (!meetData || !dateData) return [];
    /** combine datetime & meeting detail data */
    return dateData.map((dt) => ({
      ...dt,
      ...meetData.find((meet) => meet.id_meet === dt.id_meet),
    }));
  }, [meetData, dateData]);

  /** return with formatted object shape + meeting room */
  const calendarMeetingList = React.useMemo(
    () =>
      meetingList.map((mdt) => ({
        id: mdt.id_meet,
        title: mdt.name_meeting,
        description: mdt.description,
        allDay: false,
        start: new Date(mdt.start_datetime),
        end: new Date(mdt.end_datetime),
        isOnline: mdt.isOnline,
      })),
    [meetingList]
  );

  return { meetingList, calendarMeetingList };
}

export default function Calendar() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [openEvent, setOpenEvent] = React.useState<MeetWithDate | null>(null);
  const meetings = useMeetingQuery();
  const datetimes = useMeetTimeQuery();

  function toggleModal() {
    setIsModalOpen((prevState) => !prevState);
  }

  const { meetingList, calendarMeetingList } = useMeetingData(
    meetings.data,
    datetimes.data
  );

  const handleSelectEvent = React.useCallback(
    (e: MeetForCalendar) => {
      setOpenEvent(meetingList.find((m) => m.id_meet === e.id));
      toggleModal();
    },
    [meetingList]
  );

  /** big calendar date view configuration */
  const { defaultDate, views } = React.useMemo(
    () => ({
      views: {
        month: true,
        week: true,
        day: true,
      },
      defaultDate: new Date(),
    }),
    []
  );

  /** big calendar events configuration */
  const eventProps = React.useCallback(
    (event, start, end, isSelected) => ({
      event,
      start,
      end,
      isSelected,
      style: { backgroundColor: '#104779' },
    }),
    []
  );

  return (
    <>
      <Head>
        <title>Calendar | SIPR</title>
      </Head>

      <AgendaSubHeader />
      <motion.article
        initial={{ opacity: 0.6, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-2 h-[75vh] py-4 px-4 md:px-8 lg:max-h-[680px] xl:h-[79vh]"
      >
        {(meetings.isLoading || datetimes.isLoading) && (
          <div className="relative mt-4 overflow-x-auto rounded-md border border-gray-300 bg-white p-4 shadow-md shadow-gray-300/25 dark:border-gray-700 dark:bg-gray-800 dark:shadow-black/20 sm:rounded-lg">
            <Skeleton count={7} height={56} />
          </div>
        )}
        {meetings.isSuccess && datetimes.isSuccess && (
          <BigCalendar
            culture="en-GB"
            localizer={localizer}
            defaultDate={defaultDate}
            views={views}
            events={calendarMeetingList}
            onSelectEvent={handleSelectEvent}
            selectable
            popup
            startAccessor="start"
            endAccessor="end"
            eventPropGetter={eventProps}
          />
        )}
      </motion.article>

      <MeetingDetailsModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        openEvent={openEvent}
      />
    </>
  );
}
