import MeetingAttended from '@components/molecules/Dashboard/Activity/MeetingAttended';
import MeetingOffline from '@components/molecules/Dashboard/Activity/MeetingOfffline';
import MeetingOnline from '@components/molecules/Dashboard/Activity/MeetingOnline';

export interface DataTypes {
  title: string;
  value: number;
  color: string;
}

interface Props {
  meetingAttended: DataTypes[];
  meetingStatus: {
    online: DataTypes[];
    offline: DataTypes[];
  };
}

export default function TotalActivity({
  meetingAttended,
  meetingStatus,
}: Props) {
  return (
    <article className="grid h-[332px] w-full grid-cols-1 gap-x-0 gap-y-4 xl:grid-cols-3 xl:gap-x-4 xl:gap-y-4">
      {/* meeting attended */}
      <MeetingAttended data={meetingAttended} />

      <div className="col-span-2 grid w-full grid-cols-1 justify-between gap-y-4">
        {/* Online */}
        <MeetingOnline data={meetingStatus.online} />

        {/* Offline */}
        <MeetingOffline data={meetingStatus.offline} />
      </div>
    </article>
  );
}
