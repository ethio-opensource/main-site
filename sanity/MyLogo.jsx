import Image from 'next/image';
import { Stack } from '@sanity/ui';

export function MyLogo() {
  return (
    <Stack>
      <Image width={150} height={50} src="/images/logo.png" alt="logo" />
    </Stack>
  );
}
