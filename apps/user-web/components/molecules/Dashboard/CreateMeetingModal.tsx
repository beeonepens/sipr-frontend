import type { SubmitHandler } from 'react-hook-form';

import { Dialog } from '@headlessui/react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'ui';
import { XIcon } from '@heroicons/react/outline';
import { MeetingStatusOptions } from '@utils/constant';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { useMutation } from 'react-query';
import { NewMeetingInput, NewMeetingSchema } from '@utils/validations';
import { AxiosError } from 'axios';
import { NewMeetingResponse } from '@utils/types/meet.dto';
import { createMeeting } from '@utils/mutations/meetMutation';
import { createRoom } from '@utils/mutations/roomMutatin';
import { NewRoomResponse } from '@utils/types/room.dto';
import { NewRoomInput } from '@utils/validations/newRoomVal';
import FormControl from '../Form/FormControl';
import FormAreaControl from '../Form/FormAreaControl';
import FormDateTimeControl from '../Form/FormDateTimeControl';
import FormRadioControl from '../Form/FormRadioControl';

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export default function CreateMeetingModal({
  isModalOpen,
  toggleModal,
}: Props) {
  /** hooks for forms control & submit action */
  const methods = useForm<NewMeetingInput>({
    resolver: zodResolver(NewMeetingSchema),
    defaultValues: {
      isOnline: true,
      limit: 1,
      date_start: new Date(),
      date_end: new Date(),
    },
  });

  /** hooks for create meeting mutation */
  const meetingMutation = useMutation<
    NewMeetingResponse,
    AxiosError,
    NewMeetingInput
  >(createMeeting);

  /** hooks for create room mutation */
  const roomMutatioin = useMutation<NewRoomResponse, AxiosError, NewRoomInput>(
    createRoom
  );

  /** function that run on form-submit */
  const onSubmit: SubmitHandler<NewMeetingInput> = (data) => {
    console.log(data);

    const newRoomData = {
      name_room: data.location,
      description: data.location,
      isBooked: true,
      isOnline: data.isOnline,
    };

    /** create room mutation */
    console.log('create room');
    roomMutatioin.mutate(newRoomData, {
      onError: ({ message, response }) => {
        console.log({ message, response });
      },
      onSuccess: ({ data: room, message }) => {
        console.log({ room, message });
        /** if room mutation success, run meeting mutation */
        if (message === 'Succes') {
          console.log('create meeting');
          meetingMutation.mutate(
            { ...data, location: String(room[0].id_room) },
            {
              // eslint-disable-next-line no-shadow
              onError: ({ message, response }) => {
                console.log({ message, response });
              },
              // eslint-disable-next-line no-shadow
              onSuccess: ({ data: meet, message }) => {
                if (message === 'Succesfull') {
                  console.log({ meet, message });
                  toggleModal();
                }
              },
            }
          );
        }
      },
    });
  };

  /** function that run to close modal */
  const handleCloseModal = () => {
    toggleModal();
    methods.reset();
  };

  /** form error log */
  if (methods.formState.errors) console.log({ f: methods.formState.errors });

  return (
    <ModalProvider isModalOpen={isModalOpen} onClose={handleCloseModal}>
      <section className="m-0 inline-block h-screen w-full max-w-4xl transform overflow-hidden rounded-none bg-white py-14 px-6 text-left align-middle shadow-md transition-all dark:bg-zinc-800 md:my-8 md:mx-2 md:h-auto md:rounded-xl md:py-8 md:px-6">
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
                  title="Status"
                  options={MeetingStatusOptions}
                  disabled="offline"
                  selected="online"
                />
                <FormControl
                  label="Link to Meeting"
                  id="location"
                  aria-label="meeting location"
                  type="text"
                />
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
              <Button text="sm" type="submit">
                Save
              </Button>
            </div>
          </form>
        </FormProvider>
      </section>
    </ModalProvider>
  );
}
