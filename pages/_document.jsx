import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
