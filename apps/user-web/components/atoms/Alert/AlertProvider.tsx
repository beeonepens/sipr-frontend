import { Transition } from '@headlessui/react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import clsx from 'clsx';
import { Fragment } from 'react';

interface Props {
  children?: JSX.Element;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function AlertProvider({ children, isOpen, setIsOpen }: Props) {
  return (
    <AlertDialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogPrimitive.Trigger asChild>
        {children}
      </AlertDialogPrimitive.Trigger>
      <Transition.Root show={isOpen} className="z-20">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <AlertDialogPrimitive.Overlay
            forceMount
            className="absolute inset-0 z-20 h-full w-full md:bg-black md:bg-opacity-50 md:backdrop-blur-md md:backdrop-filter"
          />
        </Transition.Child>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-150"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <AlertDialogPrimitive.Content
            forceMount
            className={clsx(
              'fixed z-20',
              'w-[95vw] max-w-md rounded-none p-4 md:w-full md:rounded-xl',
              'top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]',
              'bg-white shadow-md dark:bg-gray-800',
              'focus-visible:ring-primary-500 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'
            )}
          >
            <AlertDialogPrimitive.Title className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Are you absolutely sure?
            </AlertDialogPrimitive.Title>
            <AlertDialogPrimitive.Description className="mt-2 text-sm font-normal text-gray-700 dark:text-gray-400">
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogPrimitive.Description>
            <div className="mt-4 flex justify-end space-x-2">
              <AlertDialogPrimitive.Cancel
                className={clsx(
                  'inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium',
                  'bg-white text-gray-900 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-100 hover:dark:bg-gray-600',
                  'border border-gray-300 dark:border-transparent',
                  'focus-visible:ring-primary-500 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'
                )}
              >
                Cancel
              </AlertDialogPrimitive.Cancel>
              <AlertDialogPrimitive.Action
                className={clsx(
                  'inline-flex select-none justify-center rounded-md px-4 py-2 text-sm font-medium',
                  'bg-primary-600 hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 text-white dark:text-gray-100',
                  'border border-transparent',
                  'focus-visible:ring-primary-500 focus:outline-none focus-visible:ring focus-visible:ring-opacity-75'
                )}
              >
                Confirm
              </AlertDialogPrimitive.Action>
            </div>
          </AlertDialogPrimitive.Content>
        </Transition.Child>
      </Transition.Root>
    </AlertDialogPrimitive.Root>
  );
}
