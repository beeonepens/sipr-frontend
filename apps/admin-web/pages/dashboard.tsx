import React from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

export default function Dashboard() {
  return (
    <Container sx={{ padding: '4rem' }}>
      <Stack direction="column" mb="1rem" spacing={1}>
        <Typography variant="h3" component="h1" sx={{ fontWeight: 500 }}>
          Admin Dashboard Page
        </Typography>
      </Stack>

      <Link href="/" passHref>
        <Button size="large" color="error" LinkComponent="a">
          Logout
        </Button>
      </Link>
    </Container>
  );
}
