import { groq } from 'next-sanity';
import client from '../client';

const projectFragment = `
  'id': _id,
  title,
  "slug": slug.current,
  cover,
  status
`;

export const getAllProjects = async () => {
  const projects = await client.fetch(groq`
    *[_type == "project"] | order(_createdAt desc) {
      ${projectFragment}
    }`);
  return projects;
};

export const getProject = async (slug) => {
  const post = await client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0] {
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
