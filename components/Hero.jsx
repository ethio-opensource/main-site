import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from './theme';
import { CtaButton } from './CtaButton';
import Image from 'next/image';
import { Translate } from '@mui/icons-material';

export function Hero() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Box sx={{ display: 'flex', mt: 8, px: '20px' }}>
        <Typography variant="h2" textAlign="center" sx={{ fontWeight: '400' }}>
          Join a
        </Typography>
        <Box sx={{ position: 'relative' }}>
          <Typography
            as="span"
            variant="h2"
            sx={{ color: colors.primary[500], zIndex: 2, display: 'flex', fontWeight: '400' }}
          >
            vibrant community
            <Box
              sx={{
                position: 'absolute',
                top: '12%',
                left: '15%',
                zIndex: -1,
                width: 'fit-content',
              }}
            >
              <Image src="/svg/Line.svg" alt="Line" width={300} height={100} />
            </Box>
          </Typography>{' '}
        </Box>
      </Box>

      <Typography variant="h2" textAlign="center" sx={{ fontWeight: '400' }}>
        of innovators
      </Typography>
      <Typography
        sx={{ marginTop: '10px', fontSize: '18px', color: '#334155', fontWeight: '300' }}
        variant="h6"
      >
        Discover and contribute to the latest OpenSource projects that are
      </Typography>
      <Typography
        sx={{ marginBottom: '10px', fontSize: '18px', color: '#334155', fontWeight: '300' }}
        variant="h6"
      >
        making difference in Ethiopia and beyond
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '20px', gap: 10 }}>
        <CtaButton>Support Us</CtaButton>
        <CtaButton outlined href="/about/#contribute">
          Contribute
        </CtaButton>
      </div>
    </>
  );
}
