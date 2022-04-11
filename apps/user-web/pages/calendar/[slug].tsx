import * as React from 'react';
import { ArrowLeftIcon } from 'ui';
import LinkTo from '@components/atoms/LinkTo';
import { useRouter } from 'next/router';

export default function MeetingDetail() {
  const { query } = useRouter();

  return (
    <div className="mt-20 flex w-full flex-col items-center justify-center gap-6">
      <div className="flex flex-row justify-center gap-4 text-lg text-gray-800">
        <h2>This is Meeting Details Page ({query.slug}).</h2>
      </div>

      <LinkTo
        to="/calendar"
        className="hover:border-primary-600 text-primary-700 hover:text-primary-600 flex flex-row items-center justify-center gap-3 border-b border-transparent pb-2 hover:border-dashed"
      >
        <>
          <ArrowLeftIcon />
          <span>Back To Calendar</span>
        </>
      </LinkTo>
    </div>
  );
}
