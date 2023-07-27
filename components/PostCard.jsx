import { Avatar, Stack } from '@mui/material';
import { formatDistance } from 'date-fns';
import Image from 'next/image';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { urlFor } from '../sanity/utils';
import { NavLink } from './Nav';

export const PostCard = ({ post }) => {
  return (
    <Card sx={{ minHeight: '280px', width: 320 }}>
      <CardCover>
        <Image
          src={urlFor(post.coverImage).width(345).url()}
          height={280}
          width={320}
          loading="lazy"
          alt={post.title + ' cover image'}
        />
      </CardCover>
      <CardCover
        sx={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
        }}
      />
      <CardContent sx={{ justifyContent: 'flex-end' }}>
        <NavLink href={`/posts/${post.slug}`}>
          <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
            {post.title}
          </Typography>
        </NavLink>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar>
            <Image
              src={urlFor(post.author.image).width(50).url()}
              width={50}
              height={50}
              alt={post.author.name}
            />
          </Avatar>
          <Stack>
            <Typography variant="h6" fontWeight={'bold'} textColor="#fff" lineHeight={1}>
              {post.author.name}
            </Typography>
            <Typography variant="body" lineHeight={1} textColor="#ddd">
              {formatDistance(new Date(post.publishedAt), new Date(), { addSuffix: true })}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
