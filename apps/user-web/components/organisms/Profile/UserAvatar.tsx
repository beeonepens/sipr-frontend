import Image from 'next/image';
import { rgbDataURL } from '@utils/formatImage';
import placeholderAvatar from '../../../public/uploads/avatar-man.png';

interface Props {
  src?: string;
}

export default function UserAvatar({ src }: Props) {
  return (
    <figure className="outline-3 mx-auto flex flex-row items-center rounded-full shadow-md shadow-gray-300/25 outline outline-gray-300 dark:shadow-black/20 dark:outline-gray-600">
      <Image
        className="rounded-full"
        src={src || placeholderAvatar}
        alt="avatar"
        height="240"
        width="240"
        placeholder="blur"
        blurDataURL={src && rgbDataURL(220, 220, 220)}
      />
    </figure>
  );
}
