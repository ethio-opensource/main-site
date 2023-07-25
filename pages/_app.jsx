import { CssBaseline } from '@mui/material';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps, ...appProps }) => {
  if (appProps.router.pathname.startsWith('/studio'))
    return (
      <>
        <CssBaseline />
        <Component {...pageProps} />
      </>
    );
  return (
    <Layout>
      <CssBaseline />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
