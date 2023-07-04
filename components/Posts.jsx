import { Box, Typography, Grid, Card } from '@mui/material'
import { posts } from '../stores/posts'

const Posts = () => {
  return (
    <Grid container spacing={4}>
      {
        posts.map((post, index) => (
          <Grid item xs={4} key={index}>
            <Card sx={{ marginBottom: '20px' }}>
              <Box
                component='img'
                sx={{
                  width: '100%',
                  height: 250,
                  borderRadius: '5%'
                }}
                src={post.cover}
              >
              </Box>
              <Typography variant='h6' sx={{padding: '20px'}}>{post.title}</Typography>
              <Typography sx={{paddingBottom: '30px', paddingX: '20px'}}>{post.description}</Typography>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  )
}

export default Posts
