import {
  BanIcon,
  DesktopComputerIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import clsx from 'clsx';
import { formatMeetDateTime } from '@utils/formatDateTime';
import { MeetWithDate } from '@utils/types/meet.dto';

interface Props {
  event?: MeetWithDate;
  empty?: boolean;
}

export default function UpcomingScheduleItem({ event, empty = false }: Props) {
  return (
    <div key={event?.id_meet} className="grid grid-cols-5 items-center gap-3">
      {/* meeting status icon */}
      <div
        className={clsx(
          'col-span-1 rounded-lg border p-3',
          empty
            ? 'border-gray-300 dark:border-gray-600'
            : 'border-primary-700 dark:border-gray-600'
        )}
      >
        {/* eslint-disable-next-line no-nested-ternary */}
        {empty ? (
          <BanIcon className="h-full w-full text-gray-300 dark:text-gray-600" />
        ) : 'isOnline' in event && event?.isOnline ? (
          <DesktopComputerIcon className="text-primary-700 dark:text-primary-300 h-full w-full" />
        ) : (
          <UserGroupIcon className="text-primary-700 dark:text-primary-300 h-full w-full" />
        )}
      </div>

      {/* meeting info icon */}
      <div className="col-span-4 flex flex-col">
        <p className="line-clamp-1 font-medium text-gray-700 dark:text-gray-200">
          {event?.name_meeting}
        </p>
        <span className="line-clamp-1 text-sm text-gray-500 dark:text-gray-400">
          {/* {event?.isOnline ? event?.link : event?.location || <Skeleton />} */}
          {!event
            ? ''
            : formatMeetDateTime(event?.start_datetime, event?.end_datetime)}
        </span>
      </div>
    </div>
  );
}
