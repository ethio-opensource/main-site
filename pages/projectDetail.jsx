import React from 'react';
import { Button, Link, Typography } from '@mui/material';

const ProjectDetail = () => {
  return (
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <img
          src="/images/ceo.jpg" // Replace with the URL of your project image
          alt="Project Image"
          style={{ width: '75%', borderRadius: '8px' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <Button
            variant="contained"
            sx={{
              marginTop: '10px',
              borderRadius: '20px',
              backgroundColor: '#B0FFE3',
              color: '#2DC133',
              '&:hover': {
                backgroundColor: '#B0FFE3',
              },
            }}
          >
            Deployed
          </Button>
          <Link
            href="https://github.com"
            underline="none"
            style={{ color: 'black' }}
            sx={{ display: 'block', marginBottom: '10px' }}
          >
            GitHub Link
          </Link>
          <Link
            href="https://docs.google.com/presentation"
            style={{ color: 'black' }}
            underline="none"
            sx={{ display: 'block', marginBottom: '10px' }}
          >
            Google Slide Link
          </Link>
          <Link
            href="https://t.me/topic"
            underline="none"
            style={{ color: 'black' }}
            sx={{ display: 'block', marginBottom: '10px' }}
          >
            Telegram Topic Link
          </Link>
        </div>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <Typography variant="h2" sx={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>
          Project Title
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '16px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam officia, fugit obcaecati
          culpa, laborum modi temporibus quis quaerat, eos mollitia beatae impedit delectus commodi
          possimus laudantium aliquam eaque tempora tenetur distinctio illum accusantium. Enim
          repellat sunt, amet dolorum provident blanditiis similique unde, tempore quaerat maiores
          eveniet perspiciatis! Officia labore, aliquam, rerum aspernatur quo voluptatum dignissimos
          velit temporibus ea minus in at et laborum sequi? Eligendi sequi impedit nam repellat
          blanditiis. Animi ratione possimus temporibus saepe omnis repellat harum adipisci,
          expedita voluptas earum ut! Facere, aperiam alias facilis inventore consequuntur odio
          nihil a deleniti ab, nemo, dignissimos accusantium iusto blanditiis dolorum!
        </Typography>
        <Typography variant="h3" sx={{ fontSize: '36px', fontWeight: '700', marginY: '20px' }}>
          Readme
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '16px' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, dignissimos reprehenderit.
          Rem eius praesentium expedita aliquam, quas est fugit dolores magnam autem non, omnis
          obcaecati, cumque voluptatum magni dignissimos at. Soluta quod possimus molestiae,
          deleniti nostrum recusandae temporibus facere ducimus totam. Repudiandae sit possimus
          dolores nihil corrupti qui, deserunt quasi animi doloremque vitae sequi labore deleniti
          quos sunt ex excepturi doloribus quo tempora quas maxime veniam voluptatum impedit. Sed
          doloremque unde maxime, dolores eaque voluptatibus? Ipsam sapiente dolores molestias
          eligendi saepe molestiae dicta delectus expedita dolorum veritatis ex quae blanditiis,
          voluptates a nam quibusdam quasi! Officia ducimus obcaecati quod repellat.
        </Typography>
      </div>
    </div>
  );
};

export default ProjectDetail;
