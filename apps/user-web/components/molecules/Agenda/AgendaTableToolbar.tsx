import * as React from 'react';
// import dynamic from 'next/dynamic';
import { Button } from 'ui';
import { FilterIcon, PlusIcon } from '@heroicons/react/outline';
import { useAllRoomQuery } from '@utils/hooks/queryHooks/useRoomQuery';

import CreateMeetingModal from '../Meeting/CreateMeetingModal';
import AgendaTableFilterModal from './AgendaTableFilterModal';

export default function AgendaTableToolbar() {
  const [isNewModalOpen, setIsNewModalOpen] = React.useState(false);
  const [isFilterModalOpen, setIsFilterModalOpen] = React.useState(false);
  const rooms = useAllRoomQuery();

  function toggleNewModal() {
    setIsNewModalOpen((prevState) => !prevState);
  }

  function toggleFilterModal() {
    setIsFilterModalOpen((prevState) => !prevState);
  }

  return (
    <>
      <div className="flex flex-row justify-start gap-6">
        <Button onClick={toggleNewModal} padding="sm" text="sm">
          <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
            <PlusIcon className="h-4 w-4" />
            New Meeting
          </span>
        </Button>

        <Button
          onClick={toggleFilterModal}
          padding="sm"
          text="sm"
          variant="outline"
        >
          <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
            <FilterIcon className="h-4 w-4" />
            Filter
          </span>
        </Button>
      </div>

      <CreateMeetingModal
        isModalOpen={isNewModalOpen}
        toggleModal={toggleNewModal}
        rooms={rooms.data ? rooms.data.data : []}
      />

      <AgendaTableFilterModal
        isModalOpen={isFilterModalOpen}
        toggleModal={toggleFilterModal}
      />
    </>
  );
}
