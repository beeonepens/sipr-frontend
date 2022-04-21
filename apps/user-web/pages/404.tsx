import { ArrowNarrowLeftIcon } from '@heroicons/react/outline';
import LinkTo from '@components/atoms/LinkTo';

export default function CustomError() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-6">
      <div className="flex flex-row justify-center gap-4 text-lg text-gray-800">
        <h2 className="font-bold">404</h2>
        <h2>|</h2>
        <h2>This page could not be found.</h2>
      </div>

      <LinkTo
        to="/"
        className="hover:border-primary-600 text-primary-700 hover:text-primary-600 flex flex-row items-center justify-center gap-3 border-b border-transparent pb-2 hover:border-dashed"
      >
        <>
          <ArrowNarrowLeftIcon className="h-6 w-6" />
          <span>Back To Homepage</span>
        </>
      </LinkTo>
    </div>
  );
}
