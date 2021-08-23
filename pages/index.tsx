import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Footer from '../components/footer';
import Layout from '../components/layout';
import Section from '../components/section';
import AboutSection from '../components/sections/about';
import ExperiencesSection from '../components/sections/experiences';
import SkillsSection from '../components/sections/skills';
import WelcomeSection from '../components/sections/welcome';

interface HomeProps {}

const Home: NextPage<HomeProps> = () => (
  <Layout>
    <Head>
      <title>Donovan BENFOUZARI</title>
      <meta
        name="description"
        content="Hi! I'm Donovan BENFOUZARI, React / React-Native / TypeScript developer."
      />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content="https://dbenfouzari.tech/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Donovan BENFOUZARI" />
      <meta
        property="og:description"
        content="Hi! I'm Donovan BENFOUZARI, React / React-Native / TypeScript developer."
      />
      <meta
        property="og:image"
        content="https://www.dbenfouzari.tech/_next/image?url=/me-dc.jpeg&w=3840&q=75"
      />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="dbenfouzari.tech" />
      <meta property="twitter:url" content="https://dbenfouzari.tech/" />
      <meta name="twitter:title" content="Donovan BENFOUZARI" />
      <meta
        name="twitter:description"
        content="Hi! I'm Donovan BENFOUZARI, React / React-Native / TypeScript developer."
      />
      <meta
        name="twitter:image"
        content="https://www.dbenfouzari.tech/_next/image?url=/me-dc.jpeg&w=3840&q=75"
      />
    </Head>

    <Section id="welcome">
      <WelcomeSection />
    </Section>
    <Section id="about">
      <AboutSection />
    </Section>
    <Section id="skills">
      <SkillsSection />
    </Section>
    <Section id="experiences">
      <ExperiencesSection />
    </Section>

    <Footer />
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ defaultLocale = 'en', locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || defaultLocale, ['appbar', 'sections'])),
  },
});

export default Home;
