import { useState } from 'react';
import MeetingInfo from '@components/molecules/Meeting/MeetingInfo';
import MeetingNavigation from '@components/molecules/Meeting/MeetingNavigation';
import { EventType } from '@utils/constant';
import { NoData } from 'ui';
import clsx from 'clsx';
import { useLogoColor } from '@utils/hooks/useLogoColor';

interface Props {
  events: EventType[];
}

export default function TodayMeeting({ events }: Props) {
  const [itemIndex, setItemIndex] = useState(0);
  const logoColor = useLogoColor();

  // if (events.length < 1) return ()
  return (
    <div
      className={clsx(
        'relative max-h-fit min-h-[322px] rounded-lg bg-white p-4 dark:bg-zinc-800 lg:max-h-[322px] lg:p-6',
        'border border-gray-300 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:shadow-black/20'
      )}
    >
      {events.length > 0 ? (
        <>
          {events.length > 1 && (
            <MeetingNavigation
              itemIndex={itemIndex}
              setItemIndex={setItemIndex}
              totalEvents={events.length}
            />
          )}

          <h2 className="text-primary-800 line-clamp-2 mb-3 mr-0 text-2xl font-semibold dark:text-gray-100 lg:mr-20">
            {events[itemIndex].title}
          </h2>

          <div className="mr-0 mb-6 lg:mr-16">
            <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-300 lg:text-base ">
              {events[itemIndex].description}
            </p>
          </div>

          <MeetingInfo event={events[itemIndex]} />

          <div className="absolute bottom-0 right-0 m-4 flex flex-row justify-end lg:m-6">
            <button
              type="button"
              className="cursor-default rounded-lg bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-800 dark:bg-zinc-700 dark:text-gray-300"
            >
              In less than an hour
            </button>
          </div>
        </>
      ) : (
        <div className="mt-3 flex h-full flex-col items-center justify-center gap-2 text-center">
          <NoData
            className="h-36 w-36 opacity-80 lg:h-44 lg:w-44"
            theme={logoColor}
          />
          <h3 className="mt-2 text-base font-medium text-gray-500 dark:text-gray-300">
            You don&apos;t have any meeting for today!
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-300">
            You can schedule new meeting by clicking the &quot;New Meeting&quot;
            button.
          </p>
        </div>
      )}
    </div>
  );
}
