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
      <section className="m-0 inline-block h-screen w-full max-w-md transform overflow-hidden rounded-none bg-white py-14 px-6 text-left align-middle shadow-md transition-all md:my-8 md:mx-2 md:h-auto md:rounded-xl md:py-12 md:px-8">
        <XIcon
          className="absolute right-0 top-0 mr-5 mt-5 h-5 w-5 cursor-pointer text-gray-500"
          onClick={toggleModal}
        />

        {openEvent && (
          <>
            <Dialog.Title
              as="h3"
              className="text-primary-700 mb-2 text-center text-2xl font-semibold leading-6"
            >
              Are you sure you want to delete this meeting?
            </Dialog.Title>
            <Dialog.Description className="mt-3 mb-6 text-center text-gray-600 ">
              Meeting Name : {openEvent.title}
            </Dialog.Description>

            <div className="mt-8 grid grid-cols-2 items-center justify-end gap-6">
              <Button variant="outline" onClick={toggleModal}>
                Cancel
              </Button>
              <Button color="danger">Yes</Button>
            </div>
          </>
        )}
      </section>
    </ModalProvider>
  );
}
