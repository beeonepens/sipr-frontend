import React from 'react';
import { useRouter } from 'next/router';
import PrimaryButton from '@components/atoms/Button/PrimaryButton';
import ArrowLeftIcon from '@components/atoms/Icon/ArrowLeftIcon';
import LinkTo from '@components/atoms/LinkTo';
import FormControl from '@components/molecules/Form/FormControl';

export default function Login() {
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push('/dashboard');
  }

  return (
    <main className="flex min-h-screen flex-row items-center justify-center bg-black bg-opacity-50">
      <div className="w-4/5 rounded-md bg-white p-12 md:w-2/5 lg:w-1/4">
        {/* back icon */}
        <LinkTo to="/" className="hover:text-primary-500 text-primary-700">
          <ArrowLeftIcon />
        </LinkTo>

        {/* login title & subtitle */}
        <h2 className="text-primary-900 text-center text-4xl font-bold">
          SIPR
        </h2>
        <h1 className="text-center text-lg font-medium">Welcome back!</h1>

        <form className="mt-6" onSubmit={handleSubmit}>
          {/* forms input */}
          <div className="grid grid-cols-1 gap-4 md:gap-5">
            <FormControl id="email" label="Email" type="email" />
            <FormControl id="password" label="Password" type="password" />
          </div>

          {/* forms submit button */}
          <div className="mx-auto mt-6 flex w-full flex-row justify-center">
            <PrimaryButton rounded="lg" type="submit" fullWidth>
              Login
            </PrimaryButton>
          </div>

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
        </form>
      </div>
    </main>
  );
}
