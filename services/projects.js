import { groq } from 'next-sanity';
import client from '../client';

const projectFragment = groq`
  *[_type == 'project'] {
    'id': _id,
    title,
    "slug": slug.current
  }`;

export const getAllProjects = async () => {
  const projects = await client.fetch(groq`
    *[_type == "project" && publishedAt < now() ] | order(publishedAt desc) {
      ${projectFragment}
    }`);
  return projects;
};

export const getProject = async (slug) => {
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      ${projectFragment},
      description,
      telegramTopic,
      slideLink,
      githubLink,
  }`,
    { slug }
  );
  return post;
};
