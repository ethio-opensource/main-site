import { Button, useTheme } from '@mui/material';
import { tokens } from './theme';

export function CtaButton({ children, outlined, ...props }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const style = outlined
    ? {
        borderColor: colors.neutral[700],
        color: colors.neutral[700],
      }
    : {
        backgroundColor: colors.neutral[700],
        color: 'white',
      };
  return (
    <Button
      {...props}
      variant={outlined ? 'outlined' : 'contained'}
      color="inherit"
      sx={{
        ...style,
        ':hover': {
          bgcolor: style.backgroundColor,
          opacity: 0.9,
        },
        textTransform: 'capitalize',
        borderRadius: 20,
        padding: '5px 20px',
        marginX: '5px',
      }}
    >
      {children}
    </Button>
  );
}
