import { CalendarIcon as HeroCalendarIcon } from '@heroicons/react/outline';

interface Props {
  className?: string;
}

export function CalendarIcon({ className = 'h-6 w-6' }: Props) {
  return <HeroCalendarIcon className={className} />;
}
