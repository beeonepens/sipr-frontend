import Image from 'next/image';
import placeholderAvatar from '../../../public/uploads/avatar-man.png';

export default function InvitationAvatar() {
  return (
    <figure className="relative hidden h-fit w-fit rounded-full p-1 ring-2 ring-gray-300 dark:ring-gray-500 md:flex md:flex-row md:items-center md:justify-center">
      <Image
        src={placeholderAvatar}
        placeholder="blur"
        objectFit="cover"
        height={80}
        width={80}
        alt="user avatar"
        className="rounded-full"
      />
    </figure>
  );
}
