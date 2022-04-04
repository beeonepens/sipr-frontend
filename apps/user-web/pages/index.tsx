import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('Hello World');
  }, []);

  return (
    <div>
      <h1 className="my-4 text-center text-4xl font-bold text-red-600">
        User Client
      </h1>
    </div>
  );
}
