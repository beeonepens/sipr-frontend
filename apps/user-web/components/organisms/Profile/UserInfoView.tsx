import { PencilAltIcon } from '@heroicons/react/outline';
import { Button } from 'ui';
import { User } from '@utils/types/user.dto';
import { formatDate } from '@utils/formatDateTime';

interface Props {
  toggleEditing: () => void;
  data: User;
}

export default function UserInfoView({ toggleEditing, data }: Props) {
  return (
    <section className="w-full rounded-lg border border-gray-300 bg-white p-6 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:bg-gray-800 dark:shadow-black/20 lg:w-3/5">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="flex flex-col justify-start">
          <p className="text-sm font-semibold uppercase">Full Name</p>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {data.name}
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-sm font-semibold uppercase">
            Identification (NIP / NRP)
          </p>
          <p className="text-xl text-gray-600 dark:text-gray-300">{data.nip}</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-sm font-semibold uppercase">Email</p>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {data.email}
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-sm font-semibold uppercase">Date Of Birth</p>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {data.dateofbirth ? formatDate(data.dateofbirth) : '-'}
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-sm font-semibold uppercase">Gender</p>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {data.gender === 'pria' ? 'Male' : 'Female'}
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-sm font-semibold uppercase">Address</p>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {data.address || '-'}
          </p>
        </div>
      </div>

      <div className="mt-6 md:mt-12">
        <Button onClick={toggleEditing}>
          <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
            <PencilAltIcon className="h-5 w-5" />
            Edit
          </span>
        </Button>
      </div>
    </section>
  );
}
