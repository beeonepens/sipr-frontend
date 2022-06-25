import Label from '@components/atoms/Form/Label';
import StatelessInput from '@components/atoms/Form/StatelessInput';
import LinkTo from '@components/atoms/LinkTo';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { Button } from 'ui';

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export default function DemoSectionModal({ isModalOpen, toggleModal }: Props) {
  return (
    <ModalProvider isModalOpen={isModalOpen} onClose={toggleModal}>
      <section className="m-0 inline-block h-screen w-full max-w-md transform overflow-hidden rounded-none bg-white py-14 px-6 text-left align-middle shadow-md transition-all dark:bg-gray-800 md:my-8 md:mx-2 md:h-auto md:rounded-xl md:py-6 md:px-6">
        <XIcon
          className="absolute right-0 top-0 mr-5 mt-5 h-5 w-5 cursor-pointer text-gray-500 dark:text-gray-300"
          onClick={toggleModal}
        />

        <Dialog.Title
          as="h3"
          className="text-primary-700 dark:text-primary-300 mb-2 mr-5 text-2xl font-semibold leading-6"
        >
          Try a Demo!
        </Dialog.Title>
        <Dialog.Description className="mb-6 text-sm text-gray-600 dark:text-gray-300">
          You can try <span className="font-bold">mslis</span> without signing
          up by using this demo account bellow to login to our app.
        </Dialog.Description>

        <div className="flex flex-col gap-y-3">
          <div>
            <Label id="demo-email">Email</Label>
            <StatelessInput
              type="email"
              defaultValue="demouser@email.com"
              disabled
              id="demo-email"
            />
          </div>
          <div>
            <Label id="demo-password">Password</Label>
            <StatelessInput
              type="text"
              defaultValue="demouser"
              disabled
              id="demo-password"
            />
          </div>
        </div>

        <div className="mt-5 flex w-full flex-row justify-end">
          <LinkTo to="/login">
            <Button type="button" padding="sm">
              Go to Login
            </Button>
          </LinkTo>
        </div>
      </section>
    </ModalProvider>
  );
}
