import { useState } from 'react';
import MeetingInfo from '@components/molecules/Meeting/MeetingInfo';
import MeetingNavigation from '@components/molecules/Meeting/MeetingNavigation';
import { EventType } from '@utils/constant';
import { Button } from 'ui';

interface Props {
  events: EventType[];
}

export default function TodayMeeting({ events }: Props) {
  const [itemIndex, setItemIndex] = useState(0);

  return (
    <div className="border-accent-400 relative max-h-fit min-h-[322px] rounded-lg border-2 p-4 md:max-h-[322px] md:p-6">
      <MeetingNavigation
        itemIndex={itemIndex}
        setItemIndex={setItemIndex}
        totalEvents={events.length}
      />

      <h2 className="text-primary-800 mb-3 mr-0 text-2xl font-semibold md:mr-20">
        {events[itemIndex].title}
      </h2>

      <div className="mr-0 mb-6 md:mr-16">
        <p className="line-clamp-2 text-gray-500">
          {events[itemIndex].description}
        </p>
      </div>

      <MeetingInfo event={events[itemIndex]} />

      <div className="mt-4 flex flex-row justify-end">
        <Button variant="outline">Start in 50 minutes</Button>
      </div>
    </div>
  );
}