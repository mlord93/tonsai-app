import Page from '../components/Page';
import Head from 'next/head';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tonsai Wear</title>
        <link rel="icon" type="image/x-icon" href="/static/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}
