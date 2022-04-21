import LinkTo from '@components/atoms/LinkTo';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { Dialog } from '@headlessui/react';
import { format } from 'date-fns';
import { Button } from 'ui';
import {
  ClockIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilAltIcon,
  XIcon,
  CalendarIcon,
} from '@heroicons/react/outline';
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
            <Dialog.Description className="text-sm text-gray-600 ">
              {openEvent.description}
            </Dialog.Description>
            <div className="mb-6 mt-6 flex flex-col gap-3 text-gray-800">
              {/* <p className="text-lg font-medium">{openEvent.title}</p> */}
              <div className="flex flex-row items-center justify-start gap-2">
                <CalendarIcon className="h-5 w-5 text-gray-700" />
                <p className="">
                  {`${format(openEvent.start, 'eeee, d MMM yyyy')}`}
                </p>
              </div>

              <div className="flex flex-row items-center justify-start gap-2">
                <ClockIcon className="h-5 w-5 text-gray-700" />
                <p className="">
                  {`${format(openEvent.start, 'HH:mm')} - 
                ${format(openEvent.end, 'HH:mm')}`}
                </p>
              </div>

              {openEvent.isOnline ? (
                <div className="flex flex-row items-center justify-start gap-2">
                  <LinkIcon className="h-5 w-5 text-gray-700" />
                  {openEvent.link && (
                    <LinkTo
                      to={openEvent.link}
                      blank
                      className="hover:text-primary-700 text-primary-600 hover:underline"
                    >
                      <p className="">{openEvent.link}</p>
                    </LinkTo>
                  )}
                </div>
              ) : (
                <div className="flex flex-row items-center justify-start gap-2">
                  <LocationMarkerIcon className="h-5 w-5" />
                  {openEvent.location && (
                    <p className="">{openEvent.location}</p>
                  )}
                </div>
              )}
            </div>
            <div className="mt-2 flex flex-row items-center justify-end">
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
