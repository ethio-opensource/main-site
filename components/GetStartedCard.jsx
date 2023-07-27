import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

function GetStartedCard({ title, description }) {

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '0 4rem',
        margin: '0 2rem 2rem 2rem',
        borderRadius: '20px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/svg/cloud_man.jpg" alt="cloud computing image" width={300} height={300} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h6" sx={{ fontWeight: 'light' }}>
            {description}
          </Typography>
        </div>
        <div>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Typography
              variant="h5"
              style={{
                color: 'blue',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem',
              }}
            >
              Learn More
              <FaGreaterThan />
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStartedCard;
