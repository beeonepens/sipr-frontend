import React from 'react';
import CreateMeetingButton from '@components/molecules/Dashboard/CreateMeetingButton';
import CreateMeetingModal from '@components/molecules/Dashboard/CreateMeetingModal';

export default function NewMeeting() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  function toggleModal() {
    setIsModalOpen((prevState) => !prevState);
  }

  return (
    <div>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <CreateMeetingButton onClick={() => setIsModalOpen(true)} />
      <CreateMeetingModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
}
