import React from 'react';
import { Typography, Box, Stack, Container } from '@mui/material';
import TweetEmbed from 'react-tweet-embed';

function FeaturedFeedbacks() {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // background: colors.neutral[700],
        background: 'linear-gradient(to right bottom, #430089, #82ffa1)',
        width: '100%',
        gap: '4rem',
        borderRadius: '20px',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '.5rem',
          marginTop: '4rem',
        }}
      >
        <Typography variant="h3" style={{ color: 'white' }}>
          What Our Community Members Say
        </Typography>
        <Typography variant="h5" style={{ color: 'white', marginTop: '20px' }}>
          Our community is made up of developers, designers, and tech enthusiasts
        </Typography>
        <Typography variant="h5" style={{ color: 'white' }}>
          from all over Ethiopia who share a passion for open technology and
        </Typography>
        <Typography variant="h5" style={{ color: 'white' }}>
          collaborative problem-solving.
        </Typography>
      </div>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          marginBottom: '4rem',
        }}
      >
        <Box
          sx={{
            marginX: '2rem',
          }}
        >
          <TweetEmbed tweetId="1683213798386147329" />
        </Box>
        <Box
          sx={{
            marginX: '2rem',
          }}
        >
          <TweetEmbed tweetId="1683213798386147329" />
        </Box>
        <Box
          sx={{
            marginX: '2rem',
          }}
        >
          <TweetEmbed tweetId="1683213798386147329" />
        </Box>
      </Stack>
    </Container>
  );
}

export default FeaturedFeedbacks;
