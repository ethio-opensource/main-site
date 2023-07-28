import { Grid, Typography } from '@mui/material';
import { PostCard } from '../../components/PostCard';
import { getAllPosts } from '../../services/posts';

export default function Posts({ posts }) {
  return (
    <div>
      <Typography variant="h2" gutterBottom>
        Recent Posts
      </Typography>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { posts: await getAllPosts() },
  };
}
