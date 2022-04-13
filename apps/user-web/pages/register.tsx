import * as React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, ArrowLeftIcon } from 'ui';
import LinkTo from '@components/atoms/LinkTo';
import FormControl from '@components/molecules/Form/FormControl';
import { RegisterInput, RegisterSchema } from '@utils/validations';

import type { SubmitHandler } from 'react-hook-form';

export default function Register() {
  const router = useRouter();
  /** hooks for forms control & submit action */
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
  });

  /** function hadle register action */
  const onSubmit: SubmitHandler<RegisterInput> = (data) => {
    console.log(data);
    router.push('/dashboard');
  };

  /** form error log */
  if (methods.formState.errors) console.log(methods.formState.errors);

  return (
    <>
      <Head>
        <title>Register | SIPR</title>
      </Head>

      <article className="flex min-h-screen flex-row items-center justify-center bg-black bg-opacity-50">
        <div className="w-4/5 rounded-md bg-white p-12 md:w-3/5 lg:w-2/5">
          {/* back icon */}
          <LinkTo to="/" className="hover:text-primary-500 text-primary-700">
            <ArrowLeftIcon />
          </LinkTo>

          {/* register title & subtitle */}
          <h2 className="text-primary-900 text-center text-4xl font-bold">
            SIPR
          </h2>
          <h1 className="text-center text-lg font-medium">
            Create your free account
          </h1>

          <FormProvider {...methods}>
            <form className="mt-6" onSubmit={methods.handleSubmit(onSubmit)}>
              {/* forms input */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                <FormControl id="name" label="Name" type="text" />
                <FormControl id="email" label="Email" type="text" />
                <FormControl id="password" label="Password" type="password" />
                <FormControl
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
                <FormControl id="username" label="Username" type="text" />
                <FormControl id="address" label="Address" type="text" />
              </div>

              {/* forms submit button */}
              <div className="mx-auto mt-6 flex w-full flex-row justify-center md:w-2/3 lg:w-1/2">
                <Button rounded="lg" type="submit" fullWidth>
                  Register
                </Button>
              </div>
            </form>
          </FormProvider>
          {/* link to login */}
          <p className="mt-8 text-center text-gray-800">
            Already have an account?{' '}
            <LinkTo
              to="/login"
              className="hover:text-primary-500 text-primary-700 underline"
            >
              Login
            </LinkTo>
          </p>
        </div>
      </article>
    </>
  );
}
