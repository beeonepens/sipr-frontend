import * as React from 'react';
import { Button, LogoutIcon } from 'ui';
import LinkTo from '@components/atoms/LinkTo';

export default function LogoutButton() {
  return (
    <LinkTo to="/">
      <Button fullWidth variant="outline" color="danger">
        <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
          <LogoutIcon className="h-5 w-5" />
          Logout
        </span>
      </Button>
    </LinkTo>
  );
}
