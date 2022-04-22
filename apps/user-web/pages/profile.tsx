import Head from 'next/head';
import { useState } from 'react';
import { Button } from 'ui';
import { motion } from 'framer-motion';
import { PencilAltIcon } from '@heroicons/react/outline';
import LogoutButton from '@components/molecules/Profile/LogoutButton';
import UserInfoView from '@components/organisms/Profile/UserInfoView';
import UserAvatar from '@components/organisms/Profile/UserAvatar';
import UserInfoEdit from '@components/organisms/Profile/UserInfoEdit';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditing = () => setIsEditing((cs) => !cs);

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
        <h2 className="text-primary-700 mb-2 text-2xl font-bold capitalize">
          User Details
        </h2>

        <div className="my-8 flex flex-col-reverse gap-8 xl:flex-row xl:items-start xl:justify-between">
          {!isEditing ? <UserInfoView /> : <UserInfoEdit />}

          <figure className="col-span-1 mx-auto rounded-xl">
            <UserAvatar />
          </figure>
        </div>

        <div className="grid w-full grid-cols-2 gap-6 md:w-80">
          <LogoutButton />

          <Button fullWidth variant="outline" onClick={toggleEditing}>
            <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
              <PencilAltIcon className="h-5 w-5" />
              Edit
            </span>
          </Button>
        </div>
      </motion.article>
    </>
  );
}
