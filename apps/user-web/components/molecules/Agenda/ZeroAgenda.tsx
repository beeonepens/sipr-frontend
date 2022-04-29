import { useLogoColor } from '@utils/hooks/useLogoColor';
import { NoData } from 'ui';

export default function ZeroAgenda() {
  const logoColor = useLogoColor();

  return (
    <div className="relative mt-4 flex flex-col items-center justify-center gap-2 overflow-x-auto rounded-md border border-gray-300 bg-white p-8 text-center shadow-md shadow-gray-300/25 dark:border-gray-700 dark:bg-gray-800 dark:shadow-black/20 sm:rounded-lg lg:p-12">
      <NoData
        className="h-40 w-40 opacity-80 lg:h-48 lg:w-48"
        theme={logoColor}
      />
      <h3 className="mt-2 text-base font-medium text-gray-500 dark:text-gray-300">
        You don&apos;t have any meeting scheduled!
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-300">
        You can schedule new meeting by clicking the &quot;New Meeting&quot;
        button.
      </p>
    </div>
  );
}
