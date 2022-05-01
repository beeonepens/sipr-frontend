import ToastProvider from '@components/atoms/Toast/ToastProvider';
import { CheckCircleIcon } from '@heroicons/react/outline';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  meetName: string;
}

export default function EditMeetingToast({ open, setOpen, meetName }: Props) {
  return (
    <ToastProvider
      isOpen={open}
      setIsOpen={setOpen}
      title="Meeting Saved"
      icon={
        <CheckCircleIcon className="h-8 w-8 text-green-500 dark:text-green-700" />
      }
      description={`${meetName} edited successfully`}
    />
  );
}
