import { PencilIcon, TrashIcon } from '@heroicons/react/outline';
import TooltipProvider from '@components/atoms/Tooltip/TooltipProvider';
import { EventType } from '@utils/constant';

interface Props {
  event: EventType;
  handleSelectEvent: (e: EventType) => void;
  handleDeleteEvent: (e: EventType) => void;
}

export default function AgendaTableAction({
  event,
  handleDeleteEvent,
  handleSelectEvent,
}: Props) {
  return (
    <td className="flex flex-row justify-end gap-3 px-6 py-4 text-right">
      <TooltipProvider message="Delete meeting">
        <button
          type="button"
          onClick={() => handleDeleteEvent(event)}
          className="rounded-lg bg-red-50 p-2 hover:bg-red-100"
        >
          <TrashIcon className="h-4 w-4 text-red-600" />
        </button>
      </TooltipProvider>

      <TooltipProvider message="Edit meeting">
        <button
          type="button"
          onClick={() => handleSelectEvent(event)}
          className="rounded-lg bg-blue-50 p-2 hover:bg-blue-100"
        >
          <PencilIcon className="text-primary-600 h-4 w-4" />
        </button>
      </TooltipProvider>
    </td>
  );
}
