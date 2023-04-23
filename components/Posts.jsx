import { Box, Typography, Grid } from '@mui/material'
import { posts } from '../stores/posts'

const Posts = () => {
  return (
    <Grid container spacing={3}>
      {
        posts.map((post, index) => (
          <Grid item xs={4} key={index}>
            <Box
              component='img'
              sx={{
                width: 350,
                height: 250,
                borderRadius: '3%'
              }}
              src={post.cover}
            >
            </Box>
            <Typography variant='h6' sx={{padding: '20px'}}>{post.title}</Typography>
            <Typography sx={{paddingBottom: '30px'}}>{post.description}</Typography>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Posts
