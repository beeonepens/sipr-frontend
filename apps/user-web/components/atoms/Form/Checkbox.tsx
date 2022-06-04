import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from '@heroicons/react/solid';
import * as LabelPrimitive from '@radix-ui/react-label';
import clsx from 'clsx';

interface Props {
  id: string;
  label: string;
  value?: number | string;
  onClick?: () => void;
  className?: string;
}

export default function Checkbox({
  id,
  label,
  value,
  onClick,
  className,
}: Props) {
  return (
    <div className={clsx('flex items-center', className)}>
      <CheckboxPrimitive.Root
        id={id}
        onClick={onClick}
        value={value}
        className={clsx(
          'flex h-5 w-5 items-center justify-center rounded-md border border-gray-300',
          'radix-state-checked:bg-primary-600 radix-state-unchecked:bg-gray-200 dark:radix-state-unchecked:bg-gray-900',
          'focus-visible:ring-primary-600 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'
        )}
      >
        <CheckboxPrimitive.Indicator>
          <CheckIcon className="h-4 w-4 self-center text-white" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      <LabelPrimitive.Label
        htmlFor={id}
        className="ml-3 select-none text-sm font-medium text-gray-900 dark:text-gray-100"
      >
        {label}
      </LabelPrimitive.Label>
    </div>
  );
}
