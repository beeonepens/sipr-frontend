import * as React from 'react';
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/solid';
import * as SelectPrimitive from '@radix-ui/react-select';
import clsx from 'clsx';

interface Props {
  data: string[] | number[];
  preLabel?: string;
  postLabel?: string;
  onChange?: (e: string | number) => void;
  value?: string;
}

type ButtonProps = Omit<React.ComponentProps<'button'>, 'className'>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <button
      type="button"
      ref={ref}
      {...props}
      className={clsx(
        'inline-flex select-none items-center justify-center rounded-md px-4 py-2 text-sm font-medium',
        'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-900',
        'hover:bg-gray-50',
        'focus-visible:ring-primary-500 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75',
        // Register all radix states
        'group',
        'radix-state-open:bg-gray-50 dark:radix-state-open:bg-gray-900',
        'radix-state-on:bg-gray-50 dark:radix-state-on:bg-gray-900',
        'radix-state-instant-open:bg-gray-50 radix-state-delayed-open:bg-gray-50'
      )}
    >
      {children}
    </button>
  )
);

Button.displayName = 'Button';

export default function SelectProvider({
  data,
  postLabel,
  preLabel,
  value,
  onChange,
}: Props) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onChange}>
      <SelectPrimitive.Trigger asChild aria-label="Food">
        <Button>
          <SelectPrimitive.Value />
          <SelectPrimitive.Icon className="ml-2">
            <ChevronDownIcon className="h-4 w-4" />
          </SelectPrimitive.Icon>
        </Button>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Content>
        <SelectPrimitive.ScrollUpButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
          <ChevronUpIcon className="h-4 w-4" />
        </SelectPrimitive.ScrollUpButton>
        <SelectPrimitive.Viewport className="rounded-lg bg-white p-2 shadow-lg dark:bg-gray-800">
          <SelectPrimitive.Group>
            {data.map((f, i) => (
              <SelectPrimitive.Item
                disabled={f === 'Grapes'}
                // eslint-disable-next-line react/no-array-index-key
                key={`${f}-${i}`}
                value={f}
                className={clsx(
                  'relative flex items-center rounded-md px-8 py-2 text-sm font-medium text-gray-700 focus:bg-gray-100 dark:text-gray-300 dark:focus:bg-gray-900',
                  'radix-disabled:opacity-50',
                  'select-none focus:outline-none'
                )}
              >
                <SelectPrimitive.ItemText>
                  {(preLabel ? `${preLabel} ` : '') +
                    f +
                    (postLabel ? ` ${postLabel}` : '')}
                </SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute left-2 inline-flex items-center">
                  <CheckIcon className="h-4 w-4" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Group>
        </SelectPrimitive.Viewport>
        <SelectPrimitive.ScrollDownButton className="flex items-center justify-center text-gray-700 dark:text-gray-300">
          <ChevronDownIcon className="h-4 w-4" />
        </SelectPrimitive.ScrollDownButton>
      </SelectPrimitive.Content>
    </SelectPrimitive.Root>
  );
}
