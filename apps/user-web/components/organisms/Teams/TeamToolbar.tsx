import CreateTeamModal from '@components/molecules/Teams/CreateTeamModal';
import JoinTeamModal from '@components/molecules/Teams/JoinTeamModal';
import { PlusIcon, UserGroupIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Button } from 'ui';

export default function TeamToolbar() {
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  function toggleNewModal() {
    setIsNewModalOpen((prevState) => !prevState);
  }
  function toggleJoinModal() {
    setIsJoinModalOpen((prevState) => !prevState);
  }

  return (
    <>
      <div className="flex flex-row justify-start gap-6">
        <Button onClick={toggleNewModal} padding="sm" text="sm">
          <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
            <PlusIcon className="h-4 w-4" />
            Create Team
          </span>
        </Button>

        <Button
          onClick={toggleJoinModal}
          padding="sm"
          text="sm"
          variant="outline"
        >
          <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
            <UserGroupIcon className="h-4 w-4" />
            Join Team
          </span>
        </Button>
      </div>

      <CreateTeamModal
        isModalOpen={isNewModalOpen}
        toggleModal={toggleNewModal}
      />
      <JoinTeamModal
        isModalOpen={isJoinModalOpen}
        toggleModal={toggleJoinModal}
      />
    </>
  );
}
