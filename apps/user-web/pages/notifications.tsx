import Head from 'next/head';
import { useRouter } from 'next/router';
import { useWindowSize } from '@utils/hooks/useWindowSize';
import { motion } from 'framer-motion';
import { EVENTS } from '@utils/constant';
import NotificatonItem from '@components/organisms/Notifications/NotificationItem';
import ZeroNotification from '@components/molecules/Notification/ZeroNotification';

export default function Notifications() {
  const router = useRouter();
  const windowSize = useWindowSize();

  if (windowSize >= 1024) router.replace('/dashboard');

  return (
    <>
      <Head>
        <title>Notifications | SIPR</title>
      </Head>

      <motion.article
        initial={{ opacity: 0.6, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-4 px-4 md:px-8"
      >
        <div className="mt-4 mb-4 grid grid-cols-1 gap-6 lg:mb-2">
          {EVENTS.length < 1 && <ZeroNotification />}
          {EVENTS.map((item) => (
            <NotificatonItem key={item.id} event={item} />
          ))}
        </div>
      </motion.article>
    </>
  );
}
