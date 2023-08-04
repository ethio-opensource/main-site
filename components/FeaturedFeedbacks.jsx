import React from 'react';
import { Typography, Box, Stack, Container } from '@mui/material';
import TweetEmbed from 'react-tweet-embed';

function FeaturedFeedbacks() {
  return (
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        // background: colors.neutral[700],
        background: '#0F172A',
        width: '100vw',
        height: '100vh',
        gap: '4rem',
        //borderRadius: '20px',
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
        <Typography variant="h3" style={{ color: 'white', fontSize: '40px' }}>
          What Our Community Members Say
        </Typography>
        <Typography variant="h5" style={{ color: '#94A3B8', marginTop: '20px', fontSize: '18px' }}>
          Our community is made up of developers, designers, and tech enthusiasts
        </Typography>
        <Typography variant="h5" style={{ color: '#94A3B8', fontSize: '18px' }}>
          from all over Ethiopia who share a passion for open technology and
        </Typography>
        <Typography variant="h5" style={{ color: '#94A3B8', fontSize: '18px' }}>
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
    </Box>
  );
}

export default FeaturedFeedbacks;
