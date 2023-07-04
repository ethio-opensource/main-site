import { Button, Typography, useTheme } from '@mui/material';
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
      <Typography variant="h5">
        Discover and Contribute to the Latest OpenSource projects that are
      </Typography>
      <Typography variant="h5">Making difference in Ethiopia and Beyond</Typography>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '15px' }}>
        <CtaButton>Support Us</CtaButton>
        <CtaButton outlined>Contribute</CtaButton>
      </div>
    </>
  );
}
