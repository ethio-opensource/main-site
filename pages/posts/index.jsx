import Link from 'next/link';
import client from '../../client';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { formatDistance } from 'date-fns';
import { urlFor } from './[slug]';

const PostCard = ({ post }) => {
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
        <Link
          href={`/posts/${post.slug}`}
          style={{
            textDecoration: 'none',
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              lineHeight: 1,
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            {post.title}
          </Typography>
        </Link>
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

export default function Posts({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item key={post.id}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  const posts = await client.fetch(`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
      "id": _id,
      title,
      "slug" : slug.current,
      publishedAt,
      "coverImage": mainImage,
      "author": author->{
        name,
        image
      }
    }
  `);

  return {
    props: { posts },
  };
}
