import Image from 'next/image';
import placeholderAvatar from '../../../public/uploads/avatar-man.png';

export default function ParticipantItem() {
  return (
    <figure className="relative h-auto w-full rounded-lg outline outline-1 outline-gray-300 hover:cursor-pointer">
      <Image
        className="block rounded-lg "
        src={placeholderAvatar}
        alt="avatar"
        height="360"
        width="320"
        objectFit="cover"
        placeholder="blur"
        layout="responsive"
        // blurDataURL={rgbDataURL(220, 220, 220)}
      />
      <div className="absolute top-0 bottom-0 right-0 left-0 flex h-full w-full flex-col items-center justify-end rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-900 pb-3">
        <p className="text-sm font-medium text-white shadow">M Arya Pratama</p>
        <p className="text-sm text-white text-opacity-75 shadow">
          aryarya@email.com
        </p>
      </div>
      <div className="absolute top-0 bottom-0 right-0 left-0 h-full w-full rounded-lg bg-gray-800 opacity-0 transition duration-75 hover:opacity-30" />
    </figure>
  );
}
