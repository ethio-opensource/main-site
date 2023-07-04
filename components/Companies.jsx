import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { css } from '@emotion/react';
import { BsPlusCircle } from 'react-icons/bs';

export function Companies() {
  return (
    <Box sx={{ width: '100%', my: 4 }}>
      <Typography variant="h4" textAlign="center">
        Trusted by
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="center"
        marginBottom="5rem"
      >
        {new Array(11).fill(0).map((_, idx) => (
          <Box
            key={idx}
            sx={{
              filter: 'grayscale(100%)',
              m: 3,
              ':hover': {
                filter: 'grayscale(0)',
              },
            }}
          >
            <Image src={`companies/${idx + 1}.svg`} alt="company" width={100} height={50} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
