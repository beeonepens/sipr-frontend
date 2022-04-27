import * as PopoverPrimitive from '@radix-ui/react-popover';
import { XIcon } from '@heroicons/react/outline';
import clsx from 'clsx';

interface Props {
  arrow?: boolean;
  indicator: JSX.Element;
  title: string;
  children: JSX.Element;
}

export default function PopoverProvider({
  indicator,
  children,
  title,
  arrow = false,
}: Props) {
  return (
    <div className="relative inline-block text-left">
      <PopoverPrimitive.Root>
        <PopoverPrimitive.Trigger asChild>{indicator}</PopoverPrimitive.Trigger>
        <PopoverPrimitive.Content
          align="center"
          sideOffset={4}
          className={clsx(
            'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
            'max-h-[60vh] min-h-[20vh] w-80 overflow-y-auto rounded-l-lg rounded-tr-md rounded-br-lg border border-gray-300 px-4 pb-4 shadow-md shadow-gray-300/30 dark:border-zinc-700 dark:shadow-zinc-800/30 md:w-96',
            'bg-gray-50 dark:bg-zinc-800'
          )}
        >
          {arrow && (
            <PopoverPrimitive.Arrow className="fill-current text-gray-300 dark:text-gray-800" />
          )}

          <div className="tems-center sticky top-0 flex flex-row justify-between border-b border-gray-200 bg-gray-50 pb-2 pt-4 text-gray-500 dark:border-zinc-700 dark:bg-zinc-800 dark:text-gray-400">
            <h3 className="text-primary-700 text-sm font-medium dark:text-gray-100">
              {title}
            </h3>
            <PopoverPrimitive.Close
              className={clsx(
                'inline-flex items-center justify-center rounded-full p-1',
                'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
              )}
            >
              <XIcon className="h-4 w-4 text-gray-500 hover:text-gray-700 dark:text-gray-500 dark:hover:text-gray-400" />
            </PopoverPrimitive.Close>
          </div>

          {children}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Root>
    </div>
  );
}
