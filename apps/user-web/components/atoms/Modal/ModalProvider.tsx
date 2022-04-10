import * as React from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface Props {
  isModalOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
}

export default function ModalProvider({
  isModalOpen,
  children,
  onClose,
}: Props) {
  return (
    <Transition show={isModalOpen} as={React.Fragment}>
      <Dialog
        as="div"
        onClose={onClose}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex min-h-screen items-center justify-center">
          {/* modal overlay (background) */}
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 md:bg-black md:bg-opacity-50 md:backdrop-blur-md md:backdrop-filter" />
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
            as={React.Fragment}
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
