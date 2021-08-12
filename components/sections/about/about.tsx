import Image from 'next/image';

import classes from './about.module.scss';

const AboutSection = () => (
  <div className={classes.wrapper}>
    <div className={classes.left}>
      <Image
        alt="brackets"
        src="/assets/brackets.svg"
        width={500}
        height={500}
        layout="responsive"
        className={classes.logo}
      />
    </div>

    <div className={classes.right}>
      <code className={classes.section_name}>about me</code>

      <h3 className={classes.title}>
        Need Beautiful Code?
        <br />I can Help You!
      </h3>

      <div className={classes.description}>
        <p>
          <span className={classes.emoji}>🖥️</span> I&apos;m a self-taught developer since many
          years now. I started when I got a computer - I was 12.
        </p>
        <p>
          <span className={classes.emoji}>⚛️</span> Since then I learn everyday, and I&apos;m a
          professional developer since 10 years. I started with Ruby on Rails for 5 years, then I
          got to the other side : frontend with React.js.
        </p>
        <p>
          <span className={classes.emoji}>📱</span> I really love JavaScript, TypeScript and React.
          This is why I went to React-Native : write React code, for mobiles.
        </p>
      </div>
    </div>
  </div>
);

export default AboutSection;
