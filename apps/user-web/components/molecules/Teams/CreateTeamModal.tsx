import type { NewTeamResponse } from '@utils/types/team.dto';
import { useState } from 'react';
import ModalProvider from '@components/atoms/Modal/ModalProvider';
import { Button } from 'ui';
import { DuplicateIcon, XIcon } from '@heroicons/react/outline';
import { Dialog } from '@headlessui/react';
import { useMutation, useQueryClient } from 'react-query';
import { AxiosError } from 'axios';
import { createTeam } from '@utils/mutations/teamMutation';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { NewTeamInput, NewTeamSchema } from '@utils/validations/newTeamVal';
import { zodResolver } from '@hookform/resolvers/zod';
import { copyTextToClipboard } from '@utils/formatText';
import { handleOpenToast } from '@utils/constant';
import FormControl from '../Form/FormControl';
import FormAreaControl from '../Form/FormAreaControl';
import CreateTeamToast from './CreateTeamToast';

interface Props {
  isModalOpen: boolean;
  toggleModal: () => void;
}

export default function CreateTeamModal({ isModalOpen, toggleModal }: Props) {
  const queryClient = useQueryClient();
  const [openToast, setOpenToast] = useState(false);
  const [page, setPage] = useState<1 | 2>(1);
  const [isCopied, setIsCopied] = useState(false);
  const [inviteCode, setInviteCode] = useState('');

  const handleCopyClick = async () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(inviteCode)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => console.log(err));
  };

  /** function that run to close modal */
  const handleCloseModal = () => {
    if (page === 2) {
      handleOpenToast(openToast, setOpenToast);
    }
    setPage(1);
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
          setPage(2);
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
            {page === 1 && 'Create New Team'}
            {page === 2 && 'Team Created'}
          </Dialog.Title>
          <Dialog.Description className="text-base text-gray-800 dark:text-gray-300">
            {page === 1 && 'Set your team name and description.'}
            {page === 2 &&
              'You can share this invite code to your team member.'}
          </Dialog.Description>

          {page === 1 && (
            <FormProvider {...methods}>
              <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-4 py-6">
                  <FormControl
                    id="name_teams"
                    label="Team Name *"
                    type="text"
                  />
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
                  <Button
                    isLoading={mutation.isLoading}
                    text="sm"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </FormProvider>
          )}

          {page === 2 && (
            <div className="mt-2">
              <div className="justify-left my-4 flex flex-row items-center gap-x-3">
                <span className=" text-lg font-medium">Invite Code</span>
                <div className="flex flex-row bg-gray-50 text-xl font-semibold">
                  <span className="border-primary-700 rounded-l-md border py-2 px-4">
                    {inviteCode}
                  </span>
                  <button
                    className="border-primary-700 flex cursor-pointer flex-row items-center justify-center rounded-r-md border py-2 px-4 hover:bg-gray-100"
                    onClick={handleCopyClick}
                    type="button"
                  >
                    <DuplicateIcon className="h-5 w-5 text-gray-600" />
                  </button>
                  {isCopied && (
                    <span className="ml-3 flex flex-row items-center text-base font-normal">
                      Copied!
                    </span>
                  )}
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 items-center justify-end gap-4 md:mt-0 md:flex md:flex-row">
                <Button onClick={handleCloseModal} text="sm" type="button">
                  Close
                </Button>
              </div>
            </div>
          )}
        </Dialog.Panel>
      </ModalProvider>

      <CreateTeamToast open={openToast} setOpen={setOpenToast} />
    </>
  );
}
