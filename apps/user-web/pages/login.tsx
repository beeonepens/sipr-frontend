import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import clsx from 'clsx';
import { ArrowLeftIcon, ExclamationIcon } from '@heroicons/react/outline';
import { Button } from 'ui';
import LinkTo from '@components/atoms/LinkTo';
import FormControl from '@components/molecules/Form/FormControl';
import { LoginSchema, LoginInput } from '@utils/validations';
import { loginMutation } from '@utils/mutations/authMutation';

import type { SubmitHandler } from 'react-hook-form';
import type { AxiosError } from 'axios';
import type { LoginResponse } from '@utils/types/auth.dto';

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    // Prefetch the dashboard page
    router.prefetch('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** hooks for forms control & submit action */
  const methods = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });

  /** hooks for controlling the login mutation */
  const mutation = useMutation<LoginResponse, AxiosError, LoginInput>(
    loginMutation
  );

  /** function to hadle login action */
  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    console.log(data);
    mutation.mutate(data, {
      /** action on mutation error */
      onError: ({ message, response }) => {
        console.log({ message, response });
        methods.setError('email', { type: 'manual', message: '' });
        methods.setError('password', { type: 'manual', message: '' });
      },
      /** action on mutation success */
      onSuccess: (result) => {
        console.log({ result });
        if (result.status === 'success') {
          localStorage.setItem('token', result.content.access_token);
          localStorage.setItem('uid', result.content.user_id);
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
        <title>Login | SIPR</title>
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

        <div className="w-full rounded-md bg-white py-16 px-8 dark:bg-gray-800 md:w-[400px] md:px-12">
          {/* login title & subtitle */}
          <h2 className="text-primary-700 dark:text-primary-300 text-center text-4xl font-bold ">
            SIPR
          </h2>
          <h1 className="text-center text-lg font-medium">Welcome back!</h1>

          <FormProvider {...methods}>
            <form
              className="mt-6"
              onSubmit={methods.handleSubmit(onSubmit)}
              noValidate
            >
              {/* forms input */}
              <div className="grid grid-cols-1 gap-4 md:gap-5">
                <FormControl id="email" label="Email" type="email" />
                <FormControl id="password" label="Password" type="password" />
              </div>

              {/* link to reset password */}
              <p className="mt-6 mb-4 text-right text-sm text-gray-800">
                <LinkTo
                  to="/reset-password"
                  className="hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-500 text-primary-800 font-medium"
                >
                  Forgot your password?
                </LinkTo>
              </p>

              {/* forms submit button */}
              <div className="mx-auto flex w-full flex-row justify-center">
                <Button
                  rounded="lg"
                  type="submit"
                  fullWidth
                  isLoading={mutation.isLoading}
                >
                  Login
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
                <span>Invalid email or password!</span>
              </div>
            </form>
          </FormProvider>

          {/* link to register */}
          <p className="mt-4 -mb-6 text-center text-sm text-gray-800 dark:text-gray-400">
            Need an account?{' '}
            <LinkTo
              to="/register"
              className="hover:text-primary-500 dark:text-primary-400 dark:hover:text-primary-500 text-primary-800 font-medium"
            >
              Register
            </LinkTo>
          </p>
        </div>
      </article>
    </>
  );
}
