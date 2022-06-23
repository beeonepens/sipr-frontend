import Head from 'next/head';
import Image from 'next/image';
import Navbar from '@components/molecules/HomePage/Navbar';
import Footer from '@components/molecules/HomePage/Footer';
import { Button } from 'ui';
import LinkTo from '@components/atoms/LinkTo';
import DashboardImage from '../public/uploads/sipr_dashboard.png';

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to SIPR</title>
      </Head>

      <Navbar />
      <article className="flex min-h-screen w-full flex-col gap-8 bg-white px-8 py-16 dark:bg-gray-900 md:pb-20">
        <div>
          <h1 className="text-primary-700 dark:text-primary-300 text-center text-4xl font-bold">
            Manage Your Meetings With Ease!
          </h1>

          <h4 className="text-primary-700 dark:text-primary-300 my-5 text-center text-xl font-medium sm:px-0 lg:px-72">
            Mslis is a meeting management software that intends to facilitate
            meeting scheduling and prevent overlaps or clashes.
          </h4>

          <div className="text-center">
            <LinkTo to="/register">
              <Button>Get Started</Button>
            </LinkTo>
          </div>

          <div className="mx-auto mt-20 w-[90%] rounded-lg md:w-3/4">
            {/* <img src="/uploads/sipr_dashboard.png" alt="dashboard" /> */}
            <Image
              className="rounded-lg"
              src={DashboardImage}
              // src="/uploads/sipr_dashboard.png"
              width={1280}
              height={720}
              alt="mslis dashboard"
              placeholder="blur"
            />
          </div>
        </div>

        <h1 className="text-primary-700 dark:text-primary-300 mt-20 mb-10 text-center text-4xl font-bold">
          Simply Appointment Scheduling
        </h1>
        <div className="grid grid-cols-none grid-rows-2 sm:px-0 md:grid-cols-2 md:grid-rows-none lg:px-20">
          <div className="m-auto w-3/4 text-center md:order-last md:text-left">
            <h2 className="text-primary-700 dark:text-primary-300 text-2xl font-bold">
              Scheduling
            </h2>
            <p className="text-primary-700 dark:text-primary-300">
              You can schedule meetings in person or virtual, with regular
              meeting options and room bookings also available
            </p>
          </div>
          <div className="m-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/uploads/calendar_image.svg" alt="calendar" />
          </div>
        </div>
        <div className="grid grid-cols-none grid-rows-2 sm:px-0 md:grid-cols-2 md:grid-rows-none lg:px-20">
          <div className="m-auto w-3/4 text-center md:text-left">
            <h2 className="text-primary-700 dark:text-primary-300 text-2xl font-bold">
              Inviting
            </h2>
            <p className="text-primary-700 dark:text-primary-300">
              Invite your friends and create a team to collaborate and be a
              participant in a meeting
            </p>
          </div>
          <div className="m-auto w-3/4 md:order-last">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/uploads/inviting_image.svg" alt="inviting" />
          </div>
        </div>
        <div className="grid grid-cols-none grid-rows-2 sm:px-0 md:grid-cols-2 md:grid-rows-none lg:px-20">
          <div className="m-auto w-3/4 text-center md:order-last md:text-left">
            <h2 className="text-primary-700 dark:text-primary-300 text-2xl font-bold">
              Reminder
            </h2>
            <p className="text-primary-700 dark:text-primary-300">
              Dont worry about missing the slightest schedule because here it
              provides a reminder before the meeting starts
            </p>
          </div>
          <div className="m-auto w-3/4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/uploads/reminder_image.svg" alt="reminder" />
          </div>
        </div>

        <h1 className="text-primary-700 dark:text-primary-300 mt-20 mb-10 text-center text-4xl font-bold">
          Make Some Productivity Here
        </h1>

        <div className="mx-10 grid grid-cols-none gap-10 text-center md:grid-cols-3 md:grid-rows-none md:px-20">
          <div className="outline-primary-700 p-auto rounded-md outline outline-1">
            <div className="p-10">
              <h2 className="text-primary-700 dark:text-primary-300 text-2xl font-bold">
                Organized Activity
              </h2>
              <p className="text-primary-700 dark:text-primary-300 mt-5">
                A meeting software for you that functions to facilitate meeting
                scheduling and prevent overlapping meeting schedules.
              </p>
            </div>
          </div>
          <div className="outline-primary-700 p-auto rounded-md outline outline-1">
            <div className="p-10">
              <h2 className="text-primary-700 dark:text-primary-300 text-2xl font-bold">
                Be More Focus
              </h2>
              <p className="text-primary-700 dark:text-primary-300 mt-5">
                Maximize time in producing many plans that will be achieved with
                a predetermined time limit
              </p>
            </div>
          </div>
          <div className="outline-primary-700 p-auto rounded-md outline outline-1">
            <div className="p-10">
              <h2 className="text-primary-700 dark:text-primary-300 text-2xl font-bold">
                Keep Your Time
              </h2>
              <p className="text-primary-700 dark:text-primary-300 mt-5">
                Saving time for something that has no purpose and try to be more
                productive by managing your time
              </p>
            </div>
          </div>
        </div>
        {/* <hr className="opacity-100 dark:opacity-30" /> */}
      </article>
      <Footer />
    </>
  );
}
