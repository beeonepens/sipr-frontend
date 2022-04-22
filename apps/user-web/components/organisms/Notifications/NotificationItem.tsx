import { EventType } from '@utils/constant';

interface Props {
  event: EventType;
}

export default function NotificatonItem({ event }: Props) {
  return (
    <div className="flex flex-col items-start gap-3 rounded-lg px-4 py-3 outline outline-1 outline-gray-300 md:flex-row md:items-center md:gap-5 lg:px-6">
      <h4 className="cursor-pointer text-base font-semibold text-gray-800 hover:text-gray-700">
        {event.title}
      </h4>
      <p className="text-sm">
        The meeting has started, please hurry up to join
      </p>
      <p className="mt-3 text-right text-sm text-gray-600">5 minute ago</p>
    </div>
  );
}
