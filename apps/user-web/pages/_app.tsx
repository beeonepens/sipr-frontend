import clsx from 'clsx';
import { useRouter } from 'next/router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useProtectedRoute } from '@utils/hooks/useProtectedRoute';
import { useLogoColor } from '@utils/hooks/useLogoColor';
import { isPublicUrl } from '@utils/constant';
import Sidebar from '@components/organisms/Sidebar';
import Header from '@components/organisms/Header';

import type { AppProps } from 'next/app';
import 'react-loading-skeleton/dist/skeleton.css';
import '../styles/globals.css';
import '../styles/rbc.css';
import '../styles/rdp.css';

const queryClient = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  useProtectedRoute();
  const content = useLogoColor();
  const { pathname } = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <SkeletonTheme
        baseColor={content === 'dark' ? '#d4d4d8' : '#3f3f46'}
        highlightColor={content === 'dark' ? '#e4e4e7' : '#71717a'}
        borderRadius="6px"
      >
        <div
          className={clsx(
            'min-h-screen font-sans text-gray-900 dark:text-gray-100',
            !isPublicUrl(pathname)
              ? 'flex min-h-screen flex-row justify-between'
              : ''
          )}
        >
          {/* only show sidebar in non-public url */}
          {!isPublicUrl(pathname) && <Sidebar />}
          <main className="relative z-0 min-h-screen w-full duration-300">
            {/* only show header in non-public url */}
            {!isPublicUrl(pathname) && <Header />}
            <Component {...pageProps} />
          </main>
        </div>
      </SkeletonTheme>

      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
