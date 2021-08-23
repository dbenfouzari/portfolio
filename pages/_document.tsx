import NextDocument, { Head, Html, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'Donovan BENFOUZARI',
                description:
                  'Développeur Web et Mobile travaillant dans le monde du développement depuis 10 ans, spécialisé en React/React-Native.',
                url: 'https://www.dbenfouzari.tech',
                logo: {
                  '@type': 'ImageObject',
                  name: 'AuthorPicture',
                  width: {
                    '@type': 'QuantitativeValue',
                    unitCode: 'E37',
                    value: '500',
                  },
                  height: {
                    '@type': 'QuantitativeValue',
                    unitCode: 'E37',
                    value: '500',
                  },
                  url: 'https://www.dbenfouzari.tech/_next/image?url=%2Fme-dc.jpeg&w=3840&q=75',
                },
                foundingDate: 'Mai 2021',
                address: {
                  addressLocality: 'Lille',
                  addressCountry: 'France',
                },
                founders: [
                  {
                    '@type': 'Person',
                    name: 'Donovan BENFOUZARI',
                  },
                ],
                sameAs: [
                  'https://www.linkedin.com/in/dbenfouzari/',
                  'https://github.com/dbenfouzari',
                  'https://www.dbenfouzari.tech',
                ],
                telephone: '( 33 7) 84 42 82 33',
              }),
            }}
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
