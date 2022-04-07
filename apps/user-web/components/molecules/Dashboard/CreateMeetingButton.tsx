import React from 'react';
import PrimaryButton from '@components/atoms/Button/PrimaryButton';
import PlusIcon from '@components/atoms/Icon/PlusIcon';

interface Props {
  onClick: () => void;
}

export default function CreateMeetingButton({ onClick }: Props) {
  return (
    <PrimaryButton onClick={onClick}>
      <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
        <PlusIcon />
        Create
      </span>
    </PrimaryButton>
  );
}
