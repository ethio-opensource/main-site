import { Typography, Box, Container, Link, Divider } from '@mui/material';
import Image from 'next/image';
import { NavLink } from './Nav';

const Copyright = () => (
  <Typography variant="body1" color="text.secondary" py={4}>
    Copyright &copy;
    {new Date().getFullYear()}{' '}
    <Link color="inherit" href="/">
      Ethio Open Source Community
    </Link>{' '}
    . All right reserved
  </Typography>
);

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) =>
          theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
      }}
    >
      <Container>
        <Box
          sx={{
            py: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Image width={150} height={50} src="/images/logo.png" alt="logo" />
          <Box>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/project">Projects</NavLink>
            <NavLink href="/resources">Resources</NavLink>
            <NavLink href="/news">News</NavLink>
          </Box>
        </Box>
        <Divider />
        <Copyright />
      </Container>
    </Box>
  );
};

export default Footer;
