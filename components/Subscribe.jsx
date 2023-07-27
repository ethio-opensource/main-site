import React from 'react';
import { Input, Button, Container, Box, Typography } from '@mui/material';

function Subscribe() {
  return (
    <Container
      sx={{
        marginY: '20px',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          marginY: '1rem',
        }}
      >
        Stay connected with this vibrant community
      </Typography>
      <Box>
        <Input variant="outlined" color='primary' placeholder="mail@mui.com" type="email" required />
        <Button variant="solid" color="primary" type="submit">
          Subscribe
        </Button>
      </Box>
    </Container>
  );
}

export default Subscribe;
