import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { Dialog } from '@headlessui/react';
import { Button } from 'ui';
import { XIcon } from '@heroicons/react/outline';
import { EventType } from '@utils/constant';

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
  openEvent: EventType;
}

export default function MeetingDetailsModal({
  openEvent,
  isModalOpen,
  toggleModal,
}: Props) {
  return (
    <ModalProvider isModalOpen={isModalOpen} onClose={toggleModal}>
      <section className="m-0 inline-block h-screen w-full max-w-md transform overflow-hidden rounded-none bg-white py-14 px-6 text-left align-middle shadow-md transition-all md:my-8 md:mx-2 md:h-auto md:rounded-xl md:py-6 md:px-6">
        <XIcon
          className="absolute right-0 top-0 mr-5 mt-5 h-5 w-5 cursor-pointer text-gray-500"
          onClick={toggleModal}
        />

        {openEvent && (
          <>
            <Dialog.Title
              as="h3"
              className="text-primary-700 text-xl font-semibold leading-6"
            >
              Delete Meeting
            </Dialog.Title>
            <Dialog.Description className="mt-3 text-sm text-gray-700">
              <p>Are you sure you want to delete this meeting?</p>
              <p>Meeting Name : {openEvent.title}</p>
            </Dialog.Description>

            <div className="mt-6 flex flex-row justify-end">
              <div className="grid w-full grid-cols-2 items-center justify-end gap-5 md:flex md:w-3/4 md:flex-row lg:w-3/5">
                <Button
                  text="sm"
                  fullWidth
                  variant="outline"
                  onClick={toggleModal}
                >
                  Cancel
                </Button>
                <Button text="sm" fullWidth color="danger">
                  Confirm
                </Button>
              </div>
            </div>
          </>
        )}
      </section>
    </ModalProvider>
  );
}
