import { Typography, useTheme } from '@mui/material';
import { tokens } from '../pages/theme';
import { CtaButton } from './CtaButton';

export function Hero() {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Typography variant="h2" textAlign="center">
        Join a{' '}
        <Typography as="span" variant="h2" sx={{ color: colors.primary[500] }}>
          vibrant community
        </Typography>{' '}
        <br />
        of innovators
      </Typography>
      <Typography sx={{marginTop: '10px'}} variant="h6">
        Discover and contribute to the latest OpenSource projects that are
      </Typography>
      <Typography sx={{marginBottom: '10px'}} variant="h6">making difference in Ethiopia and beyond</Typography>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '20px' }}>
        <CtaButton>Support Us</CtaButton>
        <CtaButton outlined href='/about/#contribute'>Contribute</CtaButton>
      </div>
    </>
  );
}
