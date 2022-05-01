import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import { Button } from 'ui';
import { ArrowLeftIcon, ExclamationIcon } from '@heroicons/react/outline';
import LinkTo from '@components/atoms/LinkTo';
import FormControl from '@components/molecules/Form/FormControl';
import { GenderOptions } from '@utils/constant';
import FormRadioControl from '@components/molecules/Form/FormRadioControl';
import { registerMutation } from '@utils/mutations/authMutation';
import { RegisterInput, RegisterSchema } from '@utils/validations';

import type { SubmitHandler } from 'react-hook-form';
import type { AxiosError } from 'axios';
import type { RegisterResponse } from '@utils/types/auth.dto';
import clsx from 'clsx';

export default function Register() {
  const router = useRouter();

  /** hooks for forms control & submit action */
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { gender: 'pria', role_id: 2 },
  });

  /** hooks for controlling the register mutation */
  const mutation = useMutation<RegisterResponse, AxiosError, RegisterInput>(
    registerMutation
  );

  /** function to hadle register action */
  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    console.log(data);
    mutation.mutate(data, {
      /** action on mutation error */
      onError: ({ message, response }) => {
        console.log({ message, response });
      },
      /** action on mutation success */
      onSuccess: (result) => {
        console.log({ result });
        if ('token' in result && result.data.length > 0) {
          const user = result.data[0];
          localStorage.setItem('token', result.token);
          localStorage.setItem('uid', user.nip);
          router.push('/dashboard');
        }
      },
    });
  };

  /** form error log */
  if (methods.formState.errors !== {}) console.log(methods.formState.errors);

  return (
    <>
      <Head>
        <title>Register | SIPR</title>
      </Head>

      <article className="flex min-h-screen flex-row items-start justify-center bg-white dark:bg-gray-800 md:items-center md:bg-black md:bg-opacity-50 md:dark:bg-gray-600">
        {/* back icon */}
        <LinkTo
          to="/"
          className="absolute top-8 left-8 text-gray-50 hover:text-gray-200"
        >
          <span className="flex flex-row items-center gap-3">
            <ArrowLeftIcon className="h-6 w-6" />
            Back
          </span>
        </LinkTo>

        <div className="md:[640px] w-full rounded-md bg-white py-16 px-8 dark:bg-gray-800 md:px-12 lg:w-[800px] lg:pt-12 lg:pb-16">
          {/* register title & subtitle */}
          <h2 className="text-primary-700 dark:text-primary-300 text-center text-4xl font-bold ">
            SIPR
          </h2>
          <h1 className="text-center text-lg font-medium">
            Create your free account
          </h1>

          <FormProvider {...methods}>
            <form
              className="mt-6"
              onSubmit={methods.handleSubmit(onSubmit)}
              noValidate
            >
              {/* forms input */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormControl id="name" label="Name *" type="text" />
                <FormControl id="email" label="Email *" type="email" />
                <FormControl id="password" label="Password *" type="password" />
                <FormControl
                  id="confirmPassword"
                  label="Confirm Password *"
                  type="password"
                />
                <div className="col-span-1 grid h-fit grid-cols-1 items-center gap-4 md:col-span-2 md:grid-cols-2">
                  <FormControl id="nip" label="NIP *" type="text" />
                  <FormRadioControl
                    id="gender"
                    title="Gender *"
                    options={GenderOptions}
                    selected="pria"
                  />
                </div>
                {/* <FormAreaControl rows={2} label="Adress" id="address" /> */}
                {/* <FormDateTimeControl
                  defaultValue={new Date(2000, 1, 1)}
                  label="Date of Birth"
                  id="dateofbirth"
                /> */}
              </div>

              {/* forms submit button */}
              <div className="mx-auto mt-8 flex w-full flex-row justify-center md:w-2/3 lg:w-1/2">
                <Button
                  rounded="lg"
                  type="submit"
                  fullWidth
                  isLoading={mutation.isLoading}
                >
                  Register
                </Button>
              </div>

              {/* login failed alert */}
              <div
                className={clsx(
                  mutation.isError ? 'visible' : 'invisible',
                  'mt-4 flex flex-row items-center gap-3 rounded-md bg-red-200 p-3 text-sm font-medium text-red-600'
                )}
              >
                <ExclamationIcon className="h-5 w-5" />
                <span>{mutation.isError ? mutation.error.message : ''}</span>
              </div>
            </form>
          </FormProvider>

          {/* link to login */}
          <p className="mt-6 -mb-6 text-center text-sm text-gray-800 dark:text-gray-400">
            Already have an account?{' '}
            <LinkTo
              to="/login"
              className="hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-500 text-primary-800 font-medium"
            >
              Login
            </LinkTo>
          </p>
        </div>
      </article>
    </>
  );
}
