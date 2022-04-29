import { PieChart } from 'react-minimal-pie-chart';
import { useLogoColor } from '@utils/hooks/useLogoColor';
import { useFormatChartColor } from '@utils/hooks/useFormatChartColor';
import { DataTypes } from '@components/organisms/Dashboard/TotalActivity';

interface Props {
  data: DataTypes[];
}

export default function MeetingAttended({ data }: Props) {
  const textColor = useLogoColor();
  const chartData = useFormatChartColor(data);

  return (
    <div className="col-span-1 flex h-full flex-col items-center justify-between gap-4 rounded-lg border border-gray-300 bg-white p-4 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:bg-gray-800 dark:shadow-black/20">
      <h5 className="text-center font-semibold">Meeting Attended</h5>
      <div className="px-10 py-6 xl:py-0">
        <PieChart
          data={chartData}
          // startAngle={270}
          lineWidth={20}
          label={() => `${Math.round((12 / 14) * 100)}%`}
          labelStyle={{
            fontWeight: 'bold',
            fontSize: '24px',
            fill: textColor === 'dark' ? '#104779' : '#509AE7',
          }}
          labelPosition={0}
          rounded
          animate
        />
      </div>
      <div className="flex w-full flex-row justify-between gap-3 px-4">
        <div className="flex flex-col items-center">
          <span className="text-primary-700 dark:text-primary-400 text-lg font-bold">
            12
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Attended
          </span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-primary-700 dark:text-primary-400 text-lg font-bold">
            14
          </span>
          <span className="text-sm text-gray-700 dark:text-gray-300">
            Total
          </span>
        </div>
      </div>
    </div>
  );
}
