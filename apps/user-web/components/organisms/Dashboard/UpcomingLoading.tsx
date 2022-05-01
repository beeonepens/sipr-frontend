import Skeleton from 'react-loading-skeleton';

export default function UpcomingLoading() {
  return (
    <div className="flex h-[332px] flex-col items-center justify-between gap-6 rounded-lg border border-gray-300 bg-white p-4 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:bg-gray-800 dark:shadow-black/20">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="grid w-full grid-cols-5 items-center justify-between gap-3"
        >
          <Skeleton className="col-span-1" height={48} />
          <div className="col-span-4">
            <Skeleton count={2} />
          </div>
        </div>
      ))}

      <div className="h-12" />
    </div>
  );
}
