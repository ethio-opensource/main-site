import { Container, Box } from '@mui/material';
import Footer from './Footer';
import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <Box>
        <Nav />
        <Box component="main" sx={{ mt: 8, mb: 2, mx: 0, padding: 0, width: '100vw' }}>
          {children}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
