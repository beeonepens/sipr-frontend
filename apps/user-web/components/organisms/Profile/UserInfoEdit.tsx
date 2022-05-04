import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from 'react-query';
import { Button } from 'ui';
import FormControl from '@components/molecules/Form/FormControl';
import FormDateTimeControl from '@components/molecules/Form/FormDateTimeControl';
import { GenderOptions } from '@utils/constant';
import FormRadioControl from '@components/molecules/Form/FormRadioControl';
import FormAreaControl from '@components/molecules/Form/FormAreaControl';
import {
  UserProfileInput,
  UserProfileSchema,
} from '@utils/validations/userProfileVal';

import type { SubmitHandler } from 'react-hook-form';
import type { AxiosError } from 'axios';
import type { UpdateUserParam, User } from '@utils/types/user.dto';
import { updateUser } from '@utils/mutations/userMutation';

interface Props {
  toggleEditing: () => void;
  data: User;
}

export default function UserInfoEdit({ toggleEditing, data: userData }: Props) {
  const queryClient = useQueryClient();
  console.log({ userData });
  /** hooks for forms control & submit action */
  const methods = useForm<UserProfileInput>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      // form data
      nip: userData.nip,
      name: userData.name,
      email: userData.email,
      gender: userData.gender === 'pria' ? 'pria' : 'wanita',
      dateofbirth: userData.dateofbirth
        ? new Date(userData.dateofbirth)
        : new Date(),
      // db data outside of the form
      role_id: userData.role_id,
      address: userData.address || '',
    },
  });

  /** hooks for controlling the register mutation */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mutation = useMutation<unknown, AxiosError, UpdateUserParam>(
    updateUser
  );

  /** function to hadle register action */
  const onSubmit: SubmitHandler<UserProfileInput> = (data) => {
    console.log(data);

    mutation.mutate(
      { user: data, id: String(userData.nip), oldUser: userData },
      {
        // eslint-disable-next-line no-shadow
        onError: ({ message, response }) => {
          // setIsLoading(false);
          console.log({ message, response });
        },
        // eslint-disable-next-line no-shadow
        onSuccess: (result) => {
          console.log({ result });
          toggleEditing();
          queryClient.invalidateQueries([
            'user',
            typeof window !== 'undefined' && localStorage.getItem('uid'),
          ]);
          // if (message === 'Succesfull') {
          //   setIsLoading(false);
          //   handleOpenToast(openToast, setOpenToast);
          // }
        },
      }
    );
  };

  /** form error log */
  if (methods.formState.errors !== {}) console.log(methods.formState.errors);

  return (
    <FormProvider {...methods}>
      <form
        className="w-full rounded-lg border border-gray-300 bg-white p-6 shadow-md shadow-gray-300/25 dark:border-gray-600 dark:bg-gray-800 dark:shadow-black/20 lg:w-3/5"
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
      >
        <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <FormControl id="name" label="Name" type="text" />
          <FormControl
            id="nip"
            disabled
            label="Identification (NIP/NRP)"
            type="text"
          />
          <FormControl id="email" disabled label="Email" type="email" />
          <FormDateTimeControl
            defaultValue={new Date(2000, 1, 1)}
            label="Date of Birth"
            id="dateofbirth"
          />
          <div className="col-span-1 grid h-fit grid-cols-1 items-center gap-4 md:col-span-2 md:grid-cols-2">
            <FormRadioControl
              id="gender"
              title="Gender"
              options={GenderOptions}
            />
            <FormAreaControl rows={2} label="Adress" id="address" />
          </div>
        </section>

        <div className="mt-6 flex flex-row gap-6 md:mt-12">
          <Button
            color="danger"
            text="sm"
            onClick={toggleEditing}
            variant="outline"
          >
            Cancel
          </Button>
          <Button text="sm" type="submit" isLoading={mutation.isLoading}>
            Save
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
