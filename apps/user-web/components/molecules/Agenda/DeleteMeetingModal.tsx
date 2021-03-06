import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { useMutation, useQueryClient } from 'react-query';
import { Button } from 'ui';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { XIcon } from '@heroicons/react/outline';
import { MeetWithDate } from '@utils/types/meet.dto';
import { deleteMeeting } from '@utils/mutations/meetMutation';
import { handleOpenToast } from '@utils/constant';
import DeleteMeetingToast from './DeleteMeetingToast';

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
  openEvent: MeetWithDate;
}

export default function DeleteMeetingModal({
  openEvent,
  isModalOpen,
  toggleModal,
}: Props) {
  const queryClient = useQueryClient();
  const [openToast, setOpenToast] = useState(false);

  /** hooks for delete meet mutation */
  const meetingMutation = useMutation(deleteMeeting);

  const handleDelete = () => {
    meetingMutation.mutate(openEvent.id_meet, {
      onError: ({ message, response }) => {
        console.log({ message, response });
      },
      onSuccess: ({ message }) => {
        handleOpenToast(openToast, setOpenToast);
        if (message === 'Succesfull') toggleModal();
        queryClient.invalidateQueries([
          'meetings',
          typeof window !== 'undefined' && localStorage.getItem('uid'),
        ]);
        queryClient.invalidateQueries([
          'datetimes',
          typeof window !== 'undefined' && localStorage.getItem('uid'),
        ]);
      },
    });
  };

  return (
    <>
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
                className="text-primary-700 dark:text-primary-300 text-xl font-semibold leading-6"
              >
                Delete Meeting
              </Dialog.Title>
              <Dialog.Description className="mt-3 flex flex-col text-sm text-gray-700 dark:text-gray-300">
                <span>Are you sure you want to delete this meeting?</span>
                <span>Meeting Name : {openEvent.name_meeting}</span>
              </Dialog.Description>

              <div className="mt-6 flex flex-row justify-end">
                <div className="grid w-full grid-cols-2 items-center justify-end gap-5 md:flex md:w-3/4 md:flex-row lg:w-3/5 xl:w-4/6">
                  <Button
                    text="sm"
                    fullWidth
                    variant="outline"
                    onClick={toggleModal}
                  >
                    Cancel
                  </Button>
                  <Button
                    text="sm"
                    onClick={handleDelete}
                    fullWidth
                    color="danger"
                    isLoading={meetingMutation.isLoading}
                  >
                    Confirm
                  </Button>
                </div>
              </div>
            </>
          )}
        </section>
      </ModalProvider>

      <DeleteMeetingToast
        open={openToast}
        setOpen={setOpenToast}
        meetName={openEvent?.name_meeting || 'Meeting'}
      />
    </>
  );
}
