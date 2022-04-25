import clsx from 'clsx';
import { useRouter } from 'next/router';
import LinkTo from '@components/atoms/LinkTo';
import Search from '@components/molecules/Search';

const Menu = [
  {
    title: 'Participant',
    slug: '/participant',
  },
  {
    title: 'Teams',
    slug: '/teams',
  },
];

export default function ParticipantSubHeader() {
  const { pathname } = useRouter();

  return (
    <div
      className="flex flex-col items-center justify-between gap-4 border-b border-gray-300 bg-white px-8 dark:border-zinc-700 dark:bg-zinc-800 lg:flex-row"
      data-testid="participant-subheader"
    >
      <div className="grid h-full grid-cols-2 items-center gap-10 text-center">
        {Menu.map(({ slug, title }) => (
          <LinkTo
            to={slug}
            key={slug}
            className={clsx(
              'h-full border-b-2 py-4 px-3 font-medium',
              pathname === slug
                ? 'border-primary-600 dark:border-primary-300 text-primary-600 dark:text-primary-300'
                : 'border-transparent text-gray-500 hover:text-gray-800 dark:text-gray-300 dark:hover:text-gray-400'
            )}
          >
            <span>{title}</span>
          </LinkTo>
        ))}
      </div>

      <div className="mb-4 lg:mb-0">
        <Search />
      </div>
    </div>
  );
}
