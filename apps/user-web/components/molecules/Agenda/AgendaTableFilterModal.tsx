import { useState } from 'react';
import { Button } from 'ui';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import SelectProvider from '@components/atoms/Select/SelectProvider';
import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useAgendaTableFilter } from '@utils/store/useAgendaTableFilter';

export interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export default function AgendaTableFilterModal({
  isModalOpen,
  toggleModal,
}: Props) {
  const { order, setOrder, sortBy, setSortBy } = useAgendaTableFilter();

  const [locOrder, setLocOrder] = useState<typeof order>(order);

  const [locSortBy, setLocSortBy] = useState<typeof sortBy>(sortBy);

  function handleCloseModal() {
    toggleModal();
  }

  function handleApplyFilter() {
    setOrder(locOrder);
    setSortBy(locSortBy);
    toggleModal();
  }

  return (
    <ModalProvider
      ver="panel"
      type="alert"
      isModalOpen={isModalOpen}
      onClose={handleCloseModal}
    >
      <Dialog.Panel className="m-0 inline-block h-screen w-full max-w-2xl transform overflow-hidden rounded-none bg-white py-14 px-6 text-left align-middle shadow-md transition-all dark:bg-gray-800 md:my-8 md:mx-2 md:h-auto md:rounded-xl md:py-8 md:px-6">
        <XIcon
          className="absolute right-0 top-0 mr-5 mt-5 h-5 w-5 cursor-pointer text-gray-500 dark:text-gray-300"
          onClick={toggleModal}
        />
        <Dialog.Title
          as="h3"
          className="text-primary-700 dark:text-primary-300 mb-2 text-2xl font-semibold leading-6"
        >
          Filter Agenda Data
        </Dialog.Title>
        <Dialog.Description className="text-base text-gray-800 dark:text-gray-300">
          You can change order & sort setting for agenda table.
        </Dialog.Description>

        <div className="my-8 grid w-fit grid-cols-2  items-center gap-y-6 gap-x-4">
          <span className="font-medium dark:text-gray-300">Sort By:</span>
          <div>
            <SelectProvider
              data={['meet_name', 'start_time'] as typeof sortBy[]}
              value={locSortBy}
              onChange={(e: typeof sortBy) => {
                setLocSortBy(e);
              }}
            />
          </div>

          <span className="font-medium dark:text-gray-300">Order:</span>
          <div>
            <SelectProvider
              data={['asc', 'desc'] as typeof order[]}
              value={locOrder}
              onChange={(e: typeof order) => {
                setLocOrder(e);
              }}
            />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 items-center justify-end gap-4 md:mt-0 md:flex md:flex-row">
          <Button
            text="sm"
            type="button"
            variant="outline"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>

          <Button text="sm" onClick={handleApplyFilter} type="button">
            Apply
          </Button>
        </div>
        {/* this modal is body */}
      </Dialog.Panel>
    </ModalProvider>
  );
}
