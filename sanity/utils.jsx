import ImageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Highlight from 'react-highlight';
import client from '../client';

export function urlFor(source) {
  return ImageUrlBuilder(client).image(source);
}

export const ptComponents = {
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
