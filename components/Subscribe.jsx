import React, { useState } from 'react';
import { Container, Box, Typography, Stack, Snackbar, Alert } from '@mui/material';
import { Button, Input } from '@mui/joy';
import { EmailOutlined } from '@mui/icons-material';

function Subscribe() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email: e.target.email.value }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      await res.json();
      e.target.email.value = '';
      setOpen(true);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
    setLoading(false);
  };

  const handleClose = (e, reason) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  return (
    <Container sx={{ marginY: '80px' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
        }}
      >
        <Typography
          variant="h3"
          style={{ fontSize: '40px', color: '#0F172A', mb: 10 }}
          textAlign="center"
        >
          Stay connected.
          <br /> Subscribe to Our Newsletter.
        </Typography>
        <form onSubmit={handleSubmit}>
          <Stack spacing={1} direction={'row'}>
            <Input
              variant="soft"
              startDecorator={<EmailOutlined color="inherit" />}
              placeholder="example@ethos.com"
              type="email"
              name="email"
              disabled={loading}
              required
            />
            <Button variant="solid" loading={loading} type="submit">
              Subscribe
            </Button>
          </Stack>
        </form>
      </Box>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Successfully subscribed to Email Newsletter!
        </Alert>
      </Snackbar>
      <Snackbar open={!!error} autoHideDuration={4000} onClose={() => setError(undefined)}>
        <Alert onClose={() => setError(undefined)} severity="error">
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Subscribe;
