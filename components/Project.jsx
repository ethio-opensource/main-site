import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import Link from 'next/link';

const Project = () => (
  <Card sx={{ width: 383 }}>
    <CardMedia image="/svg/toyota-1.svg" sx={{ height: 200 }} title="Toyota logo" />
    <CardContent>
      <Typography variant="h6">Toyota</Typography>
      <Link href="/" style={{ textDecoration: 'none', marginBottom: '10px' }}>
        toyota.com
      </Link>
    </CardContent>
  </Card>
);

export default Project;
