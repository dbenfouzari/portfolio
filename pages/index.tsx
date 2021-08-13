import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

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
  </Layout>
);

export const getStaticProps: GetStaticProps = async ({ defaultLocale = 'en', locale }) => ({
  props: {
    ...(await serverSideTranslations(locale || defaultLocale, ['common'])),
  },
});

export default Home;
