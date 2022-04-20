import Head from 'next/head';
import { Button, EditPenIcon } from 'ui';
import LogoutButton from '@components/molecules/Profile/LogoutButton';
import UserInfoView from '@components/organisms/Profile/UserInfoView';
import UserAvatar from '@components/organisms/Profile/UserAvatar';

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | SIPR</title>
      </Head>

      <article className="py-4 px-4 md:px-8">
        <h2 className="text-primary-700 mb-2 text-2xl font-bold capitalize">
          User Details
        </h2>

        <div className="my-8 flex flex-col-reverse gap-8 xl:flex-row xl:items-start xl:justify-between">
          <UserInfoView />

          <figure className="col-span-1 mx-auto rounded-xl">
            <UserAvatar />
          </figure>
        </div>

        <div className="grid w-full grid-cols-2 gap-6 md:w-80">
          <LogoutButton />

          <Button fullWidth variant="outline" color="primary">
            <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
              <EditPenIcon className="h-5 w-5" />
              Edit
            </span>
          </Button>
        </div>
      </article>
    </>
  );
}
