import { NextPage } from 'next';
import Head from 'next/head';

import Layout from '../components/layout';

interface HomeProps {
  toto?: 'tata';
}

const Home: NextPage<HomeProps> = () => (
  <Layout>
    <Head>
      <title>Donovan BENFOUZARI</title>
    </Head>

    <div style={{ height: '100vh' }} id="home">
      home
    </div>
    <div style={{ height: '100vh' }} id="about">
      about
    </div>
    <div style={{ height: '100vh' }} id="skills">
      skills
    </div>
  </Layout>
);

export default Home;
