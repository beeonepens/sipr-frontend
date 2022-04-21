import { useRouter } from 'next/router';
import { Button } from 'ui';
import { LogoutIcon } from '@heroicons/react/outline';

export default function LogoutButton() {
  const router = useRouter();

  const onLogout = () => {
    localStorage.removeItem('token');
    router.replace('/');
  };

  return (
    <Button fullWidth variant="outline" color="danger" onClick={onLogout}>
      <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
        <LogoutIcon className="h-5 w-5" />
        Logout
      </span>
    </Button>
  );
}
