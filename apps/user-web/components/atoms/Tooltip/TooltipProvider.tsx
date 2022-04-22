import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import clsx from 'clsx';

interface Props {
  children: JSX.Element;
  message: string;
}

export default function TooltipProvider({ children, message }: Props) {
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          sideOffset={4}
          className={clsx(
            'radix-side-top:animate-slide-down-fade',
            'radix-side-right:animate-slide-left-fade',
            'radix-side-bottom:animate-slide-up-fade',
            'radix-side-left:animate-slide-right-fade',
            'inline-flex items-center rounded-md px-4 py-2.5',
            'bg-gray-200 shadow-sm dark:bg-zinc-700'
          )}
        >
          <TooltipPrimitive.Arrow className="fill-current text-gray-200 shadow-sm dark:text-zinc-700" />
          <span className="block text-xs leading-none text-gray-700 dark:text-gray-100">
            {message}
          </span>
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
