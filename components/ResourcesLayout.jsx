import React from 'react';
import { Typography, Stack, Divider, TextField, InputAdornment } from '@mui/material';
import { NavLink } from './Nav';
import { BsSearch } from 'react-icons/bs';

const IconTextField = ({ iconEnd, InputProps, ...props }) => {
  return (
    <TextField
      {...props}
      InputProps={{
        ...InputProps,
        endAdornment: iconEnd ? <InputAdornment position="end">{iconEnd}</InputAdornment> : null,
      }}
    />
  );
};

function ResourcesLayout({ active }) {
  return (
    <>
      <Typography variant="h4" sx={{ paddingBottom: '40px' }}>
        Resources
      </Typography>
      <Stack direction="row">
        <NavLink href="/resources/" active={active === 'posts'}>
          Blogs
        </NavLink>
        <NavLink href="/resources/docs" active={active === 'docs'}>
          Documentations
        </NavLink>
        <NavLink href="/resources/forums" active={active === 'forums'}>
          Forums
        </NavLink>
        <IconTextField
          sx={{ marginLeft: '630px' }}
          label="Search"
          iconEnd={<BsSearch sx={{ color: '#0089ff', fontSize: 20 }} />}
        />
      </Stack>
      <Divider />
    </>
  );
}

export default ResourcesLayout;
