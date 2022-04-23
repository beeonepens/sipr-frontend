import Head from 'next/head';
import { useRouter } from 'next/router';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import { Button } from 'ui';
import { ArrowLeftIcon } from '@heroicons/react/outline';
import LinkTo from '@components/atoms/LinkTo';
import FormControl from '@components/molecules/Form/FormControl';
import FormDateTimeControl from '@components/molecules/Form/FormDateTimeControl';
import { GenderOptions } from '@utils/constant';
import FormRadioControl from '@components/molecules/Form/FormRadioControl';
import FormAreaControl from '@components/molecules/Form/FormAreaControl';
import { registerMutation } from '@utils/mutations/authMutation';
import { RegisterInput, RegisterSchema } from '@utils/validations';

import type { SubmitHandler } from 'react-hook-form';
import type { AxiosError } from 'axios';
import type { RegisterResponse } from '@utils/types/auth.dto';

export default function Register() {
  const router = useRouter();

  /** hooks for forms control & submit action */
  const methods = useForm<RegisterInput>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: { gender: 'pria' },
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
        localStorage.setItem('token', result.token);
        router.push('/dashboard');
      },
    });
  };

  /** form error log */
  if (methods.formState.errors) console.log({ f: methods.formState.errors });

  return (
    <>
      <Head>
        <title>Register | SIPR</title>
      </Head>

      <article className="flex min-h-screen flex-row items-start justify-center bg-white dark:bg-zinc-800 md:items-center md:bg-black md:bg-opacity-50 md:dark:bg-zinc-600">
        <div className="md:[640px] w-full rounded-md bg-white py-12 px-8 dark:bg-zinc-800 md:px-12 lg:w-[800px] lg:pt-6 lg:pb-12">
          {/* back icon */}
          <LinkTo
            to="/"
            className="hover:text-primary-500 text-primary-700 dark:text-primary-300 dark:hover:text-primary-400"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </LinkTo>

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
                <FormControl id="name" label="Name" type="text" />
                <FormControl id="email" label="Email" type="email" />
                <FormControl id="nip" label="NIP" type="text" />
                <FormDateTimeControl
                  defaultValue={new Date(2000, 1, 1)}
                  label="Date of Birth"
                  id="dateofbirth"
                />
                <FormControl id="password" label="Password" type="password" />
                <FormControl
                  id="confirmPassword"
                  label="Confirm Password"
                  type="password"
                />
                <div className="col-span-1 grid h-fit grid-cols-1 items-center gap-4 md:col-span-2 md:grid-cols-2">
                  <FormAreaControl rows={2} label="Adress" id="address" />
                  <FormRadioControl
                    title="Gender"
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
