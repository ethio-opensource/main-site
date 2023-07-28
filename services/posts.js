import { groq } from 'next-sanity';
import client from '../client';

const postFragment = `
  "id": _id,
  title,
  "slug" : slug.current,
  publishedAt,
  "coverImage": mainImage,
  "author": author->{
    name,
    image
  }
`;

export const getAllPosts = async () => {
  const posts = await client.fetch(groq`
    *[_type == "post" && publishedAt < now() ] | order(publishedAt desc) {
      ${postFragment}
    }`);
  return posts;
};

export const getPost = async (slug) => {
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0] {
      ${postFragment},
      body,
      "categories": categories[]->title
  }`,
    { slug }
  );
  return post;
};
