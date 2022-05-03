import { getUserById } from '@utils/queries/userQuery';
import { useQuery } from 'react-query';

/** get user detail by user id */
export const useUserDetailQuery = () => {
  const user = useQuery(
    ['user', typeof window !== 'undefined' && localStorage.getItem('uid')],
    getUserById
  );

  return user;
};
