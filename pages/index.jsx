import { colorModeContext, tokens, useMode } from './theme';
import { ThemeProvider, Typography, useTheme, Button, Avatar, Box } from '@mui/material';
import { BsPlusCircle } from 'react-icons/bs';
import Image from 'next/image';
import Link from 'next/link';
import { FaGreaterThan } from 'react-icons/fa';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import { FAQ } from '../components/FAQ';
import { Contact } from '../components/Contact';
import { UserFeedback } from '../components/UserFeedback';

const HomePage = () => {
  // const [theme, colorMode] = useMode()
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <colorModeContext.Provider>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Hero />
          <Partners />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'blue',
              flexWrap: 'wrap',
              width: '100%',
            }}
          >
            <div style={{ margin: '2rem' }}>
              <Typography variant="h5" sx={{ color: 'white' }}>
                Getting Started is easy
              </Typography>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'row', padding: '1rem' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'white',
                  padding: '0 4rem',
                  margin: '0 2rem 2rem 2rem',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                      src="/svg/cloud_man.jpg"
                      alt="cloud computing image"
                      width={300}
                      height={300}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                      <Typography variant="h5">Host a project</Typography>
                      <Typography variant="h6" sx={{ fontWeight: 'light' }}>
                        Enable your project to thrive in a neutral, trusted home, where we’ll help
                        you scale your community with unmatched expertise, tools, and services.
                      </Typography>
                    </div>
                    <div>
                      <Link href="/" style={{ textDecoration: 'none' }}>
                        <Typography
                          variant="h5"
                          style={{
                            color: colors.primary[500],
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                          }}
                        >
                          Learn More
                          <FaGreaterThan />
                        </Typography>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'white',
                  padding: '0 4rem',
                  margin: '0 2rem 2rem 2rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Image
                    src="/svg/cloud_man.jpg"
                    alt="cloud computing image"
                    width={300}
                    height={300}
                  />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <Typography variant="h5">Become a Member</Typography>
                    <Typography variant="h6" sx={{ fontWeight: 'light' }}>
                      Supercharge the future of open technology. Shape the ecosystem, drive
                      collaboration, and measure your contributions.
                    </Typography>
                  </div>
                  <div>
                    <Link href="/" style={{ textDecoration: 'none' }}>
                      <Typography
                        variant="h5"
                        style={{
                          color: colors.primary[500],
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                        }}
                      >
                        Learn More
                        <FaGreaterThan />
                      </Typography>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              height: '80vh',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-around',
              backgroundColor: 'whitesmoke',
              width: '98.5vw',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                gap: '1rem',
              }}
            >
              <Typography variant="h5">Explore Our Projects</Typography>
              <Typography variant="h6" sx={{ marginBottom: '2rem' }}>
                Explore the latest projects created by our community members
              </Typography>
            </div>
            <div style={{ display: 'flex', gap: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'space-between',
                  background: 'white',
                  justifyContent: 'center',
                }}
              >
                <Image src="/svg/toyota-1.svg" alt="Toyota logo" width="150" height="100" />
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <Typography>Toyota</Typography>
                  <Link
                    href="/"
                    style={{
                      textDecoration: 'none',
                      marginBottom: '10px',
                      color: colors.primary[500],
                    }}
                  >
                    toyota.com
                  </Link>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'space-between',
                  background: 'white',
                  justifyContent: 'center',
                }}
              >
                <Image src="/svg/toyota-1.svg" alt="Toyota logo" width="150" height="100" />
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <Typography>Toyota</Typography>
                  <Link
                    href="/"
                    style={{
                      textDecoration: 'none',
                      marginBottom: '10px',
                      color: colors.primary[500],
                    }}
                  >
                    toyota.com
                  </Link>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'space-between',
                  background: 'white',
                  justifyContent: 'center',
                }}
              >
                <Image src="/svg/toyota-1.svg" alt="Toyota logo" width="150" height="100" />
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <Typography>Toyota</Typography>
                  <Link
                    href="/"
                    style={{
                      textDecoration: 'none',
                      marginBottom: '10px',
                      color: colors.primary[500],
                    }}
                  >
                    toyota.com
                  </Link>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'space-between',
                  background: 'white',
                  justifyContent: 'center',
                }}
              >
                <Image src="/svg/toyota-1.svg" alt="Toyota logo" width="150" height="100" />
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <Typography>Toyota</Typography>
                  <Link
                    href="/"
                    style={{
                      textDecoration: 'none',
                      marginBottom: '10px',
                      color: colors.primary[500],
                    }}
                  >
                    toyota.com
                  </Link>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'space-between',
                  background: 'white',
                  justifyContent: 'center',
                }}
              >
                <Image src="/svg/toyota-1.svg" alt="Toyota logo" width="150" height="100" />
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <Typography>Toyota</Typography>
                  <Link
                    href="/"
                    style={{
                      textDecoration: 'none',
                      marginBottom: '10px',
                      color: colors.primary[500],
                    }}
                  >
                    toyota.com
                  </Link>
                </div>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'space-between',
                  background: 'white',
                  justifyContent: 'center',
                }}
              >
                <Image src="/svg/toyota-1.svg" alt="Toyota logo" width="150" height="100" />
                <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                  <Typography>Toyota</Typography>
                  <Link
                    href="/"
                    style={{
                      textDecoration: 'none',
                      marginBottom: '10px',
                      color: colors.primary[500],
                    }}
                  >
                    toyota.com
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: colors.primary[500],
                  textTransform: 'capitalize',
                  borderRadius: 20,
                  padding: '5px 20px',
                  marginX: '5px',
                }}
              >
                See All Projects
              </Button>
            </div>
          </div>
          <UserFeedback />
          <FAQ />
          <Contact />
        </Box>
      </ThemeProvider>
    </colorModeContext.Provider>
  );
};

export default HomePage;
