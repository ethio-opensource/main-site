import NextLink from 'next/link';
import { AppBar, Box, Toolbar, Container, Button, Link } from '@mui/material';
import { forwardRef } from 'react';
import Image from 'next/image';

// eslint-disable-next-line react/display-name
const LinkBehavoir = forwardRef((props, ref) => <NextLink ref={ref} {...props} />);

export const NavLink = ({ children, href }) => {
  return (
    <Link underline="hover" sx={{ mx: 1, fontSize: 18 }} component={LinkBehavoir} href={href}>
      {children}
    </Link>
  );
};

function Nav() {
  return (
    <AppBar position="static" elevation={0} color="transparent">
      <Container>
        <Toolbar sx={{ paddingTop: '25px' }} disableGutters>
          <Image width={150} height={50} src="/images/logo.png" alt="logo" />
          <Box sx={{ flexGrow: 1, gap: 1 }} ml={2}>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/resources">Resources</NavLink>
            <NavLink href="/news">News</NavLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button color="inherit" sx={{ marginRight: 1 }}>
              Join This Community
            </Button>
            <Button variant="contained" disableElevation>
              Support Us
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
