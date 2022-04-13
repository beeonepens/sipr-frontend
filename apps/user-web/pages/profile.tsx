import * as React from 'react';
import Head from 'next/head';
import { Button, EditPenIcon, LogoutIcon } from 'ui';
import LinkTo from '@components/atoms/LinkTo';
import Image from 'next/image';
import { rgbDataURL } from '@utils/formatImage';
import { placeholderAvatar } from '@utils/constant';

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

        <div className="my-8 flex flex-col-reverse gap-8 xl:flex-row xl:items-start xl:justify-between">
          <section className="col-span-1 grid grid-cols-1 gap-4 lg:col-span-2 xl:grid-cols-2">
            <div className="flex flex-col justify-start text-black">
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

          <figure className="col-span-1 mx-auto rounded-xl">
            <Image
              className="rounded-xl border border-gray-300"
              src={placeholderAvatar}
              alt="avatar"
              height="240"
              width="240"
              placeholder="blur"
              blurDataURL={rgbDataURL(220, 220, 220)}
            />
          </figure>
        </div>

        <div className="grid w-full grid-cols-2 gap-6 md:w-80">
          <LinkTo to="/">
            <Button fullWidth variant="outline" color="danger">
              <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
                <LogoutIcon className="h-5 w-5" />
                Logout
              </span>
            </Button>
          </LinkTo>

          <Button fullWidth variant="outline" color="primary">
            <span className="flex flex-row items-center justify-center gap-2 text-sm font-normal">
              <EditPenIcon className="h-5 w-5" />
              Edit
            </span>
          </Button>
        </div>
      </article>
    </>
  );
}
