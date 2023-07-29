import { Avatar, Stack } from '@mui/material';
import { formatDistance } from 'date-fns';
import Image from 'next/image';
import Typography from '@mui/joy/Typography';
import { urlFor } from '../sanity/utils';
import { NavLink } from './Nav';
import { CustomCard } from './CustomCard';

export const PostCard = ({ post }) => {
  return (
    <CustomCard image={urlFor(post.coverImage).width(345).url()} title={post.title}>
      <NavLink href={`/resources/posts/${post.slug}`}>
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
    </CustomCard>
  );
};
