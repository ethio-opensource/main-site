import Image from 'next/image';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';

export const CustomCard = ({ image, title, children }) => {
  return (
    <Card sx={{ minHeight: '280px', width: 320 }}>
      <CardCover>
        <Image src={image} height={280} width={320} loading="lazy" alt={title + ' cover image'} />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>{children}</CardContent>
    </Card>
  );
};
