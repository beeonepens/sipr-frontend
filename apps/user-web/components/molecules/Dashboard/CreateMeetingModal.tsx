import { memo } from 'react';
import { Room } from '@utils/types/room.dto';
import { useForm, FormProvider } from 'react-hook-form';
import { Dialog } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'ui';
import { XIcon } from '@heroicons/react/outline';

import { MeetingStatusOptions } from '@utils/constant';
import { NewMeetingInput, NewMeetingSchema } from '@utils/validations';
import { useSynchronizeMeetingTime } from '@utils/hooks/meeting/useSynchronizeMeetingTime';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { useCreateMeeting } from '@utils/hooks/meeting/useCreateMeeting';
import FormControl from '../Form/FormControl';
import FormAreaControl from '../Form/FormAreaControl';
import FormDateTimeControl from '../Form/FormDateTimeControl';
import FormRadioControl from '../Form/FormRadioControl';
import FormSelectControl from '../Form/FormSelectControl';
import CreateMeetingToast from './CreateMeetingToast';

export interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
  rooms: Room[];
}

function CreateMeetingModal({ isModalOpen, toggleModal, rooms }: Props) {
  // const queryClient = useQueryClient();

  /** hooks for forms control & submit action */
  const methods = useForm<NewMeetingInput>({
    resolver: zodResolver(NewMeetingSchema),
    defaultValues: {
      isOnline: 'online',
      limit: 1,
      date_start: new Date(),
      date_end: new Date(),
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
    toggleModal();
    methods.reset();
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
            You can schedule new online meeting.
          </Dialog.Description>

          {/* modal content */}
          <FormProvider {...methods}>
            <form className="mt-8" onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-8">
                <div className="grid h-fit grid-cols-1 gap-3">
                  <FormControl
                    label="Name"
                    id="name"
                    aria-label="meeting name"
                    type="text"
                  />
                  <FormAreaControl
                    rows={4}
                    label="Description"
                    id="description"
                    aria-label="meeting description"
                  />
                  <FormDateTimeControl
                    withTime
                    label="Start Time"
                    id="date_start"
                  />
                  <FormDateTimeControl
                    withTime
                    minDate={methods.watch('date_start')}
                    label="End Time"
                    id="date_end"
                  />
                </div>

                <div className="grid h-fit grid-cols-1 gap-3">
                  <FormRadioControl
                    id="isOnline"
                    title="Status"
                    options={MeetingStatusOptions}
                  />
                  {methods.watch('isOnline') === 'online' ? (
                    <FormControl
                      label="Link to Meeting"
                      id="onlineLink"
                      aria-label="meeting location"
                      type="text"
                    />
                  ) : (
                    <FormSelectControl
                      label="Room"
                      placeholder="Select Offline Room"
                      id="offlineLoc"
                      options={roomsOptions}
                    />
                  )}
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 items-center justify-end gap-4 md:flex md:flex-row">
                <Button
                  text="sm"
                  type="button"
                  variant="outline"
                  onClick={handleCloseModal}
                >
                  Cancel
                </Button>
                <Button isLoading={isLoading} text="sm" type="submit">
                  Save
                </Button>
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
