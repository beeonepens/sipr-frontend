import { getAllRoom } from '@utils/queries/roomQuery';
import { useQuery } from 'react-query';

export const useAllRoomQuery = () => {
  const rooms = useQuery(['rooms'], getAllRoom);

  return rooms;
};
