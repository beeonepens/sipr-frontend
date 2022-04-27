import { useLogoColor } from '@utils/hooks/useLogoColor';
import { NoData } from 'ui';

export default function ZeroTodayMeeting() {
  const logoColor = useLogoColor();

  return (
    <div className="mt-3 flex h-full flex-col items-center justify-center gap-2 text-center">
      <NoData
        className="h-36 w-36 opacity-80 lg:h-44 lg:w-44"
        theme={logoColor}
      />
      <h3 className="mt-2 text-base font-medium text-gray-500 dark:text-gray-300">
        You don&apos;t have any meeting for today!
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-300">
        You can schedule new meeting by clicking the &quot;New Meeting&quot;
        button.
      </p>
    </div>
  );
}
