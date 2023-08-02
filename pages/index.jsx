import { Typography, Button, Stack, Container, Box } from '@mui/material';
import { Hero } from '../components/Hero';
import { Partners } from '../components/Partners';
import GetStartedCard from '../components/GetStartedCard';
import FeaturedFeedbacks from '../components/FeaturedFeedbacks';
import FeaturedProjects from '../components/FeaturedProjects';
import Subscribe from '../components/Subscribe';
import { ProjectList } from '../components/ProjectsList';
import { getAllProjects } from '../services/projects';

const HomePage = ({ projects }) => {
  const GeStTi1 = 'Start a new open source project';
  const GeStDe1 =
    'Enable your project to thrive in a neutral, trusted home, where we’ll help you scale your community with unmatched expertise, tools, and services.';
  const GeStTi2 = 'Become a Member';
  const GeStDe2 =
    'Supercharge the future of open technology. Shape the ecosystem, drive collaboration, and measure your contributions.';

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        //overflowX: 'hidden',
        width: '100%',
        padding: 0,
        margin: 0,
      }}
    >
      <Hero />
      <Partners />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          //justifyContent: 'space-between',
          background: 'linear-gradient(to right bottom, #430123, #430089)',
          width: '100%',
          //height: '120vh',

          //borderRadius: '20px',
        }}
      >
        <div style={{ margin: '2rem' }}>
          <Typography
            variant="h4"
            sx={{
              color: '#FFF',
              textAlign: 'center',
              //fontFamily: 'Lexend',
              fontSize: '40px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: '56px' /* 116.667% */,
              letterSpacing: '-1.2px',
              my: '80px',
            }}
          >
            Get Started
          </Typography>
        </div>

        <Stack direction="row" sx={{ gap: 10, pb: 10 }}>
          <GetStartedCard title={GeStTi1} href="/about#start" description={GeStDe1} />
          <GetStartedCard title={GeStTi2} href="/about#join" description={GeStDe2} />
        </Stack>
      </div>
      <div
        style={{
          display: 'flex',
          height: '100vh',
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
          <Typography variant="h5" sx={{ fontSize: '40px', color: '#0F172A' }}>
            Explore Our Projects
          </Typography>
          <Typography variant="h6" sx={{ marginBottom: '2rem', color: '#334155', fontWeight: 300 }}>
            Explore the latest projects created by our community
          </Typography>
        </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <ProjectList projects={projects} />
        </div>
        <div>
          <Button
            href="/projects"
            variant="contained"
            sx={{
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
      <FeaturedFeedbacks projects={projects} />
      <Subscribe />
    </Box>
  );
};

export default HomePage;

export async function getStaticProps() {
  return {
    props: { projects: await getAllProjects() },
  };
}
