import Head from 'next/head';
import InvitationItem from '@components/organisms/Invitations/InvitationItem';

export default function Invitations() {
  return (
    <>
      <Head>
        <title>Invitations | SIPR</title>
      </Head>

      <article className="py-4 px-4 md:px-8">
        <div className="mt-4 mb-4 grid grid-cols-1 gap-6 lg:mb-2">
          {[1, 2, 3, 4, 5].map((item) => (
            <InvitationItem key={item} />
          ))}
        </div>
      </article>
    </>
  );
}
