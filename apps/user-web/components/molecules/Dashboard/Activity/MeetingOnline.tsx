import { PieChart } from 'react-minimal-pie-chart';
import { DataTypes } from '@components/organisms/Dashboard/TotalActivity';
import { useLogoColor } from '@utils/hooks/useLogoColor';
import { useFormatChartColor } from '@utils/hooks/useFormatChartColor';

const dataMock: DataTypes[] = [
  { title: 'Offline', value: 4, color: 'secondary' },
  { title: 'Online', value: 10, color: 'primary' },
];

export default function MeetingOnline() {
  const textColor = useLogoColor();
  const chartData = useFormatChartColor(dataMock);

  return (
    <div className="flex h-full w-full flex-row items-center justify-between gap-2 rounded-lg border border-gray-300 bg-white p-4 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:bg-gray-800 dark:shadow-black/20 md:gap-1">
      <div className="flex h-full flex-col items-start justify-between">
        <h5 className="font-semibold">Online</h5>
        <p className="text-sm">Total Online Meeting</p>
        <p className="text-lg font-bold">
          10 <span className="font-medium text-gray-400">/14</span>
        </p>
      </div>

      <div className="h-28 w-28 px-2">
        <PieChart
          data={chartData}
          // startAngle={270}
          lineWidth={20}
          label={() => `${Math.round((10 / 14) * 100)}%`}
          labelStyle={{
            fontWeight: 'bold',
            fontSize: '20px',
            fill: textColor === 'dark' ? '#104779' : '#509AE7',
          }}
          labelPosition={0}
          rounded
          animate
        />
      </div>
    </div>
  );
}
