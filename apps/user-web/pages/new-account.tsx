/* eslint-disable @typescript-eslint/ban-ts-comment */
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import { Button } from 'ui';
import clsx from 'clsx';
import { ArrowLeftIcon, ExclamationIcon } from '@heroicons/react/outline';
import LinkTo from '@components/atoms/LinkTo';
import FormControl from '@components/molecules/Form/FormControl';
import { GenderOptions } from '@utils/constant';
import FormRadioControl from '@components/molecules/Form/FormRadioControl';
import { registerMutation } from '@utils/mutations/authMutation';
import { NewAccountInput, NewAccountSchema } from '@utils/validations';

import type { SubmitHandler } from 'react-hook-form';
import type { AxiosError } from 'axios';
import type { NewAccountResponse } from '@utils/types/auth.dto';

export default function NewAccount() {
  const [error422, setError422] = useState(false);
  const router = useRouter();

  /** hooks for forms control & submit action */
  const methods = useForm<NewAccountInput>({
    resolver: zodResolver(NewAccountSchema),
    defaultValues: {
      gender: 'pria',
      role_id: 2,
      email: typeof window !== 'undefined' ? localStorage.getItem('email') : '',
    },
  });

  useEffect(() => {
    methods.setValue('email', localStorage.getItem('email'));
    if (localStorage.getItem('userStatus') !== 'verified') router.replace('/');
    // Prefetch the dashboard page
    router.prefetch('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** hooks for controlling the register mutation */
  const mutation = useMutation<NewAccountResponse, AxiosError, NewAccountInput>(
    registerMutation
  );

  /** function to hadle register action */
  const onSubmit: SubmitHandler<NewAccountInput> = (data) => {
    console.log(data);
    setError422(false);

    mutation.mutate(data, {
      /** action on mutation error */
      onError: ({ message, response }) => {
        console.log({ message, response });
      },
      /** action on mutation success */
      onSuccess: (result) => {
        // console.log({ result });
        // @ts-ignore
        if ('message' in result && result.message.status === 422) {
          setError422(true);
        }

        if ('token' in result && result.data.length > 0) {
          const user = result.data[0];
          localStorage.removeItem('email');
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

        <div className="w-full rounded-md bg-white py-16 px-8 dark:bg-gray-800 md:w-[640px] md:px-12 lg:w-[800px] lg:pt-12 lg:pb-16">
          {/* register title & subtitle */}
          <h2 className="text-primary-700 dark:text-primary-300 text-center text-2xl font-bold ">
            Create New Account
          </h2>
          <h3 className="text-center text-base font-medium text-gray-500 dark:text-gray-500">
            Your email has been verified!
          </h3>
          <p className="text-center text-base font-medium text-gray-500 dark:text-gray-500">
            You can enter your account details here.
          </p>

          <FormProvider {...methods}>
            <form
              className="mt-6"
              onSubmit={methods.handleSubmit(onSubmit)}
              noValidate
            >
              {/* forms input */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormControl id="name" label="Name *" type="text" />
                <FormControl disabled id="email" label="Email *" type="email" />
                <FormControl id="password" label="Password *" type="password" />
                <FormControl
                  id="confirmPassword"
                  label="Confirm Password *"
                  type="password"
                />
                <div className="col-span-1 grid h-fit grid-cols-1 items-center gap-4 md:col-span-2 md:grid-cols-2">
                  <FormControl
                    id="nip"
                    label="Identification (NIP/NRP) *"
                    type="text"
                  />
                  <FormRadioControl
                    id="gender"
                    title="Gender *"
                    options={GenderOptions}
                    selected="pria"
                  />
                </div>
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

              {/* register failed alert */}
              <div
                className={clsx(
                  mutation.isError || error422 ? 'visible' : 'invisible',
                  'mt-4 flex flex-row items-center gap-3 rounded-md bg-red-200 p-3 text-sm font-medium text-red-600'
                )}
              >
                <ExclamationIcon className="h-5 w-5" />
                {mutation.isError && !error422 && (
                  <span>{mutation.error.message}</span>
                )}
                {error422 && !mutation.isError && (
                  <span>
                    Can&apos;t create new account. Email or Identification
                    already exist
                  </span>
                )}
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
