import LinkTo from '@components/atoms/LinkTo';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { Dialog } from '@headlessui/react';
import { Button } from 'ui';
import { PencilAltIcon, XIcon } from '@heroicons/react/outline';
import { MeetWithDate } from '@utils/types/meet.dto';
import { useAllRoomQuery } from '@utils/hooks/queryHooks/useRoomQuery';
import MeetingInfo from '../Meeting/MeetingInfo';

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
  openEvent: MeetWithDate;
}

export default function MeetingDetailsModal({
  openEvent,
  isModalOpen,
  toggleModal,
}: Props) {
  const rooms = useAllRoomQuery();

  return (
    <ModalProvider isModalOpen={isModalOpen} onClose={toggleModal}>
      <section className="m-0 inline-block h-screen w-full max-w-md transform overflow-hidden rounded-none bg-white py-14 px-6 text-left align-middle shadow-md transition-all dark:bg-gray-800 md:my-8 md:mx-2 md:h-auto md:rounded-xl md:py-6 md:px-6">
        <XIcon
          className="absolute right-0 top-0 mr-5 mt-5 h-5 w-5 cursor-pointer text-gray-500 dark:text-gray-300"
          onClick={toggleModal}
        />

        {openEvent && (
          <>
            <Dialog.Title
              as="h3"
              className="text-primary-700 dark:text-primary-300 mb-2 mr-5 text-2xl font-semibold leading-6"
            >
              {openEvent.name_meeting}
            </Dialog.Title>
            <Dialog.Description className="line-clamp-3 mb-6 text-sm text-gray-600 dark:text-gray-300">
              {openEvent.description}
            </Dialog.Description>

            <MeetingInfo
              rooms={rooms.data ? rooms.data.data : []}
              event={openEvent}
            />

            <div className="mt-6 flex flex-row items-center justify-end">
              <LinkTo to={`/agenda/${openEvent.id_meet}`}>
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
