import { DesktopComputerIcon, UserGroupIcon } from '@heroicons/react/outline';
import { EventType } from '@utils/constant';

interface Props {
  event: EventType;
}

export default function UpcomingScheduleItem({ event }: Props) {
  return (
    <div key={event.id} className="grid grid-cols-5 items-center gap-3">
      {/* meeting status icon */}
      <div className="border-primary-700 col-span-1 rounded-lg border p-3 dark:border-gray-600">
        {event.isOnline ? (
          <DesktopComputerIcon className="text-primary-700 dark:text-primary-300 h-full w-full" />
        ) : (
          <UserGroupIcon className="text-primary-700 dark:text-primary-300 h-full w-full" />
        )}
      </div>

      {/* meeting info icon */}
      <div className="col-span-4 flex flex-col">
        <p className="font-semibold">{event.title}</p>
        <span className="text-sm text-gray-600 dark:text-gray-500">
          {event.isOnline ? event.link : event.location}
        </span>
      </div>
    </div>
  );
}
