import client from '../../client';
import { Link, Typography } from '@mui/material';
import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import 'highlight.js/styles/idea.css';
import { ptComponents, urlFor } from '../../sanity/utils';
import { getProject } from '../../services/projects';
import { ProjectStatus } from '../../components/ProjectStatus';

export default function Project({ project, readme }) {
  if (!project || !readme) return null
  const { title, cover, status, description, telegramTopic, slideLink, githubLink } = project;

  const coverImage = urlFor(cover).url();

  return (
    <div style={{ display: 'flex', backgroundColor: 'white' }}>
      <div style={{ flex: 1, padding: '20px' }}>
        <Image
          src={coverImage}
          height={320}
          width={320}
          loading="lazy"
          alt={title + ' cover image'}
          style={{ width: '75%', borderRadius: '8px', objectFit: 'contain' }}
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
        <div dangerouslySetInnerHTML={{ __html: readme }}></div>
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

  const repo = project?.githubLink.match(/\.com\/(.+)\/?$/)[1];
  const res = await fetch(`https://api.github.com/repos/${repo}/contents/README.md`, {
    headers: {
      Accept: 'application/vnd.github.html',
      'X-GitHub-Api-Version': '2022-11-28',
    },
  });

  return {
    props: {
      project,
      readme: await res.text(),
    },
  };
}
