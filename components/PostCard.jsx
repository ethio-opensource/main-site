import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from '@mui/material';
import { formatDistance } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '../sanity/utils';
import { NavLink } from './Nav';

export const PostCard = ({ post }) => {
  return (
    <Card key={post.id} sx={{ maxWidth: 345 }}>
      <CardMedia height="200">
        <Image
          src={urlFor(post.coverImage).width(345).url()}
          height={200}
          width={345}
          alt={post.title + ' cover image'}
        />
      </CardMedia>
      <CardContent>
        <NavLink href={`/posts/${post.slug}`}>
          <Typography variant="h5" gutterBottom lineHeight={1}>
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
            <Typography variant="h6" lineHeight={1}>
              {post.author.name}
            </Typography>
            <Typography variant="subtitle1" lineHeight={1}>
              {formatDistance(new Date(post.publishedAt), new Date(), { addSuffix: true })}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
