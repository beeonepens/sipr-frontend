import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import UserInfoView from '@components/organisms/Profile/UserInfoView';
import UserAvatar from '@components/organisms/Profile/UserAvatar';
import UserInfoEdit from '@components/organisms/Profile/UserInfoEdit';
import { useUnreleased } from '@utils/store/useUnreleased';
import UnreleasedAlert from '@components/molecules/UnreleasedAlert';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing((cs) => !cs);

  const { setOpenModal } = useUnreleased();

  useEffect(() => {
    setOpenModal(true);
  }, [setOpenModal]);

  return (
    <>
      <Head>
        <title>Profile | SIPR</title>
      </Head>

      <motion.article
        initial={{ opacity: 0.6, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="py-4 px-4 md:px-8"
      >
        <h2 className="text-primary-700 dark:text-primary-300 mb-2 text-2xl font-bold capitalize">
          User Details
        </h2>

        <div className="my-8 flex flex-col-reverse gap-8 xl:flex-row xl:items-start xl:justify-between">
          {!isEditing ? (
            <UserInfoView toggleEditing={toggleEditing} />
          ) : (
            <UserInfoEdit toggleEditing={toggleEditing} />
          )}

          <UserAvatar />
        </div>

        <UnreleasedAlert />
      </motion.article>
    </>
  );
}
