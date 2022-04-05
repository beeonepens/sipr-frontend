import React from 'react';
import Head from 'next/head';
import PrimaryButton from '@components/atoms/Button/PrimaryButton';
import LinkTo from '@components/atoms/LinkTo';
import FormControl from '@components/molecules/Form/FormControl';
import ArrowLeftIcon from '@components/atoms/Icon/ArrowLeftIcon';

export default function Register() {
  return (
    <>
      <Head>
        <title>Dashboard | SIPR</title>
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

          <form className="mt-6">
            {/* forms input */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
              <FormControl id="name" label="Name" type="text" />
              <FormControl id="email" label="Email" type="email" />
              <FormControl id="password" label="Password" type="password" />
              <FormControl
                id="confirm-password"
                label="Confirm Password"
                type="password"
              />
              <FormControl id="username" label="Username" type="text" />
              <FormControl id="address" label="Address" type="text" />
            </div>

            {/* forms submit button */}
            <div className="mx-auto mt-6 flex w-full flex-row justify-center md:w-2/3 lg:w-1/2">
              <PrimaryButton rounded="lg" type="submit" fullWidth>
                Register
              </PrimaryButton>
            </div>

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
          </form>
        </div>
      </article>
    </>
  );
}
