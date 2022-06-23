import Logo from '@components/atoms/Logo';
import { useLogoColor } from '@utils/hooks/useLogoColor';
import AuthenticationLinks from '@components/molecules/HomePage/AuthenticationLinks';

export default function Navbar() {
  const logoColor = useLogoColor();
  return (
    <nav className="bg-white">
      <div className="flex justify-between py-4">
        <div className="flex-shrink-0 px-4">
          <Logo color={logoColor} />
        </div>
        <div className="hidden md:block">
          <div className="flex space-x-4">
            <a
              href="/"
              className=" rounded-md px-3 py-2 text-sm font-bold text-blue-700 hover:text-blue-400"
            >
              Individuals
            </a>

            <a
              href="/"
              className="rounded-md px-3 py-2 text-sm font-bold text-blue-700 hover:text-blue-400"
            >
              Team
            </a>

            <a
              href="/"
              className="rounded-md px-3 py-2 text-sm font-bold text-blue-700 hover:text-blue-400"
            >
              Product
            </a>

            <a
              href="/"
              className="rounded-md px-3 py-2 text-sm font-bold text-blue-700 hover:text-blue-400"
            >
              About
            </a>
          </div>
        </div>
        <div className="items-center">
          <AuthenticationLinks />
        </div>
      </div>
    </nav>
  );
}
