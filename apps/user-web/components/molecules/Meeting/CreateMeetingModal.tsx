import { memo, useState } from 'react';
import { Room } from '@utils/types/room.dto';
import { useForm, FormProvider } from 'react-hook-form';
import { Dialog } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'ui';
import { XIcon } from '@heroicons/react/outline';

import { NewMeetingInput, NewMeetingSchema } from '@utils/validations';
import { useSynchronizeMeetingTime } from '@utils/hooks/meeting/useSynchronizeMeetingTime';
import { useParticipantStore } from '@utils/store/useCreateMeetParticipant';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { useCreateMeeting } from '@utils/hooks/meeting/useCreateMeeting';
import CreateMeetingToast from '../Dashboard/CreateMeetingToast';
import CreateMeetingDetailForms from './CreateMeeting/CreateMeetingDetailForms';
import CreateMeetingParticipantForms from './CreateMeeting/CreateMeetingParticipantForms';

export interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
  rooms: Room[];
}

function CreateMeetingModal({ isModalOpen, toggleModal, rooms }: Props) {
  const { resetPersonParticipant, resetTeamParticipant } =
    useParticipantStore();

  const [page, setPage] = useState<1 | 2>(1);
  const changePage = (action: 'next' | 'prev') => {
    if (page === 1 && action === 'next') setPage(2);
    if (page === 1 && action === 'prev') setPage(1);
    if (page === 2 && action === 'next') setPage(2);
    if (page === 2 && action === 'prev') setPage(1);
  };

  /** hooks for forms control & submit action */
  const methods = useForm<NewMeetingInput>({
    resolver: zodResolver(NewMeetingSchema),
    defaultValues: {
      isOnline: 'online',
      limit: '1',
      date_start: new Date(),
      date_end: new Date(),
      repeat_duration: 'week',
    },
  });

  const startDate = methods.watch('date_start');
  const endDate = methods.watch('date_end');
  useSynchronizeMeetingTime(startDate, endDate, methods);

  const { isLoading, onSubmit, openToast, setOpenToast, roomsOptions } =
    useCreateMeeting({
      rooms,
      toggleModal,
    });

  /** function that run to close modal */
  const handleCloseModal = () => {
    setPage(1);
    methods.reset();
    resetPersonParticipant();
    resetTeamParticipant();
    toggleModal();
  };

  /** form error log */
  if (methods.formState.errors !== {}) console.log(methods.formState.errors);

  return (
    <>
      <ModalProvider
        ver="panel"
        type="alert"
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <Dialog.Panel className="m-0 inline-block h-screen w-full max-w-4xl transform overflow-hidden rounded-none bg-white py-14 px-6 text-left align-middle shadow-md transition-all dark:bg-gray-800 md:my-8 md:mx-2 md:h-auto md:rounded-xl md:py-8 md:px-6">
          <XIcon
            className="absolute right-0 top-0 mr-5 mt-5 h-5 w-5 cursor-pointer text-gray-500 dark:text-gray-300"
            onClick={toggleModal}
          />
          <Dialog.Title
            as="h3"
            className="text-primary-700 dark:text-primary-300 mb-2 text-2xl font-semibold leading-6"
          >
            Schedule New Meeting
          </Dialog.Title>
          <Dialog.Description className="text-base text-gray-800 dark:text-gray-300">
            You can schedule new online or offline meeting.
          </Dialog.Description>

          {/* modal content */}
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="mt-8 h-[540px] overflow-y-auto pr-3 md:h-[400px] md:pr-0">
                <div className="grid grid-cols-1 gap-3 px-1 lg:grid-cols-2 lg:gap-8">
                  {page === 1 && (
                    <CreateMeetingDetailForms
                      methods={methods}
                      roomsOptions={roomsOptions}
                    />
                  )}
                  {page === 2 && <CreateMeetingParticipantForms />}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 items-center justify-end gap-4 md:mt-0 md:flex md:flex-row">
                <Button
                  text="sm"
                  type="button"
                  variant="outline"
                  onClick={
                    page !== 1 ? () => changePage('prev') : handleCloseModal
                  }
                >
                  {page !== 1 ? 'Back' : 'Cancel'}
                </Button>
                {page === 1 && (
                  <Button
                    isLoading={isLoading}
                    text="sm"
                    onClick={() => changePage('next')}
                    type="button"
                  >
                    Next
                  </Button>
                )}
                {page === 2 && (
                  <Button isLoading={isLoading} text="sm" type="submit">
                    Save
                  </Button>
                )}
              </div>
            </form>
          </FormProvider>
        </Dialog.Panel>
      </ModalProvider>

      <CreateMeetingToast
        open={openToast}
        setOpen={setOpenToast}
        meetName="Meeting"
      />
    </>
  );
}

export default memo(CreateMeetingModal);
