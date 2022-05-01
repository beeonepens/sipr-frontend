import { BellIcon } from '@heroicons/react/outline';

export default function ZeroNotification() {
  return (
    <div className="relative flex flex-col items-center justify-center gap-2 overflow-x-auto rounded-md border border-gray-300 bg-white p-8 text-center shadow-md shadow-gray-300/25 dark:border-gray-700 dark:bg-gray-800 dark:shadow-black/20 sm:rounded-lg lg:p-12">
      <BellIcon className="h-24 w-24 text-gray-300 dark:text-gray-600" />
      <h3 className="mt-2 text-base font-medium text-gray-500 dark:text-gray-300">
        You don&apos;t have any notification!
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-300">
        Your notifications will appear here.
      </p>
    </div>
  );
}
