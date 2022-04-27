import Head from 'next/head';
import InvitationItem from '@components/organisms/Invitations/InvitationItem';
import { motion } from 'framer-motion';
import ZeroInvitations from '@components/molecules/Invitations/ZeroInvitations';

const invitations = [1, 3, 4];

export default function Invitations() {
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
      </motion.article>
    </>
  );
}
