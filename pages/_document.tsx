import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/seo/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/seo/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/seo/favicon-16x16.png'
        />
        <link rel='manifest' href='/seo/site.webmanifest' />
      </Head>
      <body className=''>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
