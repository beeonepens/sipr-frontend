import Skeleton from 'react-loading-skeleton';

export default function UserInfoLoading() {
  return (
    <section className="w-full rounded-lg border border-gray-300 bg-white p-6 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:bg-gray-800 dark:shadow-black/20 lg:w-3/5">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="flex flex-col justify-start">
            <p className="text-sm font-semibold uppercase">
              <Skeleton />
            </p>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              <Skeleton />
            </p>
          </div>
        ))}
      </div>

      <div className="mt-6 h-11 md:mt-12" />
    </section>
  );
}
