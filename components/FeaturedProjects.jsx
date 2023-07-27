import React from 'react';
import { Typography, Card } from '@mui/material';
import Image from 'next/image';
import StatBadge from './StatBadge';
import { featuredProjects } from '../store/featuredProjects';

function FeaturedProjects() {

  // const project = {
  //   id: 1,
  //   name: 'Toyota',
  //   photo: 'https://ucarecdn.com/b8010628-140e-4139-bee9-908c4bec20a7/doc1.png',
  //   status: 'ongoing',
  // };

  return (
    <>
      {featuredProjects.map((project) => (
        <Card
          key={project.id}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'space-between',
            background: 'white',
            justifyContent: 'center',
          }}
        >
          <Image src={project.photo} alt="Project Photo" width="150" height="100" />
          <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <Typography>{project.name}</Typography>
            <StatBadge stat={project.status}></StatBadge>
          </div>
        </Card>
      ))}
    </>
  );
}

export default FeaturedProjects;
