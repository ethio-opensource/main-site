import { Avatar, Typography, useTheme } from '@mui/material';
import { tokens } from '../pages/theme';

export function UserFeedback() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: colors.neutral[700],
        width: '98.5vw',
        gap: '4rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '.5rem',
          margin: '1rem 0 0 0',
        }}
      >
        <Typography variant="h3" style={{ color: 'white' }}>
          What Our Community Members Say
        </Typography>
        <Typography variant="h5" style={{ color: 'white' }}>
          Our community is made up of developers, designers, and tech enthusiasts
        </Typography>
        <Typography variant="h5" style={{ color: 'white' }}>
          from all over Ethiopia who share a passion for open technology and
        </Typography>
        <Typography variant="h5" style={{ color: 'white' }}>
          collaborative problem-solving.
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '2rem',
          padding: '0 9rem',
          gap: '2rem',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '33.3%', gap: '1rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'space-between',
              padding: '1rem',
              borderRadius: '16px',
              boxShadow:
                ' 0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.1)',
              background: 'white',
            }}
          >
            <div>
              <Typography>
                TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the
                government expects me to do.
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography variant="h5">Sheryl Berge</Typography>
                <Typography variant="h6" style={{ fontSize: '12px' }}>
                  CEO at Lynch LLC
                </Typography>
              </div>
              <div>
                <Avatar alt="Sheryl Bereg" src="/image/ceo.jpg" />
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'space-between',
              padding: '1rem',
              borderRadius: '16px',
              boxShadow:
                ' 0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.1)',
              background: 'white',
            }}
          >
            <div>
              <Typography>
                TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the
                government expects me to do.
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography variant="h5">Sheryl Berge</Typography>
                <Typography variant="h6" style={{ fontSize: '12px' }}>
                  CEO at Lynch LLC
                </Typography>
              </div>
              <div>
                <Avatar alt="Sheryl Bereg" src="/image/ceo.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '33.3%',
            gap: '1rem',
            padding: '2.5rem 0 0 0',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'space-between',
              padding: '1rem',
              borderRadius: '16px',
              boxShadow:
                ' 0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.1)',
              background: 'white',
            }}
          >
            <div>
              <Typography>
                The best part about TaxPal is every time I pay my employees, my bank balance doesn’t
                go down like it used to. Looking forward to spending this extra cash when I figure
                out why my card is being declined.
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography variant="h5">Sheryl Berge</Typography>
                <Typography variant="h6" style={{ fontSize: '12px' }}>
                  CEO at Lynch LLC
                </Typography>
              </div>
              <div>
                <Avatar alt="Sheryl Bereg" src="/image/ceo.jpg" />
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'space-between',
              padding: '1rem',
              borderRadius: '16px',
              boxShadow:
                ' 0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.1)',
              background: 'white',
            }}
          >
            <div>
              <Typography>
                TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the
                government expects me to do.
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography variant="h5">Sheryl Berge</Typography>
                <Typography variant="h6" style={{ fontSize: '12px' }}>
                  CEO at Lynch LLC
                </Typography>
              </div>
              <div>
                <Avatar alt="Sheryl Bereg" src="/image/ceo.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '33.3%', gap: '1rem' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'space-between',
              padding: '1rem',
              borderRadius: '16px',
              boxShadow:
                ' 0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.1)',
              background: 'white',
            }}
          >
            <div>
              <Typography>
                TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the
                government expects me to do.
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography variant="h5">Sheryl Berge</Typography>
                <Typography variant="h6" style={{ fontSize: '12px' }}>
                  CEO at Lynch LLC
                </Typography>
              </div>
              <div>
                <Avatar alt="Sheryl Bereg" src="/image/ceo.jpg" />
              </div>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              alignItems: 'space-between',
              padding: '1rem',
              borderRadius: '16px',
              boxShadow:
                ' 0px 20px 25px -5px rgba(15, 23, 42, 0.1), 0px 8px 10px -6px rgba(15, 23, 42, 0.1)',
              background: 'white',
            }}
          >
            <div>
              <Typography>
                TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the
                government expects me to do.
              </Typography>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '2rem',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <Typography variant="h5">Sheryl Berge</Typography>
                <Typography variant="h6" style={{ fontSize: '12px' }}>
                  CEO at Lynch LLC
                </Typography>
              </div>
              <div>
                <Avatar alt="Sheryl Bereg" src="/image/ceo.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
