import * as React from 'react';
import clsx from 'clsx';
import { Button } from 'ui';
import LinkTo from '@components/atoms/LinkTo';

export default function AuthenticationLinks() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  React.useEffect(() => {
    if (localStorage.getItem('token')) setIsAuthenticated(true);
  }, []);

  return (
    <div
      className={clsx(
        'grid w-full grid-cols-2 items-center justify-center gap-4 px-4',
        isAuthenticated ? 'md:grid-cols-1' : 'md:grid-cols-2'
      )}
    >
      {!isAuthenticated ? (
        <>
          <LinkTo to="/login">
            <Button padding="sm" fullWidth variant="outline">
              Login
            </Button>
          </LinkTo>
          <LinkTo to="/register">
            <Button padding="sm" fullWidth>
              Register
            </Button>
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
