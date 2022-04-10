import type { SubmitHandler } from 'react-hook-form';

import * as React from 'react';
import { Dialog } from '@headlessui/react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from 'ui';
import { MeetingStatusOptions } from '@utils/constant';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import FormControl from '../Form/FormControl';
import FormAreaControl from '../Form/FormAreaControl';
import FormDateTimeControl from '../Form/FormDateTimeControl';
import FormRadioControl from '../Form/FormRadioControl';

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
}

/** Schema for new meeting forms */
const FormSchema = z.object({
  name: z.string().min(1, { message: 'Required' }),
  description: z.string().optional(),
  startDate: z.date(),
  endDate: z.date(),
  isOnline: z.boolean().optional(),
  location: z.string().min(1, { message: 'Required' }),
});

/** TS types for the input form */
export type NewMeetingTypes = z.infer<typeof FormSchema>;

export default function CreateMeetingModal({
  isModalOpen,
  toggleModal,
}: Props) {
  /** hooks for forms control & submit action */
  const methods = useForm<NewMeetingTypes>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      isOnline: true,
    },
  });

  /** function that run on form-submit */
  const onSubmit: SubmitHandler<NewMeetingTypes> = (data) => {
    console.log(data);
    toggleModal();
  };

  /** function that run to close modal */
  const handleCloseModal = () => {
    toggleModal();
    methods.reset();
  };

  /** form error log */
  if (methods.formState.errors) console.log(methods.formState.errors);

  return (
    <ModalProvider isModalOpen={isModalOpen} onClose={handleCloseModal}>
      <section className="m-0 inline-block h-screen w-full max-w-md transform overflow-hidden rounded-none bg-white p-6 text-left align-middle shadow-xl transition-all md:my-8 md:mx-2 md:h-auto md:rounded-xl">
        <Dialog.Title
          as="h3"
          className="text-primary-950 mb-2 text-2xl font-semibold leading-6"
        >
          Schedule New Meeting
        </Dialog.Title>
        <Dialog.Description className="text-base text-gray-800 ">
          You can schedule new online meeting.
        </Dialog.Description>

        {/* modal content */}
        <FormProvider {...methods}>
          <form className="mt-8" onSubmit={methods.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-3">
              <FormControl
                label="Name"
                id="name"
                aria-label="meeting name"
                type="text"
              />
              <FormAreaControl
                label="Description"
                id="description"
                aria-label="meeting description"
              />
              <FormDateTimeControl label="Start Time" id="startDate" />
              <FormDateTimeControl label="End Time" id="endDate" />
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
