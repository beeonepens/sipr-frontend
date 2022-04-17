import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { isPublicUrl } from '@utils/constant';

export const useProtectedRoute = () => {
  const { replace, pathname } = useRouter();

  useEffect(() => {
    if (!isPublicUrl(pathname)) {
      if (!localStorage.getItem('token')) replace('/');
    }

    if (pathname === '/login' || pathname === '/register') {
      if (localStorage.getItem('token')) replace('/dashboard');
    }
  }, [pathname, replace]);
};
