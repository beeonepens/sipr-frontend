import LinkTo from '@components/atoms/LinkTo';
import { Button } from 'ui';

export default function HomePage() {
  return (
    <article className="bg-primary-50 dark:bg-primary-950 py-32">
      <h3 className="text-center text-2xl font-bold text-gray-800 dark:text-gray-100">
        Welcome to
      </h3>
      <h1 className="text-primary-900 dark:text-primary-100 mt-1 mb-8 text-center text-4xl font-bold">
        SIPR Admin Page
      </h1>

      <div className="flex flex-row justify-center">
        <LinkTo to="/login">
          <Button>Login as Admin</Button>
        </LinkTo>
      </div>
    </article>
  );
}
