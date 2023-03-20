import { Container } from '@mui/material'
import Box from '@mui/material/Box'
import Footer from './Footer'
import Nav from './Nav'

const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Box>
        <Nav />
        <Container component="main" sx={{ mt: 8, mb: 2 }}>
          {children}
        </Container>
      </Box>
      <Footer />
    </Box>
  )
}

export default Layout
