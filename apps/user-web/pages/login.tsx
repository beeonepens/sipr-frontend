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
        localStorage.setItem('token', result.content.access_token);
        router.push('/dashboard');
      },
    });
  };

  /** form error log */
  if (methods.formState.errors) console.log({ f: methods.formState.errors });

  return (
    <>
      <Head>
        <title>Login | SIPR</title>
      </Head>

      <article className="flex min-h-screen flex-row items-start justify-center md:items-center md:bg-black md:bg-opacity-50">
        <div className="w-full rounded-md bg-white py-12 px-8 md:w-2/5 md:px-12 lg:w-1/4">
          {/* back icon */}
          <LinkTo to="/" className="hover:text-primary-500 text-primary-700">
            <ArrowLeftIcon className="h-6 w-6" />
          </LinkTo>

          {/* login title & subtitle */}
          <h2 className="text-primary-700 mt-24 text-center text-4xl font-bold md:mt-0">
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
                  className="hover:text-primary-500 text-primary-800 font-medium"
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
          <p className="mt-4 -mb-6 text-center text-sm text-gray-800">
            Need an account?{' '}
            <LinkTo
              to="/register"
              className="hover:text-primary-500 text-primary-800 font-medium"
            >
              Register
            </LinkTo>
          </p>
        </div>
      </article>
    </>
  );
}
