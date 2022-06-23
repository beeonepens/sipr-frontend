import { getTeamById, getTeamByMemberId } from '@utils/queries/teamQuery';
import { useQuery } from 'react-query';

export const useUserTeamQuery = () => {
  const teams = useQuery(
    ['teams', typeof window !== 'undefined' && localStorage.getItem('uid')],
    getTeamByMemberId
  );

  return teams;
};

export const useTeamDetailQuery = (id: string) => {
  const teams = useQuery(['teams', id], getTeamById);

  return teams;
};
