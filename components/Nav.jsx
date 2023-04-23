import NextLink from 'next/link'
import { AppBar, Box, Toolbar, Typography, Container, Button, Link } from '@mui/material'
import { forwardRef } from 'react'

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
        <Toolbar sx={{paddingTop: '25px'}} disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              color: 'inherit',
              textDecoration: 'none'
            }}
          >
            Ethio OpenSource
          </Typography>

          <Box sx={{ flexGrow: 1, gap: 1 }}>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/resources">Resources</NavLink>
            <NavLink href="/news">News</NavLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button color="inherit" sx={{ marginRight: 1 }}>
              Sign In
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
