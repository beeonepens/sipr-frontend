import Image from 'next/image';
import { rgbDataURL } from '@utils/formatImage';
import placeholderAvatar from '../../../public/uploads/avatar-man.png';

interface Props {
  src?: string;
}

export default function UserAvatar({ src }: Props) {
  return (
    <Image
      className="rounded-xl border border-gray-300"
      src={src || placeholderAvatar}
      alt="avatar"
      height="240"
      width="240"
      placeholder="blur"
      blurDataURL={src && rgbDataURL(220, 220, 220)}
    />
  );
}
