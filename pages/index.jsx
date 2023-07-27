import { Typography, Button, Stack, Container, } from '@mui/material';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import GetStartedCard from '../components/GetStartedCard';
import FeaturedFeedbacks from '../components/FeaturedFeedbacks';
import FeaturedProjects from '../components/FeaturedProjects';
import Subscribe from '../components/Subscribe';

const HomePage = () => {

  const GeStTi1 = 'Start a new open source project';
  const GeStDe1 = 'Enable your project to thrive in a neutral, trusted home, where we’ll help you scale your community with unmatched expertise, tools, and services.';
  const GeStTi2 = 'Become a Member';
  const GeStDe2 = 'Supercharge the future of open technology. Shape the ecosystem, drive collaboration, and measure your contributions.';

  return (
    <Container
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
          background: 'linear-gradient(to right bottom, #430123, #430089)',
          flexWrap: 'wrap',
          width: '100%',
          borderRadius: '20px',
        }}
      >
        <div style={{ margin: '2rem' }}>
          <Typography variant="h4" sx={{ color: 'white' }}>
            Get Started
          </Typography>
        </div>

        <Stack direction="row">
          <GetStartedCard title={GeStTi1} description={GeStDe1} />
          <GetStartedCard title={GeStTi2} description={GeStDe2} />
        </Stack>
      </div>
      <div
        style={{
          display: 'flex',
          height: '80vh',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          // backgroundColor: 'whitesmoke',
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
            Explore the latest projects created by our community
          </Typography>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {/* <FeaturedProjects/> */}
        </div>
        <div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'blue',
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
      <FeaturedFeedbacks />
      <Subscribe/>
    </Container>
  );
};

export default HomePage;
