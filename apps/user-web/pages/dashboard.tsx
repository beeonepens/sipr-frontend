import React from 'react';
import Sidebar from '@components/organisms/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-row justify-between">
      <Sidebar />

      <section className="h-[120vh] w-full  md:w-[85%]">
        <header className="border-b border-gray-300 py-4 px-8 text-xl font-semibold text-blue-800">
          <h4>Dashboard</h4>
        </header>

        <main className="p-4">
          <h2>Dashboard Page</h2>
        </main>
      </section>
    </div>
  );
}
