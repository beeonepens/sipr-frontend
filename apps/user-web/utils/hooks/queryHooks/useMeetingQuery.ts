import {
  getDateTimeByUid,
  getMeetingById,
  getMeetingByUid,
} from '@utils/queries/meetQuery';
import { Datetime, Meet } from '@utils/types/meet.dto';
import { useQuery } from 'react-query';

/** get all meeting data filtered by user id */
export const useMeetingQuery = () => {
  const meetings = useQuery(
    ['meetings', typeof window !== 'undefined' && localStorage.getItem('uid')],
    getMeetingByUid
  );

  return meetings;
};

/** get specific meeting data */
export const useMeetDetailQuery = (
  id: string,
  onSuccess?: (data: { meet: Meet[]; datetime: Datetime[] }) => void
) => {
  const meetings = useQuery(['meetings', id], getMeetingById, {
    onSuccess,
  });

  return meetings;
};

/** ---------------------- */
/** Meeting Time */
export const useMeetTimeQuery = () => {
  const datetimes = useQuery(
    ['datetimes', typeof window !== 'undefined' && localStorage.getItem('uid')],
    getDateTimeByUid
  );

  return datetimes;
};
