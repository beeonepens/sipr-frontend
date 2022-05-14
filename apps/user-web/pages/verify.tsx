/* eslint-disable @typescript-eslint/ban-ts-comment */
import Head from 'next/head';
import { useEffect } from 'react';
import * as z from 'zod';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import { ArrowLeftIcon, ExclamationIcon } from '@heroicons/react/outline';
import LinkTo from '@components/atoms/LinkTo';
import FormControl from '@components/molecules/Form/FormControl';
import { verifyMutation } from '@utils/mutations/authMutation';

import type { SubmitHandler } from 'react-hook-form';
import type { AxiosError } from 'axios';
import { Button } from 'ui';
import clsx from 'clsx';

const VerifySchema = z.object({
  otp: z.string().min(12, { message: 'Required' }),
});

/** TS types for the input form */
type VerifyInput = z.infer<typeof VerifySchema>;

function Verify() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('email')) router.replace('/');
    // Prefetch the dashboard page
    router.prefetch('/new-account');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** hooks for forms control & submit action */
  const methods = useForm<VerifyInput>({
    resolver: zodResolver(VerifySchema),
  });

  /** hooks for controlling the Verify mutation */
  const mutation = useMutation<unknown, AxiosError, VerifyInput>(
    verifyMutation
  );

  /** function to hadle Verify action */
  const onSubmit: SubmitHandler<VerifyInput> = (data) => {
    console.log(data);

    mutation.mutate(data, {
      /** action on mutation error */
      onError: ({ message, response }) => {
        console.log({ message, response });
      },
      /** action on mutation success */
      onSuccess: () => {
        // console.log({ result });
        localStorage.setItem('userStatus', 'verified');
        router.push('/new-account');
      },
    });
  };

  /** form error log */
  if (methods.formState.errors !== {}) console.log(methods.formState.errors);

  return (
    <>
      <Head>
        <title>Verify | SIPR</title>
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

        <div className="w-full rounded-md bg-white py-16 px-8 dark:bg-gray-800 md:w-[640px] md:px-12  lg:pt-12 lg:pb-16">
          <h2 className="text-primary-700 dark:text-primary-300 text-center text-2xl font-bold ">
            Verify Email
          </h2>
          <p className="text-center text-base font-medium text-gray-500 dark:text-gray-500">
            We have send an verification code to your email address. You can
            copy that and enter it here to verify your email.
          </p>

          <FormProvider {...methods}>
            <form
              className="mt-6"
              onSubmit={methods.handleSubmit(onSubmit)}
              noValidate
            >
              {/* forms input */}
              <div className="grid grid-cols-1 gap-4 ">
                <FormControl id="otp" label="Verification Code *" type="text" />
              </div>
            </form>

            {/* forms submit button */}
            <div className="mx-auto mt-8 flex w-full flex-row justify-center md:w-2/3 lg:w-1/2">
              <Button
                rounded="lg"
                type="submit"
                fullWidth
                onClick={methods.handleSubmit(onSubmit)}
                isLoading={mutation.isLoading}
              >
                Register
              </Button>
            </div>

            {/* register failed alert */}
            <div
              className={clsx(
                mutation.isError ? 'visible' : 'invisible',
                'mt-4 flex flex-row items-center gap-3 rounded-md bg-red-200 p-3 text-sm font-medium text-red-600'
              )}
            >
              <ExclamationIcon className="h-5 w-5" />
              {mutation.isError &&
                mutation.error.message ===
                  'Request failed with status code 400' && (
                  <span>Invalid Verification Code</span>
                )}
              {mutation.isError && !mutation.error.message && (
                <span>
                  Can&apos;t create new account. Email or Identification already
                  exist
                </span>
              )}
            </div>
          </FormProvider>
        </div>
      </article>
    </>
  );
}

export default Verify;
