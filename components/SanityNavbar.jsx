import { Stack, Card, Flex, Text } from '@sanity/ui';
import Head from 'next/head';

export function SanityNavbar(props) {
  return (
    <Stack>
      <Head>
        <title>Ethio Open Source - Studio</title>
      </Head>
      <Card padding={3} tone="default">
        <Flex justify="center">
          <Text>Tigrayns Lives Matter!</Text>
        </Flex>
      </Card>
      <>{props.renderDefault(props)}</>
    </Stack>
  );
}
