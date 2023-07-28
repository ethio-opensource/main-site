import { Container, Typography } from '@mui/material';
import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import { BsGithub } from 'react-icons/bs';
import { FaTelegram } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <Container>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          color: 'purple',
        }}
      >
      About this community
      </Typography>
      <Typography
        sx={{
          lineHeight: '1.7',
          marginBottom: '2rem',
        }}
      >
        This community is intended for those who want to contribute to open-source projects or start new ones. Members of this community are typically Developers, Programmers, Software Engineers, and Designers with a technical background. Use this group to share ideas and seek collaborators for new projects, as well as to discuss ongoing projects and their progress. This community is open and inclusive, welcoming members of all skill levels and backgrounds. Members of this community are encouraged to share their expertise, contribute to existing projects, initiate new ones, seek advice or feedback on their work, and discuss new ideas.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          color: 'purple',
        }}
      > 
        How to join this community?
      </Typography>
      <Typography
        sx={{
          lineHeight: '1.7',
          marginBottom: '2rem',
        }}
      >
        Joining the <Link href='https://t.me/ethio_open_source_community/1'>Telegram Group</Link> is the first step, then post your email under the General topic mentioning one of the admins. You will receive an invitation email to the GitHub community.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          color: 'purple',
        }}
      >
        How to contribute to an existing project?
      </Typography>
      <Typography
        sx={{
          lineHeight: '1.7',
          marginBottom: '2rem',
        }}
      >
        To start contributing to any of the existing projects, just jump into the topic of the project you want and ask to contribute.
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
          mb: 2,
          color: 'purple',
        }}
      >
        How to start a new open-source project?
      </Typography>
      <List
        aria-labelledby="decorated-list-demo"
        sx={{ '--ListItemDecorator-size': '32px' }}
      >
        <ListItem>
          <ListItemDecorator><BsGithub/></ListItemDecorator> Create a new GitHub repository under this organization <Link href='https://github.com/ethio-opensource'>Here</Link>.
        </ListItem>
        <ListItem>
          <ListItemDecorator><FaTelegram/></ListItemDecorator> Create a new topic under this telegram group (to discuss about the project).
        </ListItem>
        <ListItem>
          <ListItemDecorator><AiFillGoogleCircle/></ListItemDecorator> Prepare a Google Slide describing the project you can use <Link href='https://docs.google.com/presentation/d/1TAEniO9IXYhuwk0iVIjitkwvywB67CZ7Z6thR5BAl6Y/edit?usp=sharing'>This</Link> as a template.
        </ListItem>
      </List>
    </Container>
  );
};

export default AboutPage;
