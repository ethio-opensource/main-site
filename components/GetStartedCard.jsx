import React from 'react';
import { FaGreaterThan } from 'react-icons/fa';
import { Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';

function GetStartedCard({ title, description, href }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: '2rem 4rem',
        width: '600px',
        //height: '600px',
        //margin: '0 2rem 2rem 2rem',
        //borderRadius: '20px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Image src="/svg/cloud_man.jpg" alt="cloud computing image" width={250} height={250} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: '28px',
              color: '#334155',
              fontWeight: 400,
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{ marginTop: '10px', fontSize: '18px', color: '#334155', fontWeight: '300' }}
            variant="h6"
          >
            {description}
          </Typography>
        </div>
        <div>
          <Link href={href} style={{ textDecoration: 'none' }}>
            <Typography
              variant="h5"
              style={{
                color: '#2563EB',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '2rem',
                fontSize: '18px',
                fontWeight: 400,
              }}
            >
              LEARN MORE
              <FaGreaterThan color="#2563EB" fontWeight={'light'} />
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GetStartedCard;
