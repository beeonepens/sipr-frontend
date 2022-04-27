import { PieChart } from 'react-minimal-pie-chart';
import { DataTypes } from '@components/organisms/Dashboard/TotalActivity';

const dataMock: DataTypes[] = [
  { title: 'Online', value: 10, color: '#CDE3F8' },
  { title: 'Offline', value: 4, color: '#104779' },
];

export default function MeetingOffline() {
  return (
    <div className="flex h-full w-full flex-row items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white p-4 dark:bg-zinc-800 md:gap-1">
      <div className="flex h-full flex-col items-start justify-between">
        <h5 className="font-semibold">Offline</h5>
        <p className="text-sm">Total Offline Meeting</p>
        <p className="text-lg font-bold">
          4 <span className="font-medium text-gray-400">/14</span>
        </p>
      </div>

      <div className="h-28 w-28 px-2">
        <PieChart
          data={dataMock}
          // startAngle={270}
          lineWidth={20}
          label={() => `${Math.round((4 / 14) * 100)}%`}
          labelStyle={{
            fontWeight: 'bold',
            fontSize: '20px',
            fill: '#104779',
          }}
          labelPosition={0}
          rounded
          animate
        />
      </div>
    </div>
  );
}
