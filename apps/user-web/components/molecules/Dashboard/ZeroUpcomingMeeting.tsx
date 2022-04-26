import { BanIcon } from '@heroicons/react/outline';

export default function ZeroUpcomingMeeting() {
  return (
    <div className="flex h-[200px] flex-col items-center justify-center gap-2 text-center">
      <BanIcon className="h-16 w-16 text-gray-300 dark:text-zinc-600" />
      <h3 className="text-base font-medium text-gray-500 dark:text-gray-300">
        No upcoming schedule!
      </h3>
      <p className="mx-auto px-5 text-xs text-gray-500 dark:text-gray-300">
        You can schedule new meeting by clicking the &quot;New Meeting&quot;
        button.
      </p>
    </div>
  );
}
