export default function UserInfoView() {
  return (
    <section className="col-span-1 grid grid-cols-1 gap-4 lg:col-span-2 xl:grid-cols-2">
      <div className="flex flex-col justify-start">
        <p className="text-sm font-semibold uppercase">Full Name</p>
        <p className="text-xl text-gray-600 dark:text-gray-400">M Arya Putra</p>
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-sm font-semibold uppercase">Email</p>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          aryapratama@student.pens.ac.id
        </p>
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-sm font-semibold uppercase">Phone Number</p>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          +62 9201920123
        </p>
      </div>
      <div className="flex flex-col justify-start">
        <p className="text-sm font-semibold uppercase">Address</p>
        <p className="text-xl text-gray-600 dark:text-gray-400">
          Surabaya, Indonesia
        </p>
      </div>
    </section>
  );
}
