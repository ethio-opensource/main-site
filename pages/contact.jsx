import React from 'react';
import Image from 'next/image';
import { Typography, Box, Container, Divider, Stack, Link } from '@mui/material';
import { FaFacebookF, FaFacebookSquare, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

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
              <a target="_blank" href="mailto:contact@eos.tech">
                contact@eos.tech
              </a>
            </Typography>
            <Typography variant="body1" color="initial">
              <a target="_blank" href="mailto:eos@gmail.com">
                eos@gmail.com
              </a>
            </Typography>
            <Typography variant="body1" color="initial">
              <a target="_blank" href="mailto:eos@outlook.com">
                eos@outlook.com
              </a>
            </Typography>
          </Container>
          <Divider orientation="vertical" flexItem />
          <Container>
            <Typography variant="h5" color="initial" mb={1}>
              Phone
            </Typography>
            <Typography variant="body1" color="initial">
              <a target="_blank" href="tel:+251912687901">
                +251912687901
              </a>
            </Typography>
            <Typography variant="body1" color="initial">
              <a target="_blank" href="tel:+251972586160">
                +251972586160
              </a>
            </Typography>
            <Typography variant="body1" color="initial">
              <a target="_blank" href="tel:+251936731722">
                +251936731722
              </a>
            </Typography>
            <Typography variant="body1" color="initial">
              <a target="_blank" href="tel:+251910168641">
                +251910168641
              </a>
            </Typography>
          </Container>
          <Divider orientation="vertical" flexItem />
          <Stack>
            <Container
              sx={{
                marginY: '10px',
              }}
            >
              <a href="https://facebook.com/eos">
                <FaLinkedinIn color="#0A66C2" size={25} />
              </a>
            </Container>
            <Container
              sx={{
                marginY: '10px',
              }}
            >
              <a href="https://facebook.com/eos">
                <FaTwitter color="#00acee" size={25} />
              </a>
            </Container>
            <Container
              sx={{
                marginY: '10px',
              }}
            >
              <a href="https://www.facebook.com/profile.php?id=100095163141362">
                <FaFacebookSquare color="#1877F2" size={25} />
              </a>
            </Container>
          </Stack>
        </Container>
      </Box>
    </Container>
  );
}

export default contact;
