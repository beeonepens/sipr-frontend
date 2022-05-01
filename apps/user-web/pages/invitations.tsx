import Head from 'next/head';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import InvitationItem from '@components/organisms/Invitations/InvitationItem';
import ZeroInvitations from '@components/molecules/Invitations/ZeroInvitations';
import UnreleasedAlert from '@components/molecules/UnreleasedAlert';
import { useUnreleased } from '@utils/store/useUnreleased';

const invitations = [1, 3, 4];

export default function Invitations() {
  const { setOpenModal } = useUnreleased();

  useEffect(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  return (
    <>
      <Head>
        <title>Invitations | SIPR</title>
      </Head>

      <motion.article
        initial={{ opacity: 0.6, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-4 px-4 md:px-8"
      >
        <div className="mt-4 mb-4 grid grid-cols-1 gap-6 lg:mb-2">
          {invitations.length < 1 && <ZeroInvitations />}
          {invitations.map((item) => (
            <InvitationItem key={item} />
          ))}
        </div>

        {/* <button type="button" onClick={() => setOpenModal(true)}>
          Alert
        </button> */}

        <UnreleasedAlert />
      </motion.article>
    </>
  );
}
