import LinkTo from '@components/atoms/LinkTo';
import UpcomingScheduleItem from '@components/molecules/Dashboard/UpcomingScheduleItem';
import ZeroUpcomingMeeting from '@components/molecules/Dashboard/ZeroUpcomingMeeting';
import { EventType } from '@utils/constant';
import { Button } from 'ui';

interface Props {
  events: EventType[];
}

export default function UpcomingSchedule({ events }: Props) {
  return (
    <div className="flex h-[332px] flex-col items-center justify-between gap-6 rounded-lg border border-gray-300 bg-white p-4 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:bg-gray-800 dark:shadow-black/20">
      <div className="grid grid-cols-1 justify-center gap-4">
        {/** check if there's any meeting or not */}
        {/* eslint-disable-next-line no-nested-ternary */}
        {events.length > 0 ? (
          // check if total meeting is less than 3 to display empty meeting
          events.length < 3 ? (
            <>
              {events.map((item) => (
                <UpcomingScheduleItem event={item} key={item.id} />
              ))}
              {[...Array(3 - events.length)].map((_val, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <UpcomingScheduleItem empty key={i} />
              ))}
            </>
          ) : (
            events.map((item) => (
              <UpcomingScheduleItem event={item} key={item.id} />
            ))
          )
        ) : (
          // show this if no meeting found
          <ZeroUpcomingMeeting />
        )}
      </div>

      <LinkTo to="/agenda" className="w-full">
        <Button variant="outline" text="sm" fullWidth rounded="lg">
          See All Schedule
        </Button>
      </LinkTo>
    </div>
  );
}
