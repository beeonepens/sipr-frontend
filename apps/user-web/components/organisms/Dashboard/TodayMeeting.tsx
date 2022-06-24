import { useState } from 'react';
import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';
import MeetingInfo from '@components/molecules/Meeting/MeetingInfo';
import MeetingNavigation from '@components/molecules/Meeting/MeetingNavigation';
import ZeroTodayMeeting from '@components/molecules/Dashboard/ZeroTodayMeeting';
import { MeetWithDate } from '@utils/types/meet.dto';
import { formatToMs, getTimeDifference } from '@utils/formatDateTime';
import { differenceInMinutes } from 'date-fns';
import { useAllRoomQuery } from '@utils/hooks/queryHooks/useRoomQuery';

interface Props {
  events: MeetWithDate[];
}

export default function TodayMeeting({ events }: Props) {
  const [itemIndex, setItemIndex] = useState(0);
  const rooms = useAllRoomQuery();

  function getMeetTimeStatus(startTime: string, endTime: string) {
    /** check if the meeting is underway */
    if (
      formatToMs() > formatToMs(startTime) &&
      formatToMs() < formatToMs(endTime)
    ) {
      return `Meeting in Progress`;
    }

    /** check if meeting is about to start */
    if (differenceInMinutes(new Date(startTime), new Date()) > 0) {
      return `Start in ${getTimeDifference(startTime)}`;
    }

    /** if meeting is finished */
    return `End ${getTimeDifference(endTime)} Ago`;
  }

  // console.log({ events });

  return (
    <div
      className={clsx(
        'relative max-h-fit min-h-[322px] rounded-lg bg-white p-4 dark:bg-gray-800 lg:max-h-[322px] lg:p-6',
        'border border-gray-300 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:shadow-black/20'
      )}
    >
      {/** check if there's any meeting or not */}
      {events.length > 0 ? (
        <>
          {/** check if total meeting more than 1 to show navigation */}
          {events.length > 1 && (
            <MeetingNavigation
              itemIndex={itemIndex}
              setItemIndex={setItemIndex}
              totalEvents={events.length}
            />
          )}

          <h2 className="text-primary-800 line-clamp-2 mb-3 mr-0 text-2xl font-semibold dark:text-gray-100 lg:mr-20">
            {events[itemIndex].name_meeting}
          </h2>

          <div className="mr-0 mb-6 lg:mr-16">
            <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-300 lg:text-base ">
              {events[itemIndex].description}
            </p>
          </div>

          <MeetingInfo
            rooms={rooms.data ? rooms.data.data : []}
            event={events[itemIndex]}
          />

          <div className="absolute bottom-0 right-0 m-4 flex flex-row justify-end lg:m-6">
            <button
              type="button"
              className="cursor-default rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 dark:bg-gray-700 dark:text-gray-300"
            >
              {getMeetTimeStatus(
                events[itemIndex].start_datetime,
                events[itemIndex].end_datetime
              ) || <Skeleton />}
            </button>
          </div>
        </>
      ) : (
        // show this if no meeting found
        <ZeroTodayMeeting />
      )}
    </div>
  );
}
