import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function Login() {
  return (
    <Container sx={{ padding: '4rem' }}>
      <Stack direction="column" spacing={2}>
        <Typography variant="h3">Login</Typography>
      </Stack>
    </Container>
  );
}
