import { Typography, useTheme } from '@mui/material';
import { tokens } from './theme';
import { CtaButton } from './CtaButton';

export function Hero() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <Typography variant="h2" textAlign="center">
        Join a{' '}
        <Typography
          as="span"
          variant="h2"
          sx={{
            color: colors.primary[500],
            whiteSpace: 'nowrap',
            position: 'relative',
            backgroundImage: '/svg/underline.svg',
          }}
        >
          vibrant community
          <svg
            style={{
              position: 'absolute',
              left: '2ch',
              bottom: -11.75,
              zIndex: -11,
            }}
            width="435"
            height="42"
            viewBox="0 0 435 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_752_42)">
              <path
                d="M211.783 0.910509C184.786 -1.15512 132.196 2.86183 82.3345 10.7973L70.5645 12.6731C37.4796 17.9544 19.6071 21.6364 6.94979 25.7796C2.00973 27.3969 1.578 27.6126 1.62574 28.4397C1.69839 29.6464 2.48506 29.554 11.5837 27.2707C20.9989 24.9078 29.3824 23.374 52.3143 19.8193C128.958 7.93843 164.559 4.46522 204.073 5.01593C211.816 5.12328 224.051 6.70183 223.968 7.58256C223.857 8.75852 215.796 11.8669 197.244 17.8869C174.42 25.2925 160.474 30.3462 159.154 31.6882C156.899 33.9825 158.945 36.069 163.765 36.394C166.519 36.5799 167.151 36.5501 179.947 35.6187C216.688 32.9487 240.083 32.1514 271.655 32.4944C319.734 33.0173 350.24 34.7111 407.39 40.0332C427.926 41.9458 428.992 42.0015 432.876 41.3573L432.945 41.3464C434.191 41.1446 434.533 39.5322 433.359 39.0253C430.338 37.7231 428.281 37.4308 410.477 35.7837C350.792 30.2608 319.282 28.4675 273.422 27.9884C249.304 27.7359 238.534 27.8731 220.88 28.6584C208.811 29.1951 176.907 31.1375 172.418 31.6077C169.97 31.8652 180.859 28.0043 199.925 21.8561C224.043 14.0777 228.915 11.7675 229.299 7.93445C229.732 3.61233 225.637 1.97016 211.783 0.910509Z"
                fill="#93C5FD"
                fill-opacity="0.7"
              />
            </g>
            <defs>
              <clipPath id="clip0_752_42">
                <rect width="433.812" height="41.75" fill="white" transform="translate(0.71875)" />
              </clipPath>
            </defs>
          </svg>
        </Typography>{' '}
        of innovators
      </Typography>
      <Typography sx={{ marginTop: '10px' }} variant="h6">
        Discover and contribute to the latest OpenSource projects that are
      </Typography>
      <Typography sx={{ marginBottom: '10px' }} variant="h6">
        making difference in Ethiopia and beyond
      </Typography>
      <div style={{ display: 'flex', flexDirection: 'row', margin: '20px' }}>
        <CtaButton>Support Us</CtaButton>
        <CtaButton outlined href="/about/#contribute">
          Contribute
        </CtaButton>
      </div>
    </>
  );
}
