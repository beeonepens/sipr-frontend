import { useCallback, useMemo } from 'react';
import { useLogoColor } from './useLogoColor';

interface DataTypes {
  title: string;
  value: number;
  color: string;
}

export function useFormatChartColor(data: DataTypes[]) {
  const textColor = useLogoColor();

  const setChartColor = useCallback(
    (itemColor) => {
      if (itemColor === 'primary') {
        if (textColor === 'dark') return '#104779';
        return '#509AE7';
      }

      if (textColor === 'dark') return '#CDE3F8';
      return '#1e293b';
    },
    [textColor]
  );

  const chartData = useMemo(() => {
    const x = data.map((item) => ({
      title: item.title,
      value: item.value,
      color: setChartColor(item.color),
    }));
    return x;
  }, [data, setChartColor]);

  return chartData;
}
