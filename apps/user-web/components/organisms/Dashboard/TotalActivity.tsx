import MeetingAttended from '@components/molecules/Dashboard/Activity/MeetingAttended';
import MeetingOnline from '@components/molecules/Dashboard/Activity/MeetingOnline';

export interface DataTypes {
  title: string;
  value: number;
  color: string;
}

const dataMock: DataTypes[] = [
  { title: 'unattended', value: 2, color: '#CDE3F8' },
  { title: 'Attended', value: 12, color: '#104779' },
];

export default function TotalActivity() {
  return (
    <section className="col-span-1 flex h-full w-full flex-col gap-4 md:gap-6 lg:col-span-2">
      <h3 className="text-primary-700 dark:text-primary-300 text-2xl font-bold">
        Total Activity
      </h3>

      <article className="grid h-full w-full gap-4 xl:grid-cols-3">
        {/* meeting attended */}
        <MeetingAttended data={dataMock} />

        <div className="col-span-2 grid w-full grid-rows-2 justify-between gap-4">
          {/* Online */}
          <MeetingOnline />

          {/* Offline */}
          <div className="w-full rounded-lg border border-gray-300 bg-white p-4 dark:bg-zinc-800">
            <h5 className="text-center font-semibold">Offline</h5>
          </div>
        </div>
      </article>
    </section>
  );
}
