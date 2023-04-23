import { Box, Stack, Typography } from '@mui/material';
import { CustomChip } from '../pages/projects';
import { Done } from '@mui/icons-material';
import { useState } from 'react';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
};

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const filters = [
    'React.js',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'Python',
    'Express.js',
    'MongoDB',
    'MySQL',
  ];

  const selectFilter = (filter) => {
    if (isSelected(filter)) setSelectedFilters(selectedFilters.filter((f) => f !== filter));
    else setSelectedFilters([filter, ...selectedFilters]);
  };
  const isSelected = (filter) => selectedFilters.includes(filter);

  return (
    <Stack spacing={2} sx={style}>
      <Typography id="modal-modal-title" variant="h6" component="h2">
        Select Filters
      </Typography>
      <Stack spacing={2} direction="row" flexWrap="wrap" alignItems="flex-start">
        {filters.map((filter, idx) => (
          <CustomChip
            size="small"
            label={filter}
            key={idx}
            onClick={() => selectFilter(filter)}
            color={isSelected(filter) ? 'primary' : 'secondary'}
            icon={isSelected(filter) && <Done />}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Filter;
