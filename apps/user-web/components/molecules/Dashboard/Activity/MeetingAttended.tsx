import { PieChart } from 'react-minimal-pie-chart';
import { DataTypes } from '@components/organisms/Dashboard/TotalActivity';

interface Props {
  data: DataTypes[];
}

export default function MeetingAttended({ data }: Props) {
  return (
    <div className="col-span-1 flex h-full flex-col items-center justify-between gap-4 rounded-lg border border-gray-300 bg-white p-4 dark:bg-zinc-800">
      <h5 className="text-center font-semibold">Meeting Attended</h5>
      <div className="px-10 py-6 xl:py-0">
        <PieChart
          data={data}
          // startAngle={270}
          lineWidth={20}
          label={() => `${Math.round((12 / 14) * 100)}%`}
          labelStyle={{
            fontWeight: 'bold',
            fontSize: '24px',
            fill: '#104779',
          }}
          labelPosition={0}
          rounded
          animate
        />
      </div>
      <div className="flex w-full flex-row justify-between gap-3 px-4">
        <div className="flex flex-col items-center">
          <span className="text-primary-700 text-lg font-bold">12</span>
          <span className="text-sm text-gray-700">Attended</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-primary-700 text-lg font-bold">14</span>
          <span className="text-sm text-gray-700">Total</span>
        </div>
      </div>
    </div>
  );
}
