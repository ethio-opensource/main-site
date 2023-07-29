import { Add } from '@mui/icons-material';
import { Chip, Grid, Modal, Pagination, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import Filter from '../../components/Filter';
import { getAllProjects } from '../../services/projects';
import ProjectCard from '../../components/ProjectCard';

export const CustomChip = (props) => (
  <Chip sx={{ borderRadius: 2, borderWidth: 0, boxShadow: 1 }} variant="outlined" {...props} />
);

const Projects = ({ projects }) => {
  console.log(projects);
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Stack spacing={2}>
      <Typography variant="h3">Explore Our Project</Typography>
      <Stack direction="row" spacing={2}>
        <CustomChip label="React.js" />
        <CustomChip label="Node.js" />
        <CustomChip label="Add Filter" icon={<Add />} onClick={handleOpen} />
      </Stack>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Filter />
      </Modal>
      <Grid container spacing={2}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
      <Pagination count={3} />
    </Stack>
  );
};

export default Projects;

export async function getStaticProps() {
  return {
    props: { projects: await getAllProjects() },
  };
}
