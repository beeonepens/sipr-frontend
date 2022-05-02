import { useLogoColor } from '@utils/hooks/useLogoColor';
import { NoData } from 'ui';

interface Props {
  notFound?: boolean;
}

export default function ZeroAgenda({ notFound }: Props) {
  const logoColor = useLogoColor();

  return (
    <div className="mx-auto flex w-full flex-col items-center justify-center gap-2 overflow-x-auto bg-white p-8 text-center dark:border-gray-700 dark:bg-gray-800 lg:p-12">
      <NoData
        className="h-40 w-40 opacity-80 lg:h-48 lg:w-48"
        theme={logoColor}
      />
      <h3 className="mt-2 text-base font-medium text-gray-500 dark:text-gray-300">
        {notFound ? 'Not found' : "You don't have any meeting scheduled!"}
      </h3>
      <p className="text-xs text-gray-500 dark:text-gray-300">
        {notFound
          ? "Can't found the meeting"
          : "You can schedule new meeting by clicking the 'New Meeting' button."}
      </p>
    </div>
  );
}
