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
        <BellIcon className="flex h-6 w-6 cursor-pointer hover:text-blue-600" />
      </LinkTo>
    );
  }

  return (
    <PopoverProvider
      title="Notification"
      indicator={
        <BellIcon className="flex h-6 w-6 cursor-pointer hover:text-blue-600" />
      }
    >
      <section className="mt-4 space-y-2">
        {EVENTS.map(({ id, title }) => (
          <div
            className="flex flex-col gap-2 border-b border-gray-200 py-2"
            key={id}
          >
            <h4 className="cursor-pointer text-base font-semibold text-gray-800 hover:text-gray-700">
              {title}
            </h4>
            <p className="text-sm">
              The meeting has started, please hurry up to join
            </p>
            <p className="mt-3 text-right text-sm text-gray-600">
              5 minute ago
            </p>
          </div>
        ))}
      </section>
    </PopoverProvider>
  );
}

export default memo(Notification);
