import { Grid, Typography } from '@mui/material';
import { PostCard } from '../../components/PostCard';
import { getAllPosts } from '../../services/posts';
import ResourcesLayout from '../../components/resourcesLayout';

export default function Posts({ posts }) {
  return (
    <div>
      <ResourcesLayout active='posts'/>
      <Typography variant="h4" sx={{my: 3}} gutterBottom>
        Recent Posts
      </Typography>
      <Grid container spacing={2} mb={4}>
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
