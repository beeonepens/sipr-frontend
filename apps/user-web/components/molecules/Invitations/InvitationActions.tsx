import { Button } from 'ui';

export default function InvitationActions() {
  return (
    <div className="grid w-full grid-cols-2 items-center justify-between gap-6 md:w-fit lg:flex lg:flex-row lg:justify-end">
      <Button color="danger">Decline</Button>
      <Button>Accept</Button>
    </div>
  );
}
