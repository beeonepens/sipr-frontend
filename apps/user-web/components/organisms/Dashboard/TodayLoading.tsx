import clsx from 'clsx';
import Skeleton from 'react-loading-skeleton';

export default function TodayLoading() {
  return (
    <div
      className={clsx(
        'relative max-h-fit min-h-[322px] rounded-lg bg-white p-6 dark:bg-gray-800 lg:max-h-[322px] lg:p-6',
        'border border-gray-300 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:shadow-black/20'
      )}
    >
      <div className="grid grid-cols-5 items-center gap-3">
        <Skeleton className="col-span-1 mb-3" />

        <div className="col-span-4">
          <Skeleton count={2} />
        </div>
      </div>

      <Skeleton className="mt-6" />
      <Skeleton className="mt-2" />
      <Skeleton className="mt-2" />
    </div>
  );
}
