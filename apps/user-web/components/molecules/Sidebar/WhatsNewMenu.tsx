import LinkTo from '@components/atoms/LinkTo';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { Dialog } from '@headlessui/react';
import { GiftIcon, XIcon } from '@heroicons/react/outline';
import { formatDate } from '@utils/formatDateTime';
import { useState } from 'react';
import { releaseNotes } from 'release/sipr-release-0.4';
import { Button } from 'ui';
import MiniSidebarMenu from './MiniSidebarMenu';

export default function WhatsNewMenu() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen((cv) => !cv);

  return (
    <>
      <MiniSidebarMenu
        menu={{
          label: "What' New?",
          icon: <GiftIcon className="h-4 w-4" />,
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
              className="text-primary-700 dark:text-primary-300 mb-2 mr-5 text-2xl font-semibold leading-6"
            >
              {releaseNotes.title}
            </Dialog.Title>
            <Dialog.Description className="line-clamp-3 mb-6 text-sm text-gray-600 dark:text-gray-300">
              {formatDate(releaseNotes.releaseDate)}
            </Dialog.Description>

            <p className="font-medium text-gray-700 dark:text-gray-300">
              Changelog:
            </p>
            <div className="prose prose-sm dark:prose-invert">
              {/* eslint-disable-next-line jsx-a11y/no-redundant-roles */}
              <ul role="list">
                {releaseNotes.changelog.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <LinkTo
            to="/"
            className="text-primary-500 dark:text-primary-400 my-4 text-sm underline-offset-2 hover:underline"
          >
            View others release notes &gt;&gt;
          </LinkTo>
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
