import CreateTeamModal from '@components/molecules/Teams/CreateTeamModal';
import { PlusCircleIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { useState } from 'react';

interface Props {
  totalTeams: number;
}

export default function NewTeams({ totalTeams }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
        className={clsx(
          'flex flex-col items-center justify-center rounded-lg bg-white py-4 px-3 shadow-md shadow-gray-300/25 outline-dashed outline-1 outline-gray-300 transition duration-75 hover:cursor-pointer hover:bg-gray-200 dark:bg-gray-900 dark:shadow-black/20 dark:outline-gray-700 dark:hover:bg-gray-800',
          totalTeams > 0 ? 'h-full w-full' : 'h-36 w-full'
        )}
      >
        <PlusCircleIcon className="text-primary-600 dark:text-primary-300 mb-2 h-6 w-6" />
        <p className="text-base text-gray-600 dark:text-gray-300">
          Create new team
        </p>
      </button>

      <CreateTeamModal isModalOpen={isOpen} toggleModal={toggleModal} />
    </>
  );
}
