import React, { useEffect, useState } from 'react';
import { Button } from 'ui';

export default function Web() {
  const [data, setData] = useState('');

  useEffect(() => {
    setData((cv) => `Hello ${cv}`);
    console.log(data);
  }, [data]);

  return (
    <div>
      <h1>User Client</h1>
      <Button />
    </div>
  );
}
