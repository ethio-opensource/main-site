import { Stack, Typography, Box, TextField, Divider, Card, Pagination, InputAdornment } from "@mui/material"
import { BsSearch } from 'react-icons/bs' 
import { NavLink } from "../../components/Nav"
import Posts from "../../components/Posts"
import { posts } from "../../stores/posts"

const IconTextField = ({ iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        endAdornment: iconEnd ? (
          <InputAdornment position="end">{iconEnd}</InputAdornment>
        ) : null
      }}
    />
  );
};

const Index = () => {
  const post = posts[0]

  return (
    <>
      <Typography variant="h4" sx={{ paddingBottom: '40px' }}>
        Resources
      </Typography>
      <Stack direction="row">
        <NavLink href="/resources/index">Documentations</NavLink>
        <NavLink href="/resources/tutorials">Tutorials</NavLink>
        <NavLink href="/resources/forums">Forums</NavLink>
        <IconTextField sx={{marginLeft: '630px'}}
          label="Search"
          iconEnd={<BsSearch sx={{ color: '#0089ff', fontSize: 20 }} />}
        />
      </Stack>
      <Divider />
      <Typography variant="h5" sx={{ paddingTop: '25px' }}>
        Featured Content
      </Typography>
      <Card variant="outlined" sx={{ marginTop: '40px', marginBottom: '90px' }}>
        <Stack direction="row">
          <Box
            component="img"
            sx={{
              width: 1500,
              height: 300,
              borderRadius: '2%',
            }}
            src={post.cover}
            alt="Featured content"
          />
          <Box sx={{ paddingLeft: '60px' }}>
            <Typography variant="h4" sx={{ padding: '20px' }}>
              {post.title}
            </Typography>
            <Typography>{post.description}</Typography>
          </Box>
        </Stack>
      </Card>
      <Posts />
      <Pagination count={3} sx={{ paddingY: '20px' }} />
    </>
  );
}

export default Index
