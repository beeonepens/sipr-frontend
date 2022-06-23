import React from 'react';
import clsx from 'clsx';
import { SearchIcon } from '@heroicons/react/outline';

export default function TeamsSearch() {
  const [value, setValue] = React.useState('');

  return (
    <div className="flex flex-row justify-center md:justify-end">
      <div className="flex flex-col justify-start gap-0.5">
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <SearchIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            id="search-teams"
            name="search-teams"
            placeholder="Search team name"
            className={clsx(
              'block rounded-lg bg-white pl-10 dark:bg-gray-800 dark:text-gray-300 dark:caret-gray-500 sm:text-sm',
              'focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-300 dark:focus:ring-primary-300 border-gray-300 dark:border-gray-600'
            )}
          />
        </div>
      </div>
    </div>
  );
}
