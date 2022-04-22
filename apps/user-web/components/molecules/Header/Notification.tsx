import { memo } from 'react';
import { BellIcon } from '@heroicons/react/outline';
import PopoverProvider from '@components/atoms/Popover/PopoverProvider';
import { useWindowSize } from '@utils/hooks/useWindowSize';
import { EVENTS } from '@utils/constant';
import LinkTo from '@components/atoms/LinkTo';

function Notification() {
  const windowSize = useWindowSize();

  if (windowSize < 1024) {
    return (
      <LinkTo to="/notifications">
        <BellIcon className="text-primary-700 flex h-6 w-6 cursor-pointer hover:text-blue-600 dark:text-gray-100 dark:hover:text-gray-200" />
      </LinkTo>
    );
  }

  return (
    <PopoverProvider
      title="Notification"
      indicator={
        <BellIcon className="text-primary-700 flex h-6 w-6 cursor-pointer hover:text-blue-600 dark:text-gray-100 dark:hover:text-gray-200" />
      }
    >
      <section className="mt-4">
        {EVENTS.map(({ id, title }) => (
          <>
            <div
              className="flex flex-col gap-1 rounded-lg p-2 py-2 dark:border-gray-700 dark:hover:bg-zinc-700"
              key={id}
            >
              <h4 className="text-sm font-semibold text-gray-800 hover:text-gray-700 dark:text-gray-300">
                {title}
              </h4>
              <p className="text-sm dark:text-gray-400">
                The meeting has started, please hurry up to join
              </p>
              <p className="mt-3 text-right text-xs text-gray-600 dark:text-gray-400">
                5 minute ago
              </p>
            </div>

            <div className="my-1 border-b border-gray-200 dark:border-gray-700" />
          </>
        ))}
      </section>
    </PopoverProvider>
  );
}

export default memo(Notification);
