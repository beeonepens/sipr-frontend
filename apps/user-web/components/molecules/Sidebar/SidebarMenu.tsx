import LinkTo from '@components/atoms/LinkTo';
import clsx from 'clsx';
import useMiniSidebar from '@utils/store/useMiniSidebar';
import { useRouter } from 'next/router';

interface Props {
  menu: {
    slug: string;
    label: string;
    alias: string;
    icon: JSX.Element;
  };
}

export default function SidebarMenu({ menu }: Props) {
  const { pathname } = useRouter();
  const { isMini } = useMiniSidebar();

  return (
    <LinkTo
      to={menu.slug}
      className={clsx(
        'flex w-full flex-row items-center gap-4 rounded-md py-3.5 px-3.5 font-medium',
        pathname.includes(menu.slug) || pathname.includes(menu.alias)
          ? 'bg-accent-400 text-primary-700'
          : 'hover:bg-primary-600 bg-transparent'
      )}
    >
      <>
        <span>{menu.icon}</span>
        <span
          className={clsx(
            isMini ? 'hidden opacity-0' : 'flex opacity-100',
            'origin-left duration-75'
          )}
        >
          {menu.label}
        </span>
      </>
    </LinkTo>
  );
}
