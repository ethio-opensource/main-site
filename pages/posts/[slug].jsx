import ImageUrlBuilder from '@sanity/image-url';
import client from '../../client';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import { Code } from '@mui/icons-material';
import { Avatar, Box, Chip, Divider, Stack, Typography } from '@mui/material';
import { CodeBlock } from 'react-code-blocks';
import { formatDistance } from 'date-fns';

export function urlFor(source) {
  return ImageUrlBuilder(client).image(source);
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      console.log(value);
      if (!value?.asset?.ref) return null;
      return (
        <Image
          alt={value.alt || ''}
          loading="lazy"
          width={320}
          height={240}
          src={urlFor(value).width(320).height(240).fit('max').auto('format')}
        />
      );
    },
    code: ({ value: { code, language } }) => {
      return <CodeBlock customStyle={{ FontFace: 'monospace' }} text={code} language={language} />;
    },
  },
  block: {
    code: 'code',
  },
};

export default function Post({ post }) {
  const { title, author, categories = [], authorImage, body = [] } = post;
  return (
    <article>
      <Typography variant="h3">{title}</Typography>
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
