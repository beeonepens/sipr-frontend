import {
  BanIcon,
  DesktopComputerIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import { EventType } from '@utils/constant';
import clsx from 'clsx';
import { format } from 'date-fns';

interface Props {
  event?: EventType;
  empty?: boolean;
}

export default function UpcomingScheduleItem({ event, empty = false }: Props) {
  console.log({ empty });
  return (
    <div key={event?.id} className="grid grid-cols-5 items-center gap-3">
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
          {event?.title || ''}
        </p>
        <span className="line-clamp-1 text-sm text-gray-500 dark:text-gray-400">
          {/* {event?.isOnline ? event?.link : event?.location || ''} */}
          {!event
            ? ''
            : `${format(event?.start, 'd MMM yyyy')}, 
          ${format(event?.start, 'HH:mm')} - ${format(event?.end, 'HH:mm')}`}
        </span>
      </div>
    </div>
  );
}
