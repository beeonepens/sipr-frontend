import LinkTo from '@components/atoms/LinkTo';
import UpcomingScheduleItem from '@components/molecules/Dashboard/UpcomingScheduleItem';
import { EventType } from '@utils/constant';
import { Button } from 'ui';

interface Props {
  events: EventType[];
}

export default function UpcomingSchedule({ events }: Props) {
  return (
    <div className="grid grid-cols-1 justify-center gap-4 rounded-lg border border-gray-300 p-4 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:shadow-black/25">
      {events.slice(0, 3).map((item) => (
        <UpcomingScheduleItem event={item} key={item.id} />
      ))}

      <LinkTo to="/agenda" className="mt-2 w-full">
        <Button variant="outline" text="sm" fullWidth rounded="lg">
          See All Schedule
        </Button>
      </LinkTo>
    </div>
  );
}
