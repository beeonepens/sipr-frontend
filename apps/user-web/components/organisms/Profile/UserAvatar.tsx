/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
import Image from 'next/image';
import { rgbDataURL } from '@utils/formatImage';
// import { CameraIcon } from '@heroicons/react/outline';
// import UpdateAvatar from '@components/molecules/Profile/UpdateAvatar';
import { User } from '@utils/types/user.dto';

interface Props {
  data: User;
}

export default function UserAvatar({ data }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => setIsOpen((cs) => !cs);

  return (
    <>
      <figure
        onClick={toggleModal}
        className="outline-3 group relative mx-auto flex flex-row items-center rounded-full shadow-md shadow-gray-300/25 outline outline-gray-300 dark:shadow-black/20 dark:outline-gray-600"
      >
        <Image
          className="rounded-full"
          src={data.avatarUrl || '/uploads/male_avatar.png'}
          alt="avatar"
          height="240"
          width="240"
          placeholder="blur"
          blurDataURL={rgbDataURL(220, 220, 220)}
        />
        {/* <div className="bg-primary-700 group absolute top-0 left-0 flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-full bg-opacity-0 transition duration-75 group-hover:bg-opacity-40">
          <CameraIcon className="mt-4 h-8 w-8 text-white opacity-0 transition duration-75 group-hover:opacity-100" />
          <span className="text-sm font-medium text-white opacity-0 transition duration-75 group-hover:opacity-100">
            Change Profile Picture
          </span>
        </div> */}
      </figure>

      {/* <UpdateAvatar isModalOpen={isOpen} toggleModal={toggleModal} /> */}
    </>
  );
}
