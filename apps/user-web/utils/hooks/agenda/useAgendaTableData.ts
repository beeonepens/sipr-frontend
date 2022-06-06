import { useMemo } from 'react';
import { formatToMs } from '@utils/formatDateTime';
import { useAgendaTableFilter } from '@utils/store/useAgendaTableFilter';
import { Datetime, Meet } from '@utils/types/meet.dto';
import { UseQueryResult } from 'react-query';

interface IParams {
  meetings: UseQueryResult<Meet[], unknown>;
  datetimes: UseQueryResult<Datetime[], unknown>;
}

export const useAgendaTableData = ({ meetings, datetimes }: IParams) => {
  const { order, sortBy } = useAgendaTableFilter();

  const data = useMemo(() => {
    /** if meetings & datetime data not found, return empty array */
    if (!meetings.data || !datetimes.data) return [];

    const meetData = datetimes.data
      /** combine datetime & meeting detail data */
      .map((dt) => ({
        ...dt,
        ...meetings.data.find((meet) => meet.id_meet === dt.id_meet),
      }));

    /** sort meeting data */
    if (sortBy === 'start_time') {
      if (order === 'asc') {
        return meetData.sort(
          (a, b) => formatToMs(a.start_datetime) - formatToMs(b.start_datetime)
        );
      }
      if (order === 'desc') {
        return meetData.sort(
          (a, b) => formatToMs(b.start_datetime) - formatToMs(a.start_datetime)
        );
      }
    }
    // filter: sort by name rule
    if (sortBy === 'meet_name') {
      if (order === 'asc')
        return meetData.sort((a, b) =>
          a.name_meeting < b.name_meeting ? -1 : 1
        );
      if (order === 'desc')
        return meetData.sort((a, b) =>
          a.name_meeting < b.name_meeting ? 1 : -1
        );
    }

    return meetData;
  }, [meetings.data, datetimes.data, order, sortBy]);

  return data;
};
