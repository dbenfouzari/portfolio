import { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/layout';
import Section from '../components/section';
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
    <Section id="about">about</Section>
    <Section id="skills">skills</Section>
    <Section id="experiences">experiences</Section>
  </Layout>
);

export default Home;
