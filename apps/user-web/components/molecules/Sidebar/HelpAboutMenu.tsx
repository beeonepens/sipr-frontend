import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { Dialog } from '@headlessui/react';
import { QuestionMarkCircleIcon, XIcon } from '@heroicons/react/outline';
import { RELEASE_VERSION, TeamMember } from '@utils/constant';
import { useState } from 'react';
import { Button } from 'ui';
import MiniSidebarMenu from './MiniSidebarMenu';

export default function HelpAboutMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen((cv) => !cv);
  };

  return (
    <>
      <MiniSidebarMenu
        menu={{
          label: 'Help & About',
          icon: <QuestionMarkCircleIcon className="h-4 w-4" />,
        }}
        onClick={toggleModal}
      />

      <ModalProvider isModalOpen={isModalOpen} onClose={toggleModal}>
        <section className="m-0 inline-block h-screen w-full max-w-lg transform overflow-hidden rounded-none bg-white py-14 px-6 text-left align-middle shadow-md transition-all dark:bg-gray-800 md:my-8 md:mx-2 md:h-auto md:rounded-xl md:py-8 md:px-8">
          <XIcon
            className="absolute right-0 top-0 mr-5 mt-5 h-5 w-5 cursor-pointer text-gray-500 dark:text-gray-300"
            onClick={toggleModal}
          />
          <div className="overflow-auto ">
            <Dialog.Title
              as="h3"
              className="text-primary-700 dark:text-primary-300 mb-2 mr-6 text-xl font-bold leading-6"
            >
              Sistem Informasi Penjadwalan Rapat
            </Dialog.Title>
            <Dialog.Description className="line-clamp-3 mb-6 text-sm text-gray-600 dark:text-gray-300">
              Version: {RELEASE_VERSION}
            </Dialog.Description>

            <p className="font-medium text-gray-700 dark:text-gray-300">
              Created by B1 Team - D3 IT B 2020:
            </p>
            <div className="prose prose-sm dark:prose-invert prose-li:my-0 mt-1 grid grid-cols-2">
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <ul role="list">
                {TeamMember.slice(0, 3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <ul role="list">
                {TeamMember.slice(3).map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="my-4 text-sm text-gray-700 dark:text-gray-300">
            If you encounter any problems or questions, just contact us at{' '}
            <a
              href="mailto:beeonepens@gmail.com"
              className="text-primary-500 dark:text-primary-400 underline-offset-2 hover:underline"
            >
              beeonepens@gmail.com
            </a>
          </p>
          <div className="mt-6 flex flex-row items-center justify-end">
            <Button padding="sm" text="sm" onClick={toggleModal}>
              Close
            </Button>
          </div>
        </section>
      </ModalProvider>
    </>
  );
}
