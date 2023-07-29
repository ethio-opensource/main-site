import Typography from '@mui/joy/Typography';
import { CustomCard } from './CustomCard';
import { NavLink } from './Nav';
import { urlFor } from '../sanity/utils';
import { Stack } from '@mui/material';
import { ProjectStatus } from './ProjectStatus';

export default function ProjectCard({ project: { slug, title, cover, status } }) {
  return (
    <CustomCard title={title} image={urlFor(cover).width(345).url()}>
      <Stack>
        <NavLink href={`/projects/${slug}`}>
          <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
            {title}
          </Typography>
        </NavLink>
        <div>
          <ProjectStatus status={status} />
        </div>
      </Stack>
    </CustomCard>
  );
}
