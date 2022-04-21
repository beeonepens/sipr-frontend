// import { useRouter } from 'next/router';
// import { ArrowLeftIcon } from 'ui';
// import LinkTo from '@components/atoms/LinkTo';
import Head from 'next/head';
import { motion } from 'framer-motion';
import EditCalendarForms from '@components/organisms/Agenda/Edit/EditCalendarForms';

export default function MeetingDetail() {
  // const { query } = useRouter();

  return (
    <>
      <Head>
        <title>Calendar | SIPR</title>
      </Head>

      <motion.article
        initial={{ opacity: 0.6, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-4 px-4 md:px-8"
      >
        {/* back button */}
        {/* <div className="flex flex-row items-center justify-start">
          <LinkTo
            to="/calendar"
            className="text-primary-600 hover:text-primary-600"
          >
            <ArrowLeftIcon />
          </LinkTo>
        </div> */}

        {/* edit event form */}
        <EditCalendarForms />
      </motion.article>
    </>
  );
}
