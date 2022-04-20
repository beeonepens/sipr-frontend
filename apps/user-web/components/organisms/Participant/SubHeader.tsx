import clsx from 'clsx';
import { useRouter } from 'next/router';
import LinkTo from '@components/atoms/LinkTo';
import Search from '@components/molecules/Participant/Search';

const Menu = [
  {
    title: 'Participant',
    slug: '/participant',
  },
  {
    title: 'Teams',
    slug: '/participant/teams',
  },
];

export default function SubHeader() {
  const { pathname } = useRouter();

  return (
    <div
      className="flex flex-col items-center justify-between gap-4 border-b border-gray-300 px-8 lg:flex-row"
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
                ? 'border-primary-600 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-800'
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
