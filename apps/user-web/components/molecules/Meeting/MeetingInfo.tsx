import {
  CalendarIcon,
  ClockIcon,
  LinkIcon,
  LocationMarkerIcon,
} from '@heroicons/react/outline';
import LinkTo from '@components/atoms/LinkTo';
import { MeetWithDate } from '@utils/types/meet.dto';
import { formatDateWithDay, formatMeetTime } from '@utils/formatDateTime';

interface Props {
  event: MeetWithDate;
}

export default function MeetingInfo({ event }: Props) {
  return (
    <div className="flex flex-col gap-3 font-medium text-gray-800 dark:text-gray-200">
      {/* <p className="text-lg font-medium">{openEvent.title}</p> */}
      <div className="flex flex-row items-center justify-start gap-2">
        <CalendarIcon className="text-primary-700 dark:text-primary-300 h-5 w-5" />
        <p className="">{formatDateWithDay(event.start_datetime)}</p>
      </div>

      <div className="flex flex-row items-center justify-start gap-2">
        <ClockIcon className="text-primary-700 dark:text-primary-300 h-5 w-5" />
        <p className="">
          {formatMeetTime(event.start_datetime, event.end_datetime)}
        </p>
      </div>

      {event.isOnline ? (
        <div className="flex flex-row items-center justify-start gap-2">
          <LinkIcon className="text-primary-700 dark:text-primary-300 h-5 w-5" />
          {event.isOnline && (
            <LinkTo
              to="http://link"
              blank
              className="hover:text-primary-700 text-primary-600 dark:text-primary-300 dark:hover:text-primary-200 hover:underline"
            >
              <p className="">http://link</p>
            </LinkTo>
          )}
        </div>
      ) : (
        <div className="flex flex-row items-center justify-start gap-2">
          <LocationMarkerIcon className="text-primary-700 dark:text-primary-300 h-5 w-5" />
          {!event.isOnline && <p className="">Offline Location</p>}
        </div>
      )}
    </div>
  );
}
