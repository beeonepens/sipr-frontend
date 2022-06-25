import { Fragment, MutableRefObject } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';

interface Props {
  isModalOpen: boolean;
  onClose?: () => void;
  children: JSX.Element;
  type?: 'dialog' | 'alert';
  ver?: 'panel' | 'overlay';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialFocus?: MutableRefObject<any>;
}

export default function ModalProvider({
  isModalOpen,
  children,
  onClose,
  ver = 'overlay',
  type = 'dialog',
  initialFocus,
}: Props) {
  return (
    <Transition show={isModalOpen} as={Fragment}>
      <Dialog
        as="div"
        initialFocus={initialFocus}
        onClose={type === 'dialog' ? onClose : () => console.log('')}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex min-h-screen items-center justify-center">
          {/* modal overlay (background) */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {ver === 'overlay' ? (
              <Dialog.Overlay
                className={clsx(
                  'fixed inset-0',
                  type === 'dialog'
                    ? 'md:bg-black md:bg-opacity-50 md:backdrop-blur-sm md:backdrop-filter'
                    : 'bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter md:backdrop-blur-sm'
                )}
              />
            ) : (
              <div
                className={clsx(
                  'fixed inset-0',
                  type === 'dialog'
                    ? 'md:bg-black md:bg-opacity-50 md:backdrop-blur-sm md:backdrop-filter'
                    : 'bg-black bg-opacity-50 backdrop-blur-sm backdrop-filter md:backdrop-blur-sm'
                )}
              />
            )}
          </Transition.Child>

          {/* modal helper */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          {/* modal card */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {/* modal content */}
            {children}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
