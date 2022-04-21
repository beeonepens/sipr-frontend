import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';

interface Props {
  className?: string;
}

export function ArrowLeftIcon({ className = 'h-6 w-6' }: Props) {
  return <ArrowNarrowLeftIcon className={className} />;
}
