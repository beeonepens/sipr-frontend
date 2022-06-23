import type { NewTeamResponse } from '@utils/types/team.dto';
import { useState } from 'react';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { Button } from 'ui';
import { XIcon } from '@heroicons/react/outline';
import { Dialog } from '@headlessui/react';
import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { createTeam } from '@utils/mutations/teamMutation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { NewTeamInput, NewTeamSchema } from '@utils/validations/newTeamVal';
import { zodResolver } from '@hookform/resolvers/zod';
import FormControl from '../Form/FormControl';
import FormAreaControl from '../Form/FormAreaControl';

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export default function CreateTeamModal({ isModalOpen, toggleModal }: Props) {
  const queryClient = useQueryClient();
  const [inviteCode, setInviteCode] = useState('');

  /** function that run to close modal */
  const handleCloseModal = () => {
    toggleModal();
  };

  /** hooks for forms control & submit action */
  const methods = useForm<NewTeamInput>({
    resolver: zodResolver(NewTeamSchema),
  });

  /** hooks for controlling the mutation */
  const mutation = useMutation<NewTeamResponse, AxiosError, NewTeamInput>(
    createTeam
  );

  const onSubmit: SubmitHandler<NewTeamInput> = (data) => {
    console.log(data);
    // toggleModal();

    mutation.mutate(data, {
      onError: (error) => {
        console.log(error);
      },
      onSuccess: (res) => {
        console.log(res);
        if (res.message === 'Succes') {
          setInviteCode(res.data[0].team_invite_code);
          queryClient.invalidateQueries([
            'teams',
            typeof window !== 'undefined' && localStorage.getItem('uid'),
          ]);
          toggleModal();
        }
      },
    });
  };

  return (
    <>
      <ModalProvider
        ver="panel"
        type="alert"
        isModalOpen={isModalOpen}
        onClose={handleCloseModal}
      >
        <Dialog.Panel className="m-0 inline-block h-screen w-full max-w-2xl transform overflow-hidden rounded-none bg-white py-14 px-6 text-left align-middle shadow-md transition-all dark:bg-gray-800 md:my-8 md:mx-2 md:h-auto md:rounded-xl md:py-8 md:px-6">
          <XIcon
            className="absolute right-0 top-0 mr-5 mt-5 h-5 w-5 cursor-pointer text-gray-500 dark:text-gray-300"
            onClick={toggleModal}
          />
          <Dialog.Title
            as="h3"
            className="text-primary-700 dark:text-primary-300 mb-2 text-2xl font-semibold leading-6"
          >
            Create New Team
          </Dialog.Title>
          <Dialog.Description className="text-base text-gray-800 dark:text-gray-300">
            Set your team name and description.
          </Dialog.Description>

          <FormProvider {...methods}>
            <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-4 py-6">
                <FormControl id="name_teams" label="Team Name *" type="text" />
                <FormAreaControl
                  rows={3}
                  label="Team Description"
                  id="description"
                  aria-label="team-description"
                />
              </div>
              <div className="mt-6 grid grid-cols-2 items-center justify-end gap-4 md:mt-0 md:flex md:flex-row">
                <Button
                  text="sm"
                  type="button"
                  variant="outline"
                  onClick={handleCloseModal}
                >
                  Cancel
                </Button>
                <Button isLoading={mutation.isLoading} text="sm" type="submit">
                  Save
                </Button>
              </div>
            </form>
          </FormProvider>
        </Dialog.Panel>
      </ModalProvider>

      {/* <CreateMeetingToast
        open={openToast}
        setOpen={setOpenToast}
        meetName="Meeting"
      /> */}
    </>
  );
}
