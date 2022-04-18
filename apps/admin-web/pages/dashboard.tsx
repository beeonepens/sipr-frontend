import LinkTo from '@components/atoms/LinkTo';
import { Button } from 'ui';

export default function Dashboard() {
  return (
    <div className="container mx-auto py-4">
      <h1 className="mb-4 text-lg font-semibold">Dashboard Page</h1>
      <LinkTo to="/">
        <Button color="danger">Logout</Button>
      </LinkTo>
    </div>
  );
}
