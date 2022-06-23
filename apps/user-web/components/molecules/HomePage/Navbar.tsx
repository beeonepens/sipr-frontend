import Logo from '@components/atoms/Logo';
import { useLogoColor } from '@utils/hooks/useLogoColor';
import AuthenticationLinks from '@components/molecules/HomePage/AuthenticationLinks';

export default function Navbar() {
  const logoColor = useLogoColor();
  return (
    <nav className="bg-white py-6 px-3 dark:bg-gray-800 md:px-12">
      <div className="grid w-full grid-cols-2 justify-between md:grid-cols-5">
        <div className="col-span-1 flex-shrink-0 px-4">
          <Logo color={logoColor} />
        </div>
        <div className="hidden gap-x-4 md:col-span-3 md:flex md:flex-row md:items-center md:justify-center">
          <a
            href="/"
            className="text-primary-600 dark:text-primary-300 hover:text-primary-500 dark:hover:text-primary-600 rounded-md px-3 py-2 text-base font-medium"
          >
            Individuals
          </a>

          <a
            href="/"
            className="text-primary-600 dark:text-primary-300 hover:text-primary-500 dark:hover:text-primary-600 rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>

          <a
            href="/"
            className="text-primary-600 dark:text-primary-300 hover:text-primary-500 dark:hover:text-primary-600 rounded-md px-3 py-2 text-base font-medium"
          >
            Product
          </a>

          <a
            href="/"
            className="text-primary-600 dark:text-primary-300 hover:text-primary-500 dark:hover:text-primary-600 rounded-md px-3 py-2 text-base font-medium"
          >
            About
          </a>
        </div>
        <div className="col-span-1">
          <AuthenticationLinks />
        </div>
      </div>
    </nav>
  );
}
