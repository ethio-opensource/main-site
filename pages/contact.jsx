import React from 'react';
import Image from 'next/image';
import { Typography, Box, Container, Divider, Stack, Link } from '@mui/material';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

function contact() {
  return (
    <Container>
      <Typography variant="h4" color="initial" mb={5}>
        Contact Us
      </Typography>
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box>
          <Image src="/images/logo.png" alt="logo" width={450} height={150} />
        </Box>
        <Divider orientation="vertical" flexItem />
        <Container
          sx={{
            display: 'flex',
            margin: '10px',
          }}
        >
            <Container>
              <Typography variant="h5" color="initial" mb={1}>
                Email
              </Typography>
              <Typography variant="body1" color="initial">
                contact@eos.tech
              </Typography>
              <Typography variant="body1" color="initial">
                eos@gmail.com
              </Typography>
              <Typography variant="body1" color="initial">
                eos@outlook.com
              </Typography>
            </Container>
        <Divider orientation="vertical" flexItem />
            <Container>
              <Typography variant="h5" color="initial" mb={1}>
                Phone
              </Typography>
              <Typography variant="body1" color="initial">
                +251912687901
              </Typography>
              <Typography variant="body1" color="initial">
                +251972586160
              </Typography>
              <Typography variant="body1" color="initial">
                +251936731722
              </Typography>
              <Typography variant="body1" color="initial">
                +251910168641
              </Typography>
            </Container>
        <Divider orientation="vertical" flexItem />
            <Stack>
            <Container sx={{
                marginY: '10px',
            }}><Link href="facebook.com/eos">
              <FaLinkedinIn size={25} />
            </Link></Container>
            <Container sx={{
                marginY: '10px',
            }}>
            <Link href="facebook.com/eos">
              <FaTwitter size={25}/>
            </Link>
            </Container>
            <Container sx={{
                marginY: '10px',
            }}>
            <Link href="facebook.com/eos">
              <FaFacebookF size={25}/>
            </Link>
            </Container>
            </Stack>
        </Container>
      </Box>
    </Container>
  );
}

export default contact;
