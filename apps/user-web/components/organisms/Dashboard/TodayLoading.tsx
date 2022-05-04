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
      <h2 className="text-primary-800 line-clamp-2 mb-3 mr-0 text-2xl font-semibold dark:text-gray-100 lg:mr-20">
        <Skeleton count={2} />
      </h2>

      <div className="mr-0 mb-6 lg:mr-16">
        <p className="line-clamp-2 text-sm text-gray-500 dark:text-gray-300 lg:text-base ">
          <Skeleton count={2} />
        </p>
      </div>

      <div className="mr-0 mb-6 md:w-1/3 lg:mr-16 lg:w-1/4">
        <p className="line-clamp-3 text-sm text-gray-500 dark:text-gray-300 lg:text-base ">
          <Skeleton count={3} />
        </p>
      </div>
    </div>
  );
}
