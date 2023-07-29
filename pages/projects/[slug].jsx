import client from '../../client';
import { Link, Typography } from '@mui/material';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import '../../node_modules/highlight.js/styles/idea.css';
import { ptComponents, urlFor } from '../../sanity/utils';
import { getProject } from '../../services/projects';
import { ProjectStatus } from '../../components/ProjectStatus';

export default function Project({ project, readme }) {
  const { title, cover, status, description, telegramTopic, slideLink, githubLink } = project;
  console.log(project);

  const coverImage = urlFor(cover).width(345).height(345).('').url();

  return (
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <Image
          src={coverImage}
          height={320}
          width={320}
          loading="lazy"
          alt={title + ' cover image'}
          style={{ width: '75%', borderRadius: '8px' }}
        />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: '1rem',
          }}
        >
          <div>
            <ProjectStatus status={status} />
          </div>
          <Link
            href={githubLink}
            underline="none"
            style={{ color: 'black' }}
            sx={{ display: 'block', marginBottom: '10px' }}
          >
            GitHub Link
          </Link>
          <Link
            href={slideLink}
            style={{ color: 'black' }}
            underline="none"
            sx={{ display: 'block', marginBottom: '10px' }}
          >
            Google Slide Link
          </Link>
          <Link
            href={telegramTopic}
            underline="none"
            style={{ color: 'black' }}
            sx={{ display: 'block', marginBottom: '10px' }}
          >
            Telegram Topic Link
          </Link>
        </div>
      </div>
      <div style={{ flex: 1, padding: '20px' }}>
        <Typography variant="h2" sx={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>
          {title}
        </Typography>
        <PortableText value={description} components={ptComponents} />

        <Typography variant="h3" sx={{ fontSize: '36px', fontWeight: '700', marginY: '20px' }}>
          Readme
        </Typography>
        <Typography variant="body1" sx={{ fontSize: '16px' }}>
          https://github.com/ethio-opensource/main-site Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eos, dignissimos reprehenderit. Rem eius praesentium expedita aliquam,
          quas est fugit dolores magnam autem non, omnis obcaecati, cumque voluptatum magni
          dignissimos at. Soluta quod possimus molestiae, deleniti nostrum recusandae temporibus
          facere ducimus totam. Repudiandae sit possimus dolores nihil corrupti qui, deserunt quasi
          animi doloremque vitae sequi labore deleniti quos sunt ex excepturi doloribus quo tempora
          quas maxime veniam voluptatum impedit. Sed doloremque unde maxime, dolores eaque
          voluptatibus? Ipsam sapiente dolores molestias eligendi saepe molestiae dicta delectus
          expedita dolorum veritatis ex quae blanditiis, voluptates a nam quibusdam quasi! Officia
          ducimus obcaecati quod repellat.
        </Typography>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = await client.fetch(
    groq`*[_type == "project" && defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { slug = '' } = context.params;
  const project = await getProject(slug);

  const res = await fetch(
    'https://api.github.com/repos/ethio-opensource/main-site/contents/README.md'
  );

  return {
    props: {
      project: await getProject(slug),
    },
  };
}
