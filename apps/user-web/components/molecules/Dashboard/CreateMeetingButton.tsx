import { Button } from 'ui';
import { PlusIcon } from '@heroicons/react/outline';

interface Props {
  onClick: () => void;
}

export default function CreateMeetingButton({ onClick }: Props) {
  return (
    <Button color="primary" onClick={onClick}>
      <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
        <PlusIcon className="h-5 w-5" />
        New Meeting
      </span>
    </Button>
  );
}
