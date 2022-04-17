import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Button } from 'ui';
import LinkTo from '@components/atoms/LinkTo';

export default function AuthenticationLinks() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) setIsAuthenticated(true);
  }, []);

  return (
    <div
      className={clsx(
        'mx-auto grid w-full grid-cols-1 items-center justify-center gap-4 px-4 md:w-96 md:gap-8',
        isAuthenticated ? 'px-16 md:grid-cols-1' : 'md:grid-cols-2'
      )}
    >
      {!isAuthenticated ? (
        <>
          <LinkTo to="/register">
            <Button fullWidth variant="outline">
              Register
            </Button>
          </LinkTo>
          <LinkTo to="/login">
            <Button fullWidth>Login</Button>
          </LinkTo>
        </>
      ) : (
        <LinkTo to="/dashboard">
          <Button fullWidth>Dashboard</Button>
        </LinkTo>
      )}
    </div>
  );
}
