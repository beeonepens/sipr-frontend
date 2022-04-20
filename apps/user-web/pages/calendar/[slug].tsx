// import { useRouter } from 'next/router';
// import { ArrowLeftIcon } from 'ui';
// import LinkTo from '@components/atoms/LinkTo';
import Head from 'next/head';
import EditCalendarForms from '@components/organisms/Calendar/Edit/EditCalendarForms';

export default function MeetingDetail() {
  // const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Calendar | SIPR</title>
      </Head>

      <article className="py-4 px-4 md:px-8">
        {/* back button */}
        {/* <div className="flex flex-row items-center justify-start">
          <LinkTo
            to="/calendar"
            className="text-primary-850 hover:text-primary-600"
          >
            <ArrowLeftIcon />
          </LinkTo>
        </div> */}

        {/* edit event form */}
        <EditCalendarForms />
      </article>
    </>
  );
}
