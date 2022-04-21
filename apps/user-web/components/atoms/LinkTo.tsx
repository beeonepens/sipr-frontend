import Link from 'next/link';

interface Props {
  to: string;
  children: string | JSX.Element;
  className?: string;
  blank?: boolean;
  onClick?: () => void;
}

export default function LinkTo({
  to,
  children = 'Link',
  className = 'hover:text-primary-500 text-primary-700 underline',
  blank,
  onClick,
}: Props) {
  return (
    <Link href={to} passHref>
      <a
        href="/"
        className={className}
        onClick={onClick}
        target={blank ? '_blank' : ''}
      >
        {children}
      </a>
    </Link>
  );
}
