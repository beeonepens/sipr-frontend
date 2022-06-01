import * as React from 'react';
import dynamic from 'next/dynamic';
import { Button } from 'ui';

import CreateMeetingButton from '@components/molecules/Dashboard/CreateMeetingButton';
import { useAllRoomQuery } from '@utils/hooks/queryHooks/useRoomQuery';

// import CreateMeetingModal from '@components/molecules/Dashboard/CreateMeetingModal';
const CreateMeetingModal = dynamic(
  () => import('../../molecules/Dashboard/CreateMeetingModal')
);

export default function NewMeeting() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const rooms = useAllRoomQuery();

  function toggleModal() {
    setIsModalOpen((prevState) => !prevState);
  }

  return (
    <div>
      {!rooms.isSuccess ? (
        <div>
          <Button isLoading color="primary" text="sm">
            Loading...
          </Button>
        </div>
      ) : (
        <CreateMeetingButton onClick={() => setIsModalOpen(true)} />
      )}

      <CreateMeetingModal
        isModalOpen={isModalOpen}
        toggleModal={toggleModal}
        rooms={rooms.data ? rooms.data.data : []}
      />
    </div>
  );
}
