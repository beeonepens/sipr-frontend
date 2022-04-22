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
    <div className="absolute left-0 bottom-0 m-4 flex flex-row justify-end gap-3 md:right-0 md:top-0 md:left-auto md:bottom-auto md:m-6 md:flex">
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
