import { Stack, Typography, Box, TextField, Divider } from "@mui/material"
import { NavLink } from "../../components/Nav"
import Posts from "../../components/Posts"
import { posts } from "../../stores/posts"

const Index = () => {
  const post = posts[0]

  return (
    <>
      <Typography variant="h4" sx={{paddingBottom: '40px'}}>Resources</Typography>
      <Stack direction='row'>
        <NavLink href='/resources/index'>Documentations</NavLink>
        <NavLink href='/resources/tutorials'>Tutorials</NavLink>
        <NavLink href='/resources/forums'>Forums</NavLink>
        <TextField sx={{marginLeft: '650px'}} label="Search" type="search" variant="filled"/>
      </Stack>
      <Divider/>
      <Typography variant="h5" sx={{paddingTop: '25px'}}>Featured Content</Typography>
      <Stack direction='row' sx={{paddingTop: '40px', paddingBottom: '90px'}}>
        <Box
          component='img'
          sx={{
            width: 1500,
            height: 300,
            borderRadius: '2%',
          }}
          src={post.cover}
          alt="Featured content"
        />
        <Box sx={{paddingLeft: '60px'}}>
          <Typography variant="h4" sx={{padding: '20px'}}>{post.title}</Typography>
          <Typography>{post.description}</Typography>
        </Box>
      </Stack>
      <Posts/>
    </>
  )
}

export default Index
