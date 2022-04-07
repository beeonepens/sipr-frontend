import React from 'react';
import { Dialog } from '@headlessui/react';
import PrimaryButton from '@components/atoms/Button/PrimaryButton';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import FormControl from '../Form/FormControl';
import FormAreaControl from '../Form/FormAreaControl';
import FormDateTimeControl from '../Form/FormDateTimeControl';

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export default function CreateMeetingModal({
  isModalOpen,
  toggleModal,
}: Props) {
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  function onStartDateChange(date: Date) {
    setStartDate(date);
  }
  function onEndDateChange(date: Date) {
    setEndDate(date);
  }

  return (
    <ModalProvider isModalOpen={isModalOpen} toggleModal={toggleModal}>
      <section className="my-8 inline-block w-full max-w-md transform overflow-hidden rounded-xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
        <form className="my-8">
          <div className="grid grid-cols-1 gap-3">
            <FormControl label="Name" id="meeting-name" type="text" />
            <FormAreaControl label="Description" id="meeting-desc" />
            <FormDateTimeControl
              label="Start Time"
              value={startDate}
              onChange={onStartDateChange}
              id="meeting-start-time"
            />
            <FormDateTimeControl
              label="End Time"
              value={endDate}
              onChange={onEndDateChange}
              id="meeting-end-time"
            />
          </div>

          <div className="mt-8 flex flex-row items-center justify-end gap-4">
            <PrimaryButton
              text="sm"
              type="button"
              variant="outline"
              onClick={toggleModal}
            >
              Cancel
            </PrimaryButton>
            <PrimaryButton text="sm" type="submit">
              Save
            </PrimaryButton>
          </div>
        </form>
      </section>
    </ModalProvider>
  );
}
