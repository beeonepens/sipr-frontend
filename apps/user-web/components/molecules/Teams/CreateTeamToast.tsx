import ToastProvider from '@components/atoms/Toast/ToastProvider';
import { CheckCircleIcon } from '@heroicons/react/outline';

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function CreateTeamToast({ open, setOpen }: Props) {
  return (
    <ToastProvider
      isOpen={open}
      setIsOpen={setOpen}
      title="Team Created"
      icon={
        <CheckCircleIcon className="h-8 w-8 text-green-500 dark:text-green-700" />
      }
      description="team created successfully!"
    />
  );
}
