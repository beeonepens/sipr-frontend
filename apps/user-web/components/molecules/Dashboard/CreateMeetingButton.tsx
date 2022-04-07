import React from 'react';
import { Dialog, Transition } from '@headlessui/react';
import PrimaryButton from '@components/atoms/Button/PrimaryButton';
import PlusIcon from '@components/atoms/Icon/PlusIcon';
import FormControl from '../Form/FormControl';

export default function CreateMeetingButton() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <>
      <PrimaryButton onClick={() => setIsModalOpen(true)}>
        <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
          <PlusIcon />
          Create
        </span>
      </PrimaryButton>

      {/* modal component */}
      <Transition show={isModalOpen} as={React.Fragment}>
        <Dialog
          as="div"
          onClose={() => setIsModalOpen(false)}
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
              <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md backdrop-filter" />
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
              <section className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-primary-950 mb-2 text-2xl font-semibold leading-6"
                >
                  Schedule New Meeting
                </Dialog.Title>
                <Dialog.Description className="text-base text-gray-800 ">
                  You can schedule new online meeting.
                </Dialog.Description>

                <form className="my-8">
                  <div className="grid grid-cols-1 gap-2">
                    <FormControl label="Name" id="meeting-name" type="text" />
                    <FormControl
                      label="Description"
                      id="meeting-desc"
                      type="text"
                    />
                  </div>

                  <div className="mt-8 flex flex-row items-center justify-end gap-4">
                    <PrimaryButton
                      type="button"
                      variant="outline"
                      onClick={() => setIsModalOpen(false)}
                    >
                      Cancel
                    </PrimaryButton>
                    <PrimaryButton type="submit">Save</PrimaryButton>
                  </div>
                </form>
              </section>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
