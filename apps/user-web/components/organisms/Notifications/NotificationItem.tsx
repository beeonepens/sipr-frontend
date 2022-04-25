import { EventType } from '@utils/constant';

interface Props {
  event: EventType;
}

export default function NotificatonItem({ event }: Props) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-lg bg-white px-4 py-3 shadow-md shadow-gray-300/25 outline outline-1 outline-gray-300 dark:bg-zinc-800 dark:shadow-black/20 dark:outline-gray-700 md:flex-row md:items-center md:gap-5 lg:px-6">
      <h4 className="cursor-pointer text-base font-semibold">{event.title}</h4>
      <p className="text-sm dark:text-gray-400">
        The meeting has started, please hurry up to join
      </p>
      <p className="mt-3 text-right text-xs text-gray-600 dark:text-gray-400 md:text-sm">
        5 minute ago
      </p>
    </div>
  );
}
