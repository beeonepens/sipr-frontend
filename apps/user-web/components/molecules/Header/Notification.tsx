import { Fragment, memo } from 'react';
import { BellIcon } from '@heroicons/react/outline';
import PopoverProvider from '@components/atoms/Popover/PopoverProvider';
import { useWindowSize } from '@utils/hooks/useWindowSize';
import { EVENTS } from '@utils/constant';
import LinkTo from '@components/atoms/LinkTo';
import clsx from 'clsx';

function Notification() {
  const windowSize = useWindowSize();

  if (windowSize < 1024) {
    return (
      <LinkTo to="/notifications">
        <button
          type="button"
          className={clsx(
            'rounded-md p-2 transition duration-75 hover:bg-gray-200 dark:hover:bg-zinc-700',
            'text-primary-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-gray-200',
            'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
          )}
        >
          <BellIcon className="text-primary-700 flex h-6 w-6 cursor-pointer hover:text-blue-600 dark:text-gray-100 dark:hover:text-gray-200" />
        </button>
      </LinkTo>
    );
  }

  return (
    <PopoverProvider
      title="Notification"
      indicator={
        <button
          type="button"
          className={clsx(
            'rounded-md p-2 transition duration-75 hover:bg-gray-200 dark:hover:bg-zinc-700',
            'text-primary-700 hover:text-blue-600 dark:text-gray-100 dark:hover:text-gray-200',
            'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
          )}
        >
          <BellIcon className="flex h-6 w-6 cursor-pointer dark:text-gray-100" />
        </button>
      }
    >
      <section className="mt-4">
        {EVENTS.map(({ id, title }) => (
          <Fragment key={id}>
            <div className="flex flex-col gap-1 rounded-lg border-gray-200 p-2 py-2 hover:bg-gray-200 dark:border-gray-700 dark:hover:bg-zinc-700">
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
          </Fragment>
        ))}
      </section>
    </PopoverProvider>
  );
}

export default memo(Notification);
