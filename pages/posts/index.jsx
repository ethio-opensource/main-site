import client from '../../client';
import { Grid } from '@mui/material';
import { PostCard } from '../../components/PostCard';

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
