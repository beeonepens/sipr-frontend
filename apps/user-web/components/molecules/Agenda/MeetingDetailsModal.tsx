import LinkTo from '@components/atoms/LinkTo';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { Dialog } from '@headlessui/react';
import { Button } from 'ui';
import { PencilAltIcon, XIcon } from '@heroicons/react/outline';
import { EventType } from '@utils/constant';
import MeetingInfo from '../Meeting/MeetingInfo';

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
      <section className="m-0 inline-block h-screen w-full max-w-md transform overflow-hidden rounded-none bg-white py-14 px-6 text-left align-middle shadow-xl transition-all md:my-8 md:mx-2 md:h-auto md:rounded-xl md:py-8 md:px-6">
        <XIcon
          className="absolute right-0 top-0 mr-5 mt-5 h-5 w-5 cursor-pointer text-gray-500"
          onClick={toggleModal}
        />

        {openEvent && (
          <>
            <Dialog.Title
              as="h3"
              className="text-primary-700 mb-2 text-2xl font-semibold leading-6"
            >
              {openEvent.title}
            </Dialog.Title>
            <Dialog.Description className="line-clamp-3 mb-6 text-sm text-gray-600 ">
              {openEvent.description}
            </Dialog.Description>

            <MeetingInfo event={openEvent} />

            <div className="mt-6 flex flex-row items-center justify-end">
              <LinkTo to={`/calendar/${openEvent.id}`}>
                <Button>
                  <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
                    Edit Details
                    <PencilAltIcon className="h-5 w-5" />
                  </span>
                </Button>
              </LinkTo>
            </div>
          </>
        )}
      </section>
    </ModalProvider>
  );
}
