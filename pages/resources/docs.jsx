import {
  Stack,
  Typography,
  Box,
  TextField,
  Divider,
  Card,
  Pagination,
  InputAdornment,
} from '@mui/material';
import { BsSearch } from 'react-icons/bs';
import { NavLink } from '../../components/Nav';
import Posts from '../../components/Posts';
import { posts } from '../../store/posts';
import ResourcesLayout from '../../components/resourcesLayout';

const Docs = () => {
  const post = posts[0];

  return (
    <>
      <ResourcesLayout active='docs'/>
      {/* <Typography variant="h5" sx={{ paddingTop: '25px' }}>
        Featured Content
      </Typography>
      <Card variant="outlined" sx={{ marginTop: '40px', marginBottom: '90px', overflow: 'hidden' }}>
        <Stack direction="row">
          <Box
            component="img"
            sx={{
              width: 1500,
              height: 300,
            }}
            src={post.cover}
            alt="Featured content"
          />
          <Box sx={{ paddingLeft: '60px' }}>
            <Typography variant="h5" p={4} pl={0}>
              {post.title}
            </Typography>
            <Typography>{post.description}</Typography>
          </Box>
        </Stack>
      </Card>
      <Posts />
      <Pagination count={3} sx={{ paddingY: '20px' }} /> */}
      <Typography variant="h5" sx={{ paddingTop: '25px' }}>Hooray Not Implemented</Typography>
    </>
  );
};

export default Docs;
