import InvitationActions from '../../molecules/Invitations/InvitationActions';

export default function InvitationItem() {
  return (
    <div className="rounded-lg px-4 py-3 outline outline-1 outline-gray-300 lg:px-6">
      <p className="text-lg font-bold">New Meeting Invitations</p>
      <p className="mt-3 text-sm text-gray-700">
        Arya just invite you to a meeting about{' '}
        <span className="font-bold text-gray-800">
          &apos;Discuss New Dashboard Design&apos;
        </span>{' '}
        on Saturday, 19 Feb 2022.
      </p>

      <div className="mt-3 flex flex-col items-end justify-between gap-4 lg:flex-row">
        <p className="text-sm text-gray-700">2 hour ago</p>
        <InvitationActions />
      </div>
    </div>
  );
}
