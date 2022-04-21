import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  totalEvents: number;
  itemIndex: number;
  setItemIndex: Dispatch<SetStateAction<number>>;
}

export default function MeetingNavigation({
  itemIndex,
  setItemIndex,
  totalEvents,
}: Props) {
  const handleNext = () => {
    if (itemIndex < totalEvents - 1) setItemIndex((cs) => cs + 1);
    if (itemIndex === totalEvents - 1) setItemIndex(0);
  };

  const handlePrev = () => {
    if (itemIndex > 0) setItemIndex((cs) => cs - 1);
    if (itemIndex === 0) setItemIndex(totalEvents - 1);
  };

  return (
    <div className="absolute right-0 top-0 m-4 hidden flex-row justify-end gap-3 md:m-6 md:flex">
      <button
        type="button"
        onClick={handlePrev}
        className="rounded-lg bg-gray-100 p-2 hover:bg-gray-200"
      >
        <ChevronLeftIcon className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={handleNext}
        className="rounded-lg bg-gray-100 p-2 hover:bg-gray-200"
      >
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </div>
  );
}
