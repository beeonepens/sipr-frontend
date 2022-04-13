import * as React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, ArrowLeftIcon } from 'ui';
import LinkTo from '@components/atoms/LinkTo';
import FormControl from '@components/molecules/Form/FormControl';
import { LoginSchema, LoginInput } from '@utils/validations';

import type { SubmitHandler } from 'react-hook-form';

export default function Login() {
  const router = useRouter();
  /** hooks for forms control & submit action */
  const methods = useForm<LoginInput>({
    resolver: zodResolver(LoginSchema),
  });

  /** function hadle login action */
  const onSubmit: SubmitHandler<LoginInput> = (data) => {
    console.log(data);
    router.push('/dashboard');
  };

  /** form error log */
  if (methods.formState.errors) console.log(methods.formState.errors);

  return (
    <>
      <Head>
        <title>Login | SIPR</title>
      </Head>

      <article className="flex min-h-screen flex-row items-start justify-center md:items-center md:bg-black md:bg-opacity-50">
        <div className="w-full rounded-md bg-white py-12 px-8 md:w-2/5 md:px-12 lg:w-1/4">
          {/* back icon */}
          <LinkTo to="/" className="hover:text-primary-500 text-primary-700">
            <ArrowLeftIcon />
          </LinkTo>

          {/* login title & subtitle */}
          <h2 className="text-primary-900 mt-24 text-center text-4xl font-bold md:mt-0">
            SIPR
          </h2>
          <h1 className="text-center text-lg font-medium">Welcome back!</h1>

          <FormProvider {...methods}>
            <form className="mt-6" onSubmit={methods.handleSubmit(onSubmit)}>
              {/* forms input */}
              <div className="grid grid-cols-1 gap-4 md:gap-5">
                <FormControl id="email" label="Email" type="text" />
                <FormControl id="password" label="Password" type="password" />
              </div>

              {/* forms submit button */}
              <div className="mx-auto mt-6 flex w-full flex-row justify-center">
                <Button rounded="lg" type="submit" fullWidth>
                  Login
                </Button>
              </div>
            </form>
          </FormProvider>

          {/* link to register */}
          <p className="mt-8 text-center text-gray-800">
            Need an account?{' '}
            <LinkTo
              to="/register"
              className="hover:text-primary-500 text-primary-700 underline"
            >
              Register
            </LinkTo>
          </p>

          {/* link to reset password */}
          <p className="mt-2 text-center text-gray-800">
            Forgot your password?{' '}
            <LinkTo
              to="/reset-password"
              className="hover:text-primary-500 text-primary-700 underline"
            >
              Reset Password
            </LinkTo>
          </p>
        </div>
      </article>
    </>
  );
}
