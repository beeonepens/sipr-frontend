import { Button, PlusIcon } from 'ui';

interface Props {
  onClick: () => void;
}

export default function CreateMeetingButton({ onClick }: Props) {
  return (
    <Button color="primary" onClick={onClick}>
      <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
        <PlusIcon />
        Create
      </span>
    </Button>
  );
}
