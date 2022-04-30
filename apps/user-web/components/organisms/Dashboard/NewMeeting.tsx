import * as React from 'react';
import { useQuery } from 'react-query';
import CreateMeetingButton from '@components/molecules/Dashboard/CreateMeetingButton';
import CreateMeetingModal from '@components/molecules/Dashboard/CreateMeetingModal';
import { getAllRoom } from '@utils/queries/roomQuery';
import { Button } from 'ui';

export default function NewMeeting() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const rooms = useQuery(['rooms'], getAllRoom);

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
