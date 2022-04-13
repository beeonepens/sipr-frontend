import * as React from 'react';
import Head from 'next/head';
import { Button } from 'ui';
import LinkTo from '@components/atoms/LinkTo';

export default function Profile() {
  return (
    <>
      <Head>
        <title>Profile | SIPR</title>
      </Head>

      <article className="py-4 px-4 md:px-8">
        <h2 className="text-primary-950 mb-2 text-2xl font-bold capitalize">
          User Details
        </h2>

        <div className="my-8 grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4">
          <section className="col-span-1 grid grid-cols-1 gap-4 lg:col-span-2 xl:grid-cols-2">
            <div className="flex flex-col justify-start text-gray-900">
              <p className="text-sm font-semibold uppercase">Full Name</p>
              <p className="text-xl text-gray-600">M Arya Putra</p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-sm font-semibold uppercase">Email</p>
              <p className="text-xl text-gray-600">
                aryapratama@student.pens.ac.id
              </p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-sm font-semibold uppercase">Phone Number</p>
              <p className="text-xl text-gray-600">+62 9201920123</p>
            </div>
            <div className="flex flex-col justify-start">
              <p className="text-sm font-semibold uppercase">Address</p>
              <p className="text-xl text-gray-600">Surabaya, Indonesia</p>
            </div>
          </section>

          <div className="hidden xl:col-span-1 xl:flex" />

          <div className="col-span-1 border border-gray-800">
            <p>Avatar Img </p>
            <p>Avatar Img </p>
            <p>Avatar Img </p>
            <p>Avatar Img </p>
            <p>Avatar Img </p>
          </div>
        </div>

        <LinkTo to="/">
          <Button color="danger">Logout</Button>
        </LinkTo>
      </article>
    </>
  );
}
