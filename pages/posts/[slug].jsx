import ImageUrlBuilder from '@sanity/image-url';
import client from '../../client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import { Avatar, Image as MImage, Chip, Divider, Stack, Typography } from '@mui/material';
import { formatDistance } from 'date-fns';
import Highlight from 'react-highlight';
import '../../node_modules/highlight.js/styles/idea.css';

export function urlFor(source) {
  return ImageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <Image
          alt={value.alt || ''}
          loading="lazy"
          style={{ objectFit: 'contain' }}
          width={420}
          height={240}
          src={urlFor(value).width(420).fit('max').auto('format').url()}
        />
      );
    },
    code: ({ value: { code, language } }) => {
      return <Highlight className={language}>{code}</Highlight>;
    },
  },
  block: {
    code: 'code',
  },
};

export default function Post({ post }) {
  const { title, author, categories = [], authorImage, body = [] } = post;
  // console.log(post.body);
  return (
    <article>
      <Image
        width={420}
        height={240}
        sizes="(max-width: 768px) 100vw"
        style={{ objectFit: 'contain' }}
        src={urlFor(post.coverImage).auto('format').url()}
        alt={post.coverImage?.alt}
      />
      <Typography variant="h3" gutterBottom>
        {title}
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar>
          <Image
            src={urlFor(post.author.image).width(50).url()}
            width={50}
            height={50}
            alt={post.author.name}
          />
        </Avatar>
        <Stack>
          <Typography variant="h6" lineHeight={1}>
            {post.author.name}
          </Typography>
          <Typography variant="subtitle1" lineHeight={1}>
            {formatDistance(new Date(post.publishedAt), new Date(), { addSuffix: true })}
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2} m={2}>
        {categories.map((name) => (
          <Chip key={name} label={name} />
        ))}
      </Stack>
      <Divider />
      <PortableText value={body} components={ptComponents} />
    </article>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "post" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

const query = groq`*[_type == "post" && slug.current == $slug][0] {
  "id": _id,
  title,
  "categories": categories[]->title,
  "slug" : slug.current,
  "coverImage": mainImage,
  "author": author->{
    name,
    image
  },
  publishedAt,
  body
}
`;

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const post = await client.fetch(query, { slug });

  return {
    props: {
      post,
    },
  };
}
