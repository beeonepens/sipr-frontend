import React, { useEffect, useState } from 'react';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { HalfIcon } from 'ui';
import useSidebar from '@utils/store/useSidebar';
import { useWindowSize } from '@utils/hooks/useWindowSize';

const themes = [
  {
    key: 'light',
    label: 'Light',
    icon: <SunIcon className="h-6 w-6" />,
  },
  {
    key: 'dark',
    label: 'Dark',
    icon: <MoonIcon className="h-6 w-6" />,
  },

  {
    key: 'system',
    label: 'System',
    icon: <HalfIcon className="h-6 w-6" />,
  },
];

function ThemeSwitcher() {
  const windowSize = useWindowSize();
  const [preferredTheme, setPreferredTheme] = useState<null | string>(null);
  const { setColor } = useSidebar();

  useEffect(() => {
    if (preferredTheme) setColor(preferredTheme);
  }, [preferredTheme, setColor]);

  useEffect(() => {
    try {
      const found = localStorage.getItem('theme');
      setPreferredTheme(found);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const prefersDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const updateTheme = (e: MediaQueryListEvent) => {
      console.log(e);
      setPreferredTheme('system');
    };
    prefersDarkQuery.addEventListener('change', updateTheme);

    return () => {
      prefersDarkQuery.removeEventListener('change', updateTheme);
    };
  }, []);

  return (
    <div className="relative inline-flex items-center justify-center text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger
          className={clsx(
            'inline-flex select-none justify-center rounded-md text-sm font-medium',
            'text-primary-700 bg-transparent hover:text-blue-600 dark:text-gray-100 dark:hover:text-gray-200',
            'p-2 transition duration-75 hover:bg-gray-200 dark:hover:bg-zinc-700',
            'focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75'
          )}
        >
          {(() => {
            switch (preferredTheme) {
              case 'light':
                return <SunIcon className="h-6 w-6 " />;
              case 'dark':
                return <MoonIcon className="h-6 w-6 " />;
              default:
                return <HalfIcon className="h-6 w-6 " />;
            }
          })()}
          {/* {isDark ? "dark" : "light"} */}
        </DropdownMenuPrimitive.Trigger>

        <DropdownMenuPrimitive.Content
          align={windowSize < 1024 ? 'start' : 'end'}
          sideOffset={5}
          className={clsx(
            'radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down',
            'w-48 rounded-lg px-1.5 py-1',
            'bg-gray-50 dark:bg-zinc-800',
            'border border-gray-300 shadow-md shadow-gray-300/30 dark:border-zinc-700 dark:shadow-zinc-800/30'
          )}
        >
          {themes.map(({ key, label, icon }) => (
            <DropdownMenuPrimitive.Item
              key={`theme-${key}`}
              className={clsx(
                'flex w-full cursor-default select-none items-center rounded-md px-2 py-2 text-xs outline-none',
                'text-gray-500 focus:bg-gray-200 dark:text-gray-400 dark:focus:bg-zinc-700'
              )}
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                // eslint-disable-next-line no-underscore-dangle
                (window as unknown).__setPreferredTheme(key);
                setPreferredTheme(key);
              }}
            >
              {React.cloneElement(icon, {
                className: 'w-5 h-5 mr-2 text-gray-700 dark:text-gray-300',
              })}
              <span className="flex-grow text-gray-700 dark:text-gray-200">
                {label}
              </span>
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    </div>
  );
}

export default ThemeSwitcher;
