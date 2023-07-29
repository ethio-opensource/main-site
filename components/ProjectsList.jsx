import { Grid } from "@mui/joy"
import ProjectCard from "./ProjectCard"

export const ProjectList = ({projects}) => {
return (
    <Grid container spacing={2}>
    {projects.map((project) => (
      <Grid item xs={12} sm={6} md={4} key={project.id}>
        <ProjectCard project={project} />
      </Grid>
    ))}
  </Grid>
)
}