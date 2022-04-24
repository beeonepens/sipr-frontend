import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import { Button } from 'ui';
import FormControl from '@components/molecules/Form/FormControl';
import FormDateTimeControl from '@components/molecules/Form/FormDateTimeControl';
import { GenderOptions } from '@utils/constant';
import FormRadioControl from '@components/molecules/Form/FormRadioControl';
import FormAreaControl from '@components/molecules/Form/FormAreaControl';
import { registerMutation } from '@utils/mutations/authMutation';
import {
  UserProfileInput,
  UserProfileSchema,
} from '@utils/validations/userProfileVal';

import type { SubmitHandler } from 'react-hook-form';
import type { AxiosError } from 'axios';

interface Props {
  toggleEditing: () => void;
}

export default function UserInfoEdit({ toggleEditing }: Props) {
  /** hooks for forms control & submit action */
  const methods = useForm<UserProfileInput>({
    resolver: zodResolver(UserProfileSchema),
  });

  /** hooks for controlling the register mutation */
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const mutation = useMutation<unknown, AxiosError, UserProfileInput>(
    registerMutation
  );

  /** function to hadle register action */
  const onSubmit: SubmitHandler<UserProfileInput> = (data) => {
    console.log(data);
    toggleEditing();
  };

  /** form error log */
  if (methods.formState.errors) console.log({ f: methods.formState.errors });

  return (
    <FormProvider {...methods}>
      <form
        className="col-span-1 lg:col-span-2"
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate
      >
        <section className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          <FormControl id="name" label="Name" type="text" />
          <FormDateTimeControl
            defaultValue={new Date(2000, 1, 1)}
            label="Date of Birth"
            id="dateofbirth"
          />
          <div className="col-span-1 grid h-fit grid-cols-1 items-center gap-4 md:col-span-2 md:grid-cols-2">
            <FormAreaControl rows={2} label="Adress" id="address" />
            <FormRadioControl
              title="Gender"
              options={GenderOptions}
              selected="pria"
            />
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
          <Button text="sm">Save</Button>
        </div>
      </form>
    </FormProvider>
  );
}
