import format from 'date-fns/format';
import { EventType } from '@utils/constant';
import clsx from 'clsx';

interface Props {
  events: EventType[];
  handleSelectEvent: (e: EventType) => void;
}

export default function AgendaTable({ events, handleSelectEvent }: Props) {
  return (
    <div className="relative mt-3 overflow-x-auto border sm:rounded-lg">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Meeting name
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3 text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr
              key={event.id}
              className={clsx(
                'bg-white dark:bg-gray-800',
                events[events.length - 1].id !== event.id &&
                  'border-b dark:border-gray-700'
              )}
            >
              <th
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                {event.title}
              </th>
              <td className="px-6 py-4">
                {`${format(event.start, 'eeee, d MMM yyyy')}`}
              </td>
              <td className="px-6 py-4">{`${format(event.start, 'HH:mm')} - 
                ${format(event.end, 'HH:mm')}`}</td>
              <td className="px-6 py-4">
                {event.isOnline ? 'On-line' : 'Off-line'}
              </td>
              <td className="px-6 py-4 text-right">
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <span
                  onClick={() => handleSelectEvent(event)}
                  onKeyUp={() => handleSelectEvent(event)}
                  className="cursor-pointer font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Details
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
