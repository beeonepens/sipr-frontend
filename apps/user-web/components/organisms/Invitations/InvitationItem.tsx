import InvitationActions from '@components/molecules/Invitations/InvitationActions';
import InvitationAvatar from './InvitationAvatar';

export default function InvitationItem() {
  return (
    <div className="flex flex-col items-start gap-3 rounded-lg bg-white px-4 py-3 shadow-md shadow-gray-300/25 outline outline-1 outline-gray-300 dark:bg-zinc-800 dark:shadow-black/20 dark:outline-gray-600 md:flex-row md:items-center md:gap-5 lg:px-6">
      <InvitationAvatar />

      <div className="w-full">
        <p className="text-lg font-bold">New Meeting Invitations</p>
        <p className="mt-3 text-sm text-gray-700 dark:text-gray-400">
          Arya just invite you to a meeting about{' '}
          <span className="font-bold text-gray-800 dark:text-gray-300">
            &apos;Discuss New Dashboard Design&apos;
          </span>{' '}
          on Saturday, 19 Feb 2022.
        </p>

        <div className="mt-3 flex flex-col items-end justify-between gap-4 lg:flex-row">
          <p className="text-xs text-gray-700 dark:text-gray-400 md:text-sm">
            2 hour ago
          </p>
          <InvitationActions />
        </div>
      </div>
    </div>
  );
}
