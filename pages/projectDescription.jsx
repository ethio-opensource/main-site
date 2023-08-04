import { Box, Button, Paper, Typography } from '@mui/material';
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Image from 'next/image';
import Carousel from 'react-material-ui-carousel';
const theme = createTheme({
  palette: {
    primary: {
      main: '#373AEB',
    },
    secondary: {
      main: '#57667A',
    },
    neutralDark: {
      main: '#0F172A',
    },
    neutralLight: {
      main: '#FFF',
    },
  },
});
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function projectDescription() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Box
          sx={{
            display: 'flex',
            gap: '5rem',
            justifyContent: 'center',
            alignItems: 'center',
            paddingX: '6rem',
            height: '80vh',
          }}
        >
          <Image src="/image/IBM_logo_in.jpg" height={220} width={220} alt="logo" />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Typography variant="h3" fontWeight={'light'}>
              Project Description
            </Typography>
            <Typography variant="body1">
              The OpenEth Website Redesign project aims to revamp the current OpenEth website to
              provide a more modern and user-friendly design, improved functionality, and better
              user experience. The new website will include updated branding and design elements, a
              streamlined navigation menu, and new content to better communicate OpenEth's mission
              and values. The project will be led by a team of web developers and designers with
              experience in UX design, front-end development, and web development frameworks. The
              redesigned website will enable OpenEth to better showcase its projects and
              initiatives, attract new members and supporters, and increase engagement with the
              open-source community.
            </Typography>
          </Box>
        </Box>

        {/* Carousel */}
        <CarouselBox />
      </Box>
    </ThemeProvider>
  );
}

function CarouselBox(props) {
  var items = [
    {
      url: '/image/mockup1.jpg',
    },
    {
      url: '/image/OIP.jfif',
    },
    {
      url: '/image/mockup2.jpg',
    },
  ];

  return (
    <Box sx={{ marginBottom: 10 }}>
      <Carousel>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

function Item(props) {
  return (
    <Paper sx={{ background: '#ccc', display: 'flex', justifyContent: 'center' }}>
      <Image src={props.item.url} height={600} width={800} alt="logo" />
    </Paper>
  );
}

function Card(props) {
  <Paper sx={{ backgroundColor: '#c5c5c5', display: 'flex', justifyContent: 'center' }}>
    <Typography>title</Typography>
  </Paper>;
}

export default projectDescription;
