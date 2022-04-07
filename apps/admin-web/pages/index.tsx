import React from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function HomePage() {
  return (
    <Container sx={{ padding: '4rem' }}>
      <Stack direction="column" mb="1rem" spacing={2}>
        <Typography variant="h3">Welcome to</Typography>
        <Typography variant="h1">SIPR Admin Page</Typography>
      </Stack>

      <Link href="/login" passHref>
        <Button size="large" LinkComponent="a">
          Login
        </Button>
      </Link>
    </Container>
  );
}
