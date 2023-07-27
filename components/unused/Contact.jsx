import { Button, Typography } from '@mui/material';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

export function Contact() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'blue',
        width: '98.5vw',
        gap: '2rem',
        color: 'whitesmoke',
      }}
    >
      <Typography variant="h3">Stay Connected With OpenEth</Typography>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <form>
            <Typography variant="h5">Full Name</Typography>
            <input
              type="text"
              style={{ borderRadius: '10px', padding: '0.5rem 2rem', margin: '1rem 0' }}
            />
          </form>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <form>
            <Typography variant="h5">Email</Typography>
            <input
              type="email"
              style={{ borderRadius: '10px', padding: '0.5rem 2rem', margin: '1rem 0' }}
            />
          </form>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <form>
            <Typography variant="h5">Message</Typography>
            <input
              type="text"
              style={{ borderRadius: '10px', padding: '0.5rem 2rem', margin: '1rem 0' }}
            />
          </form>
        </div>
        <div style={{}}>
          <Typography style={{ padding: '1rem 0' }}></Typography>
          <Button
            type="submit"
            style={{
              border: '2px solid #0F172A',
              backgroundColor: '#0F172A',
              borderRadius: '2rem',
              padding: '0.25rem 1.75rem',
              color: 'white',
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem',
          fontSize: '24px',
          color: 'black',
        }}
      >
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
      </div>
    </div>
  );
}
