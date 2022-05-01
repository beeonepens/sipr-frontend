import { getDateTimeByUid, getMeetingByUid } from '@utils/queries/meetQuery';
import { useQuery } from 'react-query';

export const useMeetingQuery = () => {
  const meetings = useQuery(
    ['meetings', typeof window !== 'undefined' && localStorage.getItem('uid')],
    getMeetingByUid
  );

  return meetings;
};

export const useMeetTimeQuery = () => {
  const datetimes = useQuery(
    ['datetimes', typeof window !== 'undefined' && localStorage.getItem('uid')],
    getDateTimeByUid
  );

  return datetimes;
};
