import { PencilAltIcon } from '@heroicons/react/outline';
import { Button } from 'ui';

interface Props {
  toggleEditing: () => void;
}

export default function UserInfoView({ toggleEditing }: Props) {
  return (
    <section className="col-span-1 lg:col-span-2">
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
        <div className="flex flex-col justify-start">
          <p className="text-sm font-semibold uppercase">Full Name</p>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            M Arya Putra
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-sm font-semibold uppercase">Email</p>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            aryapratama@student.pens.ac.id
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-sm font-semibold uppercase">Date Of Birth</p>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            1 January 2000
          </p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-sm font-semibold uppercase">Gender</p>
          <p className="text-xl text-gray-600 dark:text-gray-400">Male</p>
        </div>
        <div className="flex flex-col justify-start">
          <p className="text-sm font-semibold uppercase">Address</p>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Surabaya, Indonesia
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
