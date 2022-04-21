import Link from 'next/link';

interface Props {
  to: string;
  children: string | JSX.Element;
  className?: string;
  blank?: boolean;
}

export default function LinkTo({
  to,
  children = 'Link',
  className = 'hover:text-primary-500 text-primary-700 underline',
  blank,
}: Props) {
  return (
    <Link href={to} passHref>
      <a href="/" className={className} target={blank ? '_blank' : ''}>
        {children}
      </a>
    </Link>
  );
}
