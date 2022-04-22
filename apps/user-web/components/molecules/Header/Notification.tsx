import { BellIcon } from '@heroicons/react/outline';
import PopoverProvider from '@components/atoms/Popover/PopoverProvider';

const items = [
  {
    id: 'width',
    label: 'Width',
    defaultValue: '100%',
  },
  {
    id: 'max-width',
    label: 'Max. width',
    defaultValue: '300px',
  },
  {
    id: 'height',
    label: 'Height',
    defaultValue: '25px',
  },
  {
    id: 'max-height',
    label: 'Max. height',
    defaultValue: 'none',
  },
  {
    id: 'max-height',
    label: 'Max. height',
    defaultValue: 'none',
  },
];

export default function Notification() {
  return (
    <PopoverProvider
      indicator={
        <BellIcon className="flex h-6 w-6 cursor-pointer hover:text-blue-600" />
      }
      title="Notification"
    >
      <section className="mt-4 space-y-2">
        {items.map(({ id, label }) => (
          <div
            className="flex flex-col gap-2 border-b border-gray-200 py-2"
            key={id}
          >
            <h4 className="cursor-pointer text-base font-semibold text-gray-800 hover:text-gray-700">
              {label}
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
