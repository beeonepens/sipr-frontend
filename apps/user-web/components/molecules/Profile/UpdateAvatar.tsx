import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { XIcon } from '@heroicons/react/outline';
import { Dialog } from '@headlessui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { FormProvider, useForm } from 'react-hook-form';
import { Button } from 'ui';
import FormFileControl from '../Form/FormFileControl';

/** Schema for search forms */
export const FileSchema = z.object({
  file: z.string(),
});

export type FileInput = z.infer<typeof FileSchema>;

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export default function UpdateAvatar({ isModalOpen, toggleModal }: Props) {
  /** hooks for forms control & submit action */
  const methods = useForm<FileInput>({
    resolver: zodResolver(FileSchema),
  });

  console.log({ file: methods.watch('file') });

  /** form error log */
  if (methods.formState.errors) console.log({ f: methods.formState.errors });

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
          Change Profile Picture
        </Dialog.Title>

        <div className="mt-8">
          <FormProvider {...methods}>
            <form noValidate onSubmit={(e) => e.preventDefault()}>
              <FormFileControl
                format="image/*"
                id="user-avatar"
                label="Upload New Image"
              />
            </form>

            <div className="mt-8 grid grid-cols-2 items-center justify-end gap-4 md:flex md:flex-row">
              <Button
                text="sm"
                type="button"
                variant="outline"
                onClick={toggleModal}
              >
                Cancel
              </Button>
              <Button text="sm" type="submit">
                Save
              </Button>
            </div>
          </FormProvider>
        </div>
      </section>
    </ModalProvider>
  );
}
