import React, { useEffect } from 'react';
import { Button } from 'ui';

export default function Home() {
  useEffect(() => {
    console.log('Hello World');
  }, []);

  return (
    <div>
      <h1>User Client</h1>
      <Button />
    </div>
  );
}
