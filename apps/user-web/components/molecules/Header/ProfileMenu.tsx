import { ReactNode, Fragment } from 'react';
import { useRouter } from 'next/router';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import clsx from 'clsx';
import { LogoutIcon, UserCircleIcon } from '@heroicons/react/outline';
import LinkTo from '@components/atoms/LinkTo';

interface RadixMenuItem {
  label: string;
  action?: () => void;
  icon?: ReactNode;
}

const menuItems: RadixMenuItem[] = [
  {
    label: 'Profile',
    icon: <UserCircleIcon className="mr-2 h-6 w-6" />,
  },
  {
    label: 'Logout',
    icon: <LogoutIcon className="mr-2 h-6 w-6" />,
  },
];

export default function ProfileMenu() {
  const router = useRouter();

  const onLogout = () => {
    localStorage.removeItem('token');
    router.replace('/');
  };

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        {/* user profile button */}
        <DropdownMenuPrimitive.Trigger asChild>
          <button
            type="button"
            className={clsx(
              'm-0 flex h-auto w-auto flex-row items-center justify-center rounded-md p-2 transition duration-75 hover:bg-gray-200 dark:hover:bg-zinc-700',
              'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
            )}
          >
            <AvatarPrimitive.Root
              key="avatar-action"
              className="relative inline-flex h-6 w-6 "
            >
              <AvatarPrimitive.Image
                src="/uploads/avatar-man.png"
                alt="Avatar"
                className={clsx(
                  'h-full w-full object-cover',
                  'rounded-full outline outline-2 outline-offset-2 outline-gray-300 dark:outline-gray-600'
                )}
              />
              <AvatarPrimitive.Fallback
                className={clsx(
                  'flex h-full w-full items-center justify-center bg-white dark:bg-gray-800',
                  'rounded-full'
                )}
                delayMs={600}
              >
                <span className="text-sm font-medium uppercase text-gray-700 dark:text-gray-400">
                  KA
                </span>
              </AvatarPrimitive.Fallback>
            </AvatarPrimitive.Root>
          </button>
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Content
          align="end"
          sideOffset={5}
          className={clsx(
            'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
            'w-48 rounded-lg px-1.5 py-1',
            'bg-gray-50 dark:bg-zinc-800',
            'border border-gray-300 shadow-md shadow-gray-300/30 dark:border-zinc-700 dark:shadow-zinc-800/30'
          )}
        >
          {menuItems.map(({ label, icon }, i) => (
            <Fragment key={label}>
              {label === 'Profile' ? (
                <LinkTo to="/profile" className="">
                  <DropdownMenuPrimitive.Item
                    className={clsx(
                      'flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none',
                      'text-gray-700 focus:bg-gray-200 dark:text-gray-200 dark:focus:bg-zinc-700'
                    )}
                  >
                    {icon}
                    <span className="flex-grow text-gray-700 dark:text-gray-200">
                      {label}
                    </span>
                  </DropdownMenuPrimitive.Item>
                </LinkTo>
              ) : (
                <DropdownMenuPrimitive.Item
                  onClick={label === 'Logout' ? onLogout : null}
                  className={clsx(
                    'flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none',
                    'focus:bg-gray-200 dark:focus:bg-zinc-700',
                    label === 'Logout'
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-gray-700 dark:text-gray-200'
                  )}
                >
                  {icon}
                  <span
                    className={clsx(
                      'flex-grow',
                      label === 'Logout'
                        ? 'text-red-600 dark:text-red-400'
                        : 'text-gray-700 dark:text-gray-200 '
                    )}
                  >
                    {label}
                  </span>
                </DropdownMenuPrimitive.Item>
              )}
              {i !== menuItems.length - 1 && (
                <DropdownMenuPrimitive.Separator className="my-1 h-px bg-gray-200 dark:bg-gray-700" />
              )}
            </Fragment>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </div>
  );
}
