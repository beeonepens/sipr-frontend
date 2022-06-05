/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';
import SelectProvider from '@components/atoms/Select/SelectProvider';

interface Props {
  paginationFn: {
    gotoPage: any;
    pageCount: any;
    pageOptions: any;
    pageIndex: any;
    canPreviousPage: any;
    canNextPage: any;
    previousPage: any;
    nextPage: any;
    pageSize: any;
    setPageSize: any;
  };
}

function AgendaTablePagination({
  paginationFn: {
    canNextPage,
    canPreviousPage,
    gotoPage,
    nextPage,
    pageCount,
    pageIndex,
    pageOptions,
    pageSize,
    previousPage,
    setPageSize,
  },
}: Props) {
  return (
    <div className="m-4 flex flex-row items-center justify-end gap-x-3">
      <button
        type="button"
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
        className="hover:text-primary-600 hover:bg-primary-50 h-fit rounded-md bg-gray-200 px-4 py-2.5 text-gray-600 hover:cursor-pointer dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
      >
        <ChevronDoubleLeftIcon className=" h-4 w-4 " />
      </button>
      <button
        type="button"
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
        className="hover:text-primary-600 hover:bg-primary-50 h-fit rounded-md bg-gray-200 px-4 py-2.5 text-gray-600 hover:cursor-pointer dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
      >
        <ChevronLeftIcon className=" h-4 w-4 " />
      </button>
      <button
        type="button"
        onClick={() => nextPage()}
        disabled={!canNextPage}
        className="hover:text-primary-600 hover:bg-primary-50 h-fit rounded-md bg-gray-200 px-4 py-2.5 text-gray-600 hover:cursor-pointer dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
      >
        <ChevronRightIcon className=" h-4 w-4 " />
      </button>
      <button
        type="button"
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
        className="hover:text-primary-600 hover:bg-primary-50 h-fit rounded-md bg-gray-200 px-4 py-2.5 text-gray-600 hover:cursor-pointer dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-gray-200"
      >
        <ChevronDoubleRightIcon className=" h-4 w-4 " />
      </button>

      {/* show current page */}
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>

      {/* new select */}
      <SelectProvider
        data={[5, 10, 20]}
        preLabel="Show "
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e));
        }}
      />
    </div>
  );
}

export default React.memo(AgendaTablePagination);
