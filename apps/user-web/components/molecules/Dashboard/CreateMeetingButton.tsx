import React from 'react';
import { Button } from 'ui';
import PlusIcon from '@components/atoms/Icon/PlusIcon';

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
