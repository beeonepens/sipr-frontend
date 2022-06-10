import { SearchIcon } from '@heroicons/react/outline';
import clsx from 'clsx';
import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

export default function AgendaTableSearch({
  // preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  // const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter || '');
  const onChange = useAsyncDebounce((val) => {
    setGlobalFilter(val || undefined);
  }, 200);

  return (
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
            onChange(e.target.value);
          }}
          id="search-agenda"
          name="search-agenda"
          placeholder="Search name, date, or status"
          className={clsx(
            'block rounded-lg bg-white pl-10 dark:bg-gray-800 dark:text-gray-300 dark:caret-gray-500 sm:text-sm',
            'focus:border-primary-600 focus:ring-primary-600 dark:focus:border-primary-300 dark:focus:ring-primary-300 border-gray-300 dark:border-gray-600'
          )}
        />
      </div>
    </div>
  );
}
