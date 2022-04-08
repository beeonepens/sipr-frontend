import React from 'react';
import Link from 'next/link';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Login() {
  return (
    <Container>
      <Box
        sx={{
          minHeight: '100vh',
          width: '40%',
          mx: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card variant="outlined" sx={{ paddingY: '1rem', paddingX: '0.5rem' }}>
          <CardContent sx={{ marginX: '1.5rem', textAlign: 'center' }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 500 }}>
              Login
            </Typography>

            <Stack direction="column" my="2rem" spacing={2}>
              <TextField
                id="email"
                label="Email"
                variant="outlined"
                type="text"
              />
              <TextField
                id="password"
                label="Password"
                variant="outlined"
                type="password"
              />
            </Stack>

            <Link href="/dashboard" passHref>
              <Button fullWidth LinkComponent="a">
                Login
              </Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
