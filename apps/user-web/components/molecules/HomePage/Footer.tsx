import Logo from '@components/atoms/Logo';
import { useLogoColor } from '@utils/hooks/useLogoColor';

export default function Footer() {
  const logoColor = useLogoColor();
  return (
    <>
      <hr className="opacity-100 dark:opacity-30" />
      <div className="grid grid-cols-none bg-white dark:bg-gray-800 md:grid-cols-2 md:grid-rows-none">
        <div className="md:py-auto hidden px-4 md:mx-24 md:my-auto md:flex">
          <Logo color={logoColor} />
        </div>
        <div className="grid grid-cols-3 py-5 text-center md:text-left">
          <div className="P-5">
            <p className="text-primary-700 dark:text-primary-300 font-bold">
              Features
            </p>
            <ul className="text-primary-700 dark:text-primary-300 mt-4 text-sm">
              <li>Creating Meet</li>
              <li>Join Team</li>
              <li>Meet Invitation</li>
              <li>Notification Agenda</li>
              <li>Documentation</li>
            </ul>
          </div>
          <div className="P-5">
            <p className="text-primary-700 dark:text-primary-300 font-bold">
              Company
            </p>
            <p className="text-primary-700 dark:text-primary-300 mt-4 text-sm">
              PENS
            </p>
          </div>
          <div>
            <p className="text-primary-700 dark:text-primary-300 font-bold">
              About
            </p>
            <ul className="text-primary-700 dark:text-primary-300 mt-4 text-sm">
              <li>About mslis</li>
              <li>Github</li>
              <li>Contact</li>
              <li>Our Team</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800">
        <hr className="opacity-100 dark:opacity-30" />
        <p className="text-primary-700 dark:text-primary-300 my-4 text-center font-bold">
          2022 mslis
        </p>
      </div>
    </>
  );
}
