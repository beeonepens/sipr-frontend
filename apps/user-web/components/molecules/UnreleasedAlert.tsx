import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { Dialog } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useUnreleased } from '@utils/store/useUnreleased';
import { Button } from 'ui';

export default function UnreleasedAlert() {
  const { openModal, setOpenModal } = useUnreleased();
  return (
    <ModalProvider type="alert" isModalOpen={openModal}>
      <section className="m-0 my-6 mx-6 inline-block h-auto w-full max-w-lg transform overflow-hidden rounded-xl bg-white py-8 px-6 text-left align-middle shadow-md transition-all dark:bg-gray-800">
        <XIcon
          className="absolute right-0 top-0 mr-5 mt-5 h-5 w-5 cursor-pointer text-gray-500 dark:text-gray-300"
          onClick={() => setOpenModal(false)}
        />
        <Dialog.Title
          as="h3"
          className="text-primary-700 dark:text-primary-300 mb-4 text-lg font-semibold leading-6 md:text-xl"
        >
          This is Work In Progress Feature
        </Dialog.Title>
        <Dialog.Description className="text-sm text-gray-800 dark:text-gray-300">
          You can&apos;t use this feature yet. What you see here is just an
          example of what the feature might looks like when it released.
        </Dialog.Description>

        <div className="mt-6 grid grid-cols-2 items-center justify-end gap-4 md:flex md:flex-row">
          <Button text="sm" type="button" onClick={() => setOpenModal(false)}>
            Understand
          </Button>
        </div>
      </section>
    </ModalProvider>
  );
}
